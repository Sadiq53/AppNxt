import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../component/shared/Sidebar/Sidebar'
import Header from '../component/shared/Header/Header'


const RootModule = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('ddlj')) {
      navigate('/signin')
    }
  }, [])

  return (
    <div className='main-layout'>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default RootModule