import { FunctionComponent } from 'react'
import HR from '../components/HR'

interface StudentListDemoProps {}

const StudentListDemo: FunctionComponent<StudentListDemoProps> = () => {
  return (
    <>
      <h2>输入新的学生</h2>
      <div className="border rounded p-4">
        <div className="input-group mb-3">
          <span className="input-group-text">输入学生名字</span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="学生名字"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            添加
          </button>
        </div>

        <HR text="或" />

        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              navigator.clipboard
                .readText()
                .then((clipText) => console.log(clipText))
            }}
          >
            拷贝文本后点击此按钮导入
          </button>
        </div>

        <div className='mt-4'>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div>


        <div className="d-grid gap-2 mt-4">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              navigator.clipboard
                .readText()
                .then((clipText) => console.log(clipText))
            }}
          >
            保存
          </button>
        </div>
      </div>

    </>
  )
}

export default StudentListDemo
