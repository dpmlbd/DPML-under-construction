import Image from "next/image";
import heroImage from "@/assets/background.png";

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover animate-slow-pan"
      />
      <div className="absolute inset-0 bg-brand-bg/55 backdrop-blur-[2px]" />
    </div>
  );
}