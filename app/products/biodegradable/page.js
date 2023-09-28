import Footer from '@/component/Footer'
import ProductList from '@/component/ProductList'
import SendMessage from '@/component/SendMessage'
import Navbar2 from '@/component/navbar2'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar2 />
        <ProductList />
        <SendMessage/>
     <Footer />
     
    </div>
  )
}
