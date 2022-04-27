import { FunctionComponent, useEffect, useState } from 'react'
import {
  daysContains,
  equalDate,
  getMaxDay,
  getMinDay,
  getWorkDay,
  getWorkDays,
} from '../../utils/date'
import Picker from './Picker'
import Reset from './Reset'
import Setup, { SetupNextValue } from './Setup'

export type WorkDayPickerDays = Array<Date>
interface WorkDayPickerProps {
  defaultValues: WorkDayPickerDays | undefined
}

const WorkDayPicker: FunctionComponent<WorkDayPickerProps> = ({
  defaultValues,
}) => {
  const [days, setDays] = useState<WorkDayPickerDays>([])
  const [title, setTitle] = useState('')
  const [isSetup, setIsSetup] = useState(false)

  useEffect(() => {
    if (defaultValues) {
      setDays(defaultValues)
    }
  }, [])
  const handleNext = (value: SetupNextValue) => {
    const { title, year, month, date, count } = value
    let begin = new Date(year, month - 1, date - 1)
    const days = getWorkDays(begin, count)
    setDays(days)
    setTitle(title)
    setIsSetup(true)
    return
  }
  const handleReset = () => {
    setDays([])
    setTitle('')
    setIsSetup(false)
  }
  const handleChooseDate = (date: Date) => {
    let next: Array<Date>
    if (daysContains(days, date)) {
      if (days.length >= 2) {
        next = days.filter((d) => !equalDate(d, date))
      } else {
        next = days
      }
    } else {
      next = [...days, date]
    }
    setDays(next)
  }
  const handleSetBegin = (date: Date) => {
    const max = getMaxDay(days)
    if (!max) return
    let next: Array<Date>
    if (equalDate(max, date)) {
      next = [date]
    } else {
      next = getWorkDays(date, max)
    }
    setDays(next)
  }
  const handleSetEnd = (date: Date) => {
    const min = getMinDay(days)
    if (!min) return
    let next: Array<Date>
    if (equalDate(min, date)) {
      next = [date]
    } else {
      next = getWorkDays(min, date)
    }
    setDays(next)
  }

  if (isSetup) {
    return (
      <>
        {!defaultValues && <Reset onReset={handleReset} />}
        <Picker
          days={days}
          onChoose={handleChooseDate}
          onSetBegin={handleSetBegin}
          onSetEnd={handleSetEnd}
        />
      </>
    )
  } else {
    return <Setup onNext={handleNext} />
  }
}

export default WorkDayPicker
