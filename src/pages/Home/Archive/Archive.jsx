import React from 'react'
import { Fragment } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import SideBar from '../../../components/sidebar/SideBar'
import { useNotes } from '../../../context/notes-context'
import NotesCard from '../../../components/NotesCard/NotesCard'

function Archive() {

    const {archive} = useNotes();

  return (
    <div>
        <Fragment>
            <Navbar/>
            <main className='flex gap-3'>
                <SideBar/>
                    <div className=' flex flex-wrap gap-6 w-screen mt-7'>
                        {
                            archive?.length > 0 && archive.map(({id,title,text,isPinned})=>(
                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
            </main>
        </Fragment>
      
    </div>
  )
}

export default Archive
