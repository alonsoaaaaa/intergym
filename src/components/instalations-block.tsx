import Image from "next/image";
import React from "react";

function InstalationsBlock() {
  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-r from-gray-600 via-purple-700 to-blue-900 p-2 rounded-3xl items-center">
      <div className="flex">
        <Image
          src="/instalaciones.png"
          alt="instalaciones"
          width="400"
          height={500}
          className="border-4 border-gray-900 rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-3xl text-center text-blue-500">
          Las mejores instalaciones
        </h1>
        <p className="text-xl font-semibold text-center w-2/3">
          Contamos con instructores capacitados, sauna, regaderas,
          estacionamiento y dos pisos, con equipo de alta calidad
        </p>
      </div>
    </div>
  );
}

export default InstalationsBlock;
