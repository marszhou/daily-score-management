import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import RatioSettingsDemo from './views/RatioSettingsDemo'
import StudentListDemo from './views/StudentListDemo'
import WorkDayPickerDemo from './views/WorkDayPickerDemo'

function App() {
  return (
    <div className="container-lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/work-day-picker-demo" element={<WorkDayPickerDemo />} />
        <Route path="/student-list-demo" element={<StudentListDemo />} />
        <Route path='/ratio-settings-demo' element={<RatioSettingsDemo />}/>
      </Routes>
    </div>
  )
}

export default App
