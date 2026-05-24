import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="ofertas" className="relative h-[300px] sm:h-[400px] overflow-hidden" style={{ backgroundColor: "#1D5BC4" }}>
      <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #FF9100 0%, #1D5BC4 50%, #FF9100 100%)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,145,0,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,145,0,0.1) 0%, transparent 50%)` }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block rounded px-2 py-0.5 text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]" style={{ backgroundColor: "rgba(255,145,0,0.2)", color: "#FF9100" }}>Semana de ofertas</span>
          <h1 className="font-display text-3xl font-black leading-[0.9] tracking-[-0.02em] text-white mt-3 sm:text-5xl sm:mt-4">
            Preço que é<br />
            <span style={{ color: "#FF9100" }}>KERO PROMO</span>
          </h1>
          <p className="mt-3 text-sm text-white/60 sm:text-base">O atacado mais perto de você. Qualidade e economia todo dia.</p>
          <a href="https://wa.me/5547XXXXXXXX" className="mt-5 inline-flex items-center rounded-md px-6 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase transition-all sm:text-[11px]" style={{ backgroundColor: "#FF9100", color: "#0d0e0d" }}>
            VER OFERTAS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
