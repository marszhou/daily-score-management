import React, { DetailedHTMLProps, FunctionComponent } from 'react'
import {
  daysContains,
  DAY_IN_MS,
  getCalendarMonthRange,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  WEEK_DAYS,
  WEEK_DAYS_SUNDAY_FIRST,
} from '../../utils/date'
import Cell from './Cell'
import style from './Month.module.scss'
import { WorkDayPickerDays } from './WorkDayPicker'

interface MonthInterface
  extends DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  year: number
  month: number
  sundayFirst?: boolean
  selectedDays: WorkDayPickerDays,
  first: boolean
}

const TableHead = function ({ sundayFirst }: { sundayFirst: boolean }) {
  return (
    <thead>
      <tr>
        {(sundayFirst ? WEEK_DAYS_SUNDAY_FIRST : WEEK_DAYS).map((name) => (
          <th
            scope="col"
            className={name === '周日' || name === '周六' ? 'table-light' : ''}
            key={name}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const Month: FunctionComponent<MonthInterface> = ({
  year,
  month,
  sundayFirst = false,
  selectedDays = [],
  first
}) => {
  let [start, , days] = getCalendarMonthRange(year, month, sundayFirst)
  const weeks = days / 7
  console.log(selectedDays)
  return (
    <table className={`table ${style.monthTable} caption-top table-bordered`}>
      <caption><h3>{first || month===12 || month===1 ? `${year}年`:''}{month}月</h3></caption>
      <TableHead sundayFirst={sundayFirst} />
      <tbody>
        {[...Array(weeks)].map((_, weekIndex) => (
          <tr key={weekIndex}>
            {[...Array(7)].map((_, dayIndex) => {
              const day = new Date(
                start.getTime() + DAY_IN_MS * (weekIndex * 7 + dayIndex)
              )
              return (
                <Cell
                  day={day.getDate()}
                  month={day.getMonth()+1}
                  displayMonth={isFirstDayOfMonth(day) || isLastDayOfMonth(day)}
                  className={`${
                    day.getDay() === 0 || day.getDay() === 6
                      ? 'table-light'
                      : ''
                  } ${day.getMonth() + 1 !== month ? style.notThisMonth : ''}`}
                  selected={daysContains(selectedDays, day)}
                  key={dayIndex}
                />
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Month
