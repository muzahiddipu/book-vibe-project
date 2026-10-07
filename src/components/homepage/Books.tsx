import books from "../../../public/booksData.json";
import BookCard from "@/components/shared/BookCard";

const Books = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            The Book Vibe popular collection
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stories worth staying up for.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            From timeless classics to page-turning adventures, find a book that
            feels like it was picked just for you.
          </p>
        </div>
        <p className="text-sm font-medium text-slate-500">
          {books.length} reader favorites
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, 9).map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
