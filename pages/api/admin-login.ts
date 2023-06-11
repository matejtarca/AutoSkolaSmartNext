import { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { username, password } = JSON.parse(req.body);
  const token = sign({ username }, process.env.NEXT_AUTH_SECRET as string, {
    expiresIn: "24h",
  });

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.status(200).json({ success: true, token });
  } else {
    res.status(401).json({ success: false });
  }
}
