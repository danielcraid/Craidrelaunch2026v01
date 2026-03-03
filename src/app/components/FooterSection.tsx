import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/8c931104148342b81ad7ed00151d7a31ba7f5d6d.png";
import { useLanguage } from "./LanguageContext";
import { useSanityModule } from "../../lib/useSanityModule";
import { urlFor } from "../../lib/sanity";

const FONT = "'DM Sans', sans-serif";

export function FooterSection() {
  const { t, lang } = useLanguage();
  const { data: cms } = useSanityModule("footerModule");

  if (cms && cms.enabled === false) return null;

  const tagline = cms?.tagline?.[lang] || t("footer.tagline");
  const linksLabel = cms?.linksLabel?.[lang] || t("footer.links");
  const contactLabel = cms?.contactLabel?.[lang] || t("footer.contact");
  const copyright = cms?.copyright?.[lang] || t("footer.copyright");
  const designedBy = cms?.designedBy?.[lang] || t("footer.designed");
  const email = cms?.email || "hello@craid.de";
  const linkedin = cms?.linkedin || "https://www.linkedin.com/in/danielsimon1";
  const linkedinName = cms?.linkedinName || "Daniel Simon";

  const logo = cms?.logo ? urlFor(cms.logo).height(40).url() : logoImg;

  const fallbackQuickLinks = [
    { label: "CRAiD Office", href: "https://office.craid.de" },
    { label: "Report", href: "https://docs.craid.de" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danielsimon1" },
  ];

  const quickLinks = cms?.quickLinks
    ? cms.quickLinks.map((link: any) => ({
        label: link.label,
        href: link.href,
      }))
    : fallbackQuickLinks;

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src={logo} alt="CRAiD" className="h-5 invert mb-4" />
            <p
              className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-sm"
              style={{ fontFamily: FONT, fontWeight: 300 }}
            >
              {tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-[0.8rem] tracking-widest uppercase text-muted-foreground mb-6"
              style={{ fontFamily: FONT }}
            >
              {linksLabel}
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link: any) => (
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
              {contactLabel}
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-[0.9rem]"
                style={{ fontFamily: FONT }}
              >
                <Mail size={16} />
                {email}
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-[0.9rem]"
                style={{ fontFamily: FONT }}
              >
                <Linkedin size={16} />
                {linkedinName}
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
            {copyright}
          </p>
          <p
            className="text-[0.8rem] text-muted-foreground"
            style={{ fontFamily: FONT }}
          >
            {designedBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
