import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Index from './views/Index'
import RatioSettingsDemo from './views/RatioSettingsDemo'
import StudentListDemo from './views/StudentListDemo'
import WorkDayPickerDemo from './views/WorkDayPickerDemo'

function App() {
  return (
    <div className="container-lg">
      <NavBar />
      <div className="row mt-3">
        <Routes>
          <Route path="*" element={<Index />} />

          <Route path="/work-day-picker-demo" element={<WorkDayPickerDemo />} />
          <Route path="/student-list-demo" element={<StudentListDemo />} />
          <Route path="/ratio-settings-demo" element={<RatioSettingsDemo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
