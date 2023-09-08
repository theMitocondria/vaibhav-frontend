import Epr from "@/component/Epr";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";
import SendMessage from "@/component/SendMessage";



export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>
     <Epr/>
     <SendMessage/>
     <Footer />
     
   </div>
  )
}
