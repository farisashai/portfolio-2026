import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Resume | Faris Ashai",
  description: "Resume — Faris Ashai, Frontend Systems Engineer.",
};

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 11px !important; }
          .resume-container { padding: 0 !important; max-width: 100% !important; }
          .resume-content { gap: 1.25rem !important; padding: 0 !important; }
          .resume-section { gap: 0.5rem !important; }
          * { color: black !important; }
          h1 { font-size: 1.75rem !important; }
          h2 { font-size: 0.7rem !important; }
          h3 { font-size: 0.85rem !important; }
        }
      `}</style>
      <Container className="flex-1 max-w-3xl resume-container">
        <div className="flex flex-col gap-16 py-8 sm:py-12 resume-content">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-3xl sm:text-4xl font-medium italic tracking-tight">
              Faris Ashai
            </h1>
            <p className="text-base text-muted-foreground">
              Frontend Systems Engineer
            </p>
            <p className="text-sm text-muted-foreground/70 font-mono mt-2">
              New York, NY
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground/70 font-mono">
              <span>faris@joinformal.com</span>
              <span>farisashai.me</span>
              <span>github.com/farisashai</span>
              <span>linkedin.com/in/farisashai</span>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Summary
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Frontend-focused product engineer building performant interfaces
              and resilient systems for complex infrastructure products. Deep
              systems literacy across APIs, databases, caching, and distributed
              workflows. Optimize for clarity, determinism, and long-term
              maintainability.
            </p>
          </div>

          {/* Experience */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 resume-section">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Experience
            </h2>
            <div className="flex flex-col gap-10">
              {/* Formal */}
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium text-foreground">
                      Founding Product Engineer
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground/70 tabular-nums shrink-0">
                      Jul 2025 — Present
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Formal</p>
                </div>
                <ul className="flex flex-col gap-2.5 text-base text-muted-foreground">
                  <BulletItem>
                    Own frontend architecture and UX systems for a security
                    infrastructure control plane serving 50+ enterprise customers
                    and 6,000+ weekly active users.
                  </BulletItem>
                  <BulletItem>
                    Rebuilt a 40+ page application from unstable prototype;
                    established cohesive information architecture with typed URL
                    state, search, filtering, pagination, and deterministic cache
                    invalidation.
                  </BulletItem>
                  <BulletItem>
                    Relocated policy parsing client-side via Go to WebAssembly,
                    reducing latency from 300ms API round-trips to &lt;10ms;
                    designed SHA-based artifact invalidation with Vercel caching.
                  </BulletItem>
                  <BulletItem>
                    Built hybrid visual/code Rego editor on OPA&apos;s Go AST
                    ensuring zero-side-effect edits while preserving formatting
                    and comments.
                  </BulletItem>
                  <BulletItem>
                    Engineered 100K+ row virtualized observability surface with
                    infinite scroll and multi-dimensional filtering.
                  </BulletItem>
                  <BulletItem>
                    Designed self-evolving CI with 50+ deterministic checks
                    encoding architectural invariants, preventing entire classes
                    of regressions.
                  </BulletItem>
                </ul>
              </div>

              {/* Apple FTE */}
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium text-foreground">
                      iOS Power Software Engineer
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground/70 tabular-nums shrink-0">
                      Aug 2023 — Jul 2025
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Apple &middot; Core Operating Systems
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-base text-muted-foreground">
                  <BulletItem>
                    Redesigned regression analysis pipeline from hours to ~1
                    minute via parallelized fetching and config-driven
                    comparisons across 1,000+ devices.
                  </BulletItem>
                  <BulletItem>
                    Replaced CLI tooling with a Next.js + FastAPI platform backed
                    by Postgres and Kubernetes, enabling interactive debugging
                    and faster root-cause identification.
                  </BulletItem>
                  <BulletItem>
                    Rewrote system log parser powering regression workflows;
                    drove resolution of 200+ critical performance regressions
                    across iOS releases.
                  </BulletItem>
                </ul>
              </div>

              {/* Apple Intern */}
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-medium text-foreground">
                      Software Engineering Intern
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground/70 tabular-nums shrink-0">
                      Jun 2022 — Sep 2022
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Apple &middot; Core Operating Systems
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-base text-muted-foreground">
                  <BulletItem>
                    Built internal React + MongoDB application for managing
                    power/performance test configurations with end-to-end
                    authentication and zero-downtime data management.
                  </BulletItem>
                </ul>
              </div>
            </div>
          </div>

          {/* Writing */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Writing
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-foreground font-medium">
                Editing Code Visually Without Sacrificing Fidelity
              </p>
              <p className="text-sm text-muted-foreground">
                Hybrid visual/code editor built on OPA&apos;s Go AST compiled to
                WebAssembly — why regex fails, DSL design for zero-side-effect
                edits, and sub-10ms in-browser parsing.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Leadership
            </h2>
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground">
                <span className="font-medium text-foreground">
                  Vice President of Development
                </span>{" "}
                — ACM @ UC San Diego. Led 20+ engineers building tools for
                3,000+ students. Hackathon Director (120+ participants). MLH Top
                50 Hacker (2022).
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Education
            </h2>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-foreground">
                B.S. Math &amp; Computer Science
              </p>
              <p className="text-sm text-muted-foreground">
                UC San Diego &middot; GPA 3.86
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
              Skills
            </h2>
            <div className="flex flex-col gap-3 text-base text-muted-foreground">
              <div>
                <span className="font-medium text-foreground text-sm">
                  Core
                </span>{" "}
                <span className="mx-1 text-border">|</span> TypeScript, React,
                Next.js, State Modeling, WebAssembly
              </div>
              <div>
                <span className="font-medium text-foreground text-sm">
                  Systems
                </span>{" "}
                <span className="mx-1 text-border">|</span> PostgreSQL, Redis,
                Temporal, Kubernetes, SQL
              </div>
              <div>
                <span className="font-medium text-foreground text-sm">
                  Tooling
                </span>{" "}
                <span className="mx-1 text-border">|</span> CI Design, AST
                Tooling, Vitest, Cypress, Python
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}
