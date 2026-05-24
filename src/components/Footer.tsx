export default function Footer() {
  return (
    <footer className="border-t py-10 sm:py-14" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg2)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/logo.png" alt="KEROPROMO" className="h-10 w-auto mb-3" />
            <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>O atacado mais perto de você. Qualidade e economia todo dia.</p>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-3">Institucional</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[11px] transition-colors" style={{ color: "var(--muted)" }}>Nossas Lojas</a>
              <a href="#" className="text-[11px] transition-colors" style={{ color: "var(--muted)" }}>Política de Privacidade</a>
              <a href="#" className="text-[11px] transition-colors" style={{ color: "var(--muted)" }}>Termos de Uso</a>
              <a href="#" className="text-[11px] transition-colors" style={{ color: "var(--muted)" }}>Trabalhe Conosco</a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-3">Atendimento</h4>
            <div className="flex flex-col gap-2">
              <span className="text-[11px]" style={{ color: "var(--muted)" }}>Seg a Sáb: 7h30 às 19h</span>
              <a href="https://wa.me/5547XXXXXXXX" className="text-[11px] transition-colors" style={{ color: "var(--accent)" }}>WhatsApp</a>
              <span className="text-[11px]" style={{ color: "var(--muted)" }}>contato@keropromo.com.br</span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-3">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-2">
              {["Pix", "Visa", "Master", "Elo", "Hiper"].map((p) => (
                <span key={p} className="rounded-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "var(--muted)" }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center border-t" style={{ borderColor: "var(--line)" }}>
          <p className="text-[10px]" style={{ color: "var(--muted)" }}>&copy; 2025 KEROPROMO &middot; Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
