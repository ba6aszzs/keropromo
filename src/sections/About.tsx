import Section from "@/components/Section"

export default function About({ display }: { display: string }) {
  return (
    <Section className="py-16 sm:py-20" id="sobre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-1.5 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>Sobre</div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[-0.02em] sm:text-3xl md:text-4xl text-white">A <span style={{ color: "var(--accent)" }}>{display}</span></h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "var(--muted)" }}>
            Somos uma empresa dedicada a oferecer produtos de qualidade com excelência no atendimento. 
            Nossa missão é superar expectativas e entregar valor em cada interação.
          </p>
          <a href="https://wa.me/5547XXXXXXXX" className="mt-6 inline-flex min-h-12 items-center justify-center px-7 text-xs font-bold tracking-[0.1em] uppercase text-[#0d0e0d] transition-all sm:min-h-0 sm:py-3.5 sm:px-8 rounded-md" style={{ backgroundColor: "var(--accent)" }}>
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>
    </Section>
  )
}
