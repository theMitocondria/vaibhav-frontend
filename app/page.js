import BuySell from "@/component/BuySell";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";



export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>
    <BuySell />
     <Footer />
   
   </div>
  )
}
