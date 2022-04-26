export const DAY_IN_MS = 86400_000

export const WEEK_DAYS = ['一', '二', '三', '四', '五', '六', '日']
export const WEEK_DAYS_SUNDAY_FIRST = ['日', '一', '二', '三', '四', '五', '六']

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

export function getWorkDay(date: Date): Date {
  if (date.getDay() === 0 || date.getDay() === 6) {
    return getWorkDay(new Date(date.getTime() + DAY_IN_MS))
  } else {
    return new Date(date.getTime() + 0)
  }
}

export function getCalendarMonthRange(
  year: number,
  month: number,
  sundayFirst: boolean = false
): [Date, Date, number] {
  let start = new Date(year, month - 1, 1)
  let end = new Date(year, month, 0)
  const wd1 = sundayFirst
    ? start.getDay()
    : (((start.getDay() - 1) % 7) + 7) % 7
  start = new Date(start.getTime() - (wd1 - 0) * DAY_IN_MS)
  const wd2 = sundayFirst ? end.getDay() : (((end.getDay() - 1) % 7) + 7) % 7
  end = new Date(end.getTime() + (6 - wd2) * DAY_IN_MS)
  return [
    start,
    end,
    Math.round((end.getTime() - start.getTime()) / DAY_IN_MS) + 1,
  ]
}

export function isFirstDayOfMonth(day: Date) {
  return day.getDate() === 1
}

export function isLastDayOfMonth(day: Date) {
  return (
    new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      0,
      0,
      0
    ).getTime() ===
    new Date(day.getFullYear(), day.getMonth() + 1, 0, 0, 0, 0).getTime()
  )
}

export function daysContains(days: Array<Date>, day: Date) {
  return days.findIndex(
    (d) =>
      d.getFullYear() === day.getFullYear() &&
      d.getMonth() === day.getMonth() &&
      d.getDate() === day.getDate()
  ) > -1
}
