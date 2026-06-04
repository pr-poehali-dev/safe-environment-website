import { useState } from "react";
import Psychology from "./Psychology";
import Legal from "./Legal";
import ChildSafety from "./ChildSafety";
import HomeHeader from "@/components/home/HomeHeader";
import HomeMain from "@/components/home/HomeMain";
import HomeModals from "@/components/home/HomeModals";

type Page = "home" | "psychology" | "legal" | "child";

export default function Index() {
  const [page, setPage] = useState<Page>("home");
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

  const openAnon = () => setAnonOpen(true);
  const openConsult = () => setConsultOpen(true);

  const navigateToSubPage = (subPage: Page) => {
    setPage(subPage);
    window.scrollTo(0, 0);
  };

  const backToHome = (openModal?: "anon" | "consult") => {
    setPage("home");
    if (openModal === "anon") setTimeout(() => setAnonOpen(true), 100);
    if (openModal === "consult") setTimeout(() => setConsultOpen(true), 100);
  };

  const handleServiceClick = (title: string) => {
    if (title === "Психологическая помощь") navigateToSubPage("psychology");
    if (title === "Юридическая помощь") navigateToSubPage("legal");
    if (title === "Детская безопасность") navigateToSubPage("child");
  };

  if (page === "psychology") {
    return (
      <Psychology
        onBack={() => backToHome()}
        onAnon={() => backToHome("anon")}
        onConsult={() => backToHome("consult")}
      />
    );
  }

  if (page === "legal") {
    return (
      <Legal
        onBack={() => backToHome()}
        onAnon={() => backToHome("anon")}
        onConsult={() => backToHome("consult")}
      />
    );
  }

  if (page === "child") {
    return (
      <ChildSafety
        onBack={() => backToHome()}
        onAnon={() => backToHome("anon")}
        onConsult={() => backToHome("consult")}
      />
    );
  }

  return (
    <div className="min-h-screen font-golos" style={{ background: "var(--bg-page)" }}>
      <HomeHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onConsult={openConsult}
        scrollTo={scrollTo}
        onQuickExit={handleQuickExit}
      />

      <HomeMain
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        onConsult={openConsult}
        onAnon={openAnon}
        onChat={() => setChatOpen(true)}
        scrollTo={scrollTo}
        onServiceClick={handleServiceClick}
      />

      <HomeModals
        anonOpen={anonOpen}
        setAnonOpen={setAnonOpen}
        anonForm={anonForm}
        setAnonForm={setAnonForm}
        submitted={submitted}
        setSubmitted={setSubmitted}
        consultOpen={consultOpen}
        setConsultOpen={setConsultOpen}
        consultForm={consultForm}
        setConsultForm={setConsultForm}
        consultSubmitted={consultSubmitted}
        setConsultSubmitted={setConsultSubmitted}
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
      />
    </div>
  );
}
