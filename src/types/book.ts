export interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  rating: number;
  category: string;
  tags: string[];
  totalPages: number;
  publisher: string;
  yearOfPublishing: number;
}
