import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b" style={{ borderColor: "rgba(0,168,89,0.08)" }}>
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-lg font-black tracking-[0.1em] uppercase text-[#00A859]">KEROPROMO</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#produtos" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#00A859]">Produtos</a>
          <a href="#categorias" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#00A859]">Categorias</a>
          <a href="#sobre" className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40 transition-colors hover:text-[#00A859]">Sobre</a>
          <a href="https://wa.me/5547XXXXXXXX" className="bg-[#00A859] px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#008F4C]">COMPRAR</a>
        </div>
        <button className="relative z-50 flex size-11 items-center justify-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1"><motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#00A859]" /><motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-5 bg-[#00A859]" /><motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-[#00A859]" /></div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t bg-white" style={{ borderColor: "rgba(0,168,89,0.08)" }}>
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <a href="#produtos" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Produtos</a>
              <a href="#categorias" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Categorias</a>
              <a href="#sobre" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]/40">Sobre</a>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-2 flex min-h-11 items-center justify-center bg-[#00A859] px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white">COMPRAR</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
