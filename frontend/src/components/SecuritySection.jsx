import React from "react";

const features = [
  {
    number: "01",
    title: "Controlled approvals",
    description:
      "Access requests go through an authorized approval process.",
  },
  {
    number: "02",
    title: "Time-bound access",
    description:
      "Permissions are granted for an approved duration, not indefinitely.",
  },
  {
    number: "03",
    title: "Traceable activity",
    description:
      "Keep a clear record of requests, decisions and access changes.",
  },
];

function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Security by design
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#172554] sm:text-5xl lg:text-6xl">
              Access that's
              <br />
              controlled.
              <br />

              <span className="text-[#315FEA]">
                Security that's visible.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              Every permission should have a purpose, an approval
              and a clear endpoint. AccessFlow brings these steps
              into one accountable workflow.
            </p>

            {/* Feature list */}
            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.number} className="flex gap-4">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-semibold text-blue-700">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#172554] sm:text-base">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            <a
              href="#how-it-works"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#315FEA] transition-colors hover:text-blue-800"
            >
              Explore the workflow

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* RIGHT: Access Control Visual */}
          <div className="relative">

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-8 rounded-full bg-blue-200/40 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-blue-100/80 bg-white/90 p-5 shadow-[0_25px_80px_rgba(30,64,175,0.10)] backdrop-blur-xl sm:p-7">

              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    ACCESSFLOW / SECURITY
                  </p>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#172554]">
                    Access control
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#315FEA]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m9 12 2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

              </div>

              {/* Resource summary */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-500">
                      Protected resource
                    </p>

                    <p className="mt-1.5 font-semibold text-[#172554]">
                      Production Database
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
                    APPROVED
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-slate-100 bg-white p-3">
                    <p className="text-xs text-slate-400">
                      Access policy
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-slate-700">
                      Time-bound
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-3">
                    <p className="text-xs text-slate-400">
                      Approval
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-slate-700">
                      Required
                    </p>
                  </div>

                </div>
              </div>

              {/* Workflow timeline */}
              <div className="mt-7">

                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#172554]">
                    Access lifecycle
                  </h4>

                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Workflow preview
                  </span>
                </div>

                <div className="mt-5 space-y-0">

                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                        1
                      </span>

                      <span className="my-1 h-7 w-px bg-blue-100" />
                    </div>

                    <div className="pb-5">
                      <p className="text-sm font-medium text-slate-800">
                        Request submitted
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Resource and purpose identified
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                        2
                      </span>

                      <span className="my-1 h-7 w-px bg-blue-100" />
                    </div>

                    <div className="pb-5">
                      <p className="text-sm font-medium text-slate-800">
                        Approval reviewed
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Decision handled by an authorized approver
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-semibold text-emerald-700">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Temporary access
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Access follows the approved duration
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom strip */}
              <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                Designed for accountable access management
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
