import Icon from "@/components/ui/icon";

interface AnonForm {
  message: string;
  contact: string;
}

interface ConsultForm {
  name: string;
  phone: string;
  date: string;
  service: string;
}

interface Props {
  anonOpen: boolean;
  setAnonOpen: (v: boolean) => void;
  anonForm: AnonForm;
  setAnonForm: (v: AnonForm) => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;

  consultOpen: boolean;
  setConsultOpen: (v: boolean) => void;
  consultForm: ConsultForm;
  setConsultForm: (v: ConsultForm) => void;
  consultSubmitted: boolean;
  setConsultSubmitted: (v: boolean) => void;

  chatOpen: boolean;
  setChatOpen: (v: boolean) => void;
}

export default function HomeModals({
  anonOpen, setAnonOpen, anonForm, setAnonForm, submitted, setSubmitted,
  consultOpen, setConsultOpen, consultForm, setConsultForm, consultSubmitted, setConsultSubmitted,
  chatOpen, setChatOpen,
}: Props) {
  return (
    <>
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
    </>
  );
}
