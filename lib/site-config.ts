import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

export const brand = {
  name: "Dimora",
  tagline: "Property Management Limited",
  underConstructionLabel: "Our new digital home is under construction",
  copyrightHolder: "Dimora Property Management Limited",
} as const;

export interface ContactDetail {
  label: string;
  icon: LucideIcon;
}

export const contactDetails: ContactDetail[] = [
  { label: "123 Luxury Avenue, Suite 500, London", icon: MapPin },
  { label: "+44 20 7946 0000", icon: Phone },
  { label: "inquiries@dimoraproperty.com", icon: Mail },
];
