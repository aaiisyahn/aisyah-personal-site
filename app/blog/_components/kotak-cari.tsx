export default function KotakCari({
  nilai,
  saatBerubah,
}: {
  nilai: string;
  saatBerubah: (teks: string) => void;
}) {
  return (
    <input
      type="text"
      value={nilai}
      onChange={(e) => saatBerubah(e.target.value)}
      placeholder="Cari tulisan..."
      className="mb-6 w-full rounded-lg border border-[#f1e4e5] bg-[#fdf8f8] px-4 py-3 text-sm text-[#493b3e] outline-none placeholder:text-[#bd8994] focus:border-[#bd8994]"
    />
  );
}
