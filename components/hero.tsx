import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-[10vh] flex flex-col items-center justify-center px-4 pt-20 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]"
    >
      <div className="text-center max-w-4xl mx-auto  tracking-wide leading-snug font-bold">
        <h2 className="text-4xl md:text-7xl text-white mb-6 leading-tight">
          Descubre mi portafolio <br />
          como desarrollador web
        </h2>
        <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
          CREANDO EXPERIENCIAS DIGITALES
          <span className="text-purple-500">.</span>
        </h2>
        <Link
          href="#portfolio"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-md shadow-purple-500/50"
        >
          Ver Proyectos
        </Link>
      </div>
    </section>
  );
}
