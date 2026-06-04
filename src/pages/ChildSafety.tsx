import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Props {
  onBack: () => void;
  onAnon: () => void;
  onConsult: () => void;
}

const signs = [
  { category: "Физические признаки", icon: "Activity", items: ["Необъяснимые синяки, ссадины, ожоги", "Следы укусов или щипков", "Травмы, не соответствующие объяснениям", "Частые жалобы на боли без видимой причины", "Неухоженный вид, нехватка одежды по сезону"] },
  { category: "Поведенческие признаки", icon: "Brain", items: ["Резкое изменение поведения", "Замкнутость, избегание контактов", "Агрессия или, наоборот, чрезмерная покорность", "Страх перед определёнными людьми или местами", "Регрессия в поведении (энурез, сосание пальца)"] },
  { category: "Эмоциональные признаки", icon: "Heart", items: ["Постоянная тревожность и страхи", "Ночные кошмары, нарушения сна", "Низкая самооценка, самообвинение", "Апатия, потеря интереса к играм", "Суицидальные высказывания или мысли"] },
  { category: "Признаки в учёбе", icon: "BookOpen", items: ["Резкое снижение успеваемости", "Нежелание идти домой", "Частые опоздания или пропуски", "Отстранённость на уроках", "Конфликты с одноклассниками"] },
];

const parentTips = [
  { icon: "MessageCircle", title: "Разговаривайте с ребёнком", desc: "Создайте атмосферу, в которой ребёнок не боится рассказать о проблемах. Слушайте без осуждения." },
  { icon: "Shield", title: "Объясните, что можно доверять взрослым", desc: "Ребёнок должен знать, к кому обратиться за помощью — учитель, врач, родственник." },
  { icon: "Eye", title: "Замечайте изменения", desc: "Обращайте внимание на смену настроения, поведения, нежелание идти в определённые места." },
  { icon: "Lock", title: "Учите правилам безопасности", desc: "Расскажите о личных границах, о том, что можно говорить «нет» взрослым в ситуациях дискомфорта." },
  { icon: "Phone", title: "Знайте, куда обратиться", desc: "Запишите номера экстренных служб и кризисного центра. Не откладывайте обращение за помощью." },
  { icon: "Users", title: "Поддерживайте связь со школой", desc: "Педагоги замечают изменения в поведении ребёнка. Регулярно общайтесь с классным руководителем." },
];

const teacherMaterials = [
  { title: "Алгоритм действий при выявлении признаков насилия", icon: "ClipboardList" },
  { title: "Как провести беседу с ребёнком о безопасности", icon: "MessageSquare" },
  { title: "Признаки насилия: методическое пособие", icon: "FileText" },
  { title: "Взаимодействие с органами опеки", icon: "Building2" },
  { title: "Профилактическая программа для класса", icon: "GraduationCap" },
  { title: "Как сообщить о подозрении в насилии", icon: "AlertTriangle" },
];

const actionSteps = [
  { num: "1", title: "Сохраняйте спокойствие", desc: "Не показывайте панику — это важно для ребёнка." },
  { num: "2", title: "Выслушайте ребёнка", desc: "Не перебивайте, не задавайте наводящих вопросов, верьте рассказанному." },
  { num: "3", title: "Обеспечьте безопасность", desc: "Устраните угрозу или уберите ребёнка из опасной ситуации." },
  { num: "4", title: "Зафиксируйте повреждения", desc: "Обратитесь к врачу, получите медицинское заключение." },
  { num: "5", title: "Сообщите в органы", desc: "Обратитесь в полицию, органы опеки или позвоните на горячую линию." },
  { num: "6", title: "Получите психологическую помощь", desc: "Обратитесь к специалисту — ребёнку и вам нужна поддержка." },
];

