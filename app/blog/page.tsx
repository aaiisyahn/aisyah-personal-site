import DaftarTulisan from "./daftar-tulisan";

const posts = [
  {
    slug: "learning-nextjs",
    title: "Learning Next.js",
  },
  {
    slug: "things-ive-learned",
    title: "Things I've Learned",
  },
  {
    slug: "my-goals-this-year",
    title: "My Goals This Year",
  },
];

export default function BlogPage() {
  return (
    <main className="flex flex-1 items-start justify-center bg-[#fdf8f8] px-6 pt-4 pb-12">
      <section className="w-full max-w-xl rounded-2xl border border-[#f1e4e5] bg-white px-8 py-10 shadow-sm sm:px-12 sm:py-12">
        <header>
          <p className="text-xs tracking-[0.2em] text-[#bd8994]">MY PERSONAL WEBSITE</p>

          <h1 className="mt-4 text-3xl font-medium tracking-tight text-[#493b3e] sm:text-4xl">
            Blog
          </h1>
        </header>

        <DaftarTulisan daftar={posts} />
      </section>
    </main>
  );
}
