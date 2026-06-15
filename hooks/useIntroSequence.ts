"use client";

import { useEffect, useState } from "react";

export type IntroStage = "loading" | "revealed";

/**
 * Drives the page's intro timeline: the blueprint loader plays first,
 * then the brand, tagline and contact details reveal.
 *
 * @param loaderDurationMs how long the vector loader stays on screen
 */
export function useIntroSequence(loaderDurationMs = 2000): IntroStage {
  const [stage, setStage] = useState<IntroStage>("loading");

  useEffect(() => {
    const timer = setTimeout(() => setStage("revealed"), loaderDurationMs);
    return () => clearTimeout(timer);
  }, [loaderDurationMs]);

  return stage;
}
