import { Brain, CalendarDays, ShieldCheck, Users } from "lucide-react";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import Card from "../ui/Card";

const features = [
  {
    icon: Brain,
    title: "AI Meeting Assistant",
    description:
      "Generate summaries, action items and key decisions automatically.",
  },
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description:
      "Coordinate meetings effortlessly with intelligent scheduling.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share notes, tasks and meeting outcomes in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protected with modern authentication and secure infrastructure.",
  },
];

export default function Features() {
  return (
    <Section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Heading
          title="Everything you need to run productive meetings"
          subtitle="Designed for startups, enterprises and remote teams."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-bold">{title}</h3>

              <p className="mt-4 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

