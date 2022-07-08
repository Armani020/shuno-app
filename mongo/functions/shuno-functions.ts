import { Shuno, BackendFunction } from "@mongo/models/shuno";
import { shunoCol } from "@mongo/mongodb";

export const addShuno = async (data: Shuno): Promise<BackendFunction> => {
  try {
    const exists = await shunoCol.findOne({
      name: data.name,
    });

    if (exists !== null) {
      let err = Error("ШУНО с таким именем уже существует");
      return [null, err];
    }

    await shunoCol.insertOne(data);

    const result = { message: "ШУНО успешно добавлена" };

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const getShunos = async (): Promise<BackendFunction> => {
  try {
    const result = await shunoCol.find().toArray();
    const shunos = result.map((shuno) => ({
      id: shuno._id,
      name: shuno.name,
      address: shuno.address,
      controller: shuno.address,
    }));

    return [shunos, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const getShunosWithConsumption = async (): Promise<BackendFunction> => {
  try {
    const result = await shunoCol.aggregate([
      {
        $lookup: {
          from: "consumption",
          as: "records",
          let: { shuno_name: "$name" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$shuno", "$$shuno_name"] },
              },
            },
            { $limit: 2 },
          ],
        },
      },
    ]);

    const shunos = result.map((shuno) => ({
      id: shuno._id,
      name: shuno.name,
      address: shuno.address,
      controller: shuno.address,
    }));

    return [shunos, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};
