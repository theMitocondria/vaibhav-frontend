import Epr from "@/component/Epr";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";
import SendMessage from "@/component/SendMessage";
import BuySell from "@/component/BuySell";
import OurProducts from "@/component/OurProducts";
import ProductList from "@/component/ProductList";
import OurCustomers from "@/component/OurCustomers";




export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>
     <BuySell />
     <Epr/>
     <OurProducts />
     <OurCustomers />
     <SendMessage/>
     <Footer />
     
   </div>
  )
}
