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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between px-8">
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
          } md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-[#0a0a0f] md:bg-transparent flex-col md:flex-row gap-6 p-6 md:p-0 border-b md:border-b-0 border-white/10`}
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
          className="md:hidden text-white hover:text-purple-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
