import Link from "next/link";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-1 flex-col bg-[#fdf8f8]">
      <div className="w-full px-6 pt-4">
        <div className="mx-auto w-full max-w-xl">
          <nav
            aria-label="Blog navigation"
            className="flex items-center gap-2 border-b border-[#e8c6cc] pb-3 text-sm"
          >
            <span className="text-sm font-semibold tracking-[0.12em] text-[#493b3e]">
              BLOG SECTION
            </span>

            <span aria-hidden="true" className="text-[#bd8994]">
              /
            </span>

            <Link
              href="/blog"
              className="text-sm text-[#a8737f] transition-colors hover:text-[#493b3e] hover:underline"
            >
              All posts
            </Link>
          </nav>
        </div>
      </div>

      {children}
    </section>
  );
}
