import Epr from "@/component/Epr";
import Footer from "@/component/Footer";
import Landing from "@/component/Landing";
import Navbar from "@/component/Navbar";
import SendMessage from "@/component/SendMessage";
import BuySell from "@/component/BuySell";
import OurProducts from "@/component/OurProducts";
import ProductList from "@/component/ProductList";
import ProjectManagement from "@/component/ProjectManagement";
import EPRFORM from "@/component/EPRFORM";
import OurCustomers from "@/component/OurCustomers";
import BlogForm from "@/component/BlogForm";





export default function Home() {
  return (
   <div>
     <Navbar/>
     <Landing/>
     <BuySell />
     <Epr/>
     <OurProducts />
     <ProjectManagement/>
     <OurCustomers />
     <SendMessage/>
     <Footer />
     <BlogForm />


   </div>
  )
}
