import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  GlobeIcon,
  PhoneCallIcon,
  TagIcon,
  TicketCheckIcon,
} from "lucide-react";

function NavBar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200">
      <div className="flex flex-col items-center">
        <Image
          src={"/intergym-logo.png"}
          alt="logo"
          width="130"
          height={50}
          className="py-2 mx-2"
        />
        <span className="font-extrabold text-white">IXTAPALUCA</span>
      </div>

      <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 sm:mt-0 text-center items-center">
        <Link href={"/"} className="flex items-center">
          <Button className="text-xl" variant={"link"}>
            Inicio
          </Button>
        </Link>
        <Link href={"/plans"} className="flex items-center">
          <Button className="text-xl" variant={"link"}>
            Planes
          </Button>
          <TicketCheckIcon size={24} />
        </Link>
        <Link href={"/promotions"} className="flex items-center">
          <Button className="text-xl" variant={"link"}>
            Promociones
          </Button>
          <TagIcon size={24} />
        </Link>
        <Link href={"/adress"} className="flex items-center">
          <Button className="text-xl" variant={"link"}>
            Ubicación
          </Button>
          <GlobeIcon size={24} />
        </Link>
      </ul>
      <div>
        <a href="tel:+55 5289 6924">
          <Button className="text-xl bg-purple-600 gap-1 my-2 mx-2 rounded-xl">
            Llámanos
            <PhoneCallIcon size={24} />
          </Button>
        </a>
      </div>
    </nav>
  );
}
export default NavBar;
