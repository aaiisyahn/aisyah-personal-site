"use client";

import { useFavorit } from "@/store/use-favorit";

export default function TombolFavorit({ slug }: { slug: string }) {
  const { daftar, ubahFavorit } = useFavorit();
  const sudahDisimpan = daftar.includes(slug);

  return (
    <button
      onClick={() => ubahFavorit(slug)}
      className={`rounded-lg border px-4 py-2 font-medium transition ${
        sudahDisimpan
          ? "border-[#bd8994] bg-[#e8c6cc] text-[#493b3e]"
          : "border-[#bd8994] bg-[#fdf8f8] text-[#493b3e] hover:bg-[#f1e4e5]"
      }`}
    >
      {sudahDisimpan ? "★ Tersimpan" : "☆ Simpan ke favorit"}
    </button>
  );
}
