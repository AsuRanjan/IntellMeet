import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Features", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl shadow-2xl">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
              <Sparkles size={20} />
            </div>

            <div>
              <h2 className="text-xl font-black text-white">
                IntellMeet
              </h2>

              <p className="text-xs text-slate-400">
                AI Collaboration
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">

            <button className="text-slate-300 hover:text-white">
              Login
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white"
            >
              Get Started
            </motion.button>

          </div>

          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-xl md:hidden">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-slate-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

