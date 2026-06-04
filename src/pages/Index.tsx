import { useState } from "react";
import Icon from "@/components/ui/icon";
import Psychology from "./Psychology";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/21457f32-ba4e-4f06-a1c9-c30437d21dd3/files/30eb23bb-f49a-4daf-ac9b-98e0ec9fddc1.jpg";
const HANDS_IMAGE = "https://cdn.poehali.dev/projects/21457f32-ba4e-4f06-a1c9-c30437d21dd3/files/f431f986-6130-43ac-864e-e47bf132e0eb.jpg";
const HOME_IMAGE = "https://cdn.poehali.dev/projects/21457f32-ba4e-4f06-a1c9-c30437d21dd3/files/c3f68b71-2a30-40d6-945e-4c073782a01b.jpg";

const navLinks = [
  { label: "Главная", href: "home" },
  { label: "Помощь", href: "services" },
  { label: "Экстренно", href: "emergency" },
  { label: "О центре", href: "about" },
  { label: "Контакты", href: "contacts" },
];

const services = [
  { icon: "Heart", title: "Психологическая помощь", desc: "Индивидуальные консультации, кризисная поддержка, помощь детям и семейное консультирование. Группы поддержки." },
  { icon: "Scale", title: "Юридическая помощь", desc: "Консультации по вопросам домашнего насилия, защита прав, подготовка документов, сопровождение в госорганы." },
  { icon: "Shield", title: "Детская безопасность", desc: "Признаки насилия, рекомендации родителям, памятки для педагогов и специалистов, методические материалы." },
  { icon: "Users", title: "Социальная помощь", desc: "Помощь в восстановлении документов, поиск жилья, трудоустройство, социальная реабилитация." },
  { icon: "BookOpen", title: "Профилактика насилия", desc: "Статьи, памятки, образовательные программы. Проведение лекций и семинаров для специалистов." },
  { icon: "MessageCircle", title: "Анонимная поддержка", desc: "Онлайн-чат со специалистом. Полная конфиденциальность. Помощь без раскрытия личных данных." },
];

const steps = [
  { num: "1", title: "Позвоните на горячую линию", desc: "8-800-2000-122 — бесплатно, круглосуточно" },
  { num: "2", title: "Покиньте опасное место", desc: "Уйдите к соседям, в магазин или на улицу" },
  { num: "3", title: "Вызовите полицию", desc: "102 или 112 — при угрозе жизни" },
  { num: "4", title: "Обратитесь в центр", desc: "Мы поможем с укрытием, юридической и психологической помощью" },
];

const team = [
  { name: "Анна Сергеевна", role: "Психолог, кризисный консультант", exp: "12 лет опыта" },
  { name: "Мария Ивановна", role: "Юрист по семейному праву", exp: "8 лет опыта" },
  { name: "Елена Владимировна", role: "Социальный работник", exp: "10 лет опыта" },
  { name: "Ольга Петровна", role: "Детский психолог", exp: "7 лет опыта" },
];

const faqs = [
  { q: "Обратиться анонимно — это возможно?", a: "Да, мы принимаем обращения без указания имени и личных данных. Ваша безопасность для нас приоритет." },
  { q: "Услуги платные?", a: "Все услуги центра абсолютно бесплатны. Мы работаем на благотворительной основе." },
  { q: "Что если я боюсь, что партнёр узнает?", a: "Используйте кнопку «Быстрый выход» вверху страницы. Все данные не сохраняются." },
  { q: "Принимаете ли вы детей без родителей?", a: "Да, мы работаем с детьми и подростками, в том числе в сопровождении педагогов или соцработников." },
];

