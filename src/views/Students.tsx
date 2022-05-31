import { FunctionComponent, useState } from 'react'
import HR from '../components/HR'
import StudentInput from '../components/StudentList/StudentInput'
import ClipboardImportButton from '../components/StudentList/ClipboardImportButton'
import ListTable from '../components/StudentList/ListTable'
import SaveButton from '../components/SaveButton'
import { v4 } from 'uuid'
import { toSvg } from 'jdenticon'

interface StudentsProps {}

const STUDENTS = [
  '巩宇航',
  '徐嘉阳',
  '刘耕',
  '宋丹宁',
  '张尚迅',
  '彭少宣',
  '李月鑫',
  '张明辉',
  '颜珍珍',
  '石佳琪',
  '刘鹤翔',
  '马若涵',
  '郭浩然',
  '郑庆贺',
].map((name) => ({ id: v4(), name, avatar: toSvg(name, 32) }))

const Students: FunctionComponent<StudentsProps> = () => {
  const [students, setStudents] = useState(STUDENTS)

  return (
    <>
      <h2>学生名单</h2>
      <div className="ms-1 mt-4">
        <StudentInput
          isExist={(name) => students.some((s) => s.name === name)}
          onSubmit={(name) => {
            if (students.some((s) => s.name !== name)) {
              const student = { id: v4(), name, avatar: toSvg(name, 32) }
              setStudents([...students, student])
              return true
            }
            return false
          }}
        />

        <HR text="或" />

        <ClipboardImportButton
          onImport={(names) => {
            setStudents(
              names.reduce(
                (students, name) => {
                  students.push({ name, id: v4(), avatar: toSvg(name, 32) })
                  return students
                },
                [...students]
              )
            )
          }}
          currentNames={students.map(s => s.name)}
        />

        <ListTable students={students} />

        <ListTable students={students} />

        <SaveButton />
      </div>
    </>
  )
}

export default Students
