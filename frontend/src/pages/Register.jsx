import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const updateField = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
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

    setError("Registration API is not connected yet.");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-[#E8E9F6] p-3 sm:p-5 lg:h-screen lg:overflow-y-auto lg:p-5">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-40 h-[400px] w-[400px] rounded-full bg-purple-400/40 blur-[110px]" />
        <div className="absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-blue-300/40 blur-[110px]" />
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-pink-300/35 blur-[110px]" />
      </div>

      {/* Main glass container */}
      <div className="relative grid w-full max-w-[1000px] gap-1.5 rounded-[26px] border border-white/90 bg-white/60 p-1.5 shadow-[0_25px_75px_-35px_rgba(44,39,94,0.35)] backdrop-blur-2xl lg:grid-cols-[1fr_1fr]">
        {/* Left visual panel */}
        <section className="relative hidden overflow-hidden rounded-[21px] bg-gradient-to-br from-[#C4B3F3] via-[#A6B8F7] to-[#E4E8FF] p-7 text-[#1C2148] lg:flex lg:flex-col lg:justify-between xl:p-8">
          {/* Decorative glow */}
          <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-pink-300/70 blur-[70px]" />
          <div className="absolute right-0 top-5 h-64 w-64 rounded-full bg-white/70 blur-[75px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300/60 blur-[75px]" />

          {/* Branding */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/50 shadow-sm backdrop-blur-xl">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="text-base font-bold tracking-tight">
                AccessFlow
              </p>
              <p className="text-[8px] font-semibold tracking-[0.2em] text-[#454C78]">
                ACCESS MANAGEMENT
              </p>
            </div>
          </div>

          {/* Orb visual */}
          <div className="relative z-10 my-4">
            <div className="relative flex h-[220px] items-center justify-center">
              <div className="absolute bottom-7 h-8 w-44 rounded-full bg-indigo-900/20 blur-2xl" />

              <div className="absolute h-52 w-52 rounded-full border border-white/50" />
              <div className="absolute h-40 w-40 rounded-full border border-white/60" />

              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br from-white via-[#D9CBFF] to-[#8588F1] shadow-[inset_-12px_-15px_30px_rgba(86,72,180,0.3),inset_8px_8px_24px_rgba(255,255,255,0.9),0_20px_55px_rgba(74,66,180,0.35)]">
                <div className="absolute left-5 top-4 h-6 w-16 rotate-[-35deg] rounded-full bg-white/80 blur-md" />

                <ShieldCheck
                  size={48}
                  strokeWidth={1.3}
                  className="relative text-[#353A85]"
                />

                <div className="absolute -right-2 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/80 bg-white/75 text-indigo-700 shadow-lg">
                  <CheckCircle2 size={17} />
                </div>

                <div className="absolute -bottom-1 -left-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/80 bg-white/75 text-indigo-700 shadow-lg">
                  <LockKeyhole size={17} />
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-0 top-8 rounded-xl border border-white/70 bg-white/50 px-3 py-2 shadow-lg backdrop-blur-xl">
                <p className="text-[9px] text-slate-600">Access status</p>
                <p className="mt-0.5 text-xs font-bold text-[#262A5D]">
                  Protected
                </p>
              </div>

              <div className="absolute bottom-5 right-0 rounded-xl border border-white/70 bg-white/55 px-3 py-2 shadow-lg backdrop-blur-xl">
                <p className="text-[9px] text-slate-600">Permissions</p>
                <p className="mt-0.5 text-xs font-bold text-[#262A5D]">
                  Time-bound access
                </p>
              </div>
            </div>

            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-[-0.04em] xl:text-[38px]">
              SMART ACCESS.
              <br />
              <span className="text-white drop-shadow-sm">
                ZERO COMPLEXITY.
              </span>
            </h1>

            <p className="mt-3 max-w-sm text-xs leading-6 text-[#454C78] xl:text-sm">
              Simplify permissions, streamline approvals, and keep your
              organization's resources protected with AccessFlow.
            </p>
          </div>

          {/* Bottom features */}
          <div className="relative z-10 flex flex-wrap gap-2">
            {["Secure access", "Quick approvals", "Auto expiry"].map(
              (feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-1.5 rounded-full border border-white/70 bg-white/45 px-2.5 py-1.5 text-[10px] font-medium text-[#343A70] backdrop-blur-lg"
                >
                  <CheckCircle2 size={12} />
                  {feature}
                </span>
              )
            )}
          </div>
        </section>

        {/* Right registration panel */}
        <section className="flex items-center justify-center rounded-[21px] bg-white/70 px-5 py-6 sm:px-8 lg:px-8 lg:py-5 xl:px-10">
          <div className="w-full max-w-[370px]">
            {/* Mobile branding */}
            <div className="mb-5 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#363199] text-white shadow-lg">
                <ShieldCheck size={22} />
              </div>

              <div>
                <p className="text-base font-bold text-[#25264E]">
                  AccessFlow
                </p>
                <p className="text-[8px] tracking-[0.2em] text-slate-500">
                  ACCESS MANAGEMENT
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white bg-white/90 text-[#363199] shadow-md">
                <UserRound size={18} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7770C8]">
                Create your account
              </p>

              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#202344] sm:text-[30px]">
                Join AccessFlow
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                Create your account to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full name */}
              <div>
                <label
                  htmlFor="register-name"
                  className="mb-1.5 block text-xs font-medium text-[#383956]"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="register-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={updateField}
                    required
                    minLength={2}
                    className="h-10 w-full rounded-xl border border-white bg-white/75 pl-10 pr-3 text-xs text-[#242647] shadow-sm outline-none transition placeholder:text-slate-400 hover:border-indigo-200 focus:border-[#7770C8] focus:bg-white focus:ring-4 focus:ring-indigo-100/70 sm:text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="register-email"
                  className="mb-1.5 block text-xs font-medium text-[#383956]"
                >
                  Work email
                </label>

                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={updateField}
                    required
                    className="h-10 w-full rounded-xl border border-white bg-white/75 pl-10 pr-3 text-xs text-[#242647] shadow-sm outline-none transition placeholder:text-slate-400 hover:border-indigo-200 focus:border-[#7770C8] focus:bg-white focus:ring-4 focus:ring-indigo-100/70 sm:text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="register-password"
                  className="mb-1.5 block text-xs font-medium text-[#383956]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="register-password"
                    name="password"
                    type={showPassword ? "password":"text" }
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    value={form.password}
                    onChange={updateField}
                    required
                    minLength={8}
                    className="h-10 w-full rounded-xl border border-white bg-white/75 pl-10 pr-10 text-xs text-[#242647] shadow-sm outline-none transition placeholder:text-slate-400 hover:border-indigo-200 focus:border-[#7770C8] focus:bg-white focus:ring-4 focus:ring-indigo-100/70 sm:text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <p className="mt-1 text-[10px] text-slate-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="register-confirm"
                  className="mb-1.5 block text-xs font-medium text-[#383956]"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="register-confirm"
                    name="confirmPassword"
                    type={showConfirm ? "password":"text"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={updateField}
                    required
                    className="h-10 w-full rounded-xl border border-white bg-white/75 pl-10 pr-10 text-xs text-[#242647] shadow-sm outline-none transition placeholder:text-slate-400 hover:border-indigo-200 focus:border-[#7770C8] focus:bg-white focus:ring-4 focus:ring-indigo-100/70 sm:text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {form.confirmPassword && (
                  <p
                    className={`mt-1 text-[10px] ${
                      form.password === form.confirmPassword
                        ? "text-emerald-600"
                        : "text-rose-500"
                    }`}
                  >
                    {form.password === form.confirmPassword
                      ? "✓ Passwords match"
                      : "Passwords do not match"}
                  </p>
                )}
              </div>

              {/* Error message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-600"
                >
                  {error}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7164D8] to-[#5143B8] text-sm font-semibold text-white shadow-[0_8px_20px_rgba(91,76,190,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Create account
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Sign in */}
            <div className="mt-4 border-t border-indigo-100/70 pt-4 text-center">
              <p className="text-xs text-slate-500 sm:text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#6255C4] transition hover:text-[#363199]"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck size={13} />
              Your access. Your control.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
