import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Settings from './Settings'

interface IndexProps {}

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Index
