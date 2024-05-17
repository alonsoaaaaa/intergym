import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const data = [
  {
    promoName: "Sector Docente",
    description: "Anualidad al sector docente por solo $2500",
    image: "/promocion2.png",
    color: "blue",
  },
  {
    promoName: "Mes de Mamá",
    description: "2 mamás por solo $600",
    image: "/promocion1.png",
    color: "red",
  },
];
