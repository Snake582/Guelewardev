import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "accueil", fr: "Accueil", en: "Home" },
  { id: "competences", fr: "Compétences", en: "Skills" },
  { id: "projets", fr: "Projets", en: "Projects" },
  { id: "experience", fr: "Expérience", en: "Experience" },
  { id: "contact", fr: "Contact", en: "Contact" },
];

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-ink-900/90 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-6xl mx-auto">
        <button
          onClick={() => handleNavClick("accueil")}
          className="font-display font-bold text-lg text-white tracking-wide"
        >
          Guelewar<span className="text-accent">Dev</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                active === item.id ? "text-accent" : "text-gray-300 hover:text-white"
              }`}
            >
              {language === "FR" ? item.fr : item.en}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </button>
          ))}

          <button
            onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
            className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-full border border-ink-500 text-gray-200 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {language === "FR" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-md flex flex-col items-center py-6 space-y-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium ${active === item.id ? "text-accent" : "text-gray-200"}`}
            >
              {language === "FR" ? item.fr : item.en}
            </button>
          ))}
          <button
            onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full border border-ink-500 text-gray-200"
          >
            {language === "FR" ? "EN" : "FR"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
