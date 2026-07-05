import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google",
  "OpenAI",
  "GitHub",
  "Notion",
  "Slack",
  "Zoom",
  "Atlassian",
];

export default function TrustedCompanies() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm uppercase tracking-[0.35em] text-slate-400">
          Trusted by innovative teams worldwide
        </p>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

