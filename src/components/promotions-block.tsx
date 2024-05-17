import Image from "next/image";
import React from "react";

function PromotionsBlock() {
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-gray-400 via-blue-400 to-purple-500 p-2 rounded-3xl items-center">
      <div className="flex">
        <Image
          src="/promocion1.png"
          alt="instalaciones"
          width={400}
          height={400}
          className="border-4 border-white rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-3xl text-center text-purple-300">
          Promociones exclusivas
        </h1>
        <p className="text-xl font-semibold text-center w-2/3">
          Contamos con promociones exclusivas para que puedas disfrutar de los
          mejores precios y descuentos en nuestras suscripciones
        </p>
      </div>
    </div>
  );
}

export default PromotionsBlock;
