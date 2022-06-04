import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { useAppDispatch } from './app/hooks'
import NavBar from './components/NavBar'
import { initLoadStudents } from './features/students/studentsSlices'
import Index from './views/Index'
import RatioSettingsDemo from './views/RatioSettingsDemo'
import StudentListDemo from './views/StudentListDemo'
import WorkDayPickerDemo from './views/WorkDayPickerDemo'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(initLoadStudents())
  }, [dispatch])

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
