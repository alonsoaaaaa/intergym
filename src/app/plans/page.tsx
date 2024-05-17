"use client";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PlansPage() {
  return (
    <div className="container mx-auto px-0 py-0 bg-gray-950">
      <NavBar />
      <h1 className="font-bold text-4xl text-black   text-center py-5  bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 ">
        Planes de suscripción
      </h1>
      {/* </header> */}
      <section className="flex flex-col items-center justify-evenly sm:flex-row bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-2 rounded-xl border border-green-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/plan1.png"
            alt="3meses"
            width="500"
            height={300}
            className="border-8 border-green-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h1 className="font-bold text-xl text-center text-green-500 border-double border-4 border-green-800 p-2">
            Visita individual
          </h1>
          <p className="text-xl font-semibold text-center text-green-600">
            La experiencia de entrenar en el mejor gimnasio internacional por{" "}
            <span className="font-extrabold">$70</span>
          </p>

          <Button
            variant={"outline"}
            className="rounded-xl bg-green-500 text-black hover:bg-green-400 hover:text-white font-bold border border-black"
            onClick={() =>
              window.open(
                "https://www.facebook.com/InternationalFitnessIxtapaluca",
                "_blank"
              )
            }
          >
            Suscribete
          </Button>
        </div>
      </section>
      {/* <div className="chessboard-background"> {"- "}</div> */}
      <section className="flex flex-col justify-evenly sm:flex-row bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-2 rounded-xl border border-blue-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/plan2.png"
            alt="3meses"
            width="500"
            height={600}
            className="border-8 border-blue-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h1 className="font-bold text-2xl text-center text-blue-500 border-double border-4 border-blue-800 p-2">
            Suscripción mensual
          </h1>
          <p className="text-xl font-semibold text-center text-blue-600">
            Suscripcion individual de 1 mes a tan solo $599{" "}
          </p>
          <div>
            <Button
              variant={"outline"}
              className="rounded-xl bg-blue-500 text-black hover:bg-blue-400 hover:text-white font-bold border border-black"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/InternationalFitnessIxtapaluca",
                  "_blank"
                )
              }
            >
              Suscribete
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-evenly sm:flex-row bg-gradient-to-r from-purple-200 via-orange-300 to-orange-400 p-2 rounded-xl border border-orange-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/promocion2.png"
            alt="3meses"
            width="500"
            height={600}
            className="border-8 border-orange-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h1 className="font-bold text-3xl text-center text-orange-500 border-double border-4 border-orange-800 p-2">
            Suscripción de 1 año
          </h1>
          <p className="text-xl font-semibold text-center text-orange-600">
            Suscripcion individual de 1 año a tan solo $2500{" "}
          </p>
          <div>
            <Button
              variant={"outline"}
              className="rounded-xl bg-orange-500 text-black hover:bg-orange-400 hover:text-white font-bold border border-black"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/InternationalFitnessIxtapaluca",
                  "_blank"
                )
              }
            >
              Suscribete
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlansPage;
