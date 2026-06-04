import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Props {
  onBack: () => void;
  onAnon: () => void;
  onConsult: () => void;
}

const cases = [
  "Домашнее насилие",
  "Угрозы жизни и здоровью",
  "Преследование и сталкинг",
  "Развод",
  "Раздел имущества",
  "Взыскание алиментов",
  "Определение места жительства ребёнка",
  "Ограничение общения второго родителя",
  "Защита прав ребёнка",
  "Восстановление документов",
  "Оформление льгот и социальных выплат",
];

const faqs = [
  { q: "Можно ли получить консультацию анонимно?", a: "Да, мы принимаем обращения без указания имени и личных данных." },
  { q: "Нужно ли сразу обращаться в суд?", a: "Не всегда. Каждая ситуация рассматривается индивидуально — мы поможем выбрать наилучший путь." },
  { q: "Можно ли получить помощь, если нет официального брака?", a: "Да, мы помогаем вне зависимости от официального статуса отношений." },
  { q: "Можно ли обратиться за помощью по вопросам ребёнка?", a: "Да, защита прав детей — одно из ключевых направлений нашей работы." },
];

const pamphlets = [
  "Как правильно написать заявление",
  "Что делать после угроз",
  "Какие документы подготовить для развода",
  "Как взыскать алименты",
  "Как защитить права ребёнка",
];

const documents = [
  "Заявления",
  "Обращения",
  "Жалобы",
  "Ходатайства",
  "Запросы",
  "Исковые заявления",
];

type TabKey = "violence" | "divorce" | "alimony" | "child" | "social" | "court";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "violence", label: "Насилие", icon: "ShieldAlert" },
  { key: "divorce", label: "Развод", icon: "FileText" },
  { key: "alimony", label: "Алименты", icon: "Banknote" },
  { key: "child", label: "Дети", icon: "Baby" },
  { key: "social", label: "Соцподдержка", icon: "HandHeart" },
  { key: "court", label: "Суд", icon: "Scale" },
];

