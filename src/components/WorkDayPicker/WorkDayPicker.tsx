import { FunctionComponent, useEffect, useState } from 'react'
import { daysContains, equalDate, getWorkDay, getWorkDays } from '../../utils/date'
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
    let begin = new Date(year, month - 1, date-1)
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
    let next:Array<Date>
    if (daysContains(days, date)) {
      next = days.filter(d => !equalDate(d, date))
    } else {
      next = [...days, date]
    }
    setDays(next)
  }
  const handleSetBegin = (date: Date) => {

  }
  if (isSetup) {
    return (
      <>
        {!defaultValues && <Reset onReset={handleReset} />}
        <Picker days={days} onChoose={handleChooseDate}/>
      </>
    )
  } else {
    return <Setup onNext={handleNext} />
  }
}

export default WorkDayPicker
