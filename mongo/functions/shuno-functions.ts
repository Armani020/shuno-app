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
