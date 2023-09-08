import Epr from "@/component/Epr";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";
import SendMessage from "@/component/SendMessage";
import BuySell from "@/component/BuySell";
import OurProducts from "@/component/OurProducts";




export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>

     <Epr/>
     <SendMessage/>

    <BuySell />
    <OurProducts />

     <Footer />
     
   </div>
  )
}
