import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "de" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  de: {
    // Nav
    "nav.philosophy": "Philosophy",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.doro": "Doro",
    "nav.report": "Report",
    "nav.cta": "Office betreten",

    // Hero
    "hero.overline": "Design Consultancy for the Agentic Era",
    "hero.h1.line1": "Human-first",
    "hero.h1.line2": "design for the",
    "hero.h1.line3": "agentic era.",
    "hero.sub":
      "Creativity. AI. Design Leadership. We help organisations make the leap from customer experience to agentic experience – combining strategic consulting, human-centered design and AI-powered execution to build experiences that think, act and evolve.",
    "hero.cta1": "Sprich mit Doro",
    "hero.cta2": "Mehr erfahren",

    // Philosophy
    "phil.overline": "Unsere Philosophy",
    "phil.h2.1": "Wir arbeiten schon so,",
    "phil.h2.2": "wie eure Organisation morgen arbeiten wird.",
    "phil.card1.title": "Agentic by Nature",
    "phil.card1.desc":
      "Bei uns arbeiten Menschen und KI-Agenten als ein Team. Nicht als Experiment. Nicht als Demo. Als Alltag. Das macht uns nicht besonders – es macht uns bereit, euch zu helfen.",
    "phil.card2.title": "Transformation, nicht Technik",
    "phil.card2.desc":
      "Wir bauen keine Agenten für euch. Wir helfen euren Teams – CX, IT, Product, Delivery – die Denkweise, Prozesse und Experiences für die Agentic Era zu entwickeln. Zusammen.",
    "phil.card3.title": "Experience First",
    "phil.card3.desc":
      "Technologie ist das Mittel, nicht der Zweck. Wir starten beim Erlebnis eurer Kunden und Mitarbeitenden – und arbeiten uns gemeinsam zur Umsetzung vor.",
    "phil.quote":
      "Wir mussten nicht erst lernen, wie Zusammenarbeit mit KI-Agenten funktioniert. Wir leben es jeden Tag. Das ist unser unfairer Vorteil.",
    "phil.quote.author": "— Daniel Simon, Founder CRAiD",

    // Services
    "svc.overline": "Services",
    "svc.h2.1": "Was wir mit euch tun.",
    "svc.h2.2": "Und was dabei rauskommt.",
    "svc.sub":
      "Wir beraten nicht nur – wir liefern. Strategie, Design und Umsetzung aus einem Team. Outcome-based. Weil schöne Decks keine Kunden begeistern.",
    "svc.01.title": "Agentic Experience Strategy",
    "svc.01.desc":
      "Wo verändert AI eure Customer Experience? Wo eure internen Abläufe? Wir entwickeln mit euren Führungskräften und Teams die Strategie für den Wandel von CX zu AX – mit klarer Roadmap und messbaren Zielen.",
    "svc.01.outcomes": "AX Readiness Assessment, Transformation Roadmap, Business Case",
    "svc.02.title": "CX-to-AX Transformation Design",
    "svc.02.desc":
      "Wir designen keine Experiences um des Designs willen. Jede Transformation, die wir begleiten, ist an einen konkreten Werthebel gebunden – ob das Growth und Revenue ist, Churn Reduction, bessere Public Services oder operative Effizienz. Wir arbeiten embedded mit euren CX-, Product- und IT-Teams und liefern Erlebnisse, die nicht nur besser aussehen, sondern messbar besser performen.",
    "svc.02.outcomes":
      "Value-Linked Experience Maps, Service Blueprints, Conversion-optimierte Prototypen",
    "svc.03.title": "Design Leadership & Enablement",
    "svc.03.desc":
      "Wir befähigen eure Teams, selbst für die Agentic Era zu designen und zu entscheiden. Frameworks, Methoden, Sparring – bis ihr uns nicht mehr braucht.",
    "svc.03.outcomes": "Team Playbooks, Design Frameworks, Capability Uplift",
    "svc.04.title": "Delivery Factory",
    "svc.04.desc":
      "Ergebnisse statt Tagessätze. Unsere Delivery Factory liefert Design, Content und digitale Produkte – outcome-based, skalierbar, schnell. Angetrieben von einem Team aus Menschen und KI-Agenten, das genau so arbeitet, wie eure Organisation es morgen tun wird.",
    "svc.04.outcomes": "Fertige Produkte, Kampagnen, Interfaces, Content",
    "svc.04.badge": "Outcome-based",
    "svc.05.title": "Brand, Story & Go-to-Market",
    "svc.05.desc":
      "Eine Agentic Experience braucht eine Geschichte, die Menschen verstehen. Wir helfen euch, eure Transformation nach innen und außen zu erzählen – von der Markenpositionierung bis zur Go-to-Market-Strategie.",
    "svc.05.outcomes": "Positionierung, Narrativ, Kampagnen, Launch-Strategien",
    "svc.outcomes.label": "Outcomes:",

    // Team
    "team.overline": "Team",
    "team.h2.1": "Ein Team aus Menschen und Agenten.",
    "team.h2.2": "Ganz selbstverständlich.",
    "team.sub":
      "So arbeiten wir. Nicht weil es cool klingt, sondern weil es funktioniert. Unsere KI-Agenten sind vollwertige Teammitglieder – sie recherchieren, gestalten, entwickeln und koordinieren. Das gibt uns die Erfahrung, die wir brauchen, um eure Transformation ehrlich zu begleiten.",
    "team.founder.role": "Founder & Design Strategist",
    "team.agents.label": "So sieht unser Setup aus",
    "team.agents.count": "KI-Agenten",
    "team.badge.human": "Human",
    "team.badge.active": "Active",
    "team.bottom":
      "Unser Team wächst – auf der menschlichen und der agentischen Seite.",
    "team.bottom.2": "Interessiert, Teil davon zu werden?",
    "team.bottom.cta": "Meld dich.",
    "team.doro.task": "Orchestrierung & Front-Desk",
    "team.brandon.task": "Strategische Analyse & Insights",
    "team.carlo.task": "User Research & Datenanalyse",
    "team.maja.task": "Business Models & Value Maps",
    "team.jason.task": "Visual Design & Brand Identity",
    "team.chris.task": "Development & Prototyping",
    "team.pace.task": "Workflows & Projektsteuerung",
    "team.jeremy.task": "Narrative & Business Storytelling",

    // Doro
    "doro.overline": "Digital Office",
    "doro.h2.1": "Schaut rein.",
    "doro.h2.2": "So arbeiten wir.",
    "doro.sub":
      "Doro ist Teil unseres Teams und euer erster Kontaktpunkt. Sie sitzt an unserem Front-Desk – nicht als Demo, sondern weil es unsere Art zu arbeiten ist. Probiert es aus.",
    "doro.feat1": "Natürliche Gespräche, kein Chatbot-Feeling",
    "doro.feat2": "24/7 erreichbar im digitalen CRAiD Office",
    "doro.feat3": "Versteht eure Bedürfnisse und verbindet euch mit dem Team",
    "doro.cta": "Office betreten",
    "doro.chat1": "Hallo! Willkommen im CRAiD Office. Wie kann ich helfen?",
    "doro.chat2":
      "Wir wollen unsere CX-Organisation fit für die Agentic Era machen...",
    "doro.chat3":
      "Spannend! Lasst mich euch ein paar Fragen stellen, damit ich euch mit Daniel verbinden kann...",

    // Report
    "report.overline": "Report",
    "report.h2.1": "CRAiD Report:",
    "report.h2.2": "Was wir aus der täglichen Arbeit mit Agenten lernen.",
    "report.sub":
      "Keine Theorie, keine Hypes. Echte Einblicke aus unserem Alltag an der Schnittstelle von Design, Strategie und KI-Agenten. Für alle, die den Wandel verstehen wollen, bevor sie ihn gestalten.",
    "report.cta": "Report lesen",

    // Footer
    "footer.tagline":
      "Design Consultancy für die Agentic Era. Wir arbeiten schon so, wie ihr morgen arbeiten werdet.",
    "footer.links": "Quick Links",
    "footer.contact": "Kontakt",
    "footer.copyright": "© 2026 CRAiD. Alle Rechte vorbehalten.",
    "footer.designed": "Designed by Humans & Agents.",
  },

  en: {
    // Nav
    "nav.philosophy": "Philosophy",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.doro": "Doro",
    "nav.report": "Report",
    "nav.cta": "Enter Office",

    // Hero
    "hero.overline": "Design Consultancy for the Agentic Era",
    "hero.h1.line1": "Human-first",
    "hero.h1.line2": "design for the",
    "hero.h1.line3": "agentic era.",
    "hero.sub":
      "Creativity. AI. Design Leadership. We help organisations make the leap from customer experience to agentic experience – combining strategic consulting, human-centered design and AI-powered execution to build experiences that think, act and evolve.",
    "hero.cta1": "Talk to Doro",
    "hero.cta2": "Learn more",

    // Philosophy
    "phil.overline": "Our Philosophy",
    "phil.h2.1": "We already work the way",
    "phil.h2.2": "your organisation will work tomorrow.",
    "phil.card1.title": "Agentic by Nature",
    "phil.card1.desc":
      "Humans and AI agents work as one team here. Not as an experiment. Not as a demo. As everyday reality. That doesn't make us special – it makes us ready to help you.",
    "phil.card2.title": "Transformation, Not Tech",
    "phil.card2.desc":
      "We don't build agents for you. We help your teams – CX, IT, Product, Delivery – develop the mindset, processes and experiences for the Agentic Era. Together.",
    "phil.card3.title": "Experience First",
    "phil.card3.desc":
      "Technology is the means, not the end. We start with your customers' and employees' experience – and work our way to implementation together.",
    "phil.quote":
      "We didn't have to learn how collaboration with AI agents works. We live it every day. That's our unfair advantage.",
    "phil.quote.author": "— Daniel Simon, Founder CRAiD",

    // Services
    "svc.overline": "Services",
    "svc.h2.1": "What we do with you.",
    "svc.h2.2": "And what comes out of it.",
    "svc.sub":
      "We don't just advise – we deliver. Strategy, design and execution from one team. Outcome-based. Because pretty decks don't excite customers.",
    "svc.01.title": "Agentic Experience Strategy",
    "svc.01.desc":
      "Where does AI change your customer experience? Where your internal processes? We develop the strategy for the shift from CX to AX with your leaders and teams – with a clear roadmap and measurable goals.",
    "svc.01.outcomes": "AX Readiness Assessment, Transformation Roadmap, Business Case",
    "svc.02.title": "CX-to-AX Transformation Design",
    "svc.02.desc":
      "We don't design experiences for design's sake. Every transformation we support is tied to a concrete value lever – whether that's growth and revenue, churn reduction, better public services or operational efficiency. We work embedded with your CX, product and IT teams and deliver experiences that don't just look better, but measurably perform better.",
    "svc.02.outcomes":
      "Value-Linked Experience Maps, Service Blueprints, Conversion-Optimised Prototypes",
    "svc.03.title": "Design Leadership & Enablement",
    "svc.03.desc":
      "We enable your teams to design and decide for the Agentic Era themselves. Frameworks, methods, sparring – until you no longer need us.",
    "svc.03.outcomes": "Team Playbooks, Design Frameworks, Capability Uplift",
    "svc.04.title": "Delivery Factory",
    "svc.04.desc":
      "Results, not day rates. Our Delivery Factory delivers design, content and digital products – outcome-based, scalable, fast. Powered by a team of humans and AI agents that works exactly the way your organisation will tomorrow.",
    "svc.04.outcomes": "Finished Products, Campaigns, Interfaces, Content",
    "svc.04.badge": "Outcome-based",
    "svc.05.title": "Brand, Story & Go-to-Market",
    "svc.05.desc":
      "An agentic experience needs a story people understand. We help you tell your transformation story internally and externally – from brand positioning to go-to-market strategy.",
    "svc.05.outcomes": "Positioning, Narrative, Campaigns, Launch Strategies",
    "svc.outcomes.label": "Outcomes:",

    // Team
    "team.overline": "Team",
    "team.h2.1": "A team of humans and agents.",
    "team.h2.2": "Naturally.",
    "team.sub":
      "This is how we work. Not because it sounds cool, but because it works. Our AI agents are full team members – they research, design, develop and coordinate. That gives us the experience we need to honestly guide your transformation.",
    "team.founder.role": "Founder & Design Strategist",
    "team.agents.label": "Our setup behind the scenes",
    "team.agents.count": "AI Agents",
    "team.badge.human": "Human",
    "team.badge.active": "Active",
    "team.bottom":
      "Our team is growing – on both the human and the agentic side.",
    "team.bottom.2": "Interested in being part of it?",
    "team.bottom.cta": "Get in touch.",
    "team.doro.task": "Orchestration & Front-Desk",
    "team.brandon.task": "Strategic Analysis & Insights",
    "team.carlo.task": "User Research & Data Analysis",
    "team.maja.task": "Business Models & Value Maps",
    "team.jason.task": "Visual Design & Brand Identity",
    "team.chris.task": "Development & Prototyping",
    "team.pace.task": "Workflows & Project Management",
    "team.jeremy.task": "Narrative & Business Storytelling",

    // Doro
    "doro.overline": "Digital Office",
    "doro.h2.1": "Take a look inside.",
    "doro.h2.2": "This is how we work.",
    "doro.sub":
      "Doro is part of our team and your first point of contact. She sits at our front desk – not as a demo, but because it's how we work. Try it out.",
    "doro.feat1": "Natural conversations, no chatbot feeling",
    "doro.feat2": "Available 24/7 in the digital CRAiD Office",
    "doro.feat3": "Understands your needs and connects you with the team",
    "doro.cta": "Enter Office",
    "doro.chat1": "Hi! Welcome to the CRAiD Office. How can I help?",
    "doro.chat2":
      "We want to make our CX organisation ready for the Agentic Era...",
    "doro.chat3":
      "Exciting! Let me ask you a few questions so I can connect you with Daniel...",

    // Report
    "report.overline": "Report",
    "report.h2.1": "CRAiD Report:",
    "report.h2.2": "What we learn from working with agents every day.",
    "report.sub":
      "No theory, no hype. Real insights from our daily work at the intersection of design, strategy and AI agents. For everyone who wants to understand the shift before shaping it.",
    "report.cta": "Read Report",

    // Footer
    "footer.tagline":
      "Design consultancy for the Agentic Era. We already work the way you will tomorrow.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 CRAiD. All rights reserved.",
    "footer.designed": "Designed by Humans & Agents.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");

  const t = (key: string): string => {
    return translations[lang][key] || translations["de"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}