const tabContent: Record<TabKey, React.ReactNode> = {
  violence: (
    <div className="grid md:grid-cols-3 gap-5">
      <div className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
        <h4 className="font-bold text-sm mb-3" style={{ color: "var(--text-primary)" }}>Если вам угрожает опасность</h4>
        <div className="space-y-2">
          {["Обеспечить безопасность себе и детям", "Обратиться в экстренные службы", "Зафиксировать повреждения", "Сохранить доказательства", "Подать заявление", "Получить юридическую консультацию"].map((s, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5" style={{ background: "var(--gradient-brand)", fontSize: "10px" }}>{i + 1}</span>
              <span className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
        <h4 className="font-bold text-sm mb-3" style={{ color: "var(--text-primary)" }}>Какие доказательства сохранять</h4>
        <div className="space-y-2">
          {["Фотографии", "Медицинские документы", "Переписки", "Аудиозаписи", "Показания свидетелей", "Видеозаписи"].map((i) => (
            <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <Icon name="Check" size={13} style={{ color: "var(--color-brand)" }} />{i}
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-2xl" style={{ background: "#fff7ed", border: "1px solid rgba(234,88,12,0.15)" }}>
        <h4 className="font-bold text-sm mb-3" style={{ color: "#c2410c" }}>Частые ошибки</h4>
        <div className="space-y-2">
          {["Удаление переписок", "Отказ от медицинского освидетельствования", "Устные обращения без письменной фиксации"].map((i) => (
            <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#9a3412" }}>
              <Icon name="AlertCircle" size={14} style={{ color: "#ea580c", flexShrink: 0, marginTop: 2 }} />{i}
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  divorce: (
    <div className="grid md:grid-cols-3 gap-5">
      {[
        {
          title: "Расторжение брака", items: ["Порядок действий", "Необходимые документы", "Сроки процедуры"],
        },
        {
          title: "Раздел имущества", items: ["Что считается совместным имуществом", "Как происходит раздел", "Что делать при сокрытии имущества"],
        },
        {
          title: "Брачный договор", items: ["Права сторон", "Особенности оформления"],
        },
      ].map((block) => (
        <div key={block.title} className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <h4 className="font-bold text-sm mb-3" style={{ color: "var(--text-primary)" }}>{block.title}</h4>
          <div className="space-y-2">
            {block.items.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)" }} />{i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  alimony: (
    <div className="grid md:grid-cols-3 gap-5">
      {[
        { title: "Взыскание алиментов", items: ["Порядок обращения", "Необходимые документы", "Судебный порядок"] },
        { title: "Алименты на ребёнка", items: ["Размер выплат", "Способы взыскания"] },
        { title: "Алименты на содержание супруги", items: ["Когда возникает право на получение"] },
      ].map((block) => (
        <div key={block.title} className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <h4 className="font-bold text-sm mb-3" style={{ color: "var(--text-primary)" }}>{block.title}</h4>
          <div className="space-y-2">
            {block.items.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)" }} />{i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  child: (
    <div className="grid md:grid-cols-3 gap-5">
      {[
        { title: "Место жительства ребёнка", items: ["Какие факторы учитываются"] },
        { title: "Порядок общения с ребёнком", items: ["Права родителей", "Защита интересов ребёнка"] },
        { title: "Защита от насилия", items: ["Алгоритм действий", "Куда обращаться", "Какие документы собирать"] },
      ].map((block) => (
        <div key={block.title} className="p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <h4 className="font-bold text-sm mb-3" style={{ color: "var(--text-primary)" }}>{block.title}</h4>
          <div className="space-y-2">
            {block.items.map((i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Icon name="ChevronRight" size={13} style={{ color: "var(--color-brand)" }} />{i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  social: (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {["Пособия", "Социальные выплаты", "Меры государственной поддержки", "Льготы для семей с детьми", "Программы помощи"].map((item) => (
        <div key={item} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--badge-bg)" }}>
            <Icon name="BadgeCheck" size={16} style={{ color: "var(--color-brand)" }} />
          </div>
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item}</span>
        </div>
      ))}
    </div>
  ),
  court: (
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { q: "Как проходит судебный процесс", icon: "Gavel" },
        { q: "Как подготовиться к заседанию", icon: "ClipboardList" },
        { q: "Какие документы понадобятся", icon: "FileText" },
        { q: "Как вести себя в суде", icon: "MessageSquare" },
      ].map((item) => (
        <div key={item.q} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--badge-bg)" }}>
            <Icon name={item.icon} size={18} style={{ color: "var(--color-brand)" }} fallback="FileText" />
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.q}</span>
        </div>
      ))}
    </div>
  ),
};

export default function Legal({ onBack, onAnon, onConsult }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("violence");
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
              <Icon name="Scale" size={15} color="white" />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight" style={{ color: "var(--text-primary)" }}>Безопасная среда</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Юридическая помощь</div>
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
            <Icon name="Scale" size={13} />
            Юридическая помощь
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            Защитить свои права{" "}
            <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              возможно
            </span>
          </h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Если вы столкнулись с домашним насилием, угрозами, преследованием, ограничением свободы или нарушением ваших прав — специалисты центра помогут разобраться в ситуации и выбрать законный способ защиты.
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
              <Icon name="MessageSquare" size={15} />
              Задать вопрос юристу
            </button>
            <button onClick={onAnon}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--btn-soft)", color: "var(--text-primary)" }}>
              <Icon name="Lock" size={15} />
              Экстренная помощь
            </button>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>В каких случаях мы можем помочь</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cases.map((item) => (
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

      {/* Tabs section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Направления правовой помощи</h2>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={activeTab === tab.key
                  ? { background: "var(--gradient-brand)", color: "#fff", boxShadow: "0 4px 14px rgba(149,76,173,0.3)" }
                  : { background: "var(--btn-soft)", color: "var(--text-secondary)" }
                }
              >
                <Icon name={tab.icon} size={14} fallback="Circle" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="animate-fade-in" key={activeTab}>
            {tabContent[activeTab]}
          </div>
        </div>
      </section>

      {/* Documents + Court — two columns */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Подготовка документов</h3>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>Наши специалисты помогают подготовить:</p>
            <div className="grid grid-cols-2 gap-3">
              {documents.map((d) => (
                <div key={d} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                  <Icon name="FileText" size={15} style={{ color: "var(--color-brand)", flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>Судебное сопровождение</h3>
            <div className="space-y-3">
              {["Как проходит судебный процесс", "Как подготовиться к заседанию", "Какие документы понадобятся", "Как вести себя в суде"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    <span className="text-white font-bold" style={{ fontSize: "10px" }}>{i + 1}</span>
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item}</span>
                </div>
              ))}
            </div>
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

      {/* Pamphlets */}
      <section className="py-14 px-4" style={{ background: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>Полезные материалы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pamphlets.map((item, i) => (
              <div key={i} className="group p-5 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-soft)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "var(--badge-bg)" }}>
                  <Icon name="BookOpen" size={16} style={{ color: "var(--color-brand)" }} />
                </div>
                <p className="text-sm font-medium leading-snug mb-3" style={{ color: "var(--text-primary)" }}>{item}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--color-brand)" }}>
                  Открыть памятку <Icon name="ArrowRight" size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 text-center" style={{ background: "var(--gradient-brand)" }}>
            <Icon name="Scale" size={36} color="white" />
            <h2 className="text-xl font-bold text-white mt-4 mb-3">Получите юридическую консультацию</h2>
            <p className="text-white/80 text-sm mb-6 max-w-sm mx-auto">Бесплатно, конфиденциально, без формальностей. Мы на вашей стороне.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={onConsult}
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "white", color: "var(--color-brand)" }}>
                Записаться к юристу
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
