export type Shuno = {
  name: string;
  address: string;
  controller: string;
};

export type Consumption = {
  date: Date;
  consumption: number;
  shuno_id: number;
};
