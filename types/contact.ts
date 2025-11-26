// types/contact.ts

import { LucideIcon } from "lucide-react";

export interface ContactCardProps {
  Icon: LucideIcon;
  label: string;
  value: string;
}

export interface SocialLinkProps {
  href: string;
  Icon: LucideIcon;
  label: string;
}

export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
