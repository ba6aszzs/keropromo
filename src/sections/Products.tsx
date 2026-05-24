import Section from "@/components/Section"

const productSections = [
  {
    name: "Açougue",
    products: [
      { name: "Patinho Moído", price: "R$ 19,90", old: "R$ 25,90", kg: "kg", img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop" },
      { name: "Coxão Mole", price: "R$ 24,90", old: "R$ 32,90", kg: "kg", img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=300&fit=crop" },
      { name: "Frango Inteiro", price: "R$ 12,90", old: "R$ 16,90", kg: "kg", img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=300&h=300&fit=crop" },
      { name: "Linguiça Toscana", price: "R$ 9,90", old: "R$ 13,90", kg: "kg", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300&h=300&fit=crop" },
    ],
  },
  {
    name: "Hortifrúti",
    products: [
      { name: "Banana Prata", price: "R$ 3,90", old: "R$ 5,90", kg: "kg", img: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300&h=300&fit=crop" },
      { name: "Tomate", price: "R$ 4,90", old: "R$ 7,90", kg: "kg", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&h=300&fit=crop" },
      { name: "Alface", price: "R$ 1,90", old: "R$ 2,90", kg: "un", img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=300&fit=crop" },
      { name: "Batata", price: "R$ 2,90", old: "R$ 4,90", kg: "kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop" },
    ],
  },
  {
    name: "Bebidas",
    products: [
      { name: "Refrigerante Cola 2L", price: "R$ 4,99", old: "R$ 7,99", kg: "", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=300&fit=crop" },
      { name: "Suco Natural 1L", price: "R$ 6,90", old: "R$ 9,90", kg: "", img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=300&fit=crop" },
      { name: "Água Mineral 500ml", price: "R$ 1,49", old: "R$ 2,49", kg: "", img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=300&fit=crop" },
      { name: "Cerveja Lata", price: "R$ 2,99", old: "R$ 3,99", kg: "", img: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&h=300&fit=crop" },
    ],
  },
]

export default function Products() {
  return (
    <Section className="py-10 sm:py-14" id="produtos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-10 sm:space-y-14">
        {productSections.map((section) => (
          <div key={section.name}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-black uppercase tracking-[-0.02em] text-white sm:text-lg">{section.name}</h3>
              <a href="#" className="text-[10px] font-bold tracking-[0.1em] uppercase sm:text-[11px]" style={{ color: "var(--accent)" }}>Ver mais</a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {section.products.map((p) => (
                <div key={p.name} className="rounded-md p-4 flex flex-col items-center text-center transition-all hover:scale-[1.02]" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}>
                  <div className="w-full aspect-square rounded-md mb-3 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>{p.kg}</span>
                  <h4 className="font-display text-sm font-bold text-white mt-0.5 sm:text-base">{p.name}</h4>
                  <span className="text-[10px] line-through mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>{p.old}</span>
                  <span className="font-display text-lg font-black sm:text-xl" style={{ color: "var(--accent)" }}>{p.price}</span>
                  <a href="https://wa.me/5547XXXXXXXX" className="mt-2 w-full rounded-md py-2 text-[9px] font-bold tracking-[0.1em] uppercase transition-all sm:text-[10px]" style={{ backgroundColor: "rgba(255,145,0,0.15)", color: "var(--accent)" }}>
                    COMPRAR
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
