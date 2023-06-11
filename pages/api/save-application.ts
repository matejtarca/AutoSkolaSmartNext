import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { FormFields } from "../../workspaces/web-client/src/scenes/LandingPage/components/FormSection";

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

  const data: ApplicationData = JSON.parse(req.body);

  await prisma.application.create({
    data: {
      name: data.name,
      birthdate: new Date(data.birthdate),
      address: data.address,
      city: data.city,
      psc: data.psc,
      email: data.email,
      phone: data.phone,
      message: data.message,
    },
  });

  res.status(200).json({ message: "Application saved" });
}
