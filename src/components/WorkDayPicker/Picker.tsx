import { FunctionComponent, useEffect, useState } from 'react'
import AddButton from './AddButton'
import { SetDateProps } from './Cell'
import Month from './Month'
import { WorkDayPickerDays } from './WorkDayPicker'

interface PickerProps {
  days: WorkDayPickerDays
}

type MonthData = [number, number]
type MonthDataArray = Array<MonthData>

const Picker: FunctionComponent<PickerProps & SetDateProps> = ({
  days = [],
  onChoose,
  onSetBegin,
  onSetEnd,
}) => {
  const [months, setMonths] = useState<MonthDataArray>([])

  const handleAddBegin = () => {
    const [year, month] = months[0]
    const date = new Date(year, month - 2)
    setMonths([[date.getFullYear(), date.getMonth() + 1], ...months])
  }
  const handleAddEnd = () => {
    const [year, month] = months[months.length - 1]
    const date = new Date(year, month)
    setMonths([...months, [date.getFullYear(), date.getMonth() + 1]])
  }

  useEffect(() => {
    const months = days.reduce((a: MonthDataArray, date) => {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      if (!a.find(([y, m]) => y === year && m === month)) {
        a.push([year, month])
      }
      return a
    }, [])
    setMonths(months)
  }, [])
  return (
    <>
      <AddButton onClick={handleAddBegin}>开头添加</AddButton>
      {months.map(([year, month], index) => (
        <Month
          key={`${year}_${month}`}
          year={year}
          month={month}
          selectedDays={days}
          firstMonthOfList={index === 0}
          {...{ onChoose, onSetBegin, onSetEnd }}
        />
      ))}
      <AddButton onClick={handleAddEnd}>结尾添加</AddButton>
    </>
  )
}

export default Picker
