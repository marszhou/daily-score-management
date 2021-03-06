import { FunctionComponent, useEffect, useState } from 'react'
import { toSvg } from 'jdenticon'
import style from './ListTable.module.scss'
import { Student } from '../../types/student'
import StudentRow from './StudentRow'

interface ListTableProps {
  students: Array<Student>
}

const ListTable: FunctionComponent<ListTableProps> = ({ students }) => {
  const [selected, setSelected] = useState<Array<string>>([])
  const [checkAll, setCheckAll] = useState(true)
  useEffect(() => {
    setSelected(students.map((s) => s.id))
  }, [students])
  useEffect(() => {
    setCheckAll(selected.length === students.length)
  }, [selected, students])

  return (
    <table className={`table table-hover caption-top ${style.ListTable}`}>
      <caption>
        学生 {selected.length}/{students.length} {' '}
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
        {students.map((student, index) => (
          <StudentRow
            key={student.id}
            checked={selected.includes(student.id)}
            student={student}
            onChange={(newName) => {
              if (newName.trim().length === 0) {
                return false
              }
              const find = students.findIndex((s) => s.name === newName)
              if (find === -1 || find === index) {
                student.name = newName
                student.avatar = toSvg(newName, 32)
                return true
              } else {
                return false
              }
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
