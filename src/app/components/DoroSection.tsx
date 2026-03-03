import { motion } from "motion/react";
import { MessageCircle, Zap, Clock, ArrowRight } from "lucide-react";
import stageImg from "../../assets/5f9f5f798f588c543ad95786bc1e5d414a6ae817.png";
import { useLanguage } from "./LanguageContext";
import { useSanityModule } from "../../lib/useSanityModule";
import { urlFor } from "../../lib/sanity";

const FONT = "'DM Sans', sans-serif";

const iconMap: Record<string, any> = { MessageCircle, Zap, Clock };

export function DoroSection() {
  const { t, lang } = useLanguage();
  const { data: cms } = useSanityModule("doroModule");

  if (cms && cms.enabled === false) return null;

  const overline = cms?.overline?.[lang] || t("doro.overline");
  const h2Line1 = (lang === "de" ? cms?.headline?.line1_de : cms?.headline?.line1_en) || t("doro.h2.1");
  const h2Line2 = (lang === "de" ? cms?.headline?.line2_de : cms?.headline?.line2_en) || t("doro.h2.2");
  const subtext = cms?.subtext?.[lang] || t("doro.sub");
  const ctaText = (lang === "de" ? cms?.cta?.label_de : cms?.cta?.label_en) || t("doro.cta");
  const ctaUrl = cms?.cta?.url || "https://office.craid.de";

  const fallbackFeatures = [
    { icon: MessageCircle, text: t("doro.feat1") },
    { icon: Clock, text: t("doro.feat2") },
    { icon: Zap, text: t("doro.feat3") },
  ];

  const features = cms?.features
    ? cms.features.map((f: any) => ({
        icon: iconMap[f.iconName] || MessageCircle,
        text: lang === "de" ? f.text_de : f.text_en,
      }))
    : fallbackFeatures;

  const fallbackChat = [
    { sender: "doro", text: t("doro.chat1") },
    { sender: "user", text: t("doro.chat2") },
    { sender: "doro", text: t("doro.chat3") },
  ];

  const chatMessages = cms?.chatMessages
    ? cms.chatMessages.map((m: any) => ({
        sender: m.sender,
        text: lang === "de" ? m.text_de : m.text_en,
      }))
    : fallbackChat;

  const bgImage = cms?.backgroundImage ? urlFor(cms.backgroundImage).width(800).url() : stageImg;

  return (
    <section id="doro" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(229, 0, 255, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-primary text-[0.8rem] tracking-widest uppercase mb-4 block"
              style={{ fontFamily: FONT }}
            >
              {overline}
            </span>
            <h2
              className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-6"
              style={{ fontFamily: FONT, fontWeight: 700 }}
            >
              {h2Line1}
              <br />
              <span className="text-muted-foreground">{h2Line2}</span>
            </h2>
            <p
              className="text-muted-foreground text-[1.05rem] leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: FONT, fontWeight: 300 }}
            >
              {subtext}
            </p>

            <div className="space-y-4 mb-10">
              {features.map((item: any) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={16} />
                  </div>
                  <span
                    className="text-[0.9rem] text-foreground/80"
                    style={{ fontFamily: FONT, fontWeight: 400 }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[1rem] hover:opacity-90 transition-all hover:scale-105 group"
              style={{ fontFamily: FONT, fontWeight: 600 }}
            >
              {ctaText}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>

          {/* Right - Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 opacity-30 pointer-events-none rounded-3xl overflow-hidden">
              <img src={bgImage} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-4">
                  <div className="bg-secondary rounded-lg px-4 py-1.5 max-w-xs mx-auto">
                    <span
                      className="text-[0.75rem] text-muted-foreground"
                      style={{ fontFamily: FONT }}
                    >
                      office.craid.de
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat simulation */}
              <div className="space-y-4">
                {chatMessages.map((msg: any, i: number) => (
                  msg.sender === "doro" ? (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                        <span
                          className="text-primary text-[0.7rem]"
                          style={{ fontFamily: FONT, fontWeight: 700 }}
                        >
                          D
                        </span>
                      </div>
                      <div className="bg-secondary/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                        <p
                          className="text-[0.85rem] text-foreground/90 leading-relaxed"
                          style={{ fontFamily: FONT, fontWeight: 400 }}
                        >
                          {msg.text}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      className="flex gap-3 justify-end"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.3 }}
                    >
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-sm">
                        <p
                          className="text-[0.85rem] text-foreground/90 leading-relaxed"
                          style={{ fontFamily: FONT, fontWeight: 400 }}
                        >
                          {msg.text}
                        </p>
                      </div>
                    </motion.div>
                  )
                ))}

                {/* Typing indicator */}
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + chatMessages.length * 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <span
                      className="text-primary text-[0.7rem]"
                      style={{ fontFamily: FONT, fontWeight: 700 }}
                    >
                      D
                    </span>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
