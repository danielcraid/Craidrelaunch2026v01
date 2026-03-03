import { motion } from "motion/react";
import { Linkedin, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

import avatarDoro from "figma:asset/d9bc25ba5d246d2f99502b600d23667d63cbd0dd.png";
import avatarBrandon from "figma:asset/c307fc8c087b6a8a4f566a7291dc78bf1a142e57.png";
import avatarCarlo from "figma:asset/88507faf095d37ad800576d0423c3ecd93e32a0b.png";
import avatarMaja from "figma:asset/89f5a077a16c80d3865dba7beccdb601e04085a2.png";
import avatarJason from "figma:asset/0929b8479cef06d31faab2d22c7a713acaed89ce.png";
import avatarChris from "figma:asset/0c8b54a653f19357f35790120fe1c78ae178a6ab.png";
import avatarPace from "figma:asset/993ce9daba546263b3bc104d10dbbe1d5a33f83d.png";

const FONT = "'DM Sans', sans-serif";

const founder = {
  name: "Daniel Simon",
  image:
    "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMGRpdmVyc2V8ZW58MXx8fHwxNzcyNDA3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  linkedin: "https://www.linkedin.com/in/danielsimon1",
};

const agentKeys = [
  { name: "Doro", role: "Chief of Staff", avatar: avatarDoro, taskKey: "team.doro.task" },
  { name: "Brandon", role: "Beratung", avatar: avatarBrandon, taskKey: "team.brandon.task" },
  { name: "Carlo", role: "Design Research", avatar: avatarCarlo, taskKey: "team.carlo.task" },
  { name: "Maja", role: "Business Design", avatar: avatarMaja, taskKey: "team.maja.task" },
  { name: "Jason", role: "Creative Lead", avatar: avatarJason, taskKey: "team.jason.task" },
  { name: "Chris", role: "Coding & Technik", avatar: avatarChris, taskKey: "team.chris.task" },
  { name: "Pace", role: "Ops & SCRUM", avatar: avatarPace, taskKey: "team.pace.task" },
  { name: "Jeremy", role: "Business Storytelling", avatar: null, taskKey: "team.jeremy.task" },
];

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            {t("team.overline")}
          </span>
          <h2
            className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] max-w-4xl"
            style={{ fontFamily: FONT, fontWeight: 700 }}
          >
            {t("team.h2.1")}
            <br />
            <span className="text-muted-foreground">{t("team.h2.2")}</span>
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
          {t("team.sub")}
        </motion.p>

        {/* Founder - featured card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 mb-16"
        >
          <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]">
            <div className="h-64 md:h-auto relative overflow-hidden">
              <ImageWithFallback
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span
                  className="text-[0.7rem] tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-md bg-foreground/10 text-foreground inline-flex items-center gap-1.5"
                  style={{ fontFamily: FONT }}
                >
                  <User size={12} />
                  {t("team.badge.human")}
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3
                    className="text-[1.5rem] md:text-[1.75rem]"
                    style={{ fontFamily: FONT, fontWeight: 600 }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="text-primary text-[0.9rem]"
                    style={{ fontFamily: FONT }}
                  >
                    {t("team.founder.role")}
                  </p>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agents - behind the scenes framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span
            className="text-[0.85rem] text-muted-foreground tracking-widest uppercase"
            style={{ fontFamily: FONT }}
          >
            {t("team.agents.label")}
          </span>
          <div className="flex-1 h-px bg-border" />
          <span
            className="text-[0.8rem] text-muted-foreground"
            style={{ fontFamily: FONT }}
          >
            {agentKeys.length} {t("team.agents.count")}
          </span>
        </motion.div>

        {/* Agents grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {agentKeys.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card/60 border border-border rounded-xl p-5 hover:border-primary/20 transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  {agent.avatar ? (
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/15 flex items-center justify-center border border-primary/25">
                      <span
                        className="text-primary text-[0.85rem]"
                        style={{ fontFamily: FONT, fontWeight: 700 }}
                      >
                        {agent.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h4
                    className="text-[1rem]"
                    style={{ fontFamily: FONT, fontWeight: 600 }}
                  >
                    {agent.name}
                  </h4>
                  <p
                    className="text-primary/80 text-[0.75rem]"
                    style={{ fontFamily: FONT }}
                  >
                    {agent.role}
                  </p>
                </div>
              </div>

              <p
                className="text-muted-foreground text-[0.8rem] leading-relaxed"
                style={{ fontFamily: FONT, fontWeight: 300 }}
              >
                {t(agent.taskKey)}
              </p>

              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                <span
                  className="text-[0.7rem] text-muted-foreground/60"
                  style={{ fontFamily: FONT }}
                >
                  {t("team.badge.active")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-muted-foreground mt-16 text-[0.95rem]"
          style={{ fontFamily: FONT, fontWeight: 300 }}
        >
          {t("team.bottom")}
          <br className="hidden md:block" />
          {t("team.bottom.2")}{" "}
          <a
            href="mailto:hello@craid.de"
            className="text-primary hover:underline"
          >
            {t("team.bottom.cta")}
          </a>
        </motion.p>
      </div>
    </section>
  );
}