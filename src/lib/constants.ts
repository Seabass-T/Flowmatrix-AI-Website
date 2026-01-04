// Navigation
export const NAV_ITEMS = [
  { label: 'Approach', sectionId: 'approach' },
  { label: 'Proof', sectionId: 'proof' },
  { label: 'Team', sectionId: 'team' },
];

// Centralized Copy
export const COPY = {
  hero: {
    headline: 'Build what lasts.',
    subheadline: 'The next decade belongs to businesses that transform now. We make sure you\'re one of them.',
    cta: 'Start the Conversation',
  },
  stakes: {
    preheadline: 'Some will lead. Most will follow.',
    headline: 'The divergence has begun.',
    body: [
      'Every industry is splitting in two.',
      'Companies modernizing their operations via AI are compounding advantages daily. While everyone else falls further behind with each passing quarter.',
      'You already know this. The question isn\'t awareness. It\'s bandwidth.',
      'You don\'t have a team to build custom AI systems. You don\'t have months to experiment. You have a business to run today.',
      'That\'s precisely why we exist.',
      'We are your AI task force. You stay focused on growth. The transformation happens in the background. While we focus on solving, adopting, and optimizing one solution at a time, your competitors wonder how you got so far ahead.',
    ],
  },
  pillars: {
    headline: 'The architecture of change.',
    items: [
      {
        id: 'discover',
        title: 'Discover',
        description: 'Before we build anything, we listen. We map your operations, identify the friction, and find the 20% of changes that will drive 80% of impact. No 200-page or sexy slide decks. Just clarity.',
      },
      {
        id: 'build',
        title: 'Build',
        description: 'We construct AI systems that feel like they were always part of your business because they\'re built specifically for how you work. Not adapted. Not configured. Built.',
      },
      {
        id: 'scale',
        title: 'Scale',
        description: 'The first system is just the beginning. We embed ongoing optimization into your operations, so the gap between you and your competitors widens every month.',
      },
    ],
  },
  proof: {
    headline: 'What happens after.',
    story: [
      'Six months ago, this operations team spent 40+ hours weekly on manual data entry, invoice chasing, and email triage.',
      'Today, those same processes run automatically. The team focuses on growth.',
    ],
    metrics: [],
    attribution: {
      name: 'Umberto Lopardo, CEO & Co-founder',
      company: 'UBL Group',
    },
  },
  founders: {
    headline: 'Builders, not just advisors.',
    intro: 'We provide strategic guidance. Then we roll up our sleeves and execute.',
    team: [
      {
        name: 'Sebastian Tamburro',
        title: 'CEO',
        school: 'Colgate University',
        background: 'Economics & Psychology, Former D1 Hockey Player',
        location: 'Toronto, Ontario',
        linkedin: 'https://linkedin.com/in/sebastiantamburro',
      },
      {
        name: 'Dom Joseph',
        title: 'COO',
        school: 'Northeastern University',
        background: 'Industrial Engineering, Project Management & Business',
        location: 'Canfield, Ohio',
        funFact: 'Avid hunter',
        linkedin: 'https://linkedin.com/in/domjoseph',
      },
    ],
  },
  faq: {
    headline: 'Questions we hear.',
    items: [
      {
        question: 'What does AI transformation actually mean?',
        answer: 'It means your business runs differently six months from now. Processes that drain hours happen automatically. Decisions that required guesswork get made with data. Your team focuses on work that matters. That\'s transformation, not a slide deck about it.',
      },
      {
        question: 'How long does this take?',
        answer: 'It depends on scope. Initial diagnostics take 1-2 weeks. Implementation of first systems typically 2-4 weeks. We move at startup speed, not consultant speed.',
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
        answer: 'Honestly? It depends on what you need. A focused automation might be a fixed project. An ongoing transformation partnership looks different. We don\'t publish pricing because we don\'t sell packages. We solve problems. Let\'s talk and we\'ll give you a straight answer.',
      },
    ],
  },
  cta: {
    headline: 'Ready when you are.',
    subheadline: 'One conversation. No pitch, no pressure, just clarity on what AI can do for your business.',
    button: 'Start the Conversation',
  },
};

// Pillars (legacy - for backwards compatibility)
export const PILLARS = [
  {
    id: 'discover',
    title: 'Discover',
    description: COPY.pillars.items[0].description,
    videoSrc: '/videos/pillar-discover.mp4',
  },
  {
    id: 'build',
    title: 'Build',
    description: COPY.pillars.items[1].description,
    videoSrc: '/videos/pillar-build.mp4',
  },
  {
    id: 'scale',
    title: 'Scale',
    description: COPY.pillars.items[2].description,
    videoSrc: '/videos/pillar-scale.mp4',
  },
];

// FAQs (legacy - for backwards compatibility)
export const FAQS = COPY.faq.items;

// Founders (legacy - for backwards compatibility)
export const FOUNDERS = [
  {
    name: 'Sebastian Tamburro',
    title: 'CEO',
    bio: 'Background in AI/automation, founding story, approach to client partnerships. [To be provided]',
    linkedin: 'https://www.linkedin.com/in/sebastian-tamburro-694530287',
  },
  {
    name: 'Dom Joseph',
    title: 'COO',
    bio: 'Background, operational expertise, role in transformation delivery. [To be provided]',
    linkedin: 'https://www.linkedin.com/in/dom-joseph1130/',
  },
];

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
  title: 'FlowMatrix AI | AI Transformation & Business Automation',
  description: 'FlowMatrix AI architects and executes AI transformation for businesses. We build custom AI systems that become permanent competitive advantages. Fast, permanent, compounding results.',
  ogImage: 'https://flowmatrixai.com/flowmatrix-logo.webp',
  keywords: 'FlowMatrix AI, FlowMatrix, Flow Matrix AI, AI transformation, business automation, AI consulting, custom AI development, AI systems, automation consulting',
  siteName: 'FlowMatrix AI',
  twitterHandle: '@flowmatrix_ai',
};
