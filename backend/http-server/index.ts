import express from "express";
import type { Response, Request, NextFunction } from "express";
import cors from "cors";
import z, { object, string, success, unknown } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

import prisma from "../db/index";
import axios from "axios";
import { Response } from "undici-types";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors());

const PORT = 3000;

//generating jsonwebtoken

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const jwtSecret = process.env.JWT_SECRET;

function generateJWTTokenAndSendingInCookie(userId: string, res: Response) {
  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: "1d" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // production mein true
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return token;
}

//verifying jswonwebtoken middleware

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token not found",
    });
  }

  try {
    const decode = jwt.verify(token, jwtSecret) as { userId: string };

    if (!decode.userId) {
      return res.status(400).json({
        success: false,
        message: "User id does not exist",
      });
    }

    req.userId = decode.userId;

    next();
  } catch (error) {
    console.error("Erro in verfying Token");
    res.status(500).json({ success: false, message: "INTERNA SERVER ERROR" });
  }
}

//healthy server
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy ✅",
    time: new Date().toISOString(),
  });
});

//Signup route

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userSignupData = UserZodSchema.safeParse(req.body);

    if (!userSignupData.success) {
      return res
        .status(400)
        .json({ message: userSignupData.error.flatten().fieldErrors });
    }

    const { email, password, username } = userSignupData.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashingPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        email,
        hashedPassword: hashingPassword,
        username,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    const sixDigitOTP = Math.floor(Math.random() * 999999) + 100000;

    const token = generateJWTTokenAndSendingInCookie(newUser.id, res);

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      user: newUser,
      sixDigitOTP,
      token,
    });
  } catch (error) {
    console.error("Error in signing up", error);
    res
      .status(500)
      .json({ message: "Internal server Error in /signup router" });
  }
});

//Sign in route

app.post("/signin", async (req: Request, res: Response) => {
  try {
    const userData = UserZodSchema.safeParse(req.body);

    if (!userData.success) {
      return res.status(400).json({
        success: false,
        message: userData.error.flatten().fieldErrors,
        messageString: "Invalid User data in sign in",
      });
    }

    const { email, password } = userData.data;

    const isUserInDB = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!isUserInDB) {
      return res.status(404).json({
        success: false,
        message: "User not found you ahve to singup first",
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      isUserInDB.hashedPassword,
    );

    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    const token = generateJWTTokenAndSendingInCookie(isUserInDB.id, res);

    res.status(200).json({
      success: true,
      message: "User sing in successgull",
      user: {
        id: isUserInDB.id,
        email,
        username: isUserInDB.username,
        token,
      },
    });
  } catch (error) {
    console.error("Erro in signing in ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server error in /singin route",
    });
  }
});

//logout
app.get("/logout", verifyToken, (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "User logout successfull",
    });
  } catch (error) {
    console.error("Error in logging out ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error in /logout router",
    });
  }
});

// forget password
// app.post("/forget-password", async (req, res) => {
//   try {
//     const userData = UserZodSchema.safeParse(req.body);
//     if (!userData.success) {
//       return res
//         .status(400)
//         .json({ message: userData.error.flatten().fieldErrors });
//     }

//     const { email } = userData.data;

//     const isUserExist = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!isUserExist) {
//       return res.status(400).json({
//         success: false,
//         message: "User does not exists Invalid email ❌",
//       });
//     }
//   } catch (error) {}
// });

//Monitor route
app.post("/monitor", verifyToken, async (req, res) => {
  try {
    const monitorParsedData = MonitorZodSchema.safeParse(req.body);

    if (!monitorParsedData.success) {
      return res.status(400).json({
        success: false,
        message: monitorParsedData.error.flatten().fieldErrors,
      });
    }

    const { url, name, intervalMinutes } = monitorParsedData.data;

    const userId = req.userId!;
    const newMonitor = await prisma.monitor.create({
      data: {
        userId,
        url,
        name,
        interval: intervalMinutes,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Monitor added successfully",
      monitor: newMonitor,
    });
  } catch (error) {
    console.error("Error in creating monitor: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error in /monitor route",
    });
  }
});

//Get all Monitors Route

app.get("/monitors", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;

    const monitors = await prisma.monitor.findMany({
      where: {
        userId,
      },
      include: {
        checks: {
          take: 1,
          orderBy: { checkedAt: "desc" },
        },
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "All monitors", monitors });
  } catch (error) {
    console.error("Error in getting all the monitory: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error in /monitors route",
    });
  }
});

