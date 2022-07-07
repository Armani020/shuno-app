export type Shuno = {
  id?: string;
  name: string;
  address: string;
  controller: string;
};

export type Consumption = {
  date: Date;
  consumption: number;
  shuno_id: number;
};

export type BackendFunction = [result: string | null | any, err: Error | null];
