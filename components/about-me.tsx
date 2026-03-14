import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="bg-[#0a0a0f] min-h-screen scroll-mt-[10vh]"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-wrap-balance">
          Acerca de mí
        </h2>

        <div className="grid md:grid-cols-2 gap-4 items-center md:h-[60vh]">
          <div className="flex justify-center h-full">
            <div className="relative w-64 h-64 md:w-80 md:h-full rounded-2xl overflow-hidden border-[#4976ff] shadow-xl shadow-[#2059fb]/30">
              <Image
                src="/images/perfil.jpg"
                alt="Foto de perfil"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center h-full">
            <p className="text-purple-400 md:text-lg font-semibold">
              ¡Hola! Yo soy
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Luis Angel Gutierrez Cantuta
            </h2>
            <div className="text-sm sm:text-base">
              <p className="text-gray-300 leading-relaxed">
                Egresado de la carrera de Ingeniería de Sistemas de la
                Universidad Pública de El Alto. He participado en actividades
                académicas y prácticas profesionales durante los últimos meses,
                fortaleciendo mis conocimientos técnicos y habilidades
                prácticas. Me encuentro abierto a nuevos desafíos que me
                permitan continuar desarrollando mis habilidades y aplicar mis
                conocimientos en entornos profesionales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                ¡Gracias por su tiempo y consideración!
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
              <a
                href="/documentos/CV-ANGELGCDEV.pdf"
                download
                className="px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none shadow-md shadow-purple-500/50"
              >
                Descargar CV
              </a>
              <a
                href="#contact"
                className="px-4 py-2 sm:px-8 sm:py-4 bg-[#1C5CFB] text-white font-semibold rounded-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none shadow-md shadow-[#1C5CFB]/50 transition-all"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
