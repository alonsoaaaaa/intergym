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
    <nav className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <Image
        src={"https://thegym.nyc3.cdn.digitaloceanspaces.com/logothegym.png"}
        alt="logo"
        width="200"
        height={50}
      />
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
        <a href="tel:+55 7315 6248">
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
