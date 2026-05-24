export default function Newsletter() {
  return (
    <section className="border-y py-10 sm:py-14" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg2)" }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <h3 className="font-display text-lg font-black uppercase tracking-[-0.02em] text-white sm:text-xl">Receba ofertas exclusivas</h3>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Cadastre-se e receba promoções toda semana no seu WhatsApp</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <input type="email" placeholder="Seu melhor e-mail" className="flex-1 max-w-sm rounded-md border px-4 py-2.5 text-sm outline-none transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "var(--line)", color: "var(--text)" }} />
          <a href="https://wa.me/5547XXXXXXXX" className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase transition-all sm:text-[11px]" style={{ backgroundColor: "var(--accent)", color: "#0d0e0d" }}>
            QUERO RECEBER
          </a>
        </div>
      </div>
    </section>
  )
}
