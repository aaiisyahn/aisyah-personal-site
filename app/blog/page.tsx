import Link from "next/link";

const posts = [
  {
    slug: "belajar-nextjs",
    title: "Learning Next.js",
  },
  {
    slug: "hal-baru",
    title: "Things I've Learned",
  },
  {
    slug: "target-tahun-ini",
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

        <div className="mt-8 border-t border-[#e8c6cc]">
          {posts.map((post) => (
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
      </section>
    </main>
  );
}
