import { useState } from "react";

const Icon = ({ name, className = "h-5 w-5" }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    eyeOff: (
      <>
        <path d="m3 3 18 18" />
        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a12 12 0 0 1-3.1 3.9M6.2 6.2C3.8 7.7 2 12 2 12s3.5 7 10 7c1 0 2-.2 2.9-.5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 7v5c0 5-3.5 7.8-8 9-4.5-1.2-8-4-8-9V7l8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l-1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    moon: (
      <path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
};

const Register = () => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: Connect the registration API here.
    console.log({
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
    });

    setSuccess("Details validated. Registration API is not connected yet.");
  };

  const inputClass = `h-[50px] w-full rounded-xl border px-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${
    dark
      ? "border-slate-700 bg-[#0B1221] text-white placeholder:text-slate-500"
      : "border-[#DCE2EF] bg-white text-[#17264A] placeholder:text-slate-400 hover:border-slate-300"
  }`;

  const labelClass = `mb-2 block text-[13px] font-semibold ${
    dark ? "text-slate-200" : "text-[#1B2B50]"
  }`;

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#080D19] text-white" : "bg-[#F3F6FC] text-[#1B2B50]"
      }`}
    >
      {/* Top navigation */}

      <header className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B2B50] text-lg font-bold text-white">
            A
          </span>

          <span className="text-lg font-bold tracking-tight">
            AccessFlow
          </span>
        </a>

        <div className="flex items-center gap-4">
          <span
            className={`hidden text-sm sm:block ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Already have an account?
            <a
              href="/login"
              className="ml-1.5 font-semibold text-indigo-500 hover:text-indigo-600"
            >
              Sign in
            </a>
          </span>

          <button
            type="button"
            onClick={changeTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              dark
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon name={dark ? "sun" : "moon"} />
          </button>
        </div>
      </header>

      {/* Main content */}

      <section className="mx-auto grid w-full max-w-[1600px] items-center gap-8 px-5 pb-8 pt-5 sm:px-8 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-12 lg:py-8 xl:gap-20">

        {/* LEFT: Distinct security visual */}

        <div className="relative hidden min-h-[590px] overflow-hidden rounded-[30px] bg-[#010736] p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-10">

          {/* Background decoration */}

          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(rgba(153,180,255,0.8) 1px, transparent 1px)",
              backgroundSize: "23px 23px",
            }}
          />

          <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                The AccessFlow approach
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium text-blue-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ACCESS CONTROL
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-[-0.045em] xl:text-[54px]">
              Access when you
              <br />
              need it.
              <br />
              <span className="text-[#AEBEFF]">
                Gone when you don't.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Give the right people access to the right resources,
              for only as long as they need it.
            </p>
          </div>

          {/* Custom access-management visualization */}

          <div className="relative z-10 mx-auto my-8 w-full max-w-[470px]">
            {/* Connector lines */}

            <div className="absolute left-8 top-12 h-[155px] w-px bg-gradient-to-b from-indigo-300/70 via-indigo-300/30 to-transparent" />

            {/* Request event */}

            <div className="relative flex items-center gap-4">
              <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/30 bg-[#1D2B52] text-indigo-200 shadow-lg">
                <Icon name="shield" className="h-7 w-7" />
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">
                    Access request
                  </span>

                  <span className="rounded-full bg-amber-300/10 px-2.5 py-1 text-[10px] font-semibold text-amber-200">
                    Pending
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-slate-400">
                  Production database · Read-only
                </p>
              </div>
            </div>

            {/* Approval event */}

            <div className="relative mt-5 flex items-center gap-4">
              <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/20 bg-[#18374A] text-emerald-300">
                <Icon name="check" className="h-7 w-7" />
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">
                    Approval granted
                  </span>

                  <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-200">
                    Approved
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-slate-400">
                  Permission granted for a limited period
                </p>
              </div>
            </div>

            {/* Expiry event */}

            <div className="relative mt-5 flex items-center gap-4">
              <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-[#252B58] text-indigo-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">
                    Automatic expiry
                  </span>

                  <Icon
                    name="check"
                    className="h-4 w-4 text-emerald-300"
                  />
                </div>

                <p className="mt-1.5 text-xs text-slate-400">
                  Access ends when its approved window expires
                </p>
              </div>
            </div>
          </div>

          {/* Bottom value statement */}

          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="text-sm font-semibold">
                Request. Approve. Expire.
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Access by need, not by default.
              </p>
            </div>

            <div className="flex -space-x-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101D3C] bg-indigo-300 text-xs font-bold text-[#18264A]">
                R
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101D3C] bg-sky-200 text-xs font-bold text-[#18264A]">
                A
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#101D3C] bg-emerald-200 text-xs font-bold text-[#18264A]">
                G
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Registration form */}

        <div className="mx-auto w-full max-w-[540px] lg:ml-auto">
          {/* Mobile brand introduction */}

          <div className="mb-7 lg:hidden">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
              TEMPORARY ACCESS MANAGEMENT
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight">
              Your access.
              <br />
              <span className="text-indigo-500">Your control.</span>
            </h1>

            <p
              className={`mt-3 text-sm leading-6 ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Create your account and get started with controlled,
              time-bound access.
            </p>
          </div>

          <div
            className={`rounded-[26px] border p-6 sm:p-8 xl:p-9 ${
              dark
                ? "border-slate-800 bg-[#10182A] shadow-2xl shadow-black/20"
                : "border-[#E7EBF4] bg-white shadow-[0_24px_80px_-35px_rgba(28,48,92,0.24)]"
            }`}
          >
            <div className="mb-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-500">
                <span className="h-px w-5 bg-indigo-500" />
                CREATE ACCOUNT
              </div>

              <h2
                className={`mt-4 text-3xl font-bold tracking-[-0.04em] ${
                  dark ? "text-white" : "text-[#17264A]"
                }`}
              >
                Get started<span className="text-indigo-500">.</span>
              </h2>

              <p
                className={`mt-2 text-sm leading-6 ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Set up your account in just a few steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full name */}

              <div>
                <label htmlFor="reg-name" className={labelClass}>
                  Full name
                </label>

                <input
                  id="reg-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className={inputClass}
                />
              </div>

              {/* Email */}

              <div>
                <label htmlFor="reg-email" className={labelClass}>
                  Work email
                </label>

                <div className="relative">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    <Icon name="mail" />
                  </span>

                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label htmlFor="reg-password" className={labelClass}>
                  Password
                </label>

                <div className="relative">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    <Icon name="lock" />
                  </span>

                  <input
                    id="reg-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
                    value={form.password}
                    onChange={handleChange}
                    minLength={8}
                    required
                    className={`${inputClass} pl-12 pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg ${
                      dark
                        ? "text-slate-400 hover:bg-slate-800"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <Icon name={showPassword ? "eye" : "eyeOff"} />
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <p
                    className={`text-xs ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    Use at least 8 characters.
                  </p>

                  {form.password && (
                    <span
                      className={`text-xs font-medium ${
                        form.password.length >= 8
                          ? "text-emerald-500"
                          : "text-amber-500"
                      }`}
                    >
                      {form.password.length >= 8
                        ? "Length OK"
                        : `${form.password.length}/8 characters`}
                    </span>
                  )}
                </div>
              </div>

              {/* Confirm password */}

              <div>
                <label htmlFor="reg-confirm" className={labelClass}>
                  Confirm password
                </label>

                <div className="relative">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    <Icon name="lock" />
                  </span>

                  <input
                    id="reg-confirm"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    minLength={8}
                    required
                    className={`${inputClass} pl-12 pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg ${
                      dark
                        ? "text-slate-400 hover:bg-slate-800"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <Icon
                      name={showConfirmPassword ? "eye" : "eyeOff"}
                    />
                  </button>
                </div>

                {form.confirmPassword && (
                  <p
                    className={`mt-2 text-xs ${
                      form.password === form.confirmPassword
                        ? "text-emerald-500"
                        : "text-amber-500"
                    }`}
                  >
                    {form.password === form.confirmPassword
                      ? "✓ Passwords match"
                      : "Passwords do not match"}
                  </p>
                )}
              </div>

              {/* Messages */}

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                >
                  {error}
                </p>
              )}

              {success && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500"
                >
                  {success}
                </p>
              )}

              {/* Submit */}

              <button
                type="submit"
                className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4167F5] to-[#5140E9] text-sm font-semibold text-white shadow-[0_10px_28px_rgba(67,83,235,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_32px_rgba(67,83,235,0.32)] active:translate-y-0"
              >
                Create account

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            {/* Sign in */}

            <div
              className={`mt-6 border-t pt-5 text-center text-sm ${
                dark
                  ? "border-slate-800 text-slate-400"
                  : "border-slate-100 text-slate-500"
              }`}
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-500 hover:text-indigo-600"
              >
                Sign in
              </a>
            </div>

            {/* Trust footer */}

            <div
              className={`mt-5 flex items-center justify-center gap-2 text-xs ${
                dark ? "text-slate-500" : "text-slate-400"
              }`}
            >
              <Icon name="shield" className="h-4 w-4" />
              Your access. Your control.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer
        className={`mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 border-t px-5 py-4 text-xs sm:px-8 lg:px-12 ${
          dark
            ? "border-slate-800 text-slate-500"
            : "border-slate-200 text-slate-400"
        }`}
      >
        <span>© {new Date().getFullYear()} AccessFlow</span>
        <span>Access by need, not by default.</span>
      </footer>
    </main>
  );
};

export default Register;
