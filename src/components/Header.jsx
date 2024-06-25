import React, {useEffect, useContext} from 'react'
import Logo from "../assets/images/logo.svg"
import IconMenu from "../assets/images/icon-menu.svg"
// import Sidebar from './Sidebar'
import { ShowProvider } from '../context/ShowContext'

const Header = () => {
  const {show,setShow,showToggler} = useContext(ShowProvider)

  useEffect(()=>{
    if(show === true){
      document.querySelector('.side-bar').classList.add('show')
    }else{
      document.querySelector('.side-bar').classList.remove('show')
    }
  },[showToggler])
  return (
    // max-w-4xl mx-auto
    <div 
        className='header text-gray-500 flex flex-row relative items-center justify-between max-sm:flex'>
        <h1 className='logo cursor-pointer'>
            <img src={Logo} alt="logo" />
        </h1>

        <img onClick={()=>showToggler()} src={IconMenu} alt="menu" className='lg:hidden cursor-pointer'/>
        {/* <Sidebar /> */}
        <nav className='flex flex-row gap-8 max-sm:hidden xl:flex md:hidden'>
            <span className="nav-link cursor-pointer hover:text-red-400">Home</span>
            <span className="nav-link cursor-pointer hover:text-red-400">New</span>
            <span className="nav-link cursor-pointer hover:text-red-400">Popular</span>
            <span className="nav-link cursor-pointer hover:text-red-400">Trending</span>
            <span className="nav-link cursor-pointer hover:text-red-400">Categories</span>
        </nav>
    </div>
  )
}

export default Header