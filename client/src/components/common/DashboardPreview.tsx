import Container from "../ui/Container";
import { Calendar, Users, Video, Sparkles } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              AI Dashboard
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Everything in one intelligent workspace.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Manage meetings, collaborate with teammates, receive AI
              summaries, schedule events and monitor analytics from one
              modern dashboard.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <Sparkles className="text-blue-700" />
                AI Generated Meeting Summary
              </div>

              <div className="flex items-center gap-4">
                <Video className="text-blue-700" />
                HD Video Meetings
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-blue-700" />
                Smart Scheduling
              </div>

              <div className="flex items-center gap-4">
                <Users className="text-blue-700" />
                Team Collaboration
              </div>

            </div>

          </div>

          <div className="rounded-3xl border bg-slate-50 p-8 shadow-2xl">

            <div className="rounded-2xl bg-white p-6 shadow">

              <h3 className="text-xl font-bold">
                Today's Meetings
              </h3>

              <div className="mt-6 space-y-4">

                <div className="rounded-xl bg-blue-50 p-4">
                  Team Standup • 10:00 AM
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                  Client Discussion • 2:00 PM
                </div>

                <div className="rounded-xl bg-green-100 p-4">
                  AI Review Session • 5:00 PM
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

