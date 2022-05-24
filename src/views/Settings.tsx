import { FunctionComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import TwoColumnLayout from '../components/TwoColumnLayout'
import Params from './Params'

interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
  return (
    <>
      <h1>设置</h1>
      <TwoColumnLayout>
        <TwoColumnLayout.Main>
          <Routes>
            <Route path="" element={<Navigate to="params" replace />} />
            <Route path="params" element={<Params />}></Route>
          </Routes>
        </TwoColumnLayout.Main>
        <TwoColumnLayout.Sidebar>
          haha
        </TwoColumnLayout.Sidebar>
      </TwoColumnLayout>
    </>
  )
}

export default Settings
