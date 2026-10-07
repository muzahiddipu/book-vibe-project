import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import books from "../../../../public/booksData.json";
import type { Book } from "@/types/book";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";

interface BookDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getBook = (id: string): Book | undefined =>
  books.find((book) => book.bookId === Number(id));

export function generateStaticParams() {
  return books.map((book) => ({
    id: String(book.bookId),
  }));
}

export async function generateMetadata({ params }: BookDetailsPageProps) {
  const { id } = await params;
  const book = getBook(id);

  return {
    title: book ? `${book.bookName} | Book Vibe` : "Book not found | Book Vibe",
    description: book?.review,
  };
}

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { id } = await params;
  const book = getBook(id);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/40">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
      </div>

      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Back button */}
        <Link
          href="/books"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-x-0.5 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Back to collection
        </Link>

        {/* Main card */}
        <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_20px_70px_rgba(30,41,59,0.10)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* ================= IMAGE SIDE ================= */}
            <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-slate-100 to-violet-100 p-8 sm:min-h-[36rem] sm:p-12 lg:min-h-[44rem] lg:p-16">
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl"
              />

              {/* Category */}
              <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
                <span className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-sm backdrop-blur-md">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-6 top-6 z-10 flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-3.5 py-2 text-sm font-bold text-amber-600 shadow-sm backdrop-blur-md sm:right-8 sm:top-8">
                <span aria-hidden="true">★</span>
                {book.rating.toFixed(1)}
              </div>

              {/* Book image */}
              <div className="relative z-10 flex h-[26rem] w-full items-center justify-center sm:h-[32rem] lg:h-[38rem]">
                <Image
                  src={book.image}
                  alt={`Cover of ${book.bookName}`}
                  width={400}
                  height={580}
                  priority
                  className="h-full w-auto max-w-[90%] rounded-xl object-contain drop-shadow-[0_30px_35px_rgba(15,23,42,0.30)] transition duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                />
              </div>

              {/* Bottom floating info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Published
                    </p>
                    <p className="mt-1 font-bold text-slate-800">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div className="h-8 w-px bg-slate-200" />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Pages
                    </p>
                    <p className="mt-1 font-bold text-slate-800">
                      {book.totalPages}
                    </p>
                  </div>

                  <div className="h-8 w-px bg-slate-200" />

                  <div className="text-right">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Publisher
                    </p>
                    <p className="mt-1 max-w-[110px] truncate font-bold text-slate-800">
                      {book.publisher}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CONTENT SIDE ================= */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16">
              {/* Category + rating */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
                  {book.category}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-2 text-sm font-semibold text-amber-700">
                  <span aria-hidden="true">★</span>
                  {book.rating.toFixed(1)}
                  <span className="font-medium text-amber-700/70">/ 5</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-5 text-lg text-slate-500">
                Written by{" "}
                <span className="font-bold text-indigo-700">{book.author}</span>
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-indigo-200 via-violet-100 to-transparent" />

              {/* About */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                  About this book
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  {book.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  Genres & Tags
                </p>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50/70 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:border-indigo-200 hover:bg-indigo-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Information cards */}
              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Pages
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-800">
                    {book.totalPages}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 text-xl font-black text-slate-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40 sm:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Publisher
                  </p>
                  <p
                    title={book.publisher}
                    className="mt-1 truncate text-base font-black text-slate-800"
                  >
                    {book.publisher}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ReadButton book={book}></ReadButton>

                <WishListButton book={book}></WishListButton>
              </div>

              {/* Small footer note */}
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available in the Book Vibe collection
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default BookDetailsPage;
