export enum RecordTypes {
  homeworks = 'homeworks',
  questions = 'questions',
  tests = 'tests',
  exam = 'exam',
}

export interface Records {
  id: number
  type: RecordTypes
  studentId: string
  value: boolean | number
}
