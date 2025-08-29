import Dexie, { Table } from "dexie";

export interface Dataset {
  name: string;
  updatedAt: number;
  payload: any;
}

export class LifelineDB extends Dexie {
  datasets!: Table<Dataset, string>;

  constructor() {
    super("LifelineDB");
    this.version(1).stores({
      datasets: "&name, updatedAt",
    });
  }
}

export const db = new LifelineDB(); 