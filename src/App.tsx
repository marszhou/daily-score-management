import { Route, Routes } from 'react-router'
import WorkDayPickerDemo from './views/WorkDayPickerDemo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/work-day-picker-demo" element={<WorkDayPickerDemo />} />
    </Routes>
  )
}

export default App
