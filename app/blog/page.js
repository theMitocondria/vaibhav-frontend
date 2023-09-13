import Blog from '@/component/Blog'
import BlogPage from '@/component/BlogPage'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <Blog />
        <Footer />
        <BlogPage />
    </div>
  )
}
