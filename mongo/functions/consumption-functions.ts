import { Consumption, BackendFunction } from "@mongo/models/shuno";
import { consumptionCol } from "@mongo/mongodb";

export const addConsumption = async (
  data: Consumption
): Promise<BackendFunction> => {
  try {
    const exists = await consumptionCol.findOne({
      date: data.date,
      shuno_id: data.shuno_id,
    });

    if (exists !== null) {
      let err = Error("Запись в эту дату уже существует");
      return [null, null, err];
    }

    const result = await consumptionCol.insertOne(data);

    const message = "Запись успешно добавлена";

    return [result, message, null];
  } catch (e) {
    const err = e as Error;
    return [null, null, err];
  }
};
