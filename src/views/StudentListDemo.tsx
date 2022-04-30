import { FunctionComponent } from 'react'
import HR from '../components/HR'
import { toSvg } from 'jdenticon'
import { ArrowReturnLeft, PencilFill } from 'react-bootstrap-icons'
import StudentInput from '../components/StudentList/StudentInput'
import ClipboardImportButton from '../components/StudentList/ClipboardImportButton'
import ListTable from '../components/StudentList/ListTable'
import SaveButton from '../components/StudentList/SaveButton'
// import {Buffer} from 'buffer'

interface StudentListDemoProps {}

const StudentListDemo: FunctionComponent<StudentListDemoProps> = () => {
  let svgString = toSvg('mattzhou', 32)

  return (
    <>
      <div>
        {/* <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`} /> */}
        {/* <img src={`data:image/svg+xml;base64,${Buffer.from(svgString).toString('base64')}`} /> */}
      </div>
      <h2>输入新的学生</h2>
      <div className="border rounded p-4">
        <StudentInput onSubmit={() => false}/>

        <HR text="或" />

        <ClipboardImportButton />

        {/* <HR text="已有" /> */}

        <ListTable />

        <ListTable />

        <SaveButton />
      </div>
    </>
  )
}

export default StudentListDemo
