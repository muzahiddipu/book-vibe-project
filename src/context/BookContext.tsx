"use client";

import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Book } from "@/types/book";

interface BooksContextValue {
  readBooks: Book[];
  setReadBooks: Dispatch<SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: Dispatch<SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextValue | null>(null);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  return (
    <BooksContext.Provider
      value={{ readBooks, setReadBooks, wishlist, setWishlist }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
