import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutme" className="py-20 px-4 bg-[#0a0a0f]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Acerca de mi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-purple-500/50 shadow-xl shadow-purple-500/30">
              <Image
                src="/images/perfil.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-purple-400 text-lg font-semibold">
              ¡Hola! Yo soy
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Luis Angel Gutierrez Cantuta
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Egresado de la carrera de Ingeniería de Sistemas de la Universidad
              Pública de El Alto. He participado en actividades académicas y
              prácticas profesionales durante los últimos meses, fortaleciendo
              mis conocimientos técnicos y habilidades prácticas. Me encuentro
              abierto a nuevos desafíos que me permitan continuar desarrollando
              mis habilidades y aplicar mis conocimientos en entornos
              profesionales.
            </p>
            <p className="text-gray-300 leading-relaxed">
              ¡Gracias por su tiempo y consideración!
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/documentos/CV-ANGELGCDEV.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
              >
                Descargar CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
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
