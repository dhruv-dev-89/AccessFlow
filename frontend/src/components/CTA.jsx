
import React from 'react'

const CTA = () => {
  return (
    <div className="relative mt-0 overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-white via-[#F5F7FF] to-[#EAF1FF] px-6 py-8 text-center shadow-[0_16px_50px_rgba(30,64,175,0.07)] md:px-12 md:py-10">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl"></div>

      <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-2xl">

        {/* Badge */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          Secure Access. Simplified.
        </span>

        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#172554] md:text-4xl lg:text-[44px]">
          Ready to Take Control of Access?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
          Simplify access requests, approvals, and permissions — all in one place.
          Keep your organization secure without slowing your team down.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#315FEA] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#254ED1] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Get Started

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button className="rounded-xl border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Explore Security
          </button>

        </div>

        {/* Trust Indicators */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span>
            Controlled access
          </span>

          <span className="inline-flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span>
            Time-bound permissions
          </span>

          <span className="inline-flex items-center gap-1.5">
            <span className="text-emerald-600">✓</span>
            Auditable actions
          </span>
        </div>

      </div>
    </div>
  )
}

export default CTA

