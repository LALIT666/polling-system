import jwt from "jsonwebtoken";
import { z } from "zod";
import express from "express";
import prismaClient from "../database/index";
import type { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

//middleware  -- authMiddleware

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const header = req.headers.authorization!;
  try {
    let data = jwt.verify(header, process.env.JWT_SECRET!);
    req.userId = data.sub as string;
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send("");
  }
}

app.post("/website", authMiddleware, async (req, res) => {
  if (!req.body.url) {
    res.status(411).json({});
    return;
  }
  const website = await prismaClient.website.create({
    data: {
      url: req.body.url,
      time_added: new Date(),
      user_id: req.userId!,
    },
  });

  res.json({
    id: website.id,
  });
});

app.get("/status/:websiteId", authMiddleware, async (req, res) => {
  const websiteId = req.params.websiteId as string;
  const website = await prismaClient.website.findFirst({
    where: {
      user_id: req.userId!,
      id: websiteId,
    },
    include: {
      ticks: {
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        take: 1,
      },
    },
  });

  if (!website) {
    res.status(409).json({
      message: "Not found",
    });
    return;
  }

  res.json({
    url: website.url,
    id: website.id,
    user_id: website.user_id,
  });
});

app.post("/user/signup", async (req, res) => {
  const parsedData = AuthInput.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error.toString());
    res.status(403).send("");
    return;
  }

  try {
    let user = await prismaClient.user.create({
      data: {
        username: parsedData.data.username,
        password: parsedData.data.password,
      },
    });
    res.json({
      id: user.id,
    });
  } catch (e) {
    console.log(e);
    res.status(403).send("");
  }
});

app.post("/user/signin", async (req, res) => {
  const parsedData = AuthInput.safeParse(req.body);
  if (!parsedData.success) {
    res.status(403).send("");
    return;
  }

  let user = await prismaClient.user.findFirst({
    where: {
      username: parsedData.data.username,
    },
  });

  if (user?.password !== parsedData.data.password) {
    res.status(403).send("");
    return;
  }

  let token = jwt.sign(
    {
      sub: user.id,
    },
    process.env.JWT_SECRET!,
  );

  res.json({
    jwt: token,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("http://localhost:3000");
});

export const AuthInput = z.object({
  username: z.string(),
  password: z.string(),
});
