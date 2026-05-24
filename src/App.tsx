import Navbar from "@/components/Navbar"
import TopBar from "@/components/TopBar"
import CategoryStrip from "@/components/CategoryStrip"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import CategoryGrid from "@/sections/CategoryGrid"
import Products from "@/sections/Products"
import Newsletter from "@/sections/Newsletter"
import Footer from "@/components/Footer"
import WhatsApp from "@/components/WhatsApp"

export default function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <CategoryStrip />
      <Hero />
      <Stats />
      <CategoryGrid />
      <Products />
      <Newsletter />
      <Footer />
      <WhatsApp />
    </div>
  )
}
