import { FunctionComponent, useEffect, useState } from 'react'
import { toSvg } from 'jdenticon'
import { ArrowReturnLeft, PencilFill } from 'react-bootstrap-icons'
import style from './ListTable.module.scss'
import { Student } from '../../types/student'
import StudentRow from './StudentRow'

interface ListTableProps {
  students: Array<Student>
}

const ListTable: FunctionComponent<ListTableProps> = ({ students }) => {
  const svgString = toSvg('hahah', 32)
  const [selected, setSelected] = useState<Array<string>>([])
  const [checkAll, setCheckAll] = useState(true)
  useEffect(() => {
    setSelected(students.map((s) => s.id))
  }, [])

  return (
    <table className={`table table-hover caption-top ${style.ListTable}`}>
      <caption>
        已有{' '}
        <label>
          <input
            type="checkbox"
            name="all"
            id=""
            onChange={(e) => {
              if ((e.target as HTMLInputElement).checked) {
                setSelected(students.map((s) => s.id))
                setCheckAll(true)
              } else {
                setSelected([])
                setCheckAll(false)
              }
            }}
            checked={checkAll}
          />{' '}
          全选
        </label>
      </caption>

      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            checked={selected.includes(student.id)}
            student={student}
            onChange={() => {
              return false
            }}
            onSelect={(id) => {
              if (selected.includes(id)) {
                setSelected(selected.filter((s) => s !== id))
                setCheckAll(false)
              } else {
                const nextSelected = [...selected, id]
                setSelected(nextSelected)
                setCheckAll(nextSelected.length === students.length)
              }
            }}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ListTable
