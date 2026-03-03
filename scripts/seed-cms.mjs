/**
 * Bulk-Import: Alle bestehenden Texte ins Sanity CMS laden
 *
 * Ausführen mit: node scripts/seed-cms.mjs
 *
 * Voraussetzung: SANITY_TOKEN als Umgebungsvariable
 * Token erstellen unter: https://www.sanity.io/manage/project/v2qn2ahe/api#tokens
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'v2qn2ahe',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

async function seed() {
  console.log('🚀 Starte Bulk-Import...\n')

  // --- NAVIGATION ---
  console.log('📍 Navigation...')
  await client.createOrReplace({
    _id: 'navigationModule',
    _type: 'navigationModule',
    links: [
      { _key: 'nav1', label_de: 'Philosophy', label_en: 'Philosophy', href: '#philosophy' },
      { _key: 'nav2', label_de: 'Services', label_en: 'Services', href: '#services' },
      { _key: 'nav3', label_de: 'Team', label_en: 'Team', href: '#team' },
      { _key: 'nav4', label_de: 'Doro', label_en: 'Doro', href: '#doro' },
      { _key: 'nav5', label_de: 'Report', label_en: 'Report', href: '#report' },
    ],
    cta: {
      label_de: 'Office betreten',
      label_en: 'Enter Office',
      url: 'https://office.craid.de',
    },
  })

  // --- HERO ---
  console.log('🦸 Hero Section...')
  await client.createOrReplace({
    _id: 'heroModule',
    _type: 'heroModule',
    overline: {
      de: 'Design Consultancy for the Agentic Era',
      en: 'Design Consultancy for the Agentic Era',
    },
    headline: {
      line1_de: 'Human-first',
      line2_de: 'design for the',
      line3_de: 'agentic era.',
      line1_en: 'Human-first',
      line2_en: 'design for the',
      line3_en: 'agentic era.',
    },
    subtext: {
      de: 'Creativity. AI. Design Leadership. We help organisations make the leap from customer experience to agentic experience – combining strategic consulting, human-centered design and AI-powered execution to build experiences that think, act and evolve.',
      en: 'Creativity. AI. Design Leadership. We help organisations make the leap from customer experience to agentic experience – combining strategic consulting, human-centered design and AI-powered execution to build experiences that think, act and evolve.',
    },
    cta1: {
      label_de: 'Sprich mit Doro',
      label_en: 'Talk to Doro',
      url: 'https://office.craid.de',
    },
    cta2: {
      label_de: 'Mehr erfahren',
      label_en: 'Learn more',
      anchor: '#philosophy',
    },
    backgroundType: 'image',
    overlayColor: '#0a0a0f',
    overlayOpacity: 70,
    enabled: true,
    order: 1,
  })

  // --- PHILOSOPHY ---
  console.log('💡 Philosophy Section...')
  await client.createOrReplace({
    _id: 'philosophyModule',
    _type: 'philosophyModule',
    overline: {
      de: 'Unsere Philosophy',
      en: 'Our Philosophy',
    },
    headline: {
      line1_de: 'Wir arbeiten schon so,',
      line2_de: 'wie eure Organisation morgen arbeiten wird.',
      line1_en: 'We already work the way',
      line2_en: 'your organisation will work tomorrow.',
    },
    cards: [
      {
        _key: 'card1',
        iconName: 'Sparkles',
        title_de: 'Agentic by Nature',
        title_en: 'Agentic by Nature',
        description_de: 'Bei uns arbeiten Menschen und KI-Agenten als ein Team. Nicht als Experiment. Nicht als Demo. Als Alltag. Das macht uns nicht besonders – es macht uns bereit, euch zu helfen.',
        description_en: 'Humans and AI agents work as one team here. Not as an experiment. Not as a demo. As everyday reality. That doesn\'t make us special – it makes us ready to help you.',
      },
      {
        _key: 'card2',
        iconName: 'RefreshCw',
        title_de: 'Transformation, nicht Technik',
        title_en: 'Transformation, Not Tech',
        description_de: 'Wir bauen keine Agenten für euch. Wir helfen euren Teams – CX, IT, Product, Delivery – die Denkweise, Prozesse und Experiences für die Agentic Era zu entwickeln. Zusammen.',
        description_en: 'We don\'t build agents for you. We help your teams – CX, IT, Product, Delivery – develop the mindset, processes and experiences for the Agentic Era. Together.',
      },
      {
        _key: 'card3',
        iconName: 'Layers',
        title_de: 'Experience First',
        title_en: 'Experience First',
        description_de: 'Technologie ist das Mittel, nicht der Zweck. Wir starten beim Erlebnis eurer Kunden und Mitarbeitenden – und arbeiten uns gemeinsam zur Umsetzung vor.',
        description_en: 'Technology is the means, not the end. We start with your customers\' and employees\' experience – and work our way to implementation together.',
      },
    ],
    quote: {
      text_de: 'Wir mussten nicht erst lernen, wie Zusammenarbeit mit KI-Agenten funktioniert. Wir leben es jeden Tag. Das ist unser unfairer Vorteil.',
      text_en: 'We didn\'t have to learn how collaboration with AI agents works. We live it every day. That\'s our unfair advantage.',
      author: '— Daniel Simon, Founder CRAiD',
    },
    enabled: true,
    order: 2,
  })

  // --- SERVICES ---
  console.log('⚙️ Services Section...')
  await client.createOrReplace({
    _id: 'servicesModule',
    _type: 'servicesModule',
    overline: {
      de: 'Services',
      en: 'Services',
    },
    headline: {
      line1_de: 'Was wir mit euch tun.',
      line2_de: 'Und was dabei rauskommt.',
      line1_en: 'What we do with you.',
      line2_en: 'And what comes out of it.',
    },
    subtext: {
      de: 'Wir beraten nicht nur – wir liefern. Strategie, Design und Umsetzung aus einem Team. Outcome-based. Weil schöne Decks keine Kunden begeistern.',
      en: 'We don\'t just advise – we deliver. Strategy, design and execution from one team. Outcome-based. Because pretty decks don\'t excite customers.',
    },
    services: [
      {
        _key: 'svc01',
        number: '01',
        title_de: 'Agentic Experience Strategy',
        title_en: 'Agentic Experience Strategy',
        description_de: 'Wo verändert AI eure Customer Experience? Wo eure internen Abläufe? Wir entwickeln mit euren Führungskräften und Teams die Strategie für den Wandel von CX zu AX – mit klarer Roadmap und messbaren Zielen.',
        description_en: 'Where does AI change your customer experience? Where your internal processes? We develop the strategy for the shift from CX to AX with your leaders and teams – with a clear roadmap and measurable goals.',
        outcomes_de: 'AX Readiness Assessment, Transformation Roadmap, Business Case',
        outcomes_en: 'AX Readiness Assessment, Transformation Roadmap, Business Case',
      },
      {
        _key: 'svc02',
        number: '02',
        title_de: 'CX-to-AX Transformation Design',
        title_en: 'CX-to-AX Transformation Design',
        description_de: 'Wir designen keine Experiences um des Designs willen. Jede Transformation, die wir begleiten, ist an einen konkreten Werthebel gebunden – ob das Growth und Revenue ist, Churn Reduction, bessere Public Services oder operative Effizienz. Wir arbeiten embedded mit euren CX-, Product- und IT-Teams und liefern Erlebnisse, die nicht nur besser aussehen, sondern messbar besser performen.',
        description_en: 'We don\'t design experiences for design\'s sake. Every transformation we support is tied to a concrete value lever – whether that\'s growth and revenue, churn reduction, better public services or operational efficiency. We work embedded with your CX, product and IT teams and deliver experiences that don\'t just look better, but measurably perform better.',
        outcomes_de: 'Value-Linked Experience Maps, Service Blueprints, Conversion-optimierte Prototypen',
        outcomes_en: 'Value-Linked Experience Maps, Service Blueprints, Conversion-Optimised Prototypes',
      },
      {
        _key: 'svc03',
        number: '03',
        title_de: 'Design Leadership & Enablement',
        title_en: 'Design Leadership & Enablement',
        description_de: 'Wir befähigen eure Teams, selbst für die Agentic Era zu designen und zu entscheiden. Frameworks, Methoden, Sparring – bis ihr uns nicht mehr braucht.',
        description_en: 'We enable your teams to design and decide for the Agentic Era themselves. Frameworks, methods, sparring – until you no longer need us.',
        outcomes_de: 'Team Playbooks, Design Frameworks, Capability Uplift',
        outcomes_en: 'Team Playbooks, Design Frameworks, Capability Uplift',
      },
      {
        _key: 'svc04',
        number: '04',
        title_de: 'Delivery Factory',
        title_en: 'Delivery Factory',
        description_de: 'Ergebnisse statt Tagessätze. Unsere Delivery Factory liefert Design, Content und digitale Produkte – outcome-based, skalierbar, schnell. Angetrieben von einem Team aus Menschen und KI-Agenten, das genau so arbeitet, wie eure Organisation es morgen tun wird.',
        description_en: 'Results, not day rates. Our Delivery Factory delivers design, content and digital products – outcome-based, scalable, fast. Powered by a team of humans and AI agents that works exactly the way your organisation will tomorrow.',
        outcomes_de: 'Fertige Produkte, Kampagnen, Interfaces, Content',
        outcomes_en: 'Finished Products, Campaigns, Interfaces, Content',
        badge: 'Outcome-based',
        isHighlighted: true,
      },
      {
        _key: 'svc05',
        number: '05',
        title_de: 'Brand, Story & Go-to-Market',
        title_en: 'Brand, Story & Go-to-Market',
        description_de: 'Eine Agentic Experience braucht eine Geschichte, die Menschen verstehen. Wir helfen euch, eure Transformation nach innen und außen zu erzählen – von der Markenpositionierung bis zur Go-to-Market-Strategie.',
        description_en: 'An agentic experience needs a story people understand. We help you tell your transformation story internally and externally – from brand positioning to go-to-market strategy.',
        outcomes_de: 'Positionierung, Narrativ, Kampagnen, Launch-Strategien',
        outcomes_en: 'Positioning, Narrative, Campaigns, Launch Strategies',
      },
    ],
    enabled: true,
    order: 3,
  })

  // --- TEAM ---
  console.log('👥 Team Section...')
  await client.createOrReplace({
    _id: 'teamModule',
    _type: 'teamModule',
    overline: {
      de: 'Team',
      en: 'Team',
    },
    headline: {
      line1_de: 'Ein Team aus Menschen und Agenten.',
      line2_de: 'Ganz selbstverständlich.',
      line1_en: 'A team of humans and agents.',
      line2_en: 'Naturally.',
    },
    subtext: {
      de: 'So arbeiten wir. Nicht weil es cool klingt, sondern weil es funktioniert. Unsere KI-Agenten sind vollwertige Teammitglieder – sie recherchieren, gestalten, entwickeln und koordinieren. Das gibt uns die Erfahrung, die wir brauchen, um eure Transformation ehrlich zu begleiten.',
      en: 'This is how we work. Not because it sounds cool, but because it works. Our AI agents are full team members – they research, design, develop and coordinate. That gives us the experience we need to honestly guide your transformation.',
    },
    founder: {
      name: 'Daniel Simon',
      role_de: 'Founder & Design Strategist',
      role_en: 'Founder & Design Strategist',
    },
    agents: [
      { _key: 'a1', name: 'Doro', task_de: 'Orchestrierung & Front-Desk', task_en: 'Orchestration & Front-Desk' },
      { _key: 'a2', name: 'Brandon', task_de: 'Strategische Analyse & Insights', task_en: 'Strategic Analysis & Insights' },
      { _key: 'a3', name: 'Carlo', task_de: 'User Research & Datenanalyse', task_en: 'User Research & Data Analysis' },
      { _key: 'a4', name: 'Maja', task_de: 'Business Models & Value Maps', task_en: 'Business Models & Value Maps' },
      { _key: 'a5', name: 'Jason', task_de: 'Visual Design & Brand Identity', task_en: 'Visual Design & Brand Identity' },
      { _key: 'a6', name: 'Chris', task_de: 'Development & Prototyping', task_en: 'Development & Prototyping' },
      { _key: 'a7', name: 'Pace', task_de: 'Workflows & Projektsteuerung', task_en: 'Workflows & Project Management' },
      { _key: 'a8', name: 'Jeremy', task_de: 'Narrative & Business Storytelling', task_en: 'Narrative & Business Storytelling' },
    ],
    bottomText: {
      line1_de: 'Unser Team wächst – auf der menschlichen und der agentischen Seite.',
      line1_en: 'Our team is growing – on both the human and the agentic side.',
      line2_de: 'Interessiert, Teil davon zu werden?',
      line2_en: 'Interested in being part of it?',
      cta_de: 'Meld dich.',
      cta_en: 'Get in touch.',
      email: 'hello@craid.de',
    },
    enabled: true,
    order: 4,
  })

  // --- DORO ---
  console.log('🤖 Doro Section...')
  await client.createOrReplace({
    _id: 'doroModule',
    _type: 'doroModule',
    overline: {
      de: 'Digital Office',
      en: 'Digital Office',
    },
    headline: {
      line1_de: 'Schaut rein.',
      line2_de: 'So arbeiten wir.',
      line1_en: 'Take a look inside.',
      line2_en: 'This is how we work.',
    },
    subtext: {
      de: 'Doro ist Teil unseres Teams und euer erster Kontaktpunkt. Sie sitzt an unserem Front-Desk – nicht als Demo, sondern weil es unsere Art zu arbeiten ist. Probiert es aus.',
      en: 'Doro is part of our team and your first point of contact. She sits at our front desk – not as a demo, but because it\'s how we work. Try it out.',
    },
    features: [
      { _key: 'f1', iconName: 'MessageCircle', text_de: 'Natürliche Gespräche, kein Chatbot-Feeling', text_en: 'Natural conversations, no chatbot feeling' },
      { _key: 'f2', iconName: 'Clock', text_de: '24/7 erreichbar im digitalen CRAiD Office', text_en: 'Available 24/7 in the digital CRAiD Office' },
      { _key: 'f3', iconName: 'Zap', text_de: 'Versteht eure Bedürfnisse und verbindet euch mit dem Team', text_en: 'Understands your needs and connects you with the team' },
    ],
    chatMessages: [
      { _key: 'c1', sender: 'doro', text_de: 'Hallo! Willkommen im CRAiD Office. Wie kann ich helfen?', text_en: 'Hi! Welcome to the CRAiD Office. How can I help?' },
      { _key: 'c2', sender: 'user', text_de: 'Wir wollen unsere CX-Organisation fit für die Agentic Era machen...', text_en: 'We want to make our CX organisation ready for the Agentic Era...' },
      { _key: 'c3', sender: 'doro', text_de: 'Spannend! Lasst mich euch ein paar Fragen stellen, damit ich euch mit Daniel verbinden kann...', text_en: 'Exciting! Let me ask you a few questions so I can connect you with Daniel...' },
    ],
    cta: {
      label_de: 'Office betreten',
      label_en: 'Enter Office',
      url: 'https://office.craid.de',
    },
    enabled: true,
    order: 5,
  })

  // --- REPORT ---
  console.log('📄 Report Section...')
  await client.createOrReplace({
    _id: 'reportModule',
    _type: 'reportModule',
    overline: {
      de: 'Report',
      en: 'Report',
    },
    headline: {
      line1_de: 'CRAiD Report:',
      line2_de: 'Was wir aus der täglichen Arbeit mit Agenten lernen.',
      line1_en: 'CRAiD Report:',
      line2_en: 'What we learn from working with agents every day.',
    },
    subtext: {
      de: 'Keine Theorie, keine Hypes. Echte Einblicke aus unserem Alltag an der Schnittstelle von Design, Strategie und KI-Agenten. Für alle, die den Wandel verstehen wollen, bevor sie ihn gestalten.',
      en: 'No theory, no hype. Real insights from our daily work at the intersection of design, strategy and AI agents. For everyone who wants to understand the shift before shaping it.',
    },
    cta: {
      label_de: 'Report lesen',
      label_en: 'Read Report',
      url: 'https://docs.craid.de',
    },
    enabled: true,
    order: 6,
  })

  // --- FOOTER ---
  console.log('🦶 Footer Section...')
  await client.createOrReplace({
    _id: 'footerModule',
    _type: 'footerModule',
    tagline: {
      de: 'Design Consultancy für die Agentic Era. Wir arbeiten schon so, wie ihr morgen arbeiten werdet.',
      en: 'Design consultancy for the Agentic Era. We already work the way you will tomorrow.',
    },
    quickLinks: [
      { _key: 'ql1', label: 'CRAiD Office', url: 'https://office.craid.de' },
      { _key: 'ql2', label: 'Report', url: 'https://docs.craid.de' },
      { _key: 'ql3', label: 'LinkedIn', url: 'https://www.linkedin.com/in/danielsimon1' },
    ],
    email: 'hello@craid.de',
    linkedin: {
      name: 'Daniel Simon',
      url: 'https://www.linkedin.com/in/danielsimon1',
    },
    copyright: {
      de: '© 2026 CRAiD. Alle Rechte vorbehalten.',
      en: '© 2026 CRAiD. All rights reserved.',
    },
    designedBy: {
      de: 'Designed by Humans & Agents.',
      en: 'Designed by Humans & Agents.',
    },
  })

  console.log('\n✅ Alle Module importiert! Geh auf cms.craid.de und schau es dir an.')
}

seed().catch((err) => {
  console.error('❌ Fehler:', err.message)
  process.exit(1)
})
