import Dexie, { Table } from "dexie";
import { Settings } from "../types/settings";
import { Student } from "../types/student";

export class DB extends Dexie {
  students!: Table<Student>
  settings!: Table<Settings>

  constructor() {
    super('dsm-db')
    this.version(1).stores({
      students: 'id, &name, avatar'
    })
    this.version(2).stores({
      students: 'id, &name'
    })
    this.version(3).stores({
      settings: 'name'
    })
  }
}

export const db = new DB()