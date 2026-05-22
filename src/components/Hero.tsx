import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-gradient-to-br from-[#00A859] to-[#00C96D]">
      {/* Padrão de preços/tags */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      
      {/* Etiquetas decorativas */}
      {["-50%", "OFF", "3x10", "GRÁTIS"].map((t, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute font-display font-black text-[#FFD700] opacity-[0.06] text-4xl sm:text-6xl"
          style={{ left: `${10 + i * 25}%`, top: `${20 + i * 15}%` }}
        >{t}</motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <span className="inline-block bg-[#FFD700] text-[#0d0e0d] px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase mb-6">Ofertas que vendem</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-display text-[clamp(3rem,12vw,6rem)] font-black leading-[0.85] tracking-[-0.03em] uppercase text-white"
          >
            KERO
            <br />
            <span className="text-[#FFD700]">PROMO</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 max-w-md text-sm leading-relaxed sm:text-base text-white/70">
            O menor preço da região com a qualidade que você merece. Supermercado completo pra sua família.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#produtos" className="flex min-h-12 items-center justify-center bg-[#FFD700] px-8 text-xs font-bold tracking-[0.12em] uppercase text-[#0d0e0d] transition-all hover:bg-[#FFED4A] sm:min-h-0 sm:py-3.5">VER OFERTAS</a>
            <a href="https://wa.me/5547XXXXXXXX" className="flex min-h-12 items-center justify-center bg-white/10 backdrop-blur-sm px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all sm:min-h-0 sm:py-3.5">FALE CONOSCO</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
