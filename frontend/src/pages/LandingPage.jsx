import Background from "@/pages/Background";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WorkflowSection from "../components/WorkflowSection";
import Navbar from "../components/Navbar";
import SecuritySection from "@/components/SecuritySection";


function LandingPage() {
  return (
    <>
      <Background />

      <div className="relative z-10">
        <Navbar />
        <main>

          <Hero />


          <section
            id="problem"
            className="relative isolate overflow-hidden px-6 py-24 sm:px-8 sm:py-28 lg:px-12"
          >
            {/* Section atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-slate-50/40 to-white/20"
            />

            <div className="mx-auto max-w-7xl">


              {/* Heading */}
              <div className="mb-14 max-w-3xl lg:mb-16">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/75 px-3.5 py-2 shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                    Why AccessFlow
                  </span>
                </div>

                <h2
                  className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
                  style={{ color: "var(--text)" }}
                >
                  Access shouldn't be
                  <br />
                  <span className="text-slate-500">permanent.</span>
                </h2>

                <p
                  className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
                  style={{ color: "var(--text-muted)" }}
                >
                  Teams often give people access to critical resources and forget about
                  it. AccessFlow turns that uncontrolled process into a clear,
                  time-bound and auditable workflow.
                </p>
              </div>

              {/* Comparison cards */}
              <div className="grid items-stretch gap-6 lg:grid-cols-2">

                {/* WITHOUT ACCESSFLOW */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-rose-200/70 via-white/20 to-slate-200/50 opacity-80" />

                  <div className="relative h-full overflow-hidden rounded-[25px] border border-rose-200/70 bg-white/85 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-9">

                    {/* Decorative accent */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rose-400/80 via-rose-200/50 to-transparent" />

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                          The old way
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                          Without AccessFlow
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-[11px] font-semibold text-rose-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                        Risk
                      </span>
                    </div>

                    <div className="mt-9 space-y-7">
                      <ProblemRow
                        number="01"
                        title="Permanent access"
                        description="Access stays active long after the task is complete."
                      />

                      <ProblemRow
                        number="02"
                        title="Manual approvals"
                        description="Requests get buried across chats, emails and messages."
                      />

                      <ProblemRow
                        number="03"
                        title="No clear history"
                        description="It's difficult to know who had access and why."
                      />
                    </div>

                    <div className="mt-9 border-t border-rose-100 pt-5">
                      <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-[11px] font-bold text-rose-600">
                          !
                        </span>
                        More access. More uncertainty. More risk.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WITH ACCESSFLOW */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-blue-300/70 via-indigo-200/40 to-emerald-200/50 opacity-90 blur-[1px]" />

                  <div className="relative h-full overflow-hidden rounded-[25px] border border-blue-200/80 bg-gradient-to-br from-white/95 via-blue-50/85 to-indigo-50/75 p-7 shadow-[0_22px_70px_rgba(37,99,235,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(37,99,235,0.14)] sm:p-9">

                    {/* Ambient glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px] transition-opacity duration-300 group-hover:bg-blue-400/20"
                    />

                    {/* Decorative accent */}
                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400" />

                    <div className="relative flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                          The AccessFlow way
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                          With AccessFlow
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Controlled
                      </span>
                    </div>

                    <div className="relative mt-9 space-y-7">
                      <SolutionRow
                        number="01"
                        title="Request access"
                        description="Users request exactly what they need and explain why."
                      />

                      <SolutionRow
                        number="02"
                        title="Approve with context"
                        description="Authorized approvers review and decide."
                      />

                      <SolutionRow
                        number="03"
                        title="Grant temporarily"
                        description="Access expires automatically when the job is done."
                      />
                    </div>

                    <div className="relative mt-9 border-t border-blue-200/70 pt-5">
                      <p className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                          ✓
                        </span>
                        Every action is recorded in the audit trail.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>


          <section
            id="how-it-works"
            className="relative isolate overflow-hidden border-t border-slate-200/70 bg-slate-50/30 px-4 py-16 backdrop-blur-[2px] sm:px-6 sm:py-20 lg:px-8"
          >
            <WorkflowSection />
          </section>
          <section id="security" className="scrolla">
            <SecuritySection />
          </section>
          <section className="relative px-6 py-12 sm:px-8 lg:px-12">
            <CTA />
          </section>
          <Footer />

        </main>
      </div>
    </>
  );
}



function ProblemRow({
  number,
  title,
  description,
}) {
  return (
    <div className="flex gap-4">
      <span
        className="pt-0.5 text-[10px] font-semibold"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {number}
      </span>

      <div>
        <h3
          className="text-sm font-semibold"
          style={{
            color: "var(--text)",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-1.5 max-w-sm text-xs leading-5"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}


/* ============================================================
   SOLUTION ROW
============================================================ */

function SolutionRow({
  number,
  title,
  description,
}) {
  return (
    <div className="flex gap-4">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold"
        style={{
          backgroundColor: "rgba(37, 99, 235, 0.10)",
          color: "var(--accent)",
        }}
      >
        {number}
      </span>

      <div>
        <h3
          className="text-sm font-semibold"
          style={{
            color: "var(--text)",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-1.5 max-w-sm text-xs leading-5"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default LandingPage;