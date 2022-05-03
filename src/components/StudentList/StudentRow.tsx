import { FunctionComponent, useRef, useState } from 'react'
import { ArrowReturnLeft, PencilFill } from 'react-bootstrap-icons'
import style from './ListTable.module.scss'
import { Student } from '../../types/student'

interface StudentRowProps {
  checked: boolean
  onChange(name: string): boolean
  onSelect(id: string): void
  student: Student
}

enum StudentRowMode {
  edit,
  view,
}

const StudentRow: FunctionComponent<StudentRowProps> = ({
  checked,
  onChange,
  onSelect,
  student,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [mode, setMode] = useState<StudentRowMode>(StudentRowMode.view)

  return (
    <tr>
      <th scope="row" className={style.check}>
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={checked}
          onChange={() => onSelect(student.id)}
        />
      </th>
      <td className={style.avatar}>
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(student.avatar)}`}
          alt=""
        />
      </td>
      <td style={{ verticalAlign: 'middle' }}>
        {mode === StudentRowMode.edit && (
          <input
            type="text"
            className="form-control form-control-sm"
            ref={inputRef}
          />
        )}
        {mode === StudentRowMode.view && (
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {student.name}
          </label>
        )}
      </td>
      <td className={style.action}>
        <button className="btn btn-success btn-sm" type="button">
          {mode === StudentRowMode.edit && (
            <ArrowReturnLeft
              onClick={() => {
                if (inputRef.current) {
                  if (onChange(inputRef.current.value)) {
                    setMode(StudentRowMode.view)
                  } else {
                    // 报错
                    inputRef.current.setCustomValidity('姓名不能为空，并且不能重复。')
                    inputRef.current.reportValidity(true)
                  }
                }
              }}
            />
          )}
          {mode === StudentRowMode.view && (
            <PencilFill
              onClick={() => {
                setMode(StudentRowMode.edit)
              }}
            />
          )}
        </button>
      </td>
    </tr>
  )
}

export default StudentRow
