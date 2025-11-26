import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {

    const getStyle = ({isActive}) => {
        return isActive ? 'bg-indigo-800 flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full text-white' : 'hover:bg-indigo-800 flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full hover:text-white'
    }

  return (
    <div>
        <aside className='flex flex-col gap-3 border-r-2 border-gray-100 w-[150px] h-screen p-3'>
            <NavLink className={getStyle} to='/'>
                <span class="material-icons-outlined">    
                    home
                </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyle} to='/archive'>
                <span class="material-icons-outlined">
                    archive
                </span> 
                <span>Archive</span>
            </NavLink>
            <NavLink className={getStyle} to='/important'>
                <span class="material-icons-outlined">
                    bookmark
                </span>
                <span>Important</span>
            </NavLink>
            <NavLink className={getStyle} to='/bin'>
                <span class="material-icons-outlined">
                    delete
                </span>
                <span>Bin</span>
            </NavLink>
        </aside>
      
    </div>
  )
}

export default SideBar
