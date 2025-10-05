import { Routes, Route } from "react-router-dom";
import URL_Home from './pages/URL_Home'
import URL_Party from './pages/URL_Party'
import URL_Console from './pages/URL_Console'
import URL_Redirecting from './pages/URL_Redirecting'
import URL_Eventually from './pages/URL_Eventually'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<URL_Home />} />
      <Route path='/HOME' element={<URL_Home />} />
      <Route path='/PARTY' element={<URL_Party />} />
      <Route path='/CONSOLE' element={<URL_Console />} />
      <Route path='/REDIRECTING' element={<URL_Redirecting />} />
      <Route path='/EVENTUALLY' element={<URL_Eventually />} />
    </Routes>
    </>
  )
}

export default App
