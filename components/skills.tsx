import Image from "next/image";

const skills = [
  { name: "HTML", image: "/images/html5.png" },
  { name: "CSS3", image: "/images/css3.png" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "Next.js", image: "/images/nextjs.jpeg" },
  { name: "NestJS", image: "/images/nestjs.png" },
  { name: "GitHub", image: "/images/github-skill.png" },
  { name: "Node JS", image: "/images/node.png" },
  { name: "PostgreSQL", image: "/images/postgresql.png" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0f] min-h-screen scroll-mt-[10vh] flex items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Mis Habilidades
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <figure
              key={skill.name}
              className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl  hover:border-purple-500/50 hover:bg-white/10 transition-all hover:scale-105"
            >
              <div className={`relative w-20 h-20`}>
                <Image
                  src={skill.image || "/placeholder.svg"}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="text-white font-semibold text-center">
                {skill.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
