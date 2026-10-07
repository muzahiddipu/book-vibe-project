import Image from "next/image";
import type { Book } from "@/types/book";
import Link from "next/link";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/10">
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-100 p-6">
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-semibold text-indigo-800 shadow-sm backdrop-blur">
          {book.category}
        </span>
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={240}
          height={320}
          className="h-full w-auto max-w-full rounded-md object-contain drop-shadow-[0_12px_14px_rgba(15,23,42,0.22)]"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-800">
              {book.bookName}
            </h3>
            <p className="mt-1 text-sm text-slate-500">by {book.author}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700">
            <span aria-hidden="true">★</span>
            <span>{book.rating.toFixed(1)}</span>
          </span>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-xs font-medium text-slate-400">
            {book.totalPages} pages
          </span>
        </div>

        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-900/15 transition duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View details
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
