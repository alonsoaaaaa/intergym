import Link from "next/link";
import { Button } from "./ui/button";

function MainDisplay() {
  return (
    <div className="relative w-full">
      <video
        src="/intergym-video3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full sm:h-full object-cover"
      />
      <div className="relative z-10 text-center text-white py-[10%]">
        <h1 className="text-3xl font-serif font-semibold text-white mb-4 ">
          EL GYM{" "}
          <span className="text-yellow-500 font-extrabold">INTERNACIONAL</span>
        </h1>
        <p className="text-xl mb-8 sm:text-white font-extrabold text-white sm:font-semibold">
          <span className="">Gimnasio integral a un precio competitivo</span>
        </p>
        <Link href={"/plans"}>
          <Button
            variant="destructive"
            className="bg-yellow-500 hover:bg-yellow-600 rounded-xl"
          >
            VER SUSCRIPCIONES
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainDisplay;
