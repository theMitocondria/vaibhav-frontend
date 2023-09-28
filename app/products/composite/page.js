import Footer from '@/component/Footer'
import ProductListComp from '@/component/ProductListComp'
import SendMessage from '@/component/SendMessage'
import Navbar2 from '@/component/navbar2'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar2 />
        <ProductListComp />
        <SendMessage/>
     <Footer />
     
    </div>
  )
}
