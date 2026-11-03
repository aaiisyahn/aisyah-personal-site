import TombolBeranda from "../../components/tombol-beranda";

export default function TentangPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-[#fdf8f8] px-6 py-12">
      <section className="w-full max-w-xl rounded-2xl border border-[#f1e4e5] bg-white px-8 py-12 text-center shadow-sm sm:px-14">
        <p className="text-sm tracking-[0.2em] text-[#bd8994]">ASSALAMUALAIKUM</p>

        <div className="mx-auto my-6 h-px w-12 bg-[#e8c6cc]" />

        <h1 className="text-3xl font-medium tracking-tight text-[#493b3e] sm:text-4xl">About Me</h1>

        <p className="mt-5 text-base leading-7 text-[#827477]">
          Hi, Im Siti Aisyah Nur Alim. You can call me Aisyah.
        </p>

        <div className="mt-9 space-y-5 text-left">
          <div className="border-b border-[#f3e9ea] pb-4">
            <p className="text-xs tracking-widest text-[#bd8994]">BASED IN</p>
            <p className="mt-2 text-sm text-[#493b3e]">Bekasi, Indonesia</p>
          </div>

          <div>
            <p className="text-xs tracking-widest text-[#bd8994]">INTERESTS</p>
            <p className="mt-2 text-sm text-[#493b3e]">
              I enjoy working out, watching movies, and exploring tech. Most of my college projects
              focused on Android development, and now Im looking forward to learning Next.js and web
              development
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#b69da2]">Nice to meet you!</p>
        <TombolBeranda />
      </section>
    </main>
  );
}
