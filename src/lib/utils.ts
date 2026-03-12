import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}
