import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Party from './pages/Party'
import Gate from './pages/Gate'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/party' element={<Party />} />
      <Route path='/gate' element={<Gate />} />
    </Routes>
    </>
  )
}

export default App
