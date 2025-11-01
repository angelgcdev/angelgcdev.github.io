import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Contáctame
        </h2>
        <h3 className="text-xl md:text-2xl text-center mb-12 text-gray-300">
          Enviame un mensaje
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
              <Image
                src="/images/whatsapp.png"
                width={50}
                height={50}
                alt="WhatsApp logo"
              />
            </div>
            <p className="text-white font-semibold">🇧🇴 +591 74903382</p>
          </div>

          <a
            href="mailto:angelgcdev@gmail.com"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
              <Mail className="text-white" size={24} />
            </div>
            <p className="text-white font-semibold group-hover:text-purple-400 transition-colors">
              angelgcdev@gmail.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
