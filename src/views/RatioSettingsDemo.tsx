import { FunctionComponent } from 'react'
import RatioSettings from '../components/RatioSettings/RatioSettings'

interface RatioSettingsDemoProps {}

const RatioSettingsDemo: FunctionComponent<RatioSettingsDemoProps> = () => {
  return (
    <>
      <h2>系数设置</h2>
      <RatioSettings
        onSave={(settings) => {
          console.log(settings)
        }}
      />
    </>
  )
}

export default RatioSettingsDemo
