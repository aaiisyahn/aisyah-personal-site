"use client";

import { useRouter } from "next/navigation";

export default function TombolBeranda() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="mt-4 rounded-lg bg-[#bd8994] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#a8737f]"
    >
      Kembali ke Beranda
    </button>
  );
}
