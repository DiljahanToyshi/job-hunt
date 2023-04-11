import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-120px)]'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App
