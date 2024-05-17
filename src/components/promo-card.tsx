import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function PromoCard({
  promoName = "",
  description = "",
  image = "",
  color = "",
}) {
  console.log({ promoName, description, image, color });
  const colorClass = color ? `text-${color}-500` : "";
  console.log(colorClass);
  return (
    <Card className="w-[80%] sm:w-[350px] border-orange-500 bg-orange-300 border-4 items-start justify-start">
      <CardHeader>
        <CardTitle className={colorClass}>Promoción: {promoName}</CardTitle>
        <CardDescription className={colorClass}>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center">
          <Image
            src={image}
            alt="promo"
            width={300}
            height={300}
            className="rounded-xl border-4 border-dotted border-red-200"
          />
        </div>
      </CardContent>
    </Card>
  );
}
