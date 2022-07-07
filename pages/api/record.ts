// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addConsumption } from "@mongo/functions/consumption-functions";
import { Consumption } from "@mongo/models/shuno";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body as Consumption;
    const [result, err] = await addConsumption(data);

    if (err !== null) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }

    console.log(result);
  }
  res.status(201).json({ message: "Meetup inserted!" });
}
