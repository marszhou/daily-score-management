import { FunctionComponent, useEffect, useState } from 'react'
import { getWorkDay } from '../../utils/date'
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

  useEffect(() => {
    if (defaultValues) {
      setDays(defaultValues)
    }
  }, [])
  const handleNext = (value: SetupNextValue) => {
    const { title, year, month, date, count } = value
    let d = new Date(year, month - 1, date-1)
    const days = [...Array(count)].map(() => {
      d = getWorkDay(new Date(d.getTime() + 86400_000))
      return d
    })
    setDays(days)
    setTitle(title)
    return
  }
  const handleReset = () => {
    setDays([])
  }
  if (days.length > 0) {
    return (
      <>
        {!defaultValues && <Reset onReset={handleReset} />}
        <Picker days={days} />
      </>
    )
  } else {
    return <Setup onNext={handleNext} />
  }
}

export default WorkDayPicker