const faqs = [
  { q: "Что делать, если ребёнок рассказал о насилии?", a: "Прежде всего — выслушайте спокойно и скажите, что верите ему. Не оставляйте ситуацию без внимания: обратитесь к специалистам центра или в органы опеки." },
  { q: "Как объяснить ребёнку, что такое «плохое прикосновение»?", a: "Используйте доступный язык: расскажите о личных границах тела, о том, что никто не имеет права причинять дискомфорт, и что ребёнок всегда может сказать «нет»." },
  { q: "В каком возрасте начинать разговор о безопасности?", a: "С 3–4 лет — в игровой форме. С 7–8 лет — более конкретно. Разговор нужно повторять регулярно, адаптируя под возраст." },
  { q: "Как не навредить ребёнку при разговоре?", a: "Не задавайте наводящих вопросов, не выражайте сомнений в словах ребёнка, не обещайте того, что не сможете выполнить. Лучше обратитесь к специалисту." },
];

type TabKey = "signs" | "parents" | "teachers" | "algorithm";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "signs", label: "Признаки насилия", icon: "AlertTriangle" },
  { key: "parents", label: "Родителям", icon: "Heart" },
  { key: "teachers", label: "Педагогам", icon: "GraduationCap" },
  { key: "algorithm", label: "Алгоритм действий", icon: "ClipboardList" },
];

