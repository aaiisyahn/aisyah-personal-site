"use client";

import { useState } from "react";
import Link from "next/link";
import KotakCari from "./kotak-cari";

type Post = {
  slug: string;
  title: string;
};

export default function DaftarTulisan({ daftar }: { daftar: Post[] }) {
  const [cari, setCari] = useState("");

  const hasil = daftar.filter((post) => post.slug.includes(cari));

  return (
    <div className="mt-8 border-t border-[#e8c6cc]">
      <KotakCari nilai={cari} saatBerubah={setCari} />

      {hasil.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex items-center justify-between gap-4 border-b border-[#f1e4e5] py-5"
        >
          <span className="text-sm font-medium text-[#493b3e] transition-colors group-hover:text-[#bd8994] sm:text-base">
            {post.title}
          </span>

          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fdf8f8] text-[#bd8994] transition-colors group-hover:bg-[#f1e4e5]">
            <span aria-hidden="true">↗</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
