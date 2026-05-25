import prismaClient from "../database/index";

async function main() {
  let websites = await prismaClient.website.findMany({
    select: {
      url: true,
      id: true,
    },
  });

  redis.xAdd;
}

setInterval(() => {
  main();
}, 3 * 1000);
