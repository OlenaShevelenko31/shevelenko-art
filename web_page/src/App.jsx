import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Work from './pages/Work'
import Home from './pages/Main'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path='/work' element={<Home/>}> </Route>
        <Route path='/work' element={<Work/>}> </Route>
        <Route path='/work' element={<Contact/>}> </Route>
      </Routes>
      
    </>
  )
}

export default App
