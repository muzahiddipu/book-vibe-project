"use client";

import { useEffect, useState } from "react";
import type { Book } from "@/types/book";

const isBook = (value: unknown): value is Book => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const book = value as Record<string, unknown>;

  return (
    typeof book.bookId === "number" &&
    Number.isFinite(book.bookId) &&
    typeof book.bookName === "string" &&
    typeof book.author === "string" &&
    typeof book.image === "string" &&
    typeof book.review === "string" &&
    typeof book.rating === "number" &&
    typeof book.category === "string" &&
    Array.isArray(book.tags) &&
    book.tags.every((tag: unknown) => typeof tag === "string") &&
    typeof book.totalPages === "number" &&
    typeof book.publisher === "string" &&
    typeof book.yearOfPublishing === "number"
  );
};

const useBooksData = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const controller = new AbortController();

    const loadBooks = async () => {
      try {
        if (!baseUrl) {
          throw new Error(
            "NEXT_PUBLIC_BASE_URL is missing. Set it in .env and restart the development server.",
          );
        }

        const url = new URL("/booksData.json", baseUrl);
        const response = await fetch(url, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Book data request failed with status ${response.status} (${response.statusText}).`,
          );
        }

        const responseData: unknown = await response.json();

        if (!Array.isArray(responseData) || !responseData.every(isBook)) {
          throw new Error("The book data response has an invalid format.");
        }

        setBooks(responseData);
      } catch (loadError) {
        if (controller.signal.aborted) {
          return;
        }

        setError(
          loadError instanceof Error
            ? loadError.message
            : "An unexpected error occurred while loading books.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadBooks();

    return () => controller.abort();
  }, [baseUrl]);

  return { books, loading, error };
};

export default useBooksData;
