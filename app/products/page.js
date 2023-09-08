import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import ProductList from '@/component/ProductList'
import SendMessage from '@/component/SendMessage'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <ProductList />
        <SendMessage/>
     <Footer />
     
    </div>
  )
}
