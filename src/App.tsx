import { ToastContainer } from 'react-toastify';

import { Outlet } from 'react-router-dom';
import './App.css'
import { NavBar } from './Components/NavBar/NavBar';

function App() {


  return (
    <div className='relative font-roboto'>
        <NavBar/>
        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default App
