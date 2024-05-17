import NavBar from "@/components/nav-bar";
import React from "react";
import { PromoCard } from "@/components/promo-card";
import { StarIcon, UsersIcon } from "lucide-react";
import { data } from "@/lib/utils";

function PromotionsPage() {
  return (
    <div className="container mx-auto px-0 py-0 bg-yellow-200">
      <NavBar />
      <section className="flex flex-col justify-center items-center">
        <header className="flex justify-center items-center text-4xl text-yellow-400 text-center font-bold pt-8 pb-2">
          <StarIcon size={24} className="text-yellow-400" fill={"yellow"} />
          <h1 className="max-w-[50%] text-yellow-400">Ofertas de temporada</h1>
          <StarIcon size={24} className="text-yellow-400" fill={"yellow"} />
        </header>
        <div className="flex flex-col sm:flex-row items-center flex-wrap gap-3 px-4 py-4">
          <PromoCard {...data[0]} />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <header className="flex justify-center items-center text-4xl text-purple-400 text-center font-bold pt-8 pb-2">
          <UsersIcon size={24} fill={"#D8BFD8"} />
          <h1 className="max-w-[50%]">Ofertas grupales</h1>
          <UsersIcon size={24} fill={"#D8BFD8"} />
        </header>
        <div className="flex flex-col sm:flex-row sm:items-start items-center flex-wrap gap-3 px-4 py-4">
          <PromoCard {...data[1]} />
        </div>
      </section>
    </div>
  );
}

export default PromotionsPage;