export default function Index() {
  const [page, setPage] = useState<"home" | "psychology">("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [anonOpen, setAnonOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [anonForm, setAnonForm] = useState({ message: "", contact: "" });
  const [consultForm, setConsultForm] = useState({ name: "", phone: "", date: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (page === "psychology") {
    return (
      <Psychology
        onBack={() => setPage("home")}
        onAnon={() => { setPage("home"); setTimeout(() => setAnonOpen(true), 100); }}
        onConsult={() => { setPage("home"); setTimeout(() => setConsultOpen(true), 100); }}
      />
    );
  }

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--bg-page)" }}>

      {/* Quick Exit Button */}
      <button
        onClick={handleQuickExit}
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
              onClick={() => setConsultOpen(true)}
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
            <button onClick={() => { setConsultOpen(true); setMenuOpen(false); }} className="py-2.5 rounded-full text-sm font-semibold mt-1" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
              Записаться на консультацию
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-12 pb-24 px-4">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "var(--blob-1)" }} />
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "var(--blob-2)" }} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
              Горячая линия: 8-800-2000-122 — бесплатно 24/7
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
              Безопасная
              <br />
              <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                среда
              </span>
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Мы рядом, когда нужна помощь. Поддержка женщин и детей в трудной жизненной ситуации.
            </p>

            <p className="text-sm font-medium italic" style={{ color: "var(--text-muted)" }}>
              «Каждый человек заслуживает жить без страха.»
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("emergency")}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 20px rgba(149,76,173,0.35)" }}
              >
                <Icon name="Phone" size={16} />
                Получить помощь сейчас
              </button>
              <button
                onClick={() => setConsultOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 border"
                style={{ borderColor: "var(--border-brand)", color: "var(--color-brand)", background: "var(--btn-outline-bg)" }}
              >
                <Icon name="Calendar" size={16} />
                Записаться
              </button>
              <button
                onClick={() => scrollTo("donate")}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: "var(--btn-soft)", color: "var(--text-primary)" }}
              >
                <Icon name="Heart" size={16} />
                Поддержать центр
              </button>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              {[{ icon: "Lock", label: "Анонимно" }, { icon: "Clock", label: "Круглосуточно" }, { icon: "BadgeCheck", label: "Бесплатно" }].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  <Icon name={item.icon} size={14} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl opacity-50 blur-2xl scale-95" style={{ background: "var(--gradient-brand)" }} />
              <img src={HERO_IMAGE} alt="Мать и ребёнок в безопасном объятии" className="relative z-10 w-full rounded-3xl object-cover shadow-2xl" style={{ aspectRatio: "4/3" }} />
              <div className="absolute -bottom-4 -left-4 z-20 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3" style={{ background: "var(--card-bg)", backdropFilter: "blur(12px)", border: "1px solid var(--border-soft)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="Heart" size={18} style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>+847 семей</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>получили помощь в этом году</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan ribbon */}
      <div className="py-5 text-center text-sm font-semibold tracking-widest uppercase" style={{ background: "var(--ribbon-bg)", color: "var(--ribbon-text)" }}>
        Безопасность&nbsp;&nbsp;·&nbsp;&nbsp;Поддержка&nbsp;&nbsp;·&nbsp;&nbsp;Новая жизнь
      </div>

      {/* Emergency */}
      <section id="emergency" className="py-20 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4" style={{ background: "#fee2e2", color: "#dc2626" }}>
              <Icon name="AlertTriangle" size={14} />
              Экстренная помощь
            </div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Что делать при угрозе?</h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>Пошаговый алгоритм действий</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="text-3xl font-black mb-3" style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {step.num}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { num: "112", label: "Единая служба спасения", bg: "#fee2e2", fg: "#dc2626" },
              { num: "102", label: "Полиция", bg: "#dbeafe", fg: "#2563eb" },
              { num: "8-800-2000-122", label: "Горячая линия (бесплатно)", bg: "var(--badge-bg)", fg: "var(--color-brand)" },
            ].map((c) => (
              <a key={c.num} href={`tel:${c.num}`} className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-105" style={{ background: c.bg, textDecoration: "none" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: c.fg }}>
                  <Icon name="Phone" size={16} color="white" />
                </div>
                <div>
                  <div className="font-bold text-base leading-tight" style={{ color: c.fg }}>{c.num}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{c.label}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setAnonOpen(true)}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 20px rgba(149,76,173,0.35)" }}>
              <Icon name="Lock" size={16} />
              Анонимное обращение
            </button>
            <button onClick={() => setChatOpen(true)}
              className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 border"
              style={{ borderColor: "var(--border-brand)", color: "var(--color-brand)", background: "var(--btn-outline-bg)" }}>
              <Icon name="MessageCircle" size={16} />
              Онлайн-чат со специалистом
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Направления помощи</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Комплексная поддержка на каждом этапе — от первого обращения до полного восстановления
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}
                onClick={() => { if (s.title === "Психологическая помощь") setPage("psychology"); }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: "var(--badge-bg)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "var(--color-brand)" }} fallback="Circle" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--color-brand)" }}>
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl opacity-40 blur-2xl scale-90" style={{ background: "var(--gradient-brand)" }} />
            <img src={HOME_IMAGE} alt="Безопасный дом" className="relative z-10 w-full rounded-3xl object-cover shadow-2xl" style={{ aspectRatio: "4/3" }} />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>О центре</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Кризисный центр «Безопасная среда» создан для оказания комплексной помощи женщинам и детям, столкнувшимся с домашним насилием, эмоциональным давлением и кризисными жизненными ситуациями.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Наша команда специалистов — психологи, юристы, социальные работники — работает в режиме 24/7, обеспечивая полную конфиденциальность и бесплатную помощь.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[{ num: "5+", label: "лет работы" }, { num: "2400+", label: "семей помогли" }, { num: "12", label: "специалистов" }].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                  <div className="text-2xl font-black" style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Наша команда</h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>Опытные специалисты, которым можно доверять</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                  <Icon name="User" size={28} color="white" />
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{m.name}</h3>
                <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>{m.role}</p>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>{m.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
            <div className="p-10 sm:p-14 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Поддержать центр</h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Ваша помощь позволяет нам продолжать работу и помогать семьям. Каждый рубль имеет значение.
                </p>
                <div className="space-y-2">
                  {["Пожертвование", "Волонтерство", "Партнерство"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                      <Icon name="Check" size={14} color="white" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <img src={HANDS_IMAGE} alt="Забота и поддержка" className="w-full rounded-2xl object-cover" style={{ aspectRatio: "4/3" }} />
                <button className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105" style={{ background: "white", color: "var(--color-brand)" }}>
                  Сделать пожертвование
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Часто задаваемые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-sm pr-4" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Контакты</h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>Мы всегда готовы ответить на ваши вопросы</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Phone", label: "Горячая линия", value: "8-800-2000-122", sub: "Бесплатно, круглосуточно" },
              { icon: "Mail", label: "Email", value: "help@safe-env.ru", sub: "Ответим в течение часа" },
              { icon: "MapPin", label: "Адрес", value: "ул. Мира, 45", sub: "Пн–Пт, 9:00–20:00" },
              { icon: "MessageCircle", label: "Telegram", value: "@safeenv_help", sub: "Анонимно" },
            ].map((c) => (
              <div key={c.label} className="p-5 rounded-2xl text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "var(--badge-bg)" }}>
                  <Icon name={c.icon} size={20} style={{ color: "var(--color-brand)" }} />
                </div>
                <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{c.value}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t text-center" style={{ borderColor: "var(--border-soft)" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
            <Icon name="Shield" size={14} color="white" />
          </div>
          <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>Безопасная среда</span>
        </div>
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>Безопасность · Поддержка · Новая жизнь</p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>© 2024 Кризисный центр «Безопасная среда». Все услуги бесплатны и конфиденциальны.</p>
      </footer>

      {/* Anonymous Request Modal */}
      {anonOpen && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}>
          <div className="w-full max-w-md rounded-3xl p-8" style={{ background: "var(--card-bg)" }}>
            {!submitted ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                      <Icon name="Lock" size={18} style={{ color: "var(--color-brand)" }} />
                    </div>
                    <div>
                      <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>Анонимное обращение</h3>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>Данные не сохраняются</p>
                    </div>
                  </div>
                  <button onClick={() => setAnonOpen(false)} style={{ color: "var(--text-muted)" }}>
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Ваше сообщение *</label>
                    <textarea rows={4} placeholder="Опишите вашу ситуацию. Вы можете не указывать своё имя."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={anonForm.message} onChange={(e) => setAnonForm({ ...anonForm, message: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Способ связи (необязательно)</label>
                    <input type="text" placeholder="Telegram, email или телефон"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={anonForm.contact} onChange={(e) => setAnonForm({ ...anonForm, contact: e.target.value })} />
                  </div>
                  <button onClick={() => setSubmitted(true)} disabled={!anonForm.message.trim()}
                    className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 disabled:opacity-50"
                    style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                    Отправить анонимно
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="CheckCircle" size={32} style={{ color: "var(--color-brand)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>Обращение принято</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Специалист свяжется с вами в течение часа. Вы в безопасности.</p>
                <button onClick={() => { setAnonOpen(false); setSubmitted(false); setAnonForm({ message: "", contact: "" }); }}
                  className="px-6 py-2 rounded-full text-sm font-semibold" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {consultOpen && (
        <div className="fixed inset-0 z-[900] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}>
          <div className="w-full max-w-md rounded-3xl p-8" style={{ background: "var(--card-bg)" }}>
            {!consultSubmitted ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>Запись на консультацию</h3>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>Бесплатно и конфиденциально</p>
                  </div>
                  <button onClick={() => setConsultOpen(false)} style={{ color: "var(--text-muted)" }}>
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Ваше имя</label>
                    <input type="text" placeholder="Можно анонимно" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={consultForm.name} onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Телефон или Telegram *</label>
                    <input type="text" placeholder="+7 (___) ___-__-__ или @username" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={consultForm.phone} onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Вид помощи</label>
                    <select className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={consultForm.service} onChange={(e) => setConsultForm({ ...consultForm, service: e.target.value })}>
                      <option value="">Выберите...</option>
                      <option value="psych">Психологическая помощь</option>
                      <option value="legal">Юридическая консультация</option>
                      <option value="social">Социальная помощь</option>
                      <option value="child">Помощь ребёнку</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "var(--text-secondary)" }}>Удобная дата</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }}
                      value={consultForm.date} onChange={(e) => setConsultForm({ ...consultForm, date: e.target.value })} />
                  </div>
                  <button onClick={() => setConsultSubmitted(true)} disabled={!consultForm.phone.trim()}
                    className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 disabled:opacity-50"
                    style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                    Записаться
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="CheckCircle" size={32} style={{ color: "var(--color-brand)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>Заявка принята!</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Специалист свяжется с вами для подтверждения времени.</p>
                <button onClick={() => { setConsultOpen(false); setConsultSubmitted(false); setConsultForm({ name: "", phone: "", date: "", service: "" }); }}
                  className="px-6 py-2 rounded-full text-sm font-semibold" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-20 z-[800] w-80 rounded-3xl shadow-2xl overflow-hidden" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <div className="flex items-center justify-between p-4" style={{ background: "var(--gradient-brand)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="MessageCircle" size={16} color="white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Чат со специалистом</div>
                <div className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  Онлайн сейчас
                </div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)}>
              <Icon name="X" size={18} color="white" />
            </button>
          </div>
          <div className="p-4">
            <div className="rounded-xl p-3 mb-4 text-sm leading-relaxed" style={{ background: "var(--badge-bg)", color: "var(--text-secondary)" }}>
              Здравствуйте! Я специалист центра «Безопасная среда». Вы можете писать анонимно — мы здесь, чтобы помочь.
            </div>
            <input type="text" placeholder="Напишите сообщение..."
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none mb-3"
              style={{ background: "var(--input-bg)", border: "1px solid var(--border-soft)", color: "var(--text-primary)" }} />
            <button className="w-full py-2.5 rounded-full text-sm font-semibold" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
              Отправить
            </button>
          </div>
        </div>
      )}

      {/* Floating chat button */}
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-20 z-[800] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
          style={{ background: "var(--gradient-brand)" }}
          title="Онлайн-чат со специалистом">
          <Icon name="MessageCircle" size={24} color="white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white" />
        </button>
      )}
    </div>
  );
}