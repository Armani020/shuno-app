export type Shuno = {
  id?: string;
  name: string;
  address: string;
  controller: string;
  lamps: ShunoLamp;
};

export type ShunoLamp = {
  w150: number;
  w130: number;
  w70: number;
};

export type Consumption = {
  id?: string;
  date: Date;
  consumption: number;
  shuno_id: string;
};

export type ShunoWithRecords = {
  id?: string;
  name: string;
  address: string;
  controller: string;
  records: Consumption[];
};

export type BackendFunction = [
  result: string | null | any,
  message: string | null,
  err: Error | null
];

export type ApiResponse = {
  message: string;
};

export type Data = {
  result: any;
  message: string | null;
  error: string | null;
};
