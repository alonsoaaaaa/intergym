import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PlansPage() {
  return (
    <div className="container mx-auto px-0 py-0 bg-gray-950">
      <NavBar />
      {/* <header className="flex justify-center items-center text-4xl text-yellow-400 text-center font-bold pt-8 pb-2"> */}
      <h1 className="font-bold text-4xl text-black bg-orange-400 text-center py-5">
        Planes de suscripción
      </h1>
      {/* </header> */}
      <section className="flex flex-col justify-evenly sm:flex-row bg-gradient-to-r from-green-200 via-green-300 to-green-400 p-2 rounded-xl border border-green-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/plan-1mes.jpg"
            alt="3meses"
            width="500"
            height={600}
            className="border-8 border-green-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h1 className="font-bold text-xl text-center text-green-500 border-double border-4 border-green-800 p-2">
            Suscripción de 1 mes
          </h1>
          <p className="text-xl font-semibold text-center text-green-600">
            Suscripcion individual de 3 meses a tan solo $899 pesos{" "}
          </p>
          <div>
            <a href="tel:+55 7315 6248">
              <Button
                variant={"outline"}
                className="rounded-xl bg-green-500 text-black hover:bg-green-400 hover:text-white font-bold border border-black"
              >
                Suscribete
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* <div className="chessboard-background"> {"- "}</div> */}
      <section className="flex flex-col justify-evenly sm:flex-row bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-2 rounded-xl border border-blue-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/plan-3meses.jpg"
            alt="3meses"
            width="300"
            height={300}
            className="border-8 border-blue-500 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <h1 className="font-bold text-2xl text-center text-blue-500 border-double border-4 border-blue-800 p-2">
            Suscripción de 3 meses
          </h1>
          <p className="text-xl font-semibold text-center text-blue-600">
            Suscripcion individual de 3 meses a tan solo $899{" "}
          </p>
          <div>
            <a href="tel:+55 7315 6248">
              <Button
                variant={"outline"}
                className="rounded-xl bg-blue-500 text-black hover:bg-blue-400 hover:text-white font-bold border border-black"
              >
                Suscribete
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-evenly sm:flex-row bg-gradient-to-r from-purple-200 via-orange-300 to-orange-400 p-2 rounded-xl border border-orange-900">
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src="/plan-anualidad.jpg"
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
            Suscripcion individual de 1 meses a tan solo $399{" "}
          </p>
          <div>
            <a href="tel:+55 7315 6248">
              <Button
                variant={"outline"}
                className="rounded-xl bg-orange-500 text-black hover:bg-orange-400 hover:text-white font-bold border border-black"
              >
                Suscribete
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlansPage;
