import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import ProductListComp from '@/component/ProductListComp'
import SendMessage from '@/component/SendMessage'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <ProductListComp />
        <SendMessage/>
     <Footer />
     
    </div>
  )
}
