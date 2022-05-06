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
  const handleChange = () => {
    if (inputRef.current) {
      if (onChange(inputRef.current.value)) {
        setMode(StudentRowMode.view)
      } else {
        // 报错
        inputRef.current.setCustomValidity('姓名不能为空，并且不能重复。')
        inputRef.current.reportValidity()
      }
    }
  }
  const handleEdit = () => {
    setMode(StudentRowMode.edit)
  }

  return (
    <tr>
      <th scope="row" className={style.check}>
        <input
          className="form-check-input"
          type="checkbox"
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
      <td style={{ verticalAlign: 'middle' }} onDoubleClick={() => {
        if (mode === StudentRowMode.view) {
          handleEdit()
        }
      }}>
        {mode === StudentRowMode.edit && (
          <input
            type="text"
            className="form-control form-control-sm"
            onBlur={handleChange}
            onChange={() => inputRef.current?.setCustomValidity('')}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleChange()
              }
            }}
            ref={inputRef}
            defaultValue={student.name}
            autoFocus
          />
        )}
        {mode === StudentRowMode.view && (
          <span className="form-check-label" style={{pointerEvents: 'none'}}>
            {student.name}
          </span>
        )}
      </td>
      <td className={style.action}>
        <button className="btn btn-success btn-sm" type="button">
          {mode === StudentRowMode.edit && (
            <ArrowReturnLeft onClick={handleChange} />
          )}
          {mode === StudentRowMode.view && (
            <PencilFill
              onClick={handleEdit}
            />
          )}
        </button>
      </td>
    </tr>
  )
}

export default StudentRow
