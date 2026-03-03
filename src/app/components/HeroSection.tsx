import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import iconImg from "../../assets/bb546898d19b89ec63162bc8e936339380a7a402.png";
import stageImg from "../../assets/5f9f5f798f588c543ad95786bc1e5d414a6ae817.png";
import cloudBgImg from "../../assets/ca5f12215191bc21daacb9ee25a985b9cc1e9b5f.png";
import { useLanguage } from "./LanguageContext";
import { useSanityModule } from "../../lib/useSanityModule";
import { urlFor } from "../../lib/sanity";

const FONT = "'DM Sans', sans-serif";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { t, lang } = useLanguage();
  const { data: cms } = useSanityModule("heroModule");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // CMS values with fallbacks
  const overline = cms?.overline?.[lang] || t("hero.overline");
  const line1 = (lang === "de" ? cms?.headline?.line1_de : cms?.headline?.line1_en) || t("hero.h1.line1");
  const line2 = (lang === "de" ? cms?.headline?.line2_de : cms?.headline?.line2_en) || t("hero.h1.line2");
  const line3 = (lang === "de" ? cms?.headline?.line3_de : cms?.headline?.line3_en) || t("hero.h1.line3");
  const subtext = cms?.subtext?.[lang] || t("hero.sub");
  const cta1Label = (lang === "de" ? cms?.cta1?.label_de : cms?.cta1?.label_en) || t("hero.cta1");
  const cta1Url = cms?.cta1?.url || "https://office.craid.de";
  const cta2Label = (lang === "de" ? cms?.cta2?.label_de : cms?.cta2?.label_en) || t("hero.cta2");
  const cta2Anchor = cms?.cta2?.anchor || "#philosophy";

  // Background settings from CMS
  const bgType = cms?.backgroundType || "image";
  const bgImage = cms?.backgroundImage ? urlFor(cms.backgroundImage).url() : stageImg;
  const bgVideo = cms?.backgroundVideo || cms?.backgroundVideoFileUrl || null;
  const overlayColor = cms?.overlayColor || "#0a0a0f";
  const overlayOpacity = cms?.overlayOpacity != null ? cms.overlayOpacity / 100 : 0.7;
  const cloudImage = cms?.cloudImage ? urlFor(cms.cloudImage).url() : cloudBgImg;
  const iconImage = cms?.iconImage ? urlFor(cms.iconImage).url() : iconImg;

  // Module disabled check
  if (cms && cms.enabled === false) return null;

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Base gradient with CMS overlay color */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${overlayColor}, ${overlayColor}dd, ${overlayColor})`,
        }}
      />

      {/* Fullscreen background - Video or Image */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        {bgType === "video" && bgVideo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          <motion.img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        )}
      </motion.div>

      {/* Gradient overlay with CMS-controlled opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${overlayColor}, transparent, ${overlayColor}cc)`,
          opacity: overlayOpacity,
        }}
      />

      {/* Cloud background image */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.img
          src={cloudImage}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(229, 0, 255, 0.25) 0%, rgba(10, 10, 15, 0.7) 55%)",
          }}
        />
      </div>

      {/* Floating geometric icon */}
      <motion.div
        style={{ rotate: iconRotate }}
        className="absolute top-[12%] right-[15%] w-16 md:w-24 opacity-60 pointer-events-none hidden md:block"
      >
        <motion.img
          src={iconImage}
          alt=""
          className="w-full h-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </motion.div>

      {/* More floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[8%] w-10 md:w-14 opacity-40 pointer-events-none"
      >
        <img src={iconImage} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/60 border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span
              className="text-[0.8rem] text-muted-foreground tracking-widest uppercase"
              style={{ fontFamily: FONT }}
            >
              {overline}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: FONT, fontWeight: 700 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {line1}
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {line2}
          </motion.span>
          <br />
          <motion.span
            className="text-primary"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {line3}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-[1.1rem] md:text-[1.3rem] text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: FONT, fontWeight: 300 }}
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={cta1Url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[1rem] hover:opacity-90 transition-all hover:scale-105"
            style={{ fontFamily: FONT, fontWeight: 600 }}
          >
            {cta1Label}
          </a>
          <a
            href={cta2Anchor}
            className="border border-border text-foreground px-8 py-3.5 rounded-full text-[1rem] hover:bg-secondary/50 transition-all"
            style={{ fontFamily: FONT, fontWeight: 500 }}
          >
            {cta2Label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 3 }, y: { duration: 2, repeat: Infinity, delay: 3 } }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </section>
  );
}
