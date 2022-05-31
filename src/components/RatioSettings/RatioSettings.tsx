import { FunctionComponent } from 'react'
import { form2json } from '../../utils/form'
import SaveButton from '../SaveButton'

interface Settings {
  homeworks: number
  questions: number
  tests: number
  exam: number
}

interface RatioSettingsProps {
  settings?: Settings
  onSave(settings: Settings): void
}

const RatioSettings: FunctionComponent<RatioSettingsProps> = ({
  settings = { homeworks: 0, questions: 0, tests: 0, exam: 0 },
  onSave,
}) => {
  return (
    <form
      className="needs-validation  was-validated"
      action=""
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        onSave(form2json(form, (v) => +v) as Settings)
      }}
    >
      <div>
        <div className="mb-3">
          <label className="form-label">作业比例</label>
          <input
            name="homeworks"
            type="number"
            className="form-control"
            defaultValue={settings.homeworks}
            required
            min={0}
          />
          <div className="invalid-feedback">必填，&gt;=0的数字</div>
        </div>
        <div className="mb-3">
          <label className="form-label">课堂问答比例</label>
          <input
            name="questions"
            type="number"
            className="form-control"
            defaultValue={settings.questions}
            required
            min={0}
          />
          <div className="invalid-feedback">必填，&gt;=0的数字</div>
        </div>
        <div className="mb-3">
          <label className="form-label">小测验比例</label>
          <input
            name="tests"
            type="number"
            className="form-control"
            defaultValue={settings.tests}
            required
            min={0}
          />
          <div className="invalid-feedback">必填，大于0的数字</div>
        </div>
        <div className="mb-3">
          <label className="form-label">月考比例</label>
          <input
            name="exam"
            type="number"
            className="form-control"
            defaultValue={settings.exam}
            required
            min={0}
          />
          <div className="invalid-feedback">必填，&gt;=0的数字</div>
        </div>
      </div>
      <SaveButton />
    </form>
  )
}

export default RatioSettings
