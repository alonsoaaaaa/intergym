import Image from "next/image";
import React from "react";

function InstalationsBlock() {
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-gray-600 via-purple-700 to-blue-900 p-2 rounded-3xl">
      <div className="flex">
        <Image
          src="https://thegym.nyc3.cdn.digitaloceanspaces.com/instalaciones2.jpg"
          alt="instalaciones"
          width="1000"
          height={500}
          className="border-4 border-gray-900 rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-3xl text-center text-blue-500">
          Las mejores instalaciones
        </h1>
        <p className="text-xl font-semibold text-center w-2/3">
          Instalaciones de primera para que puedas entrenar de la mejor manera
          posible y alcanzar tus metas rapidamente
        </p>
      </div>
    </div>
  );
}

export default InstalationsBlock;
