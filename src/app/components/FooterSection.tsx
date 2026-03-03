import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/8c931104148342b81ad7ed00151d7a31ba7f5d6d.png";
import { useLanguage } from "./LanguageContext";

const FONT = "'DM Sans', sans-serif";

export function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="CRAiD" className="h-5 invert mb-4" />
            <p
              className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-sm"
              style={{ fontFamily: FONT, fontWeight: 300 }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-[0.8rem] tracking-widest uppercase text-muted-foreground mb-6"
              style={{ fontFamily: FONT }}
            >
              {t("footer.links")}
            </h4>
            <div className="space-y-3">
              {[
                { label: "CRAiD Office", href: "https://office.craid.de" },
                { label: "Report", href: "https://docs.craid.de" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/danielsimon1",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-[0.9rem] group"
                  style={{ fontFamily: FONT }}
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[0.8rem] tracking-widest uppercase text-muted-foreground mb-6"
              style={{ fontFamily: FONT }}
            >
              {t("footer.contact")}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@craid.de"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-[0.9rem]"
                style={{ fontFamily: FONT }}
              >
                <Mail size={16} />
                hello@craid.de
              </a>
              <a
                href="https://www.linkedin.com/in/danielsimon1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-[0.9rem]"
                style={{ fontFamily: FONT }}
              >
                <Linkedin size={16} />
                Daniel Simon
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[0.8rem] text-muted-foreground"
            style={{ fontFamily: FONT }}
          >
            {t("footer.copyright")}
          </p>
          <p
            className="text-[0.8rem] text-muted-foreground"
            style={{ fontFamily: FONT }}
          >
            {t("footer.designed")}
          </p>
        </div>
      </div>
    </footer>
  );
}
