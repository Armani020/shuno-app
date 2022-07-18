export type Shuno = {
  id?: string;
  name: string;
  address: string;
  controller: string;
};

export type Consumption = {
  id?: string;
  date: Date;
  consumption: number;
  shuno_id: number;
};

export type ShunoWithRecords = {
  id?: string;
  name: string;
  address: string;
  controller: string;
  records: Consumption[];
};

export type BackendFunction = [result: string | null | any, err: Error | null];

export type ApiResponse = {
  message: string;
};
