import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { FormFields } from "../../workspaces/web-client/src/scenes/LandingPage/components/FormSection";
import { Message } from "../../workspaces/web-client/src/services/types";

const prisma = new PrismaClient();

type ApplicationData = Omit<FormFields, "birthdate"> & { birthdate: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const data: Message = JSON.parse(req.body);

  await prisma.message.create({
    data: {
      name: data.name,
      email: data.email,
      message: data.message,
    },
  });

  res.status(200).json({ message: "Message sent" });
}
