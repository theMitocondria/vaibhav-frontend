import Blog from '@/component/Blog'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <Blog />
        <Footer />
    </div>
  )
}
