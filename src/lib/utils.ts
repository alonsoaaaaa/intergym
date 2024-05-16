import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const data = [
  {
    promoName: "Amigovios",
    description: "Mensualidad para 2 personas a tan solo $599",
    image: "/promo-amigos.jpg",
    color: "green",
  },
  {
    promoName: "3 personas",
    description: "Mensualidad para 3 personas a tan solo $799",
    image: "/promo-3personas.jpg",
    color: "red",
  },
  {
    promoName: "Estudiantes",
    description: "Mensualidad para estudiantes a tan solo $299",
    image: "/promocion.jpg",
    color: "blue",
  },
];
