"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex items-center justify-between gap-4 border-b border-[#e8c6cc] bg-[#fdf8f8] px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-wide text-[#493b3e] transition hover:text-[#bd8994]"
      >
        Aisyah Personal Website<span className="text-[#bd8994]">.</span>
      </Link>

      <div className="flex items-center gap-6">
        {links.map((link) => {
          const isActive =
            pathname === link.href || (link.href === "/blog" && pathname.startsWith("/blog/"));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 py-2 text-sm transition hover:border-[#bd8994] hover:text-[#493b3e] ${
                isActive
                  ? "border-[#bd8994] font-semibold text-[#493b3e]"
                  : "border-transparent font-medium text-[#827477]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
