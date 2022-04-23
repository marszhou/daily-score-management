import { FormEvent, useState } from "react"
import { form2json } from "../../utils/form"

interface SetupNextValue {
  title: string,
  year: number,
  month: number,
  date: number,
  count: number
}
interface WorkDayPickerSetupProps {
  onNext?: (value: SetupNextValue) => {}
}


const WorkDayPickerSetup: React.FunctionComponent<
  WorkDayPickerSetupProps
> = ({onNext}) => {
  const [isValidated, setIsValidated] = useState(false)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    if(form.checkValidity()){
      const json = form2json(form)
      onNext?.({
        title: json.title,
        year: parseInt(json.year),
        month: parseInt(json.month),
        date: parseInt(json.date),
        count: parseInt(json.count),
      })

    }
    setIsValidated(true)
  }
  return (
    <form className={`needs-validation ${isValidated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            name='title'
            className="form-control form-control-sm"
            placeholder="标题"
            aria-label="标题"
            required
          />
          <div className="invalid-feedback">请填写标题</div>
        </div>
        <div className="col">
          <select className="form-select form-select-sm" name='year' aria-label="选择年" required>
            <option value=''>选择年</option>
            {[...Array(10)].map((_, index) => (
              <option value={new Date().getFullYear() + index} key={index}>
                {new Date().getFullYear() + index} 年
              </option>
            ))}
          </select>
          <div className="invalid-feedback">请选择年</div>
        </div>
        <div className="col">
          <select className="form-select form-select-sm" name='month' aria-label="选择月" required>
            <option value=''>选择月</option>
            {[...Array(12)].map((_, index) => (
              <option value={1 + index} key={index}>
                {1 + index} 月
              </option>
            ))}
          </select>
          <div className="invalid-feedback">请选择月</div>
        </div>
        <div className="col">
          <select className="form-select form-select-sm" name='date' aria-label="选择日" required>
            <option value=''>选择日</option>
            {[...Array(12)].map((_, index) => (
              <option value={1 + index} key={index}>
                {1 + index} 月
              </option>
            ))}
          </select>
          <div className="invalid-feedback">请选择日</div>

        </div>

        <div className="col">
          <input
            type="number"
            name='count'
            className="form-control form-control-sm"
            placeholder="课程天数"
            aria-label="课程天数"
            defaultValue={20}
            required
            min={1}
          />
          <div className="invalid-feedback">请填写有效课程天数</div>
        </div>

        <div className="col">
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-sm">
              下一步
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default WorkDayPickerSetup