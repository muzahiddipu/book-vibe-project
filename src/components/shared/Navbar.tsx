"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Explore books", href: "/books" },
  { label: "My library", href: "/listedBooks" },
  { label: "Reading stats", href: "/read-books" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `block rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/80 bg-white/90 shadow-sm shadow-indigo-950/5 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex min-h-18 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          aria-label="Book Vibe home"
          className="group flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/20 transition-transform group-hover:-rotate-3 group-hover:scale-105">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M4.75 5.75A2.75 2.75 0 0 1 7.5 3h11.75v16H7.5a2.75 2.75 0 0 0-2.75 2.75v-16Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M4.75 19A2.75 2.75 0 0 1 7.5 16.25h11.75M8.5 7h6.75M8.5 10h5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>
            <span className="block text-lg font-black leading-none tracking-tight text-slate-950">
              Book Vibe
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500">
              Read. Collect. Repeat.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-100 bg-white/80 p-1.5 shadow-sm lg:flex">
          {navigationLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={
                href === "/"
                  ? pathname === "/"
                    ? "page"
                    : undefined
                  : pathname.startsWith(href)
                    ? "page"
                    : undefined
              }
              tabIndex={isMenuOpen ? 0 : -1}
              className={linkClassName(href)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Find your next read
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-white text-indigo-800 shadow-sm transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-indigo-100 bg-white/95 px-4 pb-4 shadow-lg shadow-indigo-950/10 backdrop-blur-xl transition-[opacity,transform] duration-200 lg:hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto flex max-w-7xl flex-col gap-1 pt-3">
            {navigationLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={
                  href === "/"
                    ? pathname === "/"
                      ? "page"
                      : undefined
                    : pathname.startsWith(href)
                      ? "page"
                      : undefined
                }
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className={linkClassName(href)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/books"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-indigo-900/15"
            >
              Find your next read <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
