import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  CalendarDays,
  Users,
  Brain,
} from "lucide-react";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-[-150px] h-[420px] w-[420px] rounded-full bg-violet-600/30 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>

      <Container className="relative grid min-h-[90vh] items-center gap-16 py-20 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm">
              AI Powered Collaboration Platform
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
            Meet
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Smarter.
            </span>
            <br />
            Build Faster.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            IntellMeet brings AI meeting summaries, collaborative workspaces,
            scheduling, analytics and productivity tools together in one
            beautiful platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 backdrop-blur-xl transition hover:bg-white/10">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-4xl font-bold">120K+</h2>
              <p className="text-slate-400">Meetings Hosted</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">98%</h2>
              <p className="text-slate-400">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">32%</h2>
              <p className="text-slate-400">More Productivity</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Dashboard</h2>

              <div className="rounded-full bg-emerald-500 px-3 py-1 text-sm">
                Live
              </div>
            </div>

            <div className="mt-8 grid gap-5">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Brain className="text-cyan-400" />
                  <div>
                    <h3 className="font-semibold">AI Summary</h3>
                    <p className="text-sm text-slate-400">
                      Sprint planning completed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-violet-400" />
                  <div>
                    <h3 className="font-semibold">Today's Meetings</h3>
                    <p className="text-sm text-slate-400">
                      09:00 • 11:30 • 15:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Users className="text-emerald-400" />
                  <div>
                    <h3 className="font-semibold">Active Team</h3>
                    <p className="text-sm text-slate-400">
                      12 members online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-8 top-20 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl"
          >
            🚀 Productivity +32%
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-6 bottom-10 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl"
          >
            🤖 AI Active
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

