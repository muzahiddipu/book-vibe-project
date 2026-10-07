"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BooksContext } from "@/context/BookContext";
import type { Book } from "@/types/book";

type BookList = "read" | "wishlist";

const ListedBooksPage = () => {
  const booksContext = useContext(BooksContext);
  const [activeList, setActiveList] = useState<BookList>("read");

  if (!booksContext) {
    throw new Error("ListedBooksPage must be used within a BooksProvider");
  }

  const { readBooks, wishlist } = booksContext;
  const activeBooks = activeList === "read" ? readBooks : wishlist;
  const listLabel = activeList === "read" ? "Read books" : "Wishlist";

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-indigo-50/40">
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="relative isolate overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 px-6 py-9 text-white shadow-2xl shadow-indigo-950/15 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
          />

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-200">
            Your personal library
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Books that stay with you.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-100/80 sm:text-base">
            Keep track of the stories you have read and the ones you can’t wait
            to start.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="min-w-36 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-black">{readBooks.length}</p>
              <p className="mt-0.5 text-xs font-medium text-indigo-100/75">
                Books read
              </p>
            </div>
            <div className="min-w-36 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-black">{wishlist.length}</p>
              <p className="mt-0.5 text-xs font-medium text-indigo-100/75">
                On your wishlist
              </p>
            </div>
          </div>
        </header>

        <section className="mt-9 sm:mt-12" aria-label="Your book lists">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                Curated by you
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Your collection
              </h2>
            </div>

            <div
              className="inline-flex w-fit rounded-full border border-indigo-100 bg-white p-1.5 shadow-sm"
              aria-label="Choose a book list"
            >
              <button
                type="button"
                aria-pressed={activeList === "read"}
                onClick={() => setActiveList("read")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeList === "read"
                    ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-900/15"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                Read books
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                    activeList === "read"
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {readBooks.length}
                </span>
              </button>
              <button
                type="button"
                aria-pressed={activeList === "wishlist"}
                onClick={() => setActiveList("wishlist")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeList === "wishlist"
                    ? "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-900/15"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                Wishlist
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                    activeList === "wishlist"
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {wishlist.length}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-slate-700">{listLabel}</h3>
            <p className="text-sm text-slate-500">
              {activeBooks.length}{" "}
              {activeBooks.length === 1 ? "book" : "books"}
            </p>
          </div>

          {activeBooks.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-4" aria-live="polite">
              {activeBooks.map((book: Book) => (
                <li key={book.bookId}>
                  <article className="group flex flex-col gap-5 rounded-3xl border border-indigo-100 border-l-4 border-l-indigo-400 bg-linear-to-br from-white via-white to-indigo-50/70 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:border-l-violet-500 hover:shadow-xl hover:shadow-indigo-950/10 sm:flex-row sm:gap-6 sm:p-5">
                    <div className="relative flex h-80 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-slate-100 via-indigo-50 to-violet-100 p-5 sm:h-72 sm:w-56 sm:p-6">
                      <Image
                        src={book.image}
                        alt={`Cover of ${book.bookName}`}
                        width={280}
                        height={380}
                        className="h-full w-auto max-w-full rounded-md object-contain drop-shadow-[0_12px_14px_rgba(15,23,42,0.22)]"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
                          {book.category}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
                          <span aria-hidden="true">★</span>
                          {book.rating.toFixed(1)}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-black leading-snug text-slate-950 transition-colors group-hover:text-indigo-800 sm:text-2xl">
                        {book.bookName}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                        {book.review}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-xs font-medium text-indigo-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-indigo-100/80 pt-4 sm:grid-cols-4">
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                            Written by
                          </p>
                          <p
                            title={book.author}
                            className="mt-1 truncate text-xs font-bold text-indigo-950"
                          >
                            {book.author}
                          </p>
                        </div>
                        <div className="rounded-xl border border-violet-100 bg-violet-50/70 px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-violet-500">
                            Pages
                          </p>
                          <p className="mt-1 text-xs font-bold text-violet-950">
                            {book.totalPages}
                          </p>
                        </div>
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                            Published
                          </p>
                          <p className="mt-1 text-xs font-bold text-indigo-950">
                            {book.yearOfPublishing}
                          </p>
                        </div>
                        <div className="min-w-0 rounded-xl border border-violet-100 bg-violet-50/70 px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-violet-500">
                            Publisher
                          </p>
                          <p
                            title={book.publisher}
                            className="mt-1 truncate text-xs font-bold text-violet-950"
                          >
                            {book.publisher}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-auto sm:flex sm:justify-end">
                        <Link
                          href={`/books/${book.bookId}`}
                          className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          View book details
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 rounded-3xl border border-dashed border-indigo-200 bg-white/80 px-6 py-14 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100 text-2xl text-indigo-700">
                {activeList === "read" ? "▤" : "♡"}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {activeList === "read"
                  ? "Your reading list is ready"
                  : "Your wishlist is waiting"}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                {activeList === "read"
                  ? "Mark a book as read and it will be saved here for you."
                  : "Save books you are interested in and find them here when you are ready."}
              </p>
              <Link
                href="/books"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore books
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ListedBooksPage;
