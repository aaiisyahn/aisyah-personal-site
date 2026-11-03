const posts: Record<string, { title: string; content: string }> = {
  "belajar-nextjs": {
    title: "Learning Next.js",
    content:
      "I am learning how to build web applications with Next.js. So far, I have explored pages, layouts, dynamic routes, and reusable components. Each new concept helps me understand how modern websites are structured.",
  },
  "hal-baru": {
    title: "Things I've Learned",
    content:
      "One thing I have learned is that building an application takes more than writing code. Understanding the structure, organizing components, and paying attention to the user experience are just as important.",
  },
  "target-tahun-ini": {
    title: "My Goals This Year",
    content:
      "This year, I want to keep improving my programming skills, explore web development, and build more projects for my portfolio. My goal is to become a better developer by learning consistently and putting new knowledge into practice.",
  },
};

export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  return (
    <main className="flex flex-1 items-start justify-center bg-[#fdf8f8] px-6 pt-4 pb-12">
      <article className="w-full max-w-xl rounded-2xl border border-[#f1e4e5] bg-white px-8 py-10 shadow-sm sm:px-12 sm:py-12">
        <p className="text-xs tracking-[0.2em] text-[#bd8994]">BLOG ARTICLE</p>

        <h1 className="mt-4 text-3xl font-medium tracking-tight text-[#493b3e] sm:text-4xl">
          {post?.title ?? slug}
        </h1>

        <div className="mt-6 border-t border-[#e8c6cc] pt-6">
          <p className="text-sm leading-7 text-[#827477]">
            {post?.content ?? "This article is coming soon."}
          </p>
        </div>
      </article>
    </main>
  );
}
