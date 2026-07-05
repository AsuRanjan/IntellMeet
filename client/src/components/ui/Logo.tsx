import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
        <Sparkles size={22} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wide">
          IntellMeet
        </h1>

        <p className="text-xs text-slate-500">
          AI Collaboration Platform
        </p>
      </div>
    </div>
  );
}

