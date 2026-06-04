import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "home" },
  { label: "Помощь", href: "services" },
  { label: "Экстренно", href: "emergency" },
  { label: "О центре", href: "about" },
  { label: "Контакты", href: "contacts" },
];

interface Props {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  onConsult: () => void;
  scrollTo: (id: string) => void;
  onQuickExit: () => void;
}

export default function HomeHeader({ menuOpen, setMenuOpen, onConsult, scrollTo, onQuickExit }: Props) {
  return (
    <>
      {/* Quick Exit Button */}
      <button
        onClick={onQuickExit}
        className="fixed top-4 right-4 z-[999] flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(135deg, #e74c3c, #c0392b)", color: "#fff", boxShadow: "0 4px 20px rgba(231,76,60,0.4)" }}
        title="Быстро закрыть сайт"
      >
        <Icon name="X" size={14} />
        <span className="hidden sm:inline">Быстрый выход</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "var(--header-bg)", borderColor: "var(--border-soft)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
              <Icon name="Shield" size={18} color="white" />
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ color: "var(--text-primary)" }}>Безопасная среда</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Кризисный центр</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onConsult}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{ background: "var(--gradient-brand)", color: "#fff" }}
            >
              <Icon name="Calendar" size={14} />
              Записаться
            </button>
            <button className="md:hidden p-2 rounded-lg" style={{ color: "var(--text-primary)" }} onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3" style={{ background: "var(--header-bg)", borderColor: "var(--border-soft)" }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left py-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => { onConsult(); setMenuOpen(false); }} className="py-2.5 rounded-full text-sm font-semibold mt-1" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
              Записаться на консультацию
            </button>
          </div>
        )}
      </header>
    </>
  );
}
