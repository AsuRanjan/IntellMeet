import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="space-y-5">

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none"
      />

      <button
        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 p-4 font-semibold text-white transition hover:scale-[1.02]"
      >
        Login
      </button>

      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-cyan-400"
        >
          Register
        </Link>
      </p>

    </form>
  );
}

