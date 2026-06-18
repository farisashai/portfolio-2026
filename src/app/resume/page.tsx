import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { PrintButton } from "./print-button";

const SITE_URL = "https://farisashai.me";

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  bullets: ReactNode[];
}

interface WritingItem {
  title: string;
  description: string;
  slug: string;
}

interface LeadershipItem {
  organization: string;
  role: string;
  dates: string;
  bullets: string[];
}


const experience: ExperienceItem[] = [
  {
    company: "Formal",
    role: "Head of Frontend Engineering, Founding Product Engineer",
    dates: "2025–Present",
    bullets: [
      "Owned product design, frontend architecture, and customer-facing platform development, rebuilding a fragmented platform into a unified enterprise control plane used by 50+ organizations including Cursor, Ramp, and Notion.",
      <>
        Developed visual editors for Rego policies, CEL expressions, and workflow
        YAML that{" "}
        <Highlight>generated valid code with real-time data-UI sync</Highlight>,
        allowing non-experts to configure complex security workflows while
        preserving a code-first source of truth.
      </>,
      <>
        Designed and shipped the observability platform for investigating security
        events, including Quickwit query parsing, dynamic field filtering,
        natural-language-assisted search, virtualized log exploration, and
        normalization of LLM agent telemetry across providers into a{" "}
        <Highlight>unified auditing model at scale</Highlight> for prompts,
        reasoning traces, tool calls, and policy violations.
      </>,
      <>
        Implemented a <Highlight>native AI agent product</Highlight> with tool
        execution, permission-aware navigation, page context, and API access,
        enabling natural-language interaction with platform resources while
        enforcing existing authorization boundaries.
      </>,
      <>
        Migrated the control plane from <Highlight>Next.js to a Vite SPA</Highlight>{" "}
        with API-driven authentication, simplifying deployment, reducing
        infrastructure costs, strengthening security boundaries, and improving
        responsiveness.
      </>,
      "Created a custom linting framework with 125+ rules enforcing architectural patterns, React best practices, and design system usage, allowing AI-generated code to remain maintainable within a rapidly growing codebase.",
    ],
  },
  {
    company: "Apple",
    role: "iOS Power Software Engineer",
    dates: "2023–2025",
    bullets: [
      <>
        Designed{" "}
        <Highlight>
          power integration tests used to detect battery life regressions
        </Highlight>{" "}
        across major iOS features, modeling real-world device usage and
        identifying top issues on latest daily shipped internal releases.
      </>,
      "Investigated and triaged hundreds of high-priority power regressions across iOS releases by querying PowerLog’s SQLite databases, correlating with system log archives and OS-level telemetry to identify root causes, and partnering with teams across Spotlight, Siri, Photos, scheduling systems, and Core OS components on fixes.",
      <>
        Architected and built a full-stack analysis platform that{" "}
        <Highlight>
          automated data ingestion, normalization, comparison, and reporting
        </Highlight>{" "}
        workflows, reducing recurring investigations from days of manual effort
        to minutes while supporting data generated across hundreds of engineering
        teams.
      </>,
      "Re-architected a legacy Jupyter notebook-based investigation workflow into a parallelized CLI with local caching and configurable analysis pipelines, reducing processing time for large datasets from roughly three hours to under thirty seconds.",
      "Performed statistical analysis of large-scale power datasets using Pandas, Jupyter, and Seaborn, identifying sources of measurement variance and improving confidence in regression detection across noisy real-device environments.",
      "Mentored four engineers on performance investigations, debugging methodologies, tooling development, and collaboration with cross-functional software teams.",
    ],
  },
];

const skills = [
  {
    label: "Languages",
    items: "HTML, CSS, TypeScript, JavaScript, Python, Go, SQL, Swift, Bash, C",
  },
  {
    label: "Frontend",
    items:
      "React, Next.js, Vite, Webpack, Tailwind, SCSS, Storybook, RTL",
  },
  {
    label: "Backend & APIs",
    items:
      "Node.js, Express, FastAPI, Flask, Django, REST, gRPC",
  },
  {
    label: "Databases",
    items: "PostgreSQL, SQLite, Redis, MongoDB",
  },
  {
    label: "Infrastructure & Cloud",
    items:
      "AWS, Cloudflare, Vercel, Terraform, Docker, Kubernetes",
  },
  {
    label: "Data & Analytics",
    items: "Pandas, Jupyter, Seaborn, Matplotlib",
  },
  {
    label: "Workflows & Queues",
    items: "Temporal, Celery, RabbitMQ, Kafka",
  },
  {
    label: "Tools",
    items: "Git, Figma, Xcode, Postman, CI/CD",
  },
];

const writing: WritingItem[] = [
  {
    title: "Design Principles for Frontend Engineers",
    description:
      "Designing trustworthy, low-friction enterprise software through consistency, hierarchy, and progressive disclosure.",
    slug: "design-principles-frontend",
  },
  {
    title: "Editing Code Visually Without Sacrificing Fidelity",
    description:
      "Building visual abstractions on top of code-first systems while preserving correctness and auditability.",
    slug: "visual-rego-editor",
  },
  {
    title: "An Operating Environment Built for Agents",
    description:
      "Designing a fail-proof environment for agentic coding on serious products.",
    slug: "agent-operating-environment",
  },
];

