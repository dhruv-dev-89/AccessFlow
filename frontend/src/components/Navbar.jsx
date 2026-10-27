import { useEffect, useState } from "react";
import GooeyNav from "./GooeyNav";
import { Link } from "react-router-dom";

function Navbar() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const [activeSection, setActiveSection] = useState(() => {
    return window.location.hash || "#product";
  });

  // Theme
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // Detect active section from URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#product");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navItems = [
    {
      label: "Product",
      href: "#product",
    },
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "Security",
      href: "#security",
    },
  ];

  const isActive = (href) => activeSection === href;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4"
        style={{
          backgroundColor: dark
            ? "rgba(7, 12, 27, 0.92)"
            : "rgba(255, 255, 255, 0.92)",

          borderColor: dark
            ? "rgba(91, 140, 255, 0.18)"
            : "rgba(15, 23, 42, 0.10)",

          boxShadow: dark
            ? "0 10px 40px rgba(0, 0, 0, 0.25)"
            : "0 10px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        {/* Logo */}
        <a
            href="#"
            
            className="flex items-center gap-2.5 pl-1.5"
          >
            {/* Logo */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-sm
                font-semibold
              "
              style={{
                backgroundColor: dark ? "#f8fafc" : "#111827",
                color: dark ? "#111827" : "#ffffff",

                boxShadow: dark
                  ? "0 0 24px rgba(91, 140, 255, 0.16)"
                  : "0 5px 18px rgba(15, 23, 42, 0.14)",
              }}
            >
              A
            </div>

            <span
              className="
                text-[15px]
                font-semibold
                tracking-[-0.02em]
              "
              style={{
                color: dark ? "#ffffff" : "#111827",
              }}
            >
              AccessFlow
            </span>
          </a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <GooeyNav items={navItems} initialActiveIndex={0}
            theme="light"
            size="md"
            frame
            particleCount={15}
            spread={56}
            animationTime={600}
            timeVariance={300}
            gooeyness={0.5}
            wobble={0.5}
            hoverEffect
            color="#DBEAFE"
            activeTextColor="#1D4ED8"
            onChange={(index, item) => console.log(index, item.label)}/>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200"
            style={{
              backgroundColor: dark
                ? "rgba(91, 140, 255, 0.10)"
                : "rgba(15, 23, 42, 0.05)",

              color: dark ? "#a9c0ff" : "#475569",
            }}
          >
            {dark ? (
              /* Sun */
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              /* Moon */
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Sign In */}
          <Link
            to={"/login"}
            className="rounded-xl px-3.5 py-2  text-[13px] font-medium transition-all duration-200"
            style={{
              color: dark ? "#e6ebf5" : "#334155",
            }}
          >
            Sign in
          </Link>

          {/* Get Started */}
          <Link  to={"/register"}
            className="rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all duration-200"
            style={{
              backgroundColor: dark ? "#f5f7fb" : "#2563eb",
              color: dark ? "#0a0d14" : "#ffffff",
              boxShadow: dark
                ? "0 4px 18px rgba(255, 255, 255, 0.08)"
                : "0 4px 18px rgba(37, 99, 235, 0.20)",
            }}
          >
            Get started
          </Link>
        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{
              backgroundColor: dark
                ? "rgba(91, 140, 255, 0.10)"
                : "rgba(15, 23, 42, 0.05)",
              color: dark ? "#a9c0ff" : "#475569",
            }}
          >
            {dark ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <MobileMenu
            dark={dark}
            navItems={navItems}
            activeSection={activeSection}
          />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ dark, navItems, activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{
          backgroundColor: dark
            ? "rgba(91, 140, 255, 0.10)"
            : "rgba(15, 23, 42, 0.05)",
          color: dark ? "#d7deed" : "#475569",
        }}
      >
        {open ? (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border p-2 shadow-2xl"
          style={{
            backgroundColor: dark
              ? "rgba(7, 12, 27, 0.97)"
              : "rgba(255, 255, 255, 0.97)",

            borderColor: dark
              ? "rgba(91, 140, 255, 0.18)"
              : "rgba(15, 23, 42, 0.10)",
          }}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3.5 py-3 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: active
                      ? dark
                        ? "rgba(71, 108, 220, 0.22)"
                        : "rgba(37, 99, 235, 0.10)"
                      : "transparent",

                    color: active
                      ? dark
                        ? "#ffffff"
                        : "#1d4ed8"
                      : dark
                        ? "#d7deed"
                        : "#475569",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div
            className="my-2 h-px"
            style={{
              backgroundColor: dark
                ? "rgba(255,255,255,0.08)"
                : "rgba(15,23,42,0.08)",
            }}
          />

          <a
            href="/login"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3.5 py-3 text-sm font-medium"
            style={{
              color: dark ? "#e6ebf5" : "#334155",
            }}
          >
            Sign in
          </a>

          <a
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl px-3.5 py-3 text-center text-sm font-semibold"
            style={{
              backgroundColor: dark ? "#f5f7fb" : "#2563eb",
              color: dark ? "#0a0d14" : "#ffffff",
            }}
          >
            Get started
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;