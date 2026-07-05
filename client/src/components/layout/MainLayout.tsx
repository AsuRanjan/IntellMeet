import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

