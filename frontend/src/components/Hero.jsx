import React from "react";

function Hero() {
  return (<section
    id="product"
    className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
  > <div className="mx-auto w-full max-w-7xl"> <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
    {/* Eyebrow */}
    <div
      className="mb-7 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--text-muted)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 10px var(--accent)",
        }}
      />

      Temporary access management
    </div>

    {/* Main Heading */}
    <h1
      className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]"
      style={{
        color: "var(--text)",
      }}
    >
      Access when you need it.
      <br />

      <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
        Gone when you don't.
      </span>
    </h1>

    {/* Description */}
    <p
      className="mt-7 max-w-2xl text-base leading-7 sm:text-lg md:leading-8"
      style={{
        color: "var(--text-muted)",
      }}
    >
      AccessFlow gives teams a controlled way to request, approve,
      grant and revoke temporary access to critical resources.
    </p>

    {/* CTA Buttons */}
    <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">

      {/* Primary CTA */}
      <a
        href="/register"
        className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/25"
        style={{
          backgroundColor: "#315FEA",
          color: "#FFFFFF",
          boxShadow: "0 10px 30px rgba(49, 95, 234, 0.30)",
        }}
      >
        Get started

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* Secondary CTA */}
      <a
        href="#how-it-works"
        className="inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/15"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        See how it works
      </a>
    </div>

    {/* Trust / Status Row */}
    <div
      className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs"
      style={{
        color: "var(--text-muted)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: "#22c55e",
            boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)",
          }}
        />

        Built for controlled access
      </div>

      <span
        className="hidden h-1 w-1 rounded-full sm:block"
        style={{
          backgroundColor: "var(--border)",
        }}
      />

      <div>
        Request · Approve · Grant · Revoke
      </div>

      <span
        className="hidden h-1 w-1 rounded-full sm:block"
        style={{
          backgroundColor: "var(--border)",
        }}
      />

      <div>
        Every action audited
      </div>
    </div>
  </div>

      {/* Bottom Visual Anchor */}
      <div className="mt-16 flex justify-center sm:mt-20">
        <div
          className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em]"
          style={{
            color: "var(--text-muted)",
            opacity: 0.75,
          }}
        >
          <span
            className="h-5 w-px"
            style={{
              backgroundColor: "var(--border)",
            }}
          />

          Explore AccessFlow

          <span
            className="h-5 w-px"
            style={{
              backgroundColor: "var(--border)",
            }}
          />
        </div>
      </div>
    </div>
  </section>


  );
}

export default Hero;
