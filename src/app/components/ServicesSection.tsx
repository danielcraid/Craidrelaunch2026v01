import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, ShieldMinus, HeartHandshake, Gauge } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const FONT = "'DM Sans', sans-serif";

const valueDrivers = [
  { label: "Growth", icon: TrendingUp },
  { label: "Churn", icon: ShieldMinus },
  { label: "Service", icon: HeartHandshake },
  { label: "Efficiency", icon: Gauge },
];

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      title: t("svc.01.title"),
      description: t("svc.01.desc"),
      tags: ["Strategy", "Assessment", "Roadmapping", "Workshops"],
      outcomes: t("svc.01.outcomes"),
    },
    {
      number: "02",
      title: t("svc.02.title"),
      description: t("svc.02.desc"),
      tags: ["Experience Design", "Service Design", "Value-Based Outcomes"],
      outcomes: t("svc.02.outcomes"),
      hasValueDrivers: true,
    },
    {
      number: "03",
      title: t("svc.03.title"),
      description: t("svc.03.desc"),
      tags: ["Coaching", "Design Ops", "Ways of Working", "Agile"],
      outcomes: t("svc.03.outcomes"),
    },
    {
      number: "04",
      title: t("svc.04.title"),
      description: t("svc.04.desc"),
      tags: ["Value-Based Delivery", "Co-Creation", "Prototyping", "Production"],
      outcomes: t("svc.04.outcomes"),
      isDeliveryFactory: true,
    },
    {
      number: "05",
      title: t("svc.05.title"),
      description: t("svc.05.desc"),
      tags: ["Brand Strategy", "Storytelling", "Marketing", "Communications"],
      outcomes: t("svc.05.outcomes"),
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(229, 0, 255, 0.06) 0%, transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span
            className="text-primary text-[0.8rem] tracking-widest uppercase mb-4 block"
            style={{ fontFamily: FONT }}
          >
            {t("svc.overline")}
          </span>
          <h2
            className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] max-w-3xl"
            style={{ fontFamily: FONT, fontWeight: 700 }}
          >
            {t("svc.h2.1")}
            <br />
            <span className="text-muted-foreground">{t("svc.h2.2")}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-[1.05rem] leading-relaxed max-w-2xl mb-20"
          style={{ fontFamily: FONT, fontWeight: 300 }}
        >
          {t("svc.sub")}
        </motion.p>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group border-t border-border py-10 md:py-12 cursor-pointer transition-all duration-500 -mx-6 px-6 md:-mx-8 md:px-8 ${
                service.isDeliveryFactory
                  ? "hover:bg-primary/5 relative"
                  : "hover:bg-secondary/20"
              }`}
            >
              {service.isDeliveryFactory && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/60 rounded-r opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span
                  className="text-[0.8rem] text-primary tracking-widest"
                  style={{ fontFamily: FONT }}
                >
                  {service.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-[1.5rem] md:text-[1.75rem]"
                      style={{ fontFamily: FONT, fontWeight: 600 }}
                    >
                      {service.title}
                      {service.isDeliveryFactory && (
                        <span className="ml-3 text-[0.7rem] tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full align-middle">
                          {t("svc.04.badge")}
                        </span>
                      )}
                    </h3>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1 hidden md:block"
                      size={22}
                    />
                  </div>
                  <p
                    className="text-muted-foreground max-w-2xl mb-5 text-[0.95rem] leading-relaxed"
                    style={{ fontFamily: FONT, fontWeight: 300 }}
                  >
                    {service.description}
                  </p>

                  {/* Value Drivers for Service 02 */}
                  {service.hasValueDrivers && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {valueDrivers.map((driver) => (
                        <div
                          key={driver.label}
                          className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5"
                        >
                          <driver.icon size={14} className="text-primary" />
                          <span
                            className="text-[0.75rem] text-primary"
                            style={{ fontFamily: FONT, fontWeight: 500 }}
                          >
                            {driver.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.75rem] text-muted-foreground border border-border rounded-full px-3 py-1 tracking-wide"
                        style={{ fontFamily: FONT }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span
                      className="text-[0.75rem] text-muted-foreground/60 tracking-wide uppercase"
                      style={{ fontFamily: FONT }}
                    >
                      {t("svc.outcomes.label")}
                    </span>
                    {service.outcomes.split(", ").map((outcome, i, arr) => (
                      <span key={outcome}>
                        <span
                          className="text-[0.8rem] text-foreground/70"
                          style={{ fontFamily: FONT, fontWeight: 400 }}
                        >
                          {outcome}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="text-muted-foreground/40 ml-2">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
