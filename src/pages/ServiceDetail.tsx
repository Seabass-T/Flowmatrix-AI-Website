import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import { SERVICE_PHASES, TALLY_FORM_ID } from '@/lib/constants';
import { TallyForm } from '@/components/shared/TallyForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Reveal, GlowOrb, LineSeparator, DotGrid, Aurora, TopologyLines, PerspectiveGrid, RadarSweep } from '@/components/ui/VisualEffects';

const SERVICE_CONTENT: Record<string, {
  problem: string;
  sections: { heading: string; body: string }[];
}> = {
  assessment: {
    problem: 'Most companies know something is off, but they lack visibility into what, where, and why. Without a clear picture, every dollar spent on technology is a gamble.',
    sections: [
      {
        heading: 'Three tiers, one purpose',
        body: 'Tier 1 examines a single process or workflow. Tier 2 covers your full technology stack and all SOPs. Tier 3 adds the human layer: how your people actually use the tools, where behavior creates bottlenecks, and what it would take to build software optimized for how they work.',
      },
      {
        heading: 'What you walk away with',
        body: 'A written report with executive summary, detailed findings, and prioritized recommendations. Plus an interactive Excalidraw whiteboard that maps the entire analysis visually: not a static PDF, but a living document your team can explore and share.',
      },
      {
        heading: 'Assessed through an AI lens',
        body: 'Every finding is evaluated through one question: can AI solve this? We don\'t just find problems. We map the path from manual process to intelligent system. The recommendations aren\'t "fix this spreadsheet." They\'re "here is how to turn this function into an AI-powered system."',
      },
      {
        heading: 'Risk reversal',
        body: 'If you proceed with any FlowMatrix build service, the assessment fee is credited as a down payment toward your first month. The assessment effectively costs nothing when you move forward.',
      },
    ],
  },
  'database-mobilization': {
    problem: 'When your data is locked inside a single platform, you are betting everything on one vendor. If the technology shifts, your data is stuck and switching costs are enormous.',
    sections: [
      {
        heading: 'A parallel intelligence layer',
        body: 'We create a comprehensive, AI-optimized instance of your company\'s data that lives independently from any single platform. It stays in sync with your source systems in real time. This is not a migration: you keep using your existing tools. What we build is a living copy of your knowledge, structured and ready for AI.',
      },
      {
        heading: 'Architecture follows data',
        body: 'The database infrastructure is designed around the specific characteristics of your data. Vector databases for unstructured knowledge. Graph databases for relational data. Any combination the data demands. Every design decision is made through the lens of how AI systems will need to access and use the information.',
      },
      {
        heading: 'Universal access layer',
        body: 'Your mobilized data is accessed through two interfaces: a personalized MCP server for structured queries and precise lookups, and vector embeddings with semantic search for fuzzy, contextual retrieval. Together, they cover the full spectrum of how AI systems need to access information.',
      },
      {
        heading: 'Living sync, not a snapshot',
        body: 'Data flows continuously from your existing tools into the mobilized infrastructure. Changes in the source systems are automatically reflected. The intelligence layer always represents the current state of your business.',
      },
    ],
  },
  'ai-implementation': {
    problem: 'Your team spends hours on tasks that follow patterns: reading emails, routing requests, chasing invoices, entering data. These patterns can be systematized. The time your people spend on repetition is time they don\'t spend on growth.',
    sections: [
      {
        heading: 'Automations and workflows',
        body: 'The foundation. Data syncs between platforms, scheduled reports, approval flows, triggered actions. Eliminates "someone has to remember to do this every Monday" tasks. Straightforward systems that remove manual, repetitive work.',
      },
      {
        heading: 'AI-powered workflows',
        body: 'Workflows that incorporate AI for tasks requiring judgment: document processing and extraction, content classification, meeting summarization, intelligent routing, data enrichment. Replaces tasks that require a human to read, interpret, and decide, but follow learnable patterns.',
      },
      {
        heading: 'Agentic systems',
        body: 'Autonomous AI agents that handle multi-step tasks independently. Research agents that gather and synthesize information. Operations agents that monitor and take corrective action. Knowledge agents that answer complex questions across your entire mobilized database.',
      },
      {
        heading: 'Development infrastructure',
        body: 'We install the same models, tools, and development environment FlowMatrix uses directly into your environment. Your team gains internal capability to create, customize, and expand on the systems we built. You stop renting capability and start owning it.',
      },
    ],
  },
  'personalized-software': {
    problem: 'All the intelligence, all the automation, all the data: it means nothing if the people who need it can\'t access it. Generic software forces your team to adapt to the tool. Personalized software adapts the tool to your team.',
    sections: [
      {
        heading: 'Designed for your people',
        body: 'The Tier 3 assessment reveals how your people actually work, not how a process diagram says they should. That insight directly shapes the software. Every screen, interaction, and navigation path reflects how the actual users think and operate.',
      },
      {
        heading: 'Powered by your data',
        body: 'The mobilized database means every piece of personalized software is fueled by your company\'s own knowledge: live, current, and comprehensive. Dashboards display real metrics from your actual systems in real time. Search interfaces query your entire knowledge base.',
      },
      {
        heading: 'AI-native from the ground up',
        body: 'This is not a traditional application with AI bolted on. Intelligence is woven into every interaction. The interface anticipates needs, surfaces relevant information, and adapts to context. Built on the same AI infrastructure that powers the backend systems.',
      },
      {
        heading: 'Internal, external, or both',
        body: 'Executive dashboards, operations management interfaces, client portals, customer-facing reporting, AI-powered support tools. The form factor depends on what your company needs. Internal teams and external users can interact through different interfaces connected to the same data.',
      },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  // Determine route from pathname since we use individual routes
  const path = window.location.pathname.replace('/', '');
  const actualSlug = slug || path;

  const phaseIndex = SERVICE_PHASES.findIndex((p) => p.id === actualSlug);
  if (phaseIndex === -1) return null;

  const phase = SERVICE_PHASES[phaseIndex];
  const content = SERVICE_CONTENT[actualSlug];
  const nextPhase = SERVICE_PHASES[phaseIndex + 1];
  const prevPhase = phaseIndex > 0 ? SERVICE_PHASES[phaseIndex - 1] : null;

  return (
    <>
      <Helmet>
        <title>{phase.title} | FlowMatrix AI</title>
        <meta name="description" content={phase.description} />
      </Helmet>

      <div className="bg-black min-h-screen">
        <Navigation />

        {/* Hero */}
        <section ref={heroRef} className="relative pt-40 pb-20 px-6 overflow-hidden">
          <Aurora className="opacity-40" />
          {actualSlug === 'assessment' ? (
            <RadarSweep className="opacity-50" />
          ) : (
            <PerspectiveGrid className="opacity-30" />
          )}
          <TopologyLines className="opacity-50" />
          <GlowOrb className="top-0 right-[-200px]" color="accent" size="lg" />
          <DotGrid className="opacity-[0.02]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal isVisible={heroVisible} direction="up">
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm mb-10 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> All Services
              </Link>
            </Reveal>
            <Reveal isVisible={heroVisible} delay={100} direction="up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium uppercase tracking-[0.2em] mb-6">
                Phase {phase.phase}
              </span>
            </Reveal>
            <Reveal isVisible={heroVisible} delay={200} direction="up">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95]">
                {phase.title}
              </h1>
            </Reveal>
            <Reveal isVisible={heroVisible} delay={350} direction="up">
              <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
                {phase.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Problem statement */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal isVisible={heroVisible} delay={500} direction="up">
              <div className="relative pl-8 border-l-2 border-accent/40">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 leading-[1.3] font-light">
                  {content.problem}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content sections */}
        <section ref={contentRef} className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-24">
              {content.sections.map((section, index) => (
                <Reveal key={index} isVisible={contentVisible} delay={index * 150} direction="up">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                    <div className="text-white/20 font-mono text-sm pt-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                        {section.heading}
                      </h2>
                      <p className="text-lg text-white/60 leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <LineSeparator className="mx-6" />

        {/* Navigation to other phases */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            {prevPhase && (
              <Link
                to={prevPhase.href}
                className="card-glow flex-1 rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Previous</span>
                <span className="block text-lg text-white mt-2 group-hover:text-white/80">
                  Phase {prevPhase.phase}: {prevPhase.title}
                </span>
              </Link>
            )}
            {nextPhase && (
              <Link
                to={nextPhase.href}
                className="card-glow flex-1 rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group text-right"
              >
                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Next</span>
                <span className="flex items-center justify-end gap-2 text-lg text-white mt-2 group-hover:text-white/80">
                  Phase {nextPhase.phase}: {nextPhase.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 relative overflow-hidden">
          <Aurora className="opacity-30" />
          {actualSlug === 'assessment' ? (
            <RadarSweep className="opacity-35" />
          ) : (
            <PerspectiveGrid className="opacity-25" />
          )}
          <GlowOrb className="top-[-100px] left-1/2 -translate-x-1/2" color="accent" size="lg" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Start with a conversation.
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Tell us what you are working on. We will tell you honestly whether we can help.
            </p>
            <div className="card-glow rounded-2xl p-6 md:p-8 bg-white/[0.02]">
              <TallyForm formId={TALLY_FORM_ID} className="mx-auto" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
