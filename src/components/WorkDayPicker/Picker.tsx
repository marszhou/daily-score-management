import { FunctionComponent, useEffect, useState } from 'react'
import Month from './Month'
import { WorkDayPickerDays } from './WorkDayPicker'

interface PickerProps {
  defaultValues: WorkDayPickerDays
}

type MonthData = [number, number]
type MonthDataArray = Array<MonthData>

const Picker: FunctionComponent<PickerProps> = ({ defaultValues = [] }) => {
  const [months, setMonths] = useState<MonthDataArray>([])
  const [days, setDays] = useState(defaultValues)

  useEffect(() => {
    const months = defaultValues.reduce((a: MonthDataArray, date) => {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      if (!a.find(([y, m]) => y === year && m === month)) {
        a.push([year, month])
      }
      return a
    }, [] as MonthDataArray)
    setMonths(months)
  }, [])
  return (
    <>
      {months.map(([year, month]) => (
        <Month year={year} month={month} selectedDays={days} />
      ))}
    </>
  )
}

export default Picker
