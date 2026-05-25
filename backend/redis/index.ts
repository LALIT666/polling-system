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

export async function xAdd({ url, id }: WebsiteEvent) {
  await client.xAdd(STREAM_NAME, "*", {
    url,
    id,
  });
}
