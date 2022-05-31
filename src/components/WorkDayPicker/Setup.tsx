import { FormEvent, useRef, useState } from 'react'
import { getDaysInMonth } from '../../utils/date'
import { form2json } from '../../utils/form'

export interface SetupNextValue {
  title: string
  year: number
  month: number
  date: number
  count: number
}
interface SetupProps {
  onNext?(value: SetupNextValue): void
}

const Setup: React.FunctionComponent<SetupProps> = ({ onNext }) => {
  const [isValidated, setIsValidated] = useState(false)
  const yearRef = useRef<HTMLSelectElement | null>(null)
  const monthRef = useRef<HTMLSelectElement | null>(null)
  const [daysInMonth, setDaysInMonth] = useState<number | undefined>(undefined)

  const handleChangeMonth = () => {
    const year = Number(yearRef.current?.value)
    const month = Number(monthRef.current?.value)
    // console.log(year, month)
    if (year === 0 || month === 0) {
      setDaysInMonth(undefined)
    } else {
      setDaysInMonth(getDaysInMonth(year, month))
    }
    // console.log(ret)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    if (form.checkValidity()) {
      const json = form2json(form)
      onNext?.({
        title: json.title,
        year: parseInt(json.year),
        month: parseInt(json.month),
        date: parseInt(json.date),
        count: parseInt(json.count),
      })
      // -- 测试数据 --
      // onNext?.({
      //   title: '2022年第二教学周期',
      //   year: 2022,
      //   month: 2,
      //   date: 1,
      //   count: 40
      // })
    }
    setIsValidated(true)
  }
  return (
    <div className="">
      <form
        className={`needs-validation ${isValidated ? 'was-validated' : ''}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="mb-3">
          <label className="form-label">标题</label>
            <input
              type="text"
              name="title"
              className="form-control "
              placeholder="标题"
              aria-label="标题"
              required
            />
            <div className="invalid-feedback">请填写标题</div>
          </div>
          <div className="mb-3">
          <label className="form-label">年</label>

            <select
              className="form-select form-select-sm"
              name="year"
              aria-label="选择年"
              required
              defaultValue={''}
              ref={yearRef}
              onChange={handleChangeMonth}
            >
              <option value="" disabled>
                选择年
              </option>
              {[...Array(10)].map((_, index) => (
                <option value={new Date().getFullYear() + index} key={index}>
                  {new Date().getFullYear() + index} 年
                </option>
              ))}
            </select>
            <div className="invalid-feedback">请选择年</div>
          </div>
          <div className="mb-3">
          <label className="form-label">月</label>

            <select
              className="form-select form-select-sm"
              name="month"
              aria-label="选择月"
              required
              defaultValue={''}
              ref={monthRef}
              onChange={handleChangeMonth}
            >
              <option value="" disabled>
                选择月
              </option>
              {[...Array(12)].map((_, index) => (
                <option value={1 + index} key={index}>
                  {1 + index} 月
                </option>
              ))}
            </select>
            <div className="invalid-feedback">请选择月</div>
          </div>
          <div className="mb-3">
          <label className="form-label">日</label>

            <select
              className="form-select form-select-sm"
              name="date"
              aria-label="选择日"
              required
              defaultValue={''}
              disabled={daysInMonth === undefined}
            >
              <option value="" disabled>
                选择日
              </option>
              {daysInMonth !== undefined &&
                [...Array(daysInMonth)].map((_, index) => (
                  <option value={1 + index} key={index}>
                    {1 + index} 日
                  </option>
                ))}
            </select>
            <div className="invalid-feedback">请选择日</div>
          </div>

          <div className="mb-3">
          <label className="form-label">课程天数</label>

            <input
              type="number"
              name="count"
              className="form-control "
              placeholder="课程天数"
              aria-label="课程天数"
              defaultValue={20}
              required
              min={1}
            />
            <div className="invalid-feedback">请填写有效课程天数</div>
          </div>

          <div className="mb-3">
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-sm">
                下一步
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Setup
