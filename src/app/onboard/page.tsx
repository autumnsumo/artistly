// src/app/onboard/page.tsx
// Server Component for onboarding page metadata
import type { Metadata } from "next";
import OnboardingClient from "@/components/OnboardingClient";

export const metadata: Metadata = {
  title: "Artistly - Onboarding",
  description: "Join Artistly as a performing artist.",
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}