import React from "react";

const Footer = () => {
const productLinks = [
{ label: "Overview", href: "#product" },
{ label: "How it works", href: "#how-it-works" },
{ label: "Why AccessFlow", href: "#problem" },
];

const securityLinks = [
{ label: "Access control", href: "#security" },
{ label: "Temporary permissions", href: "#security" },
{ label: "Audit trail", href: "#security" },
];

return ( <footer className="relative mt-16 px-6 pb-6 sm:px-8 lg:px-12">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_12px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">

    {/* Brand & Navigation */}
    <div className="grid gap-12 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:px-14">

      {/* Brand Panel */}
      <div>
        <a href="#product" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#172554] text-base font-bold text-white shadow-lg shadow-blue-950/15">
            A
          </span>

          <span className="text-xl font-semibold tracking-tight text-slate-900">
            AccessFlow<span className="text-blue-600">.</span>
          </span>
        </a>

        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
          Temporary access, without the permanent risk. Give teams a
          controlled way to request, approve and manage resource access.
        </p>

        {/* Product principle */}
        <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/70 px-3.5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <span className="text-xs font-medium text-emerald-800">
            Access by need, not by default.
          </span>
        </div>
      </div>

      {/* Product Navigation */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
          Product
        </h3>

        <ul className="mt-5 space-y-4">
          {productLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}
                <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Security Navigation */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
          Security
        </h3>

        <ul className="mt-5 space-y-4">
          {securityLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}
                <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-200/80 bg-slate-50/70 px-7 py-5 sm:px-10 lg:px-14">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} AccessFlow. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Request
            <span className="text-slate-300">/</span>
            Approve
            <span className="text-slate-300">/</span>
            Expire
          </span>

          <a
            href="#product"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            aria-label="Back to top"
            title="Back to top"
          >
            ↑
          </a>
        </div>

      </div>
    </div>

  </div>
</footer>


);
};

export default Footer;
