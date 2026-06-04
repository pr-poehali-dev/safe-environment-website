import { useState } from "react";
import Icon from "@/components/ui/icon";

const articles = [
  "Как восстановиться после насилия",
  "Почему сложно уйти от агрессора",
  "Как помочь ребенку после травмы",
  "Что делать при панической атаке",
  "Как вернуть чувство безопасности",
];

const faqs = [
  { q: "Сколько длится консультация?", a: "Консультация длится 50–60 минут." },
  { q: "Можно ли обратиться анонимно?", a: "Да, мы принимаем обращения без указания имени и личных данных." },
  { q: "Будет ли информация передана третьим лицам?", a: "Нет. Все обращения строго конфиденциальны." },
  { q: "Можно ли обратиться вместе с ребенком?", a: "Да, мы работаем с детьми совместно с родителями или опекунами." },
];

const methods = [
  "Кризисное консультирование",
  "Когнитивно-поведенческие техники",
  "Арт-терапия",
  "Техники эмоциональной стабилизации",
  "Методы работы с травмой",
  "Ресурсные практики",
];

interface Props {
  onBack: () => void;
  onAnon: () => void;
  onConsult: () => void;
}

export default function Psychology({ onBack, onAnon, onConsult }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--bg-page)" }}>

      {/* Quick Exit */}
      <button
        onClick={handleQuickExit}
        className="fixed top-4 right-4 z-[999] flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-105"
        style={{ background: "linear-gradient(135deg, #e74c3c, #c0392b)", color: "#fff", boxShadow: "0 4px 20px rgba(231,76,60,0.4)" }}
      >
        <Icon name="X" size={14} />
        <span className="hidden sm:inline">Быстрый выход</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "var(--header-bg)", borderColor: "var(--border-soft)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            <Icon name="ArrowLeft" size={18} />
            <span className="hidden sm:inline">Назад</span>
          </button>

          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
              <Icon name="Heart" size={16} color="white" />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>Безопасная среда</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Психологическая помощь</div>
            </div>
          </div>

          <button
            onClick={onConsult}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: "var(--gradient-brand)", color: "#fff" }}
          >
            <Icon name="Calendar" size={14} />
            Записаться
          </button>
        </div>
      </header>

      {/* Hero block */}
      <section className="relative overflow-hidden pt-14 pb-16 px-4">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "var(--blob-1)" }} />
        <div className="absolute top-20 -right-16 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "var(--blob-2)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>
            <Icon name="Heart" size={13} />
            Психологическая помощь
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Вы не обязаны справляться{" "}
            <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              в одиночку
            </span>
          </h1>

          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Если вы столкнулись с домашним насилием, постоянным страхом, тревогой, эмоциональным давлением или переживаете последствия травмирующих событий — специалисты кризисного центра готовы помочь.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button onClick={onConsult}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 20px rgba(149,76,173,0.35)" }}>
              <Icon name="Phone" size={15} />
              Получить консультацию
            </button>
            <button onClick={onConsult}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 border"
              style={{ borderColor: "var(--border-brand)", color: "var(--color-brand)", background: "var(--btn-outline-bg)" }}>
              <Icon name="Calendar" size={15} />
              Записаться на приём
            </button>
            <button onClick={onAnon}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--btn-soft)", color: "var(--text-primary)" }}>
              <Icon name="Lock" size={15} />
              Анонимное обращение
            </button>
          </div>
        </div>
      </section>

      {/* When to seek help */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
            Когда стоит обратиться за помощью?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Постоянный страх или тревога",
              "Жизнь в состоянии напряжения",
              "Физическое, психологическое или сексуализированное насилие",
              "Беспомощность и потеря опоры",
              "Чувство вины или стыда",
              "Угрозы и преследование",
              "Развод или расставание после насилия",
              "Изменения в поведении ребёнка",
              "Эмоциональное выгорание",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="Check" size={11} style={{ color: "var(--color-brand)" }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: "var(--text-primary)" }}>Направления работы</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">

            {/* Individual consultations */}
            <div className="p-7 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="User" size={20} style={{ color: "var(--color-brand)" }} />
                </div>
                <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>Индивидуальные консультации</h3>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                Личные встречи с психологом в безопасной и конфиденциальной обстановке.
              </p>
              <div className="space-y-2">
                {["Кризисное консультирование", "Работа с тревогой и страхами", "Восстановление самооценки", "Помощь в принятии решений", "Поддержка после травматических событий", "Сопровождение в выходе из кризиса"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)", flexShrink: 0 }} />
                    {i}
                  </div>
                ))}
              </div>
              <button onClick={onConsult}
                className="mt-5 w-full py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                Записаться на консультацию
              </button>
            </div>

            {/* Emergency psychological help */}
            <div className="p-7 rounded-2xl" style={{ background: "#fff0f6", border: "1px solid rgba(219,39,119,0.15)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(219,39,119,0.1)" }}>
                  <Icon name="AlertCircle" size={20} style={{ color: "#db2777" }} />
                </div>
                <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>Экстренная помощь</h3>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                Если ситуация требует немедленной поддержки.
              </p>
              <div className="space-y-2">
                {["Срочная консультация", "Эмоциональная стабилизация", "Помощь при панических атаках", "Помощь при сильном стрессе", "Составление плана безопасности"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Icon name="ChevronRight" size={13} style={{ color: "#db2777", flexShrink: 0 }} />
                    {i}
                  </div>
                ))}
              </div>
              <button onClick={onConsult}
                className="mt-5 w-full py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #ec4899, #db2777)", color: "#fff" }}>
                Мне нужна помощь сейчас
              </button>
            </div>

            {/* Children */}
            <div className="p-7 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="Baby" size={20} style={{ color: "var(--color-brand)" }} fallback="Smile" />
                </div>
                <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>Помощь детям</h3>
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                Отдельное направление для детей, переживших насилие или ставших свидетелями конфликтов.
              </p>
              <div className="space-y-2">
                {["Диагностика эмоционального состояния", "Консультации детского психолога", "Игровая терапия", "Арт-терапия", "Навыки безопасного поведения", "Поддержка в период адаптации"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)", flexShrink: 0 }} />
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Teens + Family + Groups */}
            <div className="space-y-5">
              <div className="p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                    <Icon name="Users" size={17} style={{ color: "var(--color-brand)" }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>Поддержка подростков</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Буллинг", "Отношения в семье", "Тревожность", "Самооценка", "Последствия насилия"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--badge-bg)", color: "var(--badge-text)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                    <Icon name="Home" size={17} style={{ color: "var(--color-brand)" }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>Семейное консультирование</h3>
                </div>
                <div className="space-y-1.5">
                  {["Восстановление коммуникации", "Разрешение конфликтов", "Безопасная среда для детей"].map((i) => (
                    <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <Icon name="Check" size={11} style={{ color: "var(--color-brand)" }} />{i}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--badge-bg)" }}>
                    <Icon name="HeartHandshake" size={17} style={{ color: "var(--color-brand)" }} fallback="Heart" />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>Группы поддержки</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Встречи для женщин, переживших насилие. Поддержка, обмен опытом, ощущение, что вы не одни.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Методы работы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {methods.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
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

      {/* Articles */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Полезные материалы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, i) => (
              <div key={i} className="group p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="FileText" size={17} style={{ color: "var(--color-brand)" }} />
                </div>
                <p className="text-sm font-medium leading-snug mb-3" style={{ color: "var(--text-primary)" }}>{article}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--color-brand)" }}>
                  Читать <Icon name="ArrowRight" size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 text-center" style={{ background: "var(--gradient-brand)" }}>
            <Icon name="Heart" size={36} color="white" />
            <h2 className="text-xl font-bold text-white mt-4 mb-3">Сделайте первый шаг</h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">
              Обратиться за помощью — это смелость. Мы здесь, чтобы поддержать вас.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={onConsult}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "white", color: "var(--color-brand)" }}>
                Записаться на консультацию
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
