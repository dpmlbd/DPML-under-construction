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

      <main className="relative z-20 flex h-full items-center justify-center px-6">
        <BrandReveal visible={revealed} />
      </main>

      <ContactPanel visible={revealed} />
      <SiteFooter visible={revealed} />
    </div>
  );
}
