// Navigation
export const NAV_ITEMS = [
  { label: 'Services', href: '/#services' },
  { label: 'Results', href: '/#proof' },
  { label: 'Team', href: '/#team' },
  { label: 'FAQ', href: '/#faq' },
];

// Service Phases (new 4-phase framework)
export const SERVICE_PHASES = [
  {
    id: 'assessment',
    phase: 1,
    title: 'Assessment',
    tagline: 'Eliminate the guesswork.',
    description: 'Before we build anything, we assess. Three tiers of analysis: from a single process audit to a full human-tech holistic review. Every engagement starts here. You walk away with a clear, actionable roadmap, whether you work with us or not.',
    href: '/assessment',
  },
  {
    id: 'database-mobilization',
    phase: 2,
    title: 'Database Mobilization',
    tagline: 'Bet on the house, not on Red 16.',
    description: 'We create a living, AI-optimized copy of your company\'s data that stays in sync with your existing tools. Platform-independent, always current, ready for any AI system to plug into. Your data moves as fast as the technology does.',
    href: '/database-mobilization',
  },
  {
    id: 'ai-implementation',
    phase: 3,
    title: 'AI Implementation',
    tagline: 'Intelligence that works while you sleep.',
    description: 'From simple automations to autonomous agents, we build the backend systems that eliminate manual work. Four categories: Automations, AI-Powered Workflows, Agentic Systems, and Development Infrastructure. All connected to your mobilized data.',
    href: '/ai-implementation',
  },
  {
    id: 'personalized-software',
    phase: 4,
    title: 'Personalized Software',
    tagline: 'Where intelligence meets interface.',
    description: 'Custom applications designed for how your people actually work, powered by your own data, with AI woven into every interaction. Dashboards, portals, tools: built for your team, not adapted from a template.',
    href: '/personalized-software',
  },
];

// Centralized Copy
export const COPY = {
  hero: {
    headline: 'Build what lasts.',
    subheadline: 'The next decade belongs to businesses that transform now. We make sure you\'re one of them.',
    cta: 'Start the Conversation',
  },
  stakes: {
    headline: 'The divergence has begun.',
    body: 'Every industry is splitting in two. Companies modernizing their operations via AI are compounding advantages daily. Everyone else falls further behind with each passing quarter.',
    stat1: { value: '72%', label: 'of executives say AI is a top priority' },
    stat2: { value: '3x', label: 'productivity gains for early adopters' },
    stat3: { value: '18mo', label: 'before the gap becomes permanent' },
  },
  services: {
    headline: 'Four phases. One transformation.',
    subheadline: 'Each phase builds on the last. Start anywhere the assessment tells you to.',
  },
  proof: {
    headline: 'What happens after.',
    testimonial: 'Six months ago, this operations team spent 40+ hours weekly on manual data entry, invoice chasing, and email triage. Today, those same processes run automatically. The team focuses on growth.',
    attribution: {
      name: 'Umberto Lopardo',
      title: 'CEO & Co-founder',
      company: 'UBL Group',
    },
  },
  founders: {
    headline: 'Builders, not advisors.',
    intro: 'We provide strategic guidance. Then we roll up our sleeves and execute.',
    team: [
      {
        name: 'Sebastian Tamburro',
        title: 'CEO',
        image: '/sebastian-tamburro.png',
        linkedin: 'https://www.linkedin.com/in/sebastian-tamburro-694530287',
        email: 'st@flowmatrixai.com',
      },
      {
        name: 'Dom Joseph',
        title: 'COO',
        image: '/dom-joseph.png',
        linkedin: 'https://www.linkedin.com/in/dom-joseph1130/',
        email: 'dj@flowmatrixai.com',
      },
    ],
  },
  faq: {
    headline: 'Questions we hear.',
    items: [
      {
        question: 'What does AI transformation actually mean?',
        answer: 'It means your business runs differently six months from now. Processes that drain hours happen automatically. Decisions that required guesswork get made with data. Your team focuses on work that matters.',
      },
      {
        question: 'How long does this take?',
        answer: 'It depends on scope. Initial assessments take 1-2 weeks. First system implementations typically 2-4 weeks. We move at startup speed, not consultant speed.',
      },
      {
        question: 'What kinds of businesses do you work with?',
        answer: 'Established businesses with real operations to optimize. If you\'re processing transactions, managing projects, coordinating teams, or handling client communications at scale, we can help.',
      },
      {
        question: 'What makes you different from other consultants?',
        answer: 'We build things. Most consultants hand you a strategy and wish you luck implementing it. We\'re in the codebase, in the workflows, in the weeds until the system works. Our deliverable isn\'t a document. It\'s a business that runs better.',
      },
      {
        question: 'How does pricing work?',
        answer: 'It starts with an assessment, which is credited toward your first build if you proceed. Beyond that, pricing scales with your company size and scope. No hidden fees, no packages. We scope it honestly after we understand the work.',
      },
    ],
  },
  cta: {
    headline: 'Ready when you are.',
    subheadline: 'One conversation. No pitch, no pressure, just clarity on what AI can do for your business.',
    button: 'Start the Conversation',
  },
};

// Client Logos
export const CLIENT_LOGOS = [
  { name: 'UBL Group', src: '/logos/client-logos/ubl-group.png' },
  { name: 'Valor Tax Relief', src: '/logos/client-logos/valor-tax-relief.webp' },
  { name: 'All Clean Pressure Washing', src: '/logos/client-logos/all-clean.webp' },
  { name: 'Lochinvar Safaris', src: '/logos/client-logos/lochinvar-safaris.webp' },
  { name: 'Montana Trophy Outfitters', src: '/logos/client-logos/montana-trophy.webp' },
  { name: 'Palisades Bowhunting', src: '/logos/client-logos/palisades-bowhunting.webp' },
];

// Form
export const TALLY_FORM_ID = 'wMBOXE';

// SEO
export const SEO = {
  title: 'FlowMatrix AI | AI Transformation for Business',
  description: 'FlowMatrix AI architects and executes AI transformation for businesses. Assessment, database mobilization, AI implementation, and personalized software. Fast, permanent, compounding results.',
  ogImage: 'https://flowmatrixai.com/flowmatrix-og-image.png',
  keywords: 'FlowMatrix AI, AI transformation, business automation, AI consulting, AI implementation, database mobilization, personalized software, AI assessment',
  siteName: 'FlowMatrix AI',
  twitterHandle: '@flowmatrix_ai',
};
