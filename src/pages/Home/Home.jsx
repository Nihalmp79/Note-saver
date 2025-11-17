import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <Navbar/>
    <main>
        <SideBar/>
      </main>
    </Fragment>
    
  )
}

export default Home
