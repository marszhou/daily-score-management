import { FunctionComponent, useState } from 'react'
import HR from '../components/HR'
import StudentInput from '../components/StudentList/StudentInput'
import ClipboardImportButton from '../components/StudentList/ClipboardImportButton'
import ListTable from '../components/StudentList/ListTable'
import SaveButton from '../components/SaveButton'
import {v4} from 'node-uuid'
import { toSvg } from 'jdenticon'

interface StudentListDemoProps {}

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
].map(name=>({id: v4(), name, avatar: (toSvg(name, 32))}))

const StudentListDemo: FunctionComponent<StudentListDemoProps> = () => {
  const [students, setStudents] = useState(STUDENTS)

  return (
    <>
      <img src={'data:image/svg+xml;utf-8,' + encodeURIComponent(students[0].avatar)} />
      <h2>输入新的学生</h2>
      <div className="border rounded p-4">
        <StudentInput
          isExist={(name) => name === '123'}
          onSubmit={() => false}
        />

        <HR text="或" />

        <ClipboardImportButton />

        <ListTable students={students} />

        <ListTable students={students} />

        <SaveButton />
      </div>
    </>
  )
}

export default StudentListDemo
