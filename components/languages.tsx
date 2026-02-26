import React from "react";

const languages = [
  { name: "Español", level: "Nativo", percentage: 100 },
  { name: "Inglés", level: "Nivel A2 (Básico - Intermedio)", percentage: 40 },
];

export default function Languages() {
  return (
    <section
      id="languages"
      className="bg-[#0a0a0f] pb-20 pt-4 scroll-mt-[10vh]"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Idiomas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-col gap-4 p-8 bg-white/5 rounded-xl border border-transparent hover:border-purple-500/50 hover:bg-white/10 transition-all hover:scale-105"
            >
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-3xl font-bold text-white">{lang.name}</h3>
                <span className="text-purple-400 font-semibold bg-purple-500/10 px-4 py-1.5 rounded-full text-sm">
                  {lang.level}
                </span>
              </div>
              
              <div className="w-full bg-gray-700/50 rounded-full h-3 mt-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
