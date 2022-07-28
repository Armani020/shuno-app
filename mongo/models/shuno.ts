export interface Shuno {
  id?: string;
  name: string;
  address: string;
  controller: string;
  lamps: ShunoLamp;
}

export interface ShunoLamp {
  w150: number;
  w130: number;
  w70: number;
}

export interface Consumption {
  id?: string;
  date: Date;
  consumption: number;
  shuno_id: string;
}

export interface ShunoWithRecords {
  id?: string;
  name: string;
  address: string;
  controller: string;
  lamps: ShunoLamp;
  records: Consumption[];
}

export type BackendFunction = [
  result: string | null | any,
  message: string | null,
  err: Error | null
];

export interface ApiResponse {
  message: string;
}

export interface Data {
  result: any;
  message: string | null;
  error: string | null;
}
