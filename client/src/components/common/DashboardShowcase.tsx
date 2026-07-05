import { motion } from "framer-motion";
import {
  CalendarDays,
  Brain,
  BarChart3,
  Users,
  Bell,
  CheckCircle2,
} from "lucide-react";

export default function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            PRODUCT PREVIEW
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Everything in one workspace.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Meetings, AI summaries, scheduling, collaboration and analytics —
            all beautifully integrated.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,.45)] overflow-hidden"
        >

          <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <div className="rounded-xl bg-slate-900 px-5 py-2 text-sm">
              intellmeet.app/dashboard
            </div>

          </div>

          <div className="grid lg:grid-cols-[250px_1fr]">

            {/* Sidebar */}

            <aside className="border-r border-white/10 bg-slate-950/60 p-6">

              <h3 className="mb-8 text-xl font-bold">
                Dashboard
              </h3>

              <div className="space-y-5">

                <Menu icon={<BarChart3 />} text="Analytics" />

                <Menu icon={<CalendarDays />} text="Meetings" />

                <Menu icon={<Brain />} text="AI Assistant" />

                <Menu icon={<Users />} text="Teams" />

                <Menu icon={<Bell />} text="Notifications" />

              </div>

            </aside>

            {/* Content */}

            <div className="grid gap-6 p-8 lg:grid-cols-2">

              <GlassCard
                title="AI Summary"
                icon={<Brain className="text-cyan-400" />}
              >
                Sprint planning completed successfully.

                <ul className="mt-5 space-y-3 text-slate-300">

                  <li>✓ Authentication module finished</li>

                  <li>✓ Dashboard approved</li>

                  <li>✓ Deployment scheduled</li>

                </ul>

              </GlassCard>

              <GlassCard
                title="Upcoming Meetings"
                icon={<CalendarDays className="text-violet-400" />}
              >

                <Meeting
                  time="09:00"
                  title="Product Review"
                />

                <Meeting
                  time="11:30"
                  title="Client Discussion"
                />

                <Meeting
                  time="15:00"
                  title="Sprint Demo"
                />

              </GlassCard>

              <GlassCard
                title="Productivity"
                icon={<BarChart3 className="text-emerald-400" />}
              >

                <div className="mt-6 h-3 rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    transition={{ duration: 1.4 }}
                    className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />

                </div>

                <p className="mt-4 text-4xl font-black">
                  82%
                </p>

              </GlassCard>

              <GlassCard
                title="Tasks Completed"
                icon={<CheckCircle2 className="text-green-400" />}
              >

                <div className="space-y-4">

                  <Task text="Homepage UI" />

                  <Task text="Authentication" />

                  <Task text="Backend API" />

                </div>

              </GlassCard>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Menu({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function GlassCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>

      {children}
    </div>
  );
}

function Meeting({
  time,
  title,
}: {
  time: string;
  title: string;
}) {
  return (
    <div className="mb-4 flex justify-between rounded-xl bg-white/5 p-4">
      <span>{title}</span>
      <span className="text-cyan-300">{time}</span>
    </div>
  );
}

function Task({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">
      <CheckCircle2
        size={18}
        className="text-green-400"
      />
      {text}
    </div>
  );
}

