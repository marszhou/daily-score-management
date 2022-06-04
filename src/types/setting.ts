export interface Setting {
  name: string,
  value: string
}

export interface RatioSettingValue {
  homeworks: number
  questions: number
  tests: number
  exam: number
}

export interface WorkDaySettingValue {
  title: string
  days: Array<Date>
}