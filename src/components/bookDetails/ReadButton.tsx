"use client";
import { BooksContext } from "@/context/BookContext";
import type { Book } from "@/types/book";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Book }) => {
  const booksContext = useContext(BooksContext);

  if (!booksContext) {
    throw new Error("ReadButton must be used within a BooksProvider");
  }

  const handleReadBook = () => {
    booksContext.setReadBooks([...booksContext.readBooks, book]);
    toast.success(`You have read ${book.bookName}`, {
      style: { background: "linear-gradient(to right, #4f46e5, #7c3aed)" },
    });
  };

  return (
    <button
      onClick={handleReadBook}
      type="button"
      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl"
    >
      Read Books
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
};

export default ReadButton;
