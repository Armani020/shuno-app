import { Shuno, BackendFunction, ShunoWithRecords } from "@mongo/models/shuno";
import { shunoCol } from "@mongo/mongodb";

export const addShuno = async (data: Shuno): Promise<BackendFunction> => {
  try {
    const exists = await shunoCol.findOne({
      name: data.name,
    });

    if (exists !== null) {
      let err = Error("ШУНО с таким именем уже существует");
      return [null, null, err];
    }

    await shunoCol.insertOne(data);

    const message = "ШУНО успешно добавлена";

    return [null, message, null];
  } catch (e) {
    const err = e as Error;
    return [null, null, err];
  }
};

export const getShunos = async (): Promise<BackendFunction> => {
  try {
    const result = await shunoCol.find().toArray();
    const shunos = result.map((shuno) => ({
      id: shuno._id,
      name: shuno.name,
      address: shuno.address,
      controller: shuno.controller,
      lamps: shuno.lamps,
    }));
    const message = "Список ШУНО получен";

    return [shunos, message, null];
  } catch (e) {
    const err = e as Error;
    return [null, null, err];
  }
};

export const getShunosWithConsumption = async (): Promise<BackendFunction> => {
  try {
    const result = await shunoCol
      .aggregate([
        {
          $lookup: {
            from: "consumption",
            as: "records",
            let: { shuno_id: { $toString: "$_id" } },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$shuno_id", "$$shuno_id"] },
                },
              },
              { $sort: { date: 1 } },
              { $limit: 5 },
            ],
          },
        },
      ])
      .toArray();

    const shunosWithRecords: ShunoWithRecords[] = result.map((shuno) => ({
      id: shuno._id,
      name: shuno.name,
      address: shuno.address,
      controller: shuno.controller,
      records: shuno.records,
    }));

    const message = "Список ШУНО с последними записями получен";
    return [shunosWithRecords, message, null];
  } catch (e) {
    const err = e as Error;
    return [null, null, err];
  }
};
