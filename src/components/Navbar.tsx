import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: "#0d0e0d", borderColor: "var(--line)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button className="flex size-10 items-center justify-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-5 text-white/60" /> : <Menu className="size-5 text-white/60" />}
        </button>
        <a href="#" className="flex items-center shrink-0">
          <img src="/logo.png" alt="KEROPROMO" className="h-11 w-auto sm:h-14" />
        </a>
        <div className="hidden md:flex flex-1 max-w-xl mx-auto">
          <div className="flex w-full items-center rounded-md overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            <input type="text" placeholder="Buscar produtos..." className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white/80 placeholder:text-white/20 outline-none" />
            <button className="flex items-center justify-center size-10 shrink-0" style={{ backgroundColor: "var(--accent)" }}>
              <Search className="size-4 text-[#0d0e0d]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-1.5 px-2 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-white/50 transition-colors hover:text-white">
            <User className="size-4" />
            <span className="hidden sm:inline">Entrar</span>
          </button>
          <button className="relative flex items-center gap-1.5 px-2 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-white/50 transition-colors hover:text-white">
            <ShoppingCart className="size-4" />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[8px] font-bold" style={{ backgroundColor: "var(--accent)", color: "#0d0e0d" }}>0</span>
            <span className="hidden sm:inline">Carrinho</span>
          </button>
        </div>
      </div>
      <div className="md:hidden px-4 pb-3">
        <div className="flex w-full items-center rounded-md overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          <input type="text" placeholder="Buscar produtos..." className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white/80 placeholder:text-white/20 outline-none" />
          <button className="flex items-center justify-center size-10 shrink-0" style={{ backgroundColor: "var(--accent)" }}>
            <Search className="size-4 text-[#0d0e0d]" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t" style={{ borderColor: "var(--line)" }}>
            <div className="flex flex-col px-4 py-4 space-y-1">
              <a href="#categorias" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/50">Categorias</a>
              <a href="#ofertas" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/50">Ofertas</a>
              <a href="#sobre" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/50">Sobre</a>
              <a href="https://wa.me/5547XXXXXXXX" onClick={() => setOpen(false)} className="flex min-h-11 items-center justify-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-[#0d0e0d]" style={{ backgroundColor: "var(--accent)" }}>COMPRAR NO WHATSAPP</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
