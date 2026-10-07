import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BooksProvider from "@/context/BookContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Book Vibe | Find your next favorite read",
    template: "%s | Book Vibe",
  },
  description:
    "Discover your next favorite read, keep track of books you've read, and build your personal library with Book Vibe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <BooksProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ToastContainer theme="colored" />
        </BooksProvider>
      </body>
    </html>
  );
}
