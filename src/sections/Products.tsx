import Section from "@/components/Section"

const products = [
  { cat: "Categoria", name: "Produto 1", old: "R$ 199,90", price: "R$ 129,90" },
  { cat: "Categoria", name: "Produto 2", old: "R$ 249,90", price: "R$ 169,90" },
  { cat: "Categoria", name: "Produto 3", old: "R$ 179,90", price: "R$ 99,90" },
  { cat: "Categoria", name: "Produto 4", old: "R$ 89,90", price: "R$ 59,90" },
  { cat: "Categoria", name: "Produto 5", old: "R$ 149,90", price: "R$ 99,90" },
  { cat: "Categoria", name: "Produto 6", old: "R$ 119,90", price: "R$ 79,90" },
]

export default function Products({ c2 }: { c2: string }) {
  return (
    <Section className="py-16 sm:py-20" id="produtos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: c2 }}>Produtos</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl">Nossos<br /><span style={{ color: c2 }}>produtos</span></h2>
        </div>
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "var(--line)" }}>
          {products.map((p) => (
            <div key={p.name} className="flex flex-col items-center px-5 py-8 text-center transition-colors sm:px-6 sm:py-10" style={{ backgroundColor: "var(--bg)" }}>
              <div className="mb-4 flex h-[140px] items-center justify-center sm:h-[170px]">
                <div className="flex size-24 items-center justify-center rounded-md sm:size-28" style={{ backgroundColor: `${c2}15` }}>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `${c2}40` }}>Imagem</span>
                </div>
              </div>
              <h3 className="font-display text-sm font-black sm:text-base">{p.name}</h3>
              <div className="font-display text-xl font-black mt-0.5 sm:text-2xl" style={{ color: c2 }}>{p.price}</div>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-3 inline-block border px-5 py-2 text-[10px] font-bold tracking-[0.12em] uppercase transition-all rounded-md sm:px-6" style={{ borderColor: `${c2}30`, color: c2 }}>
                COMPRAR
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
