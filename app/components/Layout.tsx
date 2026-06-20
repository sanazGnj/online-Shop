import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainSlider from './MainSlider'

interface ILayoutProps {
  children: React.ReactNode
}


function Layout({ children}: ILayoutProps) {
  return (
    <div>
        
        <Navbar/>
         {/* <MainSlider /> */}
          {children}
        <Footer/> 
    
    </div>
  )
}

export default Layout