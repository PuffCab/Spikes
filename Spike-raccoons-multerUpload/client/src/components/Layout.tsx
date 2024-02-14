import React from 'react'
import NavBar from './NavBar'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  
  return (
    <>
      <NavBar />
      <div style={{ textAlign: "center"  }}>
        { children }
      </div>
      
      
    </>
  )
}

export default Layout