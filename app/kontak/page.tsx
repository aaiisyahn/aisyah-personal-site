import TombolBeranda from "@/components/tombol-beranda";

export default function KontakPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fdf8f8] px-6 py-12">
      <section className="w-full max-w-xl rounded-2xl border border-[#f1e4e5] bg-white px-8 py-12 text-center shadow-sm sm:px-14">
        <p className="text-sm tracking-[0.2em] text-[#bd8994]">GET IN TOUCH</p>

        <div className="mx-auto my-6 h-px w-12 bg-[#e8c6cc]" />

        <h1 className="text-3xl font-medium tracking-tight text-[#493b3e] sm:text-4xl">
          Contact Me
        </h1>

        <p className="mt-5 text-base leading-7 text-[#827477]">Feel free to reach out!</p>

        <div className="mt-9 space-y-5 text-left">
          <div className="border-b border-[#f3e9ea] pb-4">
            <p className="text-xs tracking-widest text-[#bd8994]">EMAIL</p>
            <p className="mt-2 text-sm text-[#493b3e]">aaiisyahn@gmail.com</p>
          </div>

          <div className="border-b border-[#f3e9ea] pb-4">
            <p className="text-xs tracking-widest text-[#bd8994]">GITHUB</p>
            <p className="mt-2 text-sm text-[#493b3e]">github.com/aaiisyahn</p>
          </div>

          <div>
            <p className="text-xs tracking-widest text-[#bd8994]">LINKEDIN</p>
            <p className="mt-2 text-sm text-[#493b3e]">linkedin.com/in/aisyahna/</p>
          </div>
        </div>
        <TombolBeranda />
      </section>
    </main>
  );
}
