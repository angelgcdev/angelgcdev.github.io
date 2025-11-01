import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-center md:text-left">
              Desarrollado por Angel - 2025
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/74903382"
                target="_blank"
                rel="noopener noreferrer"
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
      </div>
    </footer>
  );
}
