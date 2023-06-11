import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { MessageForm } from "../../workspaces/web-client/src/services/types";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const data: MessageForm = JSON.parse(req.body);

  await prisma.message.create({
    data: {
      name: data.name,
      email: data.email,
      message: data.message,
    },
  });

  res.status(200).json({ message: "Message sent" });
}
