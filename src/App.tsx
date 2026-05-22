import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Products from "@/sections/Products"
import Categories from "@/sections/Categories"
import About from "@/sections/About"

export default function App() {
  return (
    <div>
      <Navbar c2={"#FFD700"} display="KEROPROMO" />
      <Hero c1={"#00A859"} c2={"#FFD700"} display="KEROPROMO" segment="Mercado & Varejo" motto="Oferta que vende" />
      <Stats c2={"#FFD700"} />
      <Products c2={"#FFD700"} />
      <Categories c2={"#FFD700"} />
      <About c2={"#FFD700"} display="KEROPROMO" />
      <Footer />
      <WhatsApp />
    </div>
  )
}
