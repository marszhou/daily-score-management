export function getDaysInMonth (year:number, month: number):number {
  return new Date(year, month, 0).getDate();
}

export function getWorkDay(date: Date):Date {
  if (date.getDay() === 0 || date.getDay() === 6) {
    return getWorkDay(new Date(date.getTime() + 86400_000))
  } else {
    return new Date(date.getTime() + 0)
  }
}