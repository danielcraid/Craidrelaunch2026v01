import { motion } from "motion/react";
import { FileText, ArrowUpRight } from "lucide-react";
import cloudImg from "figma:asset/ca5f12215191bc21daacb9ee25a985b9cc1e9b5f.png";
import { useLanguage } from "./LanguageContext";

const FONT = "'DM Sans', sans-serif";

export function ReportSection() {
  const { t } = useLanguage();

  return (
    <section id="report" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-border rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img
                src={cloudImg}
                alt="Abstract visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />
            </div>

            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="text-primary" size={20} />
                </div>
                <span
                  className="text-primary text-[0.8rem] tracking-widest uppercase"
                  style={{ fontFamily: FONT }}
                >
                  {t("report.overline")}
                </span>
              </div>

              <h2
                className="text-[2rem] md:text-[2.5rem] leading-[1.15] mb-4"
                style={{ fontFamily: FONT, fontWeight: 700 }}
              >
                {t("report.h2.1")}
                <br />
                <span className="text-muted-foreground">
                  {t("report.h2.2")}
                </span>
              </h2>

              <p
                className="text-muted-foreground text-[0.95rem] leading-relaxed mb-8"
                style={{ fontFamily: FONT, fontWeight: 300 }}
              >
                {t("report.sub")}
              </p>

              <a
                href="https://docs.craid.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-[1rem] hover:opacity-90 transition-all hover:scale-105 w-fit group"
                style={{ fontFamily: FONT, fontWeight: 600 }}
              >
                {t("report.cta")}
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
