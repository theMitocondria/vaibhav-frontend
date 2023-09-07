import BuySell from "@/component/BuySell";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";
import OurProducts from "@/component/OurProducts";



export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>
    <BuySell />
    <OurProducts />
     <Footer />
   
   </div>
  )
}