//update monitor Route
app.patch("/monitor/:id", verifyToken, async (req, res) => {
  try {
    const monitorId = req.params.id as string;
    const userId = req.userId;

    const updateMonitorParsedData = UpdateMonitorSchema.safeParse(req.body);

    if (!updateMonitorParsedData.success) {
      return res.status(400).json({
        success: false,
        message: updateMonitorParsedData.error.flatten().fieldErrors,
      });
    }

    const existingMonitor = await prisma.monitor.findUnique({
      where: {
        id: monitorId,
      },
    });

    if (!existingMonitor) {
      return res.status(404).json({
        success: false,
        message: "Monitor not found",
      });
    }

    if (existingMonitor.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not authorized to update this monitor",
      });
    }

    const updatedMonitor = await prisma.monitor.update({
      where: {
        id: monitorId,
      },
      data: updateMonitorParsedData.data,
    });

    return res.status(200).json({
      success: true,
      message: "Monitor updated successfully✅",
      monitor: updatedMonitor,
    });
  } catch (error) {
    console.error("Error in updating monitor: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error in PATCH /monitor/:id",
    });
  }
});

// Pings/logs of a Specific Monitor
// GET /monitor/:id/checks

app.get("/monitor/:id/checks", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const monitorId = req.params.id as string;

    const monitorInDb = await prisma.monitor.findUnique({
      where: {
        id: monitorId,
      },
    });

    if (!monitorInDb) {
      return res
        .status(404)
        .json({ success: false, message: "Monitor with this id not found" });
    }

    if (monitorInDb.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden ",
      });
    }

    const checksOfMonitor = await prisma.check.findMany({
      where: {
        monitorId,
      },
      take: 50,
      orderBy: {
        checkedAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: `Logs of monitor id: ${monitorId}`,
      checksOfMonitor,
    });
  } catch (error) {
    console.error("Error in pining/loging of monitors checks", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error in /monitor/:id/checks route",
    });
  }
});

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// ** POLLING ENGINE **
// ! POLLING ENGINE

function startPollingEngine() {
  setInterval(async () => {
    console.log("⏳ Polling Engine Running...");
    const monitorsIsActive = await prisma.monitor.findMany({
      where: {
        isActive: true,
      },
    });

    if (monitorsIsActive.length === 0) {
      return;
    }

    for (const monitor of monitorsIsActive) {
      try {
        if (
          Date.now() - new Date(monitor.lastCheckedAt).getTime() >
          monitor.interval * 60 * 1000
        ) {
          try {
            const startTime = Date.now();
            const pingingTheMonitorUrl = await axios.get(monitor.url);

            const endTime = Date.now();
            const responseTime = endTime - startTime;

            await prisma.check.create({
              data: {
                status: "UP",
                responseTime_ms: responseTime,
                statusCode: pingingTheMonitorUrl.status,
                monitorId: monitor.id,
              },
            });

            await prisma.monitor.update({
              where: {
                id: monitor.id,
              },
              data: {
                lastCheckedAt: new Date(),
              },
            });
          } catch (error) {
            console.error(`❌ Error pinging ${monitor.url}:`, error);

            await prisma.check.create({
              data: {
                status: "DOWN",
                responseTime_ms: 0,
                statusCode: 500,
                monitorId: monitor.id,
              },
            });

            await prisma.monitor.update({
              where: { id: monitor.id },
              data: { lastCheckedAt: new Date() },
            });

            continue;
          }
        } else {
          continue;
        }
      } catch (error) {
        console.error("Error in PollingEngine loop:", error);
        continue;
      }
    }
  }, 60000);
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`✅ Server is Runing on http://localhost:${PORT}`);
  //! calling the startPollingEngine() function
  startPollingEngine();
});

const UserZodSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password should have minimum length of 8")
    .max(15, "Password is too long")
    .regex(
      /^(?=.*[A-Z]).{8,}$/,
      "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
    ),
  username: z
    .string()
    .min(6, "Username must be at least 6 char longs")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-z0-9]{6,20}$/,
      "Username must not contain special characters or uppercase letters",
    ),
});

const MonitorZodSchema = z.object({
  url: z.string().url("Please enter a valid URL (e.g., https://google.com)"),
  name: z.string().optional(),
  intervalMinutes: z.number().int().min(1).max(60).optional().default(5),
});

const UpdateMonitorSchema = z.object({
  name: z.string().optional(),
  isActive: z.boolean().optional(),
  intervalMinutes: z.number().int().min(1).max(60).optional(),
});
