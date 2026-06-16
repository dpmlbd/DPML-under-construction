"use client";

import { useIntroSequence } from "@/hooks/useIntroSequence";
import { BackgroundScene } from "./BackgroundScene";
import { BlueprintLoader } from "./BlueprintLoader";
import { BrandReveal } from "./BrandReveal";
import { ContactPanel } from "./ContactPanel";
import { SiteFooter } from "./SiteFooter";

export function ComingSoonExperience() {
  const stage = useIntroSequence();
  const revealed = stage === "revealed";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-bg font-sans text-brand-ink">
      <BackgroundScene />

      <BlueprintLoader visible={stage === "loading"} />

      <div className="relative z-20 h-full overflow-y-auto overflow-x-hidden">
        <main className="flex min-h-full flex-col items-center justify-center px-6 py-16 md:py-0">
          <BrandReveal visible={revealed} />
          <ContactPanel visible={revealed} />
        </main>

        <SiteFooter visible={revealed} />
      </div>
    </div>
  );
}