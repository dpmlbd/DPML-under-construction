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
  href: string;
  external?: boolean;
}

const ADDRESS = "13/A SS Khaled Road (B1-L4), Kazir Dewri, Chattogram-4000";
const EMAIL = "dimora.pml@gmail.com";
const PHONE_DISPLAY = "01842-117912";
const PHONE_DIAL = "+8801842117912";

export const contactDetails: ContactDetail[] = [
  {
    label: PHONE_DISPLAY,
    icon: Phone,
    href: `tel:${PHONE_DIAL}`,
  },
  {
    label: EMAIL,
    icon: Mail,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
    external: true,
  },
  {
    label: ADDRESS,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    external: true,
  },
];