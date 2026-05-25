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

export async function xAdd(data: WebsiteEvent) {
  return await client.xAdd(STREAM_NAME, "*", data);
}

export async function xAddBulk(websites: WebsiteEvent[]) {
  const pipeline = client.multi();

  for (const website of websites) {
    pipeline.xAdd(STREAM_NAME, "*", website);
  }

  return await pipeline.exec();
}

export async function xReadGroup(
  consumerGroup: string,
  workerId: string,
  count = 5,
): Promise<StreamMessage[]> {
  const response = await client.xReadGroup(
    consumerGroup,
    workerId,
    {
      key: STREAM_NAME,
      id: ">",
    },
    {
      COUNT: count,
      BLOCK: 5000,
    },
  );

  if (!response) {
    return [];
  }

  //@ts-ignores

  return response[0]?.messages as StreamMessage[];
}

export async function xAck(messageId: string, consumerGroup: string) {
  return await client.xAck(STREAM_NAME, consumerGroup, messageId);
}
