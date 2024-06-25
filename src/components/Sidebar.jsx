import React, {useEffect} from 'react'
import IconClose from "../assets/images/icon-menu-close.svg"

const Sidebar = ({show,setShow,showToggler}) => {
    useEffect(()=>{
        if(show === false){
            document.querySelector('.side-bar').classList.add('show')
        }else{
            document.querySelector('.side-bar').classList.remove('show')
        }
    },[showToggler])
  return (
    <div className='side-bar flex flex-row justify-end lg:hidden'>
        <nav className='bg-amber-50 flex flex-col gap-16 p-4'>
            <img onClick={()=>showToggler()} src={IconClose} alt="close icon" className='w-8 h-8 self-end'/>
            <div className="nav-links flex flex-col gap-4 px-4">
                <span className="nav-link cursor-pointer hover:text-red-400">Home</span>
                <span className="nav-link cursor-pointer hover:text-red-400">New</span>
                <span className="nav-link cursor-pointer hover:text-red-400">Popular</span>
                <span className="nav-link cursor-pointer hover:text-red-400">Trending</span>
                <span className="nav-link cursor-pointer hover:text-red-400">Categories</span>
            </div>
        </nav>
    </div>
  )
}

export default Sidebar