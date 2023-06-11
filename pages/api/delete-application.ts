import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
  }

  const token = req.cookies.token;
  if (!token) {
    res.status(401).end();
    return;
  }
  try {
    const { username } = verify(
      token,
      process.env.NEXT_AUTH_SECRET as string
    ) as {
      username: string;
    };
    if (username !== process.env.ADMIN_USERNAME) {
      res.status(401).end();
      return;
    }
  } catch (e) {
    res.status(401).end();
    return;
  }

  const { id } = JSON.parse(req.body);
  await prisma.application.delete({
    where: { id },
  });

  res.status(200).json({ message: "Application deleted" });
}
