import Dexie, { Table } from "dexie";
import { Student } from "../types/student";

export class DB extends Dexie {
  students!: Table<Student>

  constructor() {
    super('dsm-db')
    this.version(1).stores({
      students: 'id, &name, avatar'
    })
  }
}

export const db = new DB()