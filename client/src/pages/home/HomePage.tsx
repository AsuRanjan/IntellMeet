import MainLayout from "../../components/layout/MainLayout";

import Hero from "../../components/common/Hero";
import TrustedCompanies from "../../components/common/TrustedCompanies";
import Features from "../../components/common/Features";
import DashboardPreview from "../../components/common/DashboardPreview";
import Statistics from "../../components/common/Statistics";
import Testimonials from "../../components/common/Testimonials";
import CallToAction from "../../components/common/CallToAction";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <TrustedCompanies />
      <Features />
      <DashboardPreview />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
}

