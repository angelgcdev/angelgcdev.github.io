"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="h-16 md:h-[10vh] fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm ">
      <div className="flex items-center justify-between px-8 h-full">
        <div className="">
          <Link
            href="#home"
            className=" inline-block
    rounded-full
    transition-all
    duration-200
    hover:scale-105
    active:scale-95
    hover:drop-shadow-[0_0_12px_rgba(28,92,251,0.6)]
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple-500
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0a0a0f]"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer"
            ></Image>
          </Link>
        </div>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-sm flex-col gap-6 p-6 border-b border-white/10`}
        >
          {/* <Link
            href="#home"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Inicio
          </Link> */}
          <Link
            href="#aboutme"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Acerca de mi
          </Link>
          <Link
            href="#portfolio"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Portafolio
          </Link>
          <Link
            href="#skills"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Mis habilidades
          </Link>
          <Link
            href="https://angelgcdev.github.io/experimentos-y-apuntes/"
            onClick={closeMenu}
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Experimentos y apuntes
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contáctame
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="text-white hover:text-purple-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 md:w-9 md:h-9" />
          ) : (
            <Menu className="w-7 h-7 md:w-12 md:h-12" />
          )}
        </button>
      </div>
    </header>
  );
}
