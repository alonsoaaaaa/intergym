import { HeartHandshakeIcon, HeartIcon, HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function EnviromentBlock() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center bg-gradient-to-r from-orange-300 via-red-400 to-pink-500 p-2  rounded-3xl">
      <div className="flex">
        <div className="flex items-center sm:hidden">
          <Image
            src="/gato-kawai.png"
            alt="instalaciones"
            width={300}
            height={300}
            className="rounded-xl border-4 border-dotted border-red-200"
          />
          <HeartPulseIcon size={100} className="text-red-500" />
        </div>

        {/* <div className="flex items-center sm:hidden">
          <HeartHandshakeIcon size={100} className="text-red-500" />
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-3xl text-center text-pink-300">
          Ambiente amigable
        </h1>
        <p className="text-xl font-semibold text-center w-2/3">
          Un ambiente amigable y seguro para que puedas entrenar sin
          preocupaciones, con la mejor calidad de servicio y atención
        </p>
      </div>
    </div>
  );
}

export default EnviromentBlock;