export default function ChildSafety({ onBack, onAnon, onConsult }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("signs");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--bg-page)" }}>

      {/* Quick Exit */}
      <button onClick={handleQuickExit}
        className="fixed top-4 right-4 z-[999] flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all hover:scale-105"
        style={{ background: "linear-gradient(135deg, #e74c3c, #c0392b)", color: "#fff", boxShadow: "0 4px 20px rgba(231,76,60,0.4)" }}>
        <Icon name="X" size={14} />
        <span className="hidden sm:inline">Быстрый выход</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "var(--header-bg)", borderColor: "var(--border-soft)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
            <Icon name="ArrowLeft" size={18} />
            <span className="hidden sm:inline">Назад</span>
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
              <Icon name="Shield" size={15} color="white" />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>Безопасная среда</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Детская безопасность</div>
            </div>
          </div>
          <button onClick={onConsult}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "var(--gradient-brand)", color: "#fff" }}>
            <Icon name="Calendar" size={14} />
            Записаться
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 px-4">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "var(--blob-1)" }} />
        <div className="absolute top-20 -right-16 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "var(--blob-2)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>
            <Icon name="Shield" size={13} />
            Детская безопасность
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Каждый ребёнок заслуживает{" "}
            <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              быть в безопасности
            </span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Мы помогаем родителям, педагогам и специалистам распознавать признаки насилия, правильно реагировать и защищать детей. Вся информация — бесплатно и конфиденциально.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button onClick={onConsult}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 20px rgba(149,76,173,0.35)" }}>
              <Icon name="Phone" size={15} />
              Получить консультацию
            </button>
            <button onClick={onAnon}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 border"
              style={{ borderColor: "var(--border-brand)", color: "var(--color-brand)", background: "var(--btn-outline-bg)" }}>
              <Icon name="Lock" size={15} />
              Анонимное обращение
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              { icon: "Clock", label: "Помощь 24/7" },
              { icon: "Lock", label: "Конфиденциально" },
              { icon: "BadgeCheck", label: "Бесплатно" },
              { icon: "UserCheck", label: "Детский психолог" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                <Icon name={s.icon} size={13} />
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Информация и материалы</h2>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={activeTab === tab.key
                  ? { background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 14px rgba(149,76,173,0.3)" }
                  : { background: "var(--card-bg)", color: "var(--text-secondary)", border: "1px solid var(--border-soft)" }
                }>
                <Icon name={tab.icon} size={14} fallback="Circle" />
                {tab.label}
              </button>
            ))}
          </div>

          <div key={activeTab} className="animate-fade-in">
            {activeTab === "signs" && (
              <div className="grid sm:grid-cols-2 gap-5">
                {signs.map((group) => (
                  <div key={group.category} className="p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                        <Icon name={group.icon} size={17} style={{ color: "var(--color-brand)" }} fallback="Circle" />
                      </div>
                      <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{group.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {group.items.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)", flexShrink: 0, marginTop: 2 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "parents" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {parentTips.map((tip) => (
                  <div key={tip.title} className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--badge-bg)" }}>
                      <Icon name={tip.icon} size={18} style={{ color: "var(--color-brand)" }} fallback="Circle" />
                    </div>
                    <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{tip.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{tip.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "teachers" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teacherMaterials.map((m, i) => (
                  <div key={i} className="group p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--badge-bg)" }}>
                      <Icon name={m.icon} size={18} style={{ color: "var(--color-brand)" }} fallback="FileText" />
                    </div>
                    <p className="text-sm font-medium leading-snug mb-3" style={{ color: "var(--text-primary)" }}>{m.title}</p>
                    <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--color-brand)" }}>
                      Скачать <Icon name="ArrowRight" size={11} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "algorithm" && (
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="text-center mb-6">
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Что делать, если вы подозреваете или обнаружили факт насилия над ребёнком</p>
                </div>
                {actionSteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-6 p-5 rounded-2xl text-center" style={{ background: "#fff0f6", border: "1px solid rgba(219,39,119,0.15)" }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: "#be185d" }}>Если ребёнок в опасности прямо сейчас</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href="tel:112" className="px-5 py-2 rounded-full text-sm font-bold" style={{ background: "#dc2626", color: "#fff" }}>📞 112</a>
                    <a href="tel:8-800-2000-122" className="px-5 py-2 rounded-full text-sm font-bold" style={{ background: "#9333ea", color: "#fff" }}>8-800-2000-122</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Psychological help for children */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "var(--text-primary)" }}>Психологическая помощь детям</h2>
          <p className="text-sm text-center mb-10 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Наши специалисты работают с детьми, пережившими насилие или ставшими свидетелями конфликтов
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "Smile", title: "Диагностика эмоционального состояния", desc: "Оценка психологического состояния ребёнка с помощью специальных методик." },
              { icon: "Palette", title: "Арт-терапия", desc: "Работа с травмой через творчество — рисование, лепку, игры с песком." },
              { icon: "Gamepad2", title: "Игровая терапия", desc: "Безопасное пространство для выражения чувств через игру под руководством психолога." },
              { icon: "Star", title: "Навыки безопасного поведения", desc: "Обучение ребёнка, как распознавать опасные ситуации и говорить «нет»." },
              { icon: "TrendingUp", title: "Восстановление самооценки", desc: "Работа с детскими страхами, тревожностью и негативными установками." },
              { icon: "Heart", title: "Поддержка в адаптации", desc: "Помощь ребёнку в период привыкания к новым условиям жизни." },
            ].map((s) => (
              <div key={s.title} className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--badge-bg)" }}>
                  <Icon name={s.icon} size={18} style={{ color: "var(--color-brand)" }} fallback="Circle" />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Часто задаваемые вопросы</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-sm pr-4" style={{ color: "var(--text-primary)" }}>{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed animate-fade-in" style={{ color: "var(--text-secondary)" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 text-center" style={{ background: "var(--gradient-brand)" }}>
            <Icon name="Shield" size={36} color="white" />
            <h2 className="text-xl font-bold text-white mt-4 mb-3">Защитить ребёнка — это первый шаг</h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">Если вы подозреваете, что ребёнок в опасности — не ждите. Свяжитесь с нами прямо сейчас.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={onConsult}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "white", color: "var(--color-brand)" }}>
                Записаться к специалисту
              </button>
              <button onClick={onAnon}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 border border-white/40"
                style={{ color: "white" }}>
                Анонимное обращение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t text-center" style={{ borderColor: "var(--border-soft)" }}>
        <button onClick={onBack} className="flex items-center gap-2 mx-auto mb-4 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "var(--color-brand)" }}>
          <Icon name="ArrowLeft" size={15} />
          Вернуться на главную
        </button>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>© 2024 Кризисный центр «Безопасная среда». Все услуги бесплатны и конфиденциальны.</p>
      </footer>
    </div>
  );
}
