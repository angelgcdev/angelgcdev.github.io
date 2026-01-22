import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[10vh] bg-[#0a0a0f]">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center md:text-left">
            Desarrollado por Luis Angel Gutierrez Cantuta - 2026
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/74903382"
              target="_blank"
              rel="noopener noreferrer" //para prevenir ataques de reverse tabnabbing y proteger la privacidad del usuario.
              className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp"
                width={40}
                height={40}
              />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100093205989441"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>

            <Link
              href="https://github.com/angelgcdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={60}
                height={60}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
