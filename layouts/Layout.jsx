import React from 'react'
import Footer from '../containers/Footer/Footer'
import Navbar from '../containers/Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  )
}
