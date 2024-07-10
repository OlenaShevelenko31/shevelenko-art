import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Work from './pages/Work'
import Home from './pages/Main'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/work' element={<Work/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