const leadership: LeadershipItem[] = [
  {
    organization: "ACM @ UC San Diego",
    role: "Vice President of Development",
    dates: "2022–2023",
    bullets: [
      "Led frontend architecture across a multi-repo ecosystem serving 1,000+ students, including a membership portal, public marketing site, internal automation tools, and integration services used for event and engagement workflows.",
      "Designed and built systems for event attendance, rewards, and member engagement using QR-based check-ins and structured state updates, replacing manual organizer workflows with real-time tracked participation.",
      "Introduced role-based frontend architecture and routing patterns to enforce permissions and prevent sensitive UI exposure across multiple user types.",
      "Built and maintained a high-performance marketing site using ISR and static generation strategies to support frequently updated event data with minimal latency and strong SEO performance.",
      "Developed an internal integration layer connecting Notion, Discord, and Google Calendar APIs to standardize external workflows and reduce duplicated authentication and tooling across projects.",
    ],
  },
  {
    organization: "TritonHacks",
    role: "Hackathon Director",
    dates: "2021–2022",
    bullets: [
      "Directed the first in-person TritonHacks hackathon, designing end-to-end operational systems for registration, judging, mentorship matching, and event execution in the absence of prior organizational infrastructure.",
      "Built and managed event workflow systems using lightweight tooling (spreadsheets + Discord coordination), enabling structured execution across hundreds of participants, judges, and mentors.",
      "Established partnerships with UCSD CS departments and external sponsors, defining repeatable event structure (tracks, judging rubrics, and prize flow) that persisted across subsequent years of the event.",
    ],
  },
];

function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong className="font-semibold text-foreground">{children}</strong>
  );
}

function SectionDivider() {
  return <hr className="border-border my-6 print:hidden" />;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
      {children}
    </h2>
  );
}

function ResumeHeader() {
  return (
    <header className="resume-section flex flex-col gap-1.5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-serif text-3xl font-medium italic tracking-tight text-foreground">
            Faris Ashai
          </h1>
        </div>
        <PrintButton />
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        <span className="hidden print:contents">
          <ExternalLink href={SITE_URL}>farisashai.me</ExternalLink>
          <span className="mx-2 text-border">•</span>
        </span>
        <ExternalLink href="https://github.com/farisashai">GitHub</ExternalLink>
        <span className="mx-2 text-border">•</span>
        <ExternalLink href="https://www.linkedin.com/in/farisashai/">
          LinkedIn
        </ExternalLink>
        <span className="mx-2 text-border">•</span>
        <a
          href="mailto:farisashai@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          farisashai@gmail.com
        </a>
      </p>
    </header>
  );
}

function ExperienceSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Experience</SectionHeading>
      <div className="flex flex-col gap-5">
        {experience.map((item) => (
          <article key={item.company + item.role} className="resume-entry">
            <div className="flex justify-between items-baseline gap-4 mb-1">
              <span className="font-medium text-foreground">{item.company}</span>
              <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                {item.dates}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{item.role}</p>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground leading-relaxed">
              {item.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="mt-[0.55rem] h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function WritingSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Selected Writing &amp; Ideas</SectionHeading>
      <div className="flex flex-col gap-4">
        {writing.map((item) => (
          <p key={item.slug} className="text-sm text-foreground leading-relaxed">
            <a
              href={`${SITE_URL}/journal/${item.slug}`}
              className="resume-writing-link font-medium underline underline-offset-4 decoration-foreground/35 hover:decoration-foreground transition-colors"
            >
              {item.title}
            </a>
            <span className="text-muted-foreground">
              {" "}
              — {item.description}
            </span>
          </p>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Leadership</SectionHeading>
      <div className="flex flex-col gap-5">
        {leadership.map((item) => (
          <article
            key={item.organization + item.role}
            className="resume-entry"
          >
            <div className="flex justify-between items-baseline gap-4 mb-1">
              <span className="font-medium text-foreground">
                {item.organization}
              </span>
              <span className="text-sm text-muted-foreground tabular-nums shrink-0">
                {item.dates}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{item.role}</p>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground leading-relaxed">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span className="mt-[0.55rem] h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-col gap-1.5 text-sm text-muted-foreground leading-relaxed">
        {skills.map(({ label, items }) => (
          <p key={label}>
            <span className="font-medium text-foreground">{label}: </span>
            {items}
          </p>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Education</SectionHeading>
      <div className="resume-entry flex justify-between items-start gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-foreground">
            UC San Diego
          </span>
          <span className="text-sm text-muted-foreground">
            B.S. in Mathematics and Computer Science · GPA: 3.86
          </span>
        </div>
        <span className="text-sm text-muted-foreground tabular-nums shrink-0">
          2019–2023
        </span>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="resume-section">
      <SectionHeading>Awards</SectionHeading>
      <div className="resume-entry flex justify-between items-start gap-4">
        <div className="flex flex-col gap-0.5">
          <a
            href="https://top.mlh.io/2022/profiles/faris-ashai"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-writing-link text-sm font-medium underline underline-offset-4 decoration-foreground/35 hover:decoration-foreground transition-colors w-fit"
          >
            Top 50 Hacker
          </a>
          <span className="text-sm text-muted-foreground">
            Major League Hacking
          </span>
        </div>
        <span className="text-sm text-muted-foreground tabular-nums shrink-0">
          2022
        </span>
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-page py-8 sm:py-12">
      <Container className="max-w-[var(--resume-max-width)] px-6 md:px-8">
        <main className="resume flex flex-col">
          <ResumeHeader />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <WritingSection />
          <SectionDivider />
          <LeadershipSection />
          <SectionDivider />
          <EducationSection />
          <SectionDivider />
          <AwardsSection />
          <SectionDivider />
          <SkillsSection />
        </main>
      </Container>
    </div>
  );
}
