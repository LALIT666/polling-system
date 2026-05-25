import { createClient } from "redis";

type WebsiteEvent = { url: string; id: string };
type MessageType = {
  id: string;
  message: {
    url: string;
    id: string;
  };
};

const STREAM_NAME = "betteruptime:websites";

const client = await createClient()
  .on("error", (err) => {
    console.log("Redis Client Error", err);
  })
  .connect();

async function xAdd({ url, id }: WebsiteEvent) {
  const res = await client.xAdd(STREAM_NAME, "*", {
    url,
    id,
  });

  return res;
}

export async function xAddBulk(websites: WebsiteEvent[]) {
  const pipeline = client.multi();

  for (let i = 0; i < websites.length; i++) {
    pipeline.xAdd(STREAM_NAME, "*", {
      url: websites[i]!.url,
      id: websites[i]!.id,
    });
  }

  const result = await pipeline.exec();
  return result;
}
