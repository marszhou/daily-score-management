import { FunctionComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { NavLink } from 'react-router-dom'
import ColumnLayout from '../components/ColumnLayout'
import Icon from '../components/Icon'
import Params from './Params'
import Students from './Students'
import WorkDays from './WorkDays'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  return (
    <>
      <h1>设置</h1>
      <ColumnLayout gap={3}>
        <ColumnLayout.Col cols={9}>
          <div className='border rounded p-3 mt-2'>
          <Routes>
            <Route path="" element={<Navigate to="params" replace />} />
            <Route path="params" element={<Params />}></Route>
            <Route path="students" element={<Students />}></Route>
            <Route path="work-days" element={<WorkDays />}></Route>
          </Routes>
          </div>
        </ColumnLayout.Col>
        <ColumnLayout.Col cols={3}>
          <ul>
            <li>
              <NavLink to="params" className={'nav-link'}>
                <Icon iconName="braces" /> 参数设置
              </NavLink>
            </li>
            <li>
              <NavLink to="students" className={'nav-link'}>
                <Icon iconName="people-fill" /> 学生名单
              </NavLink>
            </li>
            <li>
              <NavLink to="work-days" className={'nav-link'}>
                <Icon iconName="calendar-date" /> 日期设置
              </NavLink>
            </li>
            <li>
              <NavLink to="students" className={'nav-link'}>
                <Icon iconName="box-arrow-in-up" /> 导入
              </NavLink>
            </li>
            <li>
              <NavLink to="students" className={'nav-link'}>
              <Icon iconName="box-arrow-down" /> 导出
              </NavLink>
            </li>
          </ul>
        </ColumnLayout.Col>
      </ColumnLayout>
    </>
  )
}

export default Settings
