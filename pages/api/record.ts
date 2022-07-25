// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addConsumption } from "@mongo/functions/consumption-functions";
import { Consumption, Data } from "@mongo/models/shuno";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body as Consumption;
    const [result, message, err] = await addConsumption(data);

    if (err !== null) {
      console.log(err);
      res.status(500).json({ result: null, message: message, error: err.message});
    }

    console.log(result);
    res.status(201).json({ result: null, message: message, error: null });
  }
}
