// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addShuno } from "@mongo/functions/shuno-functions";
import { Shuno } from "@mongo/models/shuno";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body as Shuno;
    const [result, err] = await addShuno(data);

    if (err !== null) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }

    console.log(result);
  }
  res.status(201).json({ message: "Shuno inserted!" });
}
