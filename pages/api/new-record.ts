// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Consumption } from "@mongo/models/shuno";
import { consumptionCol } from "@mongo/mongodb";
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

    const exists = await consumptionCol.findOne({ date: data.date, shuno_id: data.shuno_id });

    if (exists !== null) {
      let err = Error("Аниме с таким именем уже существует");
      return [null, err];
    }

    const result = await consumptionCol.insertOne(data);
    console.log(result);
  }
  res.status(200).json({ message: "Meetup inserted!" });
}
