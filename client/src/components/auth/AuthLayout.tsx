import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
      </div>

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

        <h1 className="text-4xl font-black text-white">
          {title}
        </h1>

        <p className="mt-3 text-slate-400">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </div>
  );
}

