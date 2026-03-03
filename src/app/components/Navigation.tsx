import logoImg from "../../assets/8c931104148342b81ad7ed00151d7a31ba7f5d6d.png";
import iconMark from "../../assets/8304bad1291bc3e85d2bca53c57be9bc971b86ea.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useSanityModule } from "../../lib/useSanityModule";
import { urlFor } from "../../lib/sanity";

const FONT = "'DM Sans', sans-serif";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { data: cms } = useSanityModule("navigationModule");

  const fallbackLinks = [
    { label: t("nav.philosophy"), href: "#philosophy" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.team"), href: "#team" },
    { label: t("nav.doro"), href: "#doro" },
    { label: t("nav.report"), href: "#report" },
  ];

  const navLinks = cms?.links
    ? cms.links.map((link: any) => ({
        label: lang === "de" ? link.label_de : link.label_en,
        href: link.href,
      }))
    : fallbackLinks;

  const ctaLabel = (lang === "de" ? cms?.cta?.label_de : cms?.cta?.label_en) || t("nav.cta");
  const ctaUrl = cms?.cta?.url || "https://office.craid.de";

  const logo = cms?.logo ? urlFor(cms.logo).height(48).url() : logoImg;
  const icon = cms?.iconMark ? urlFor(cms.iconMark).height(48).url() : iconMark;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleLang = () => setLang(lang === "de" ? "en" : "de");

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={icon} alt="" className="h-6" />
          <img src={logo} alt="CRAiD" className="h-6 invert" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link: any) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-[0.85rem] tracking-wide"
              style={{ fontFamily: FONT }}
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-[0.85rem] tracking-wide"
            style={{ fontFamily: FONT }}
          >
            <Globe size={15} />
            <span className="uppercase">{lang === "de" ? "EN" : "DE"}</span>
          </button>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-[0.85rem] hover:opacity-90 transition-opacity"
            style={{ fontFamily: FONT, fontWeight: 600 }}
          >
            {ctaLabel}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link: any) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-[1rem]"
                  style={{ fontFamily: FONT }}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-[1rem] text-left"
                style={{ fontFamily: FONT }}
              >
                <Globe size={16} />
                {lang === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
              </button>

              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-[0.875rem] text-center hover:opacity-90 transition-opacity mt-2"
                style={{ fontFamily: FONT, fontWeight: 600 }}
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
