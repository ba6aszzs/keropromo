const categories = [
  { name: "Promoções", icon: "%" },
  { name: "Açougue", icon: "🥩" },
  { name: "Hortifrúti", icon: "🥬" },
  { name: "Frios", icon: "🧀" },
  { name: "Congelados", icon: "❄️" },
  { name: "Mercearia", icon: "🥫" },
  { name: "Limpeza", icon: "🧹" },
  { name: "Higiene", icon: "🧴" },
  { name: "Bebidas", icon: "🥤" },
  { name: "Eletro", icon: "🔌" },
  { name: "Pet", icon: "🐾" },
  { name: "Padaria", icon: "🥖" },
]

export default function CategoryGrid() {
  return (
    <section id="categorias" className="py-10 sm:py-14" style={{ backgroundColor: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-base font-black uppercase tracking-[-0.02em] text-white mb-6 sm:text-lg">Compre por categoria</h2>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-6">
          {categories.map((cat) => (
            <a key={cat.name} href="#"
              className="flex flex-col items-center gap-2 rounded-md p-3 transition-all hover:scale-105"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex size-14 items-center justify-center rounded-full sm:size-16" style={{ backgroundColor: "rgba(255,145,0,0.1)", border: "1px solid rgba(255,145,0,0.15)" }}>
                <span className="text-lg sm:text-xl">{cat.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-center leading-tight text-white/60 sm:text-[11px]">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
