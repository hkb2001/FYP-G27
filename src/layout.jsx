import React from 'react'
import Bottombar from './components/bottombar'
import ContentContainer from './components/maincontainer'
import Middlebar from './components/middlebar'
import NavBar from './components/NavBar'

const Layout = () => {
  return (
    <div>
    
    <ContentContainer />
    <Middlebar />
    <Bottombar />
    </div>
  )
}

export default Layout