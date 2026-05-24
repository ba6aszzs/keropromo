const categories = [
  "Eletro", "Hortifrúti", "Açougue", "Frios & Laticínios", "Congelados",
  "Mercearia", "Limpeza", "Higiene & Beleza", "Bebidas", "Pet Care",
]

export default function CategoryStrip() {
  return (
    <div className="overflow-x-auto no-scrollbar border-b" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg2)" }}>
      <div className="flex gap-1 px-4 py-2 min-w-max mx-auto max-w-7xl sm:px-6">
        {categories.map((cat) => (
          <a key={cat} href="#"
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] uppercase transition-colors sm:text-[11px]"
            style={{ color: "rgba(255,255,255,0.5)", backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            {cat}
          </a>
        ))}
      </div>
    </div>
  )
}
