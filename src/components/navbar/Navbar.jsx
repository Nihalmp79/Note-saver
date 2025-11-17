import React from 'react'
import logo from '../../assets/icons/apple-touch-icon.png'

function Navbar() {
  return (
    <div>
        <header className='flex px-3 py-2 gap-3 border-b-2 border-gray-100'>
            <div className='w-12 h-12'>
                <img className='w-full h-full' src={logo} alt="#" />
            </div>
            <h1 className='text-indigo-800 text-4xl font-bold'>NoteIt</h1>
        </header>
      
    </div>
  )
}

export default Navbar
