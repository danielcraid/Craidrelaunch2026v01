import { motion } from "motion/react";
import { Sparkles, RefreshCw, Layers } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useSanityModule } from "../../lib/useSanityModule";

const FONT = "'DM Sans', sans-serif";

const iconMap: Record<string, any> = { Sparkles, RefreshCw, Layers };

export function PhilosophySection() {
  const { t, lang } = useLanguage();
  const { data: cms } = useSanityModule("philosophyModule");

  if (cms && cms.enabled === false) return null;

  const overline = cms?.overline?.[lang] || t("phil.overline");
  const h2Line1 = (lang === "de" ? cms?.headline?.line1_de : cms?.headline?.line1_en) || t("phil.h2.1");
  const h2Line2 = (lang === "de" ? cms?.headline?.line2_de : cms?.headline?.line2_en) || t("phil.h2.2");

  const fallbackCards = [
    { icon: Sparkles, title: t("phil.card1.title"), description: t("phil.card1.desc") },
    { icon: RefreshCw, title: t("phil.card2.title"), description: t("phil.card2.desc") },
    { icon: Layers, title: t("phil.card3.title"), description: t("phil.card3.desc") },
  ];

  const principles = cms?.cards
    ? cms.cards.map((card: any) => ({
        icon: iconMap[card.icon] || Sparkles,
        title: lang === "de" ? card.title_de : card.title_en,
        description: lang === "de" ? card.description_de : card.description_en,
      }))
    : fallbackCards;

  const quoteText = (lang === "de" ? cms?.quote?.text_de : cms?.quote?.text_en) || t("phil.quote");
  const quoteAuthor = cms?.quote?.author || t("phil.quote.author");

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span
            className="text-primary text-[0.8rem] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: FONT }}
          >
            {overline}
          </span>
          <h2
            className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] max-w-4xl"
            style={{ fontFamily: FONT, fontWeight: 700 }}
          >
            {h2Line1}
            <br />
            <span className="text-muted-foreground">{h2Line2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item: any, index: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
              <h3
                className="text-[1.25rem] mb-3"
                style={{ fontFamily: FONT, fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed text-[0.95rem]"
                style={{ fontFamily: FONT, fontWeight: 300 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 border-t border-border pt-16"
        >
          <blockquote
            className="text-[1.5rem] md:text-[2rem] leading-relaxed text-muted-foreground max-w-4xl"
            style={{ fontFamily: FONT, fontWeight: 300 }}
          >
            &ldquo;{quoteText}&rdquo;
          </blockquote>
          <p
            className="mt-6 text-[0.9rem] text-muted-foreground"
            style={{ fontFamily: FONT }}
          >
            {quoteAuthor}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
