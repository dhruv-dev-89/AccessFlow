
import { useState } from "react";

const Login = () => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const toggleTheme = () => {
    const nextTheme = !dark;
    setDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    // Login API integration will be added here.
    console.log({
      email: form.email,
      password: form.password,
      keepSignedIn,
    });
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#080C17]" : "bg-[#F4F6FC]"
      }`}
    >
      <div className="mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 items-center gap-8 p-4 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:p-5 xl:gap-20 xl:p-8">

        {/* LEFT BRANDING PANEL */}

        <section className="relative hidden min-h-[calc(100vh-64px)] overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#253A91] via-[#3C38A0] to-[#36258B] p-10 text-white sm:p-12 lg:flex lg:flex-col lg:justify-between xl:p-14">

          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

          {/* Logo */}

          <div className="relative z-10 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#171B2D]">
                A
              </span>

              <span className="text-xl font-bold tracking-tight">
                AccessFlow
              </span>
            </a>

            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.12em]">
              TEMPORARY ACCESS
            </span>
          </div>

          {/* Hero Content */}

          <div className="relative z-10 my-12 max-w-2xl">
            <h1 className="text-5xl font-bold leading-[1.12] tracking-[-0.045em] xl:text-6xl">
              Access when you
              <br />
              need it.
              <br />

              <span className="text-[#C9D3FF]">
                Gone when you don't.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/85 xl:text-lg">
              A controlled way to request, approve, grant and revoke
              temporary access to critical resources.
            </p>

            {/* Access Preview */}

            <div className="mt-9 max-w-[490px] rounded-[24px] border border-white/30 bg-white/10 p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <ellipse cx="12" cy="5" rx="8" ry="3" />
                      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                      <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Production database
                    </p>
                    <p className="mt-1 text-xs text-white/75">
                      Read-only access
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#263B9A]">
                  Approved
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/25">
                <div className="h-full w-[62%] rounded-full bg-white" />
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-white/90">
                <span>Auto-expiry</span>
                <span>Expires in 1h 12m</span>
              </div>
            </div>

            {/* Revoked Access */}

            <div className="ml-auto mt-[-2px] flex w-fit items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#111827] shadow-xl sm:mr-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-5 w-5"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>

              <div>
                <p className="text-sm font-bold">Access revoked</p>
                <p className="mt-1 text-xs text-slate-500">
                  Logged in audit trail
                </p>
              </div>
            </div>
          </div>

          {/* Workflow */}

          <div className="relative z-10 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span>Request</span>
            <span className="h-px w-6 bg-white/40" />
            <span>Approve</span>
            <span className="h-px w-6 bg-white/40" />
            <span>Grant</span>
            <span className="h-px w-6 bg-white/40" />

            <span className="rounded-full bg-white px-4 py-2 text-[#283A97]">
              Revoke
            </span>
          </div>
        </section>

        {/* RIGHT LOGIN FORM */}

        <section className="flex items-center justify-center py-6 lg:py-12">
          <div
            className={`w-full max-w-[470px] rounded-[30px] border p-6 shadow-2xl transition-colors duration-300 sm:p-9 xl:p-10 ${
              dark
                ? "border-[#263148] bg-[#10182A] shadow-black/20"
                : "border-white bg-white shadow-slate-200/70"
            }`}
          >
            {/* Mobile Branding + Theme */}

            <div className="mb-8 flex items-center justify-between gap-3">
              <a href="/" className="flex items-center gap-2 lg:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4166F5] to-[#5141E8] font-bold text-white">
                  A
                </span>

                <span
                  className={`font-bold ${
                    dark ? "text-white" : "text-[#111827]"
                  }`}
                >
                  AccessFlow
                </span>
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
                className={`ml-auto flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                  dark
                    ? "border-[#34415B] text-slate-300 hover:bg-[#202B40]"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {dark ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
                  </svg>
                )}
              </button>
            </div>

            <h2
              className={`text-3xl font-bold tracking-[-0.045em] sm:text-[36px] ${
                dark ? "text-slate-50" : "text-[#101321]"
              }`}
            >
              Welcome <span className="text-[#7771FF]">back</span>
            </h2>

            <p
              className={`mt-2 text-sm leading-6 ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Sign in to manage temporary access.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Email */}

              <div>
                <label
                  htmlFor="login-email"
                  className={`mb-2 block text-sm font-semibold ${
                    dark ? "text-slate-200" : "text-[#171923]"
                  }`}
                >
                  Work email
                </label>

                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>

                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`h-14 w-full rounded-[15px] border py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
                      dark
                        ? "border-[#46536D] bg-[#0B1221] text-white"
                        : "border-[#A8B3C7] bg-white text-[#111827]"
                    }`}
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="login-password"
                    className={`block text-sm font-semibold ${
                      dark ? "text-slate-200" : "text-[#171923]"
                    }`}
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-sm font-semibold text-[#6585FF] transition hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <rect x="4" y="10" width="16" height="11" rx="3" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className={`h-14 w-full rounded-[15px] border py-3 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
                      dark
                        ? "border-[#46536D] bg-[#0B1221] text-white"
                        : "border-[#A8B3C7] bg-white text-[#111827]"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className={`absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg ${
                      dark
                        ? "text-slate-400 hover:bg-[#263148]"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      {showPassword ? (
                        <>
                          <path d="M3 3l18 18" />
                          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                          <path d="M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a12 12 0 0 1-3.1 3.9M6.2 6.2C3.8 7.7 2 12 2 12s3.5 7 10 7c1 0 2-.2 2.9-.5" />
                        </>
                      ) : (
                        <>
                          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Remember me */}

              <label
                className={`flex cursor-pointer items-center gap-3 text-sm ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="h-[18px] w-[18px] rounded accent-indigo-600"
                />

                Keep me signed in on this device
              </label>

              {/* Error */}

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                >
                  {error}
                </p>
              )}

              {/* Sign In */}

              <button
                type="submit"
                className="flex h-[60px] w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#4167F5] to-[#5140E9] text-sm font-bold text-white shadow-[0_12px_30px_rgba(67,83,235,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(67,83,235,0.35)] active:translate-y-0"
              >
                Sign in <span className="text-lg">→</span>
              </button>
            </form>

            {/* Divider */}

            <div className="my-7 flex items-center gap-4">
              <span
                className={`h-px flex-1 ${
                  dark ? "bg-[#28344A]" : "bg-slate-200"
                }`}
              />

              <span
                className={`text-xs ${
                  dark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                or
              </span>

              <span
                className={`h-px flex-1 ${
                  dark ? "bg-[#28344A]" : "bg-slate-200"
                }`}
              />
            </div>

            {/* SSO */}

            <button
              type="button"
              onClick={() =>
                setError("Single sign-on is not configured yet.")
              }
              className={`flex h-[58px] w-full items-center justify-center gap-3 rounded-[15px] border text-sm font-semibold transition ${
                dark
                  ? "border-[#46536D] text-slate-100 hover:bg-[#1A2438]"
                  : "border-[#A8B3C7] text-[#111827] hover:bg-slate-50"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M12 3 20 7v5c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V7l8-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              Continue with SSO
            </button>

            {/* Register link */}

            <p
              className={`mt-7 text-center text-sm ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              New to AccessFlow?{" "}
              <a
                href="/register"
                className="font-semibold text-[#6585FF] transition hover:text-indigo-500"
              >
                Request access
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
