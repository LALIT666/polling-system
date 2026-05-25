import { createClient } from "redis";

type WebsiteEvent = {
  url: string;
  id: string;
};

export type StreamMessage = {
  id: string;
  message: WebsiteEvent;
};
const STREAM_NAME = "betteruptime:websites";

export const client = createClient({
  url: "redis://localhost:6379",
});

client.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

await client.connect();
