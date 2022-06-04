import Dexie, { Table } from "dexie";
import { Record } from "../types/record";
import { Setting } from "../types/setting";
import { Student } from "../types/student";

export class DB extends Dexie {
  students!: Table<Student>
  settings!: Table<Setting>
  records!: Table<Record>

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
    this.version(4).stores({
      records: '++id,type,studentId,value'
    })
    this.on('populate', tx => {

      this.settings.add({
        name: 'ratio',
        value: JSON.stringify({
          homeworks: 0.25,
          questions: 0.25,
          tests: 0.25,
          exam: 0.25
        })
      })
    })
  }
}

export const db = new DB()