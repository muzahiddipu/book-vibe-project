"use client";
import { BooksContext } from "@/context/BookContext";
import type { Book } from "@/types/book";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: Book }) => {
  const booksContext = useContext(BooksContext);

  if (!booksContext) {
    throw new Error("WishListButton must be used within a BooksProvider");
  }

  const { wishlist, setWishlist } = booksContext;

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);
    toast.success(`You have added ${book.bookName} to your wishlist`, {
      style: { background: "linear-gradient(to right, #4f46e5, #7c3aed)" },
    });
  };

  return (
    <button
      onClick={handleAddToWishlist}
      type="button"
      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50/70 px-6 py-3.5 text-sm font-bold text-indigo-800 shadow-sm shadow-indigo-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 hover:shadow-md hover:shadow-violet-900/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 group-hover:text-violet-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
        />
      </svg>
      <span>Add to Wishlist</span>
      <span
        aria-hidden="true"
        className="text-indigo-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-violet-500"
      >
        +
      </span>
    </button>
  );
};

export default WishListButton;
