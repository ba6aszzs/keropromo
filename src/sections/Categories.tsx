import Section from "@/components/Section"

const categories = [
  { title: "Linha 1", desc: "Descrição da linha 1", tag: "Tag" },
  { title: "Linha 2", desc: "Descrição da linha 2", tag: "Tag" },
  { title: "Linha 3", desc: "Descrição da linha 3", tag: "Tag" },
]

export default function Categories() {
  return (
    <Section className="py-16 sm:py-20" style={{ backgroundColor: "var(--bg)" }} id="categorias">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="border px-6 py-8 text-center transition-all sm:px-8 sm:py-10" style={{ borderColor: "var(--line)" }}>
              <h3 className="font-display text-base font-black text-white sm:text-lg">{cat.title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{cat.desc}</p>
              <span className="mt-4 inline-block border px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] uppercase rounded-md" style={{ borderColor: "rgba(255,145,0,0.2)", color: "var(--accent)" }}>{cat.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
