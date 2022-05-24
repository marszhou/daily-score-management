import { FunctionComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import ColumnLayout from '../components/ColumnLayout'
import Params from './Params'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  return (
    <>
      <h1>设置</h1>
      <ColumnLayout gap={3}>
        <ColumnLayout.Col cols={9}>
          <Routes>
            <Route path="" element={<Navigate to="params" replace />} />
            <Route path="params" element={<Params />}></Route>
          </Routes>
        </ColumnLayout.Col>
        <ColumnLayout.Col cols={3}>
          <ul>
            <li><NavLink to='params' className={'nav-link'}>参数设置</NavLink></li>
            <li><NavLink to='students' className={'nav-link'}>学生名单</NavLink></li>
          </ul>
        </ColumnLayout.Col>
      </ColumnLayout>
    </>
  )
}

export default Settings
