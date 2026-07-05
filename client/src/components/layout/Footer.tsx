import {
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <h2 className="text-3xl font-black">
              IntellMeet
            </h2>

            <p className="mt-5 text-slate-400">
              AI powered collaboration platform for modern teams.
            </p>

            <div className="mt-8 flex gap-5">

              <Github />

              <Linkedin />

              <Twitter />

              <Mail />

            </div>

          </div>

          <div>
            <h3 className="mb-5 font-bold">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>API</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>

            <h3 className="mb-5 font-bold">
              Newsletter
            </h3>

            <div className="flex gap-2">

              <input
                placeholder="Email address"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
              />

              <button className="rounded-xl bg-cyan-500 px-5">
                Join
              </button>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 IntellMeet. Built with React • TypeScript • TailwindCSS.
        </div>

      </div>

    </footer>
  );
}

