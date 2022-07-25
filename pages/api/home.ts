// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getShunosWithConsumption } from "@mongo/functions/shuno-functions";
import { Data } from "@mongo/models/shuno";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const [result, message, err] = await getShunosWithConsumption();

    if (err !== null) {
      console.log(err);
      res.status(500).json({ result: null, message: null, error: err.message });
    }

    console.log(result);
    res.status(200).json({ result: result, message: message, error: null });
  }
}
