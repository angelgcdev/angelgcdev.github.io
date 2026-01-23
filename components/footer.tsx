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

          <div className="flex items-center justify-evenly gap-4">
            {[
              {
                href: "https://wa.me/74903382",
                alt: "WhatsApp",
                src: "/images/whatsapp.svg",
              },
              {
                href: "https://github.com/angelgcdev",
                alt: "GitHub",
                src: "/images/github.svg",
              },
              {
                href: "https://www.linkedin.com/in/angel-guti%C3%A9rrez-a064b52b4/",
                alt: "Linkedin",
                src: "/images/linkedin.svg",
              },
              {
                href: "https://www.facebook.com/profile.php?id=100093205989441",
                alt: "Facebook",
                src: "/images/facebook.svg",
              },
            ].map(({ href, alt, src }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "contain" }}
                    className="hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
