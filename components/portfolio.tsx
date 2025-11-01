import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: 1,
    title:
      "Social Media Droid – Automatización de interacciones en TikTok y Facebook",
    description:
      'Sistema desarrollado para automatizar interacciones en redes sociales y potenciar la visibilidad de publicaciones. Permite ejecutar acciones como comentar, dar "me gusta" o seguir usuarios de forma automática en TikTok y Facebook.',
    tech: "Backend: NestJS, Socket.IO, PostgreSQL\n\nFrontend: Next.js\n\nAplicación móvil: Kotlin (Android) con Accessibility Service",
    // link: "https://github.com/angelgcdev/Automatizacion_posts_facebook_V2",
    image: "/proyects-images/proyecto1.png",
    empresa: "Importadora Miranda",
  },
  {
    number: 2,
    title: "Automatización de publicaciones en Facebook",
    description:
      "Este proyecto es un prototipo de automatización de publicaciones en grupos de facebook, es un prototipo realizado con:",
    tech: "Backend: Node JS, Express, Playwright, y PostgreSQL\n\nFrontend: HTML, CSS, JavasScript",
    link: "https://github.com/angelgcdev/Automatizacion_posts_facebook_V2",
    image: "/proyects-images/proyect-fac.png",
  },
  {
    number: 3,
    title: "TODOS (Lista de tareas)",
    description:
      "Este proyecto esta realizado con React JS como parte de un curso de introducción a esta libreria. Se trata de una lista de tareas que permite añadir nuevas tareas, marcarlas como completadas, eliminarlas y buscarlas de manera sencilla.",
    tech: "",
    link: "https://angelgcdev.github.io/curso-react-intro-platzi/",
    image: "/proyects-images/TODO-reactjs.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1f]"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Portafolio
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`space-y-4 ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <h3 className="text-purple-400 font-semibold text-lg">
                  PROYECTO {project.number}
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {project.tech && (
                  <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                    {project.tech}
                  </p>
                )}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    <ExternalLink size={20} />
                    {project.link.includes("github.com")
                      ? "GitHub"
                      : "Visitar sitio"}
                  </a>
                ) : (
                  ""
                )}

                {project.empresa ? <p>Empresa: {project.empresa}</p> : ""}
              </div>

              <div
                className={`${
                  index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Proyecto ${project.number}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
