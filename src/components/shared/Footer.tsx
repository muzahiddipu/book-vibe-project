import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-violet-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl"
      />
      <div className="container mx-auto px-4 pb-6 pt-12 sm:px-6 sm:pt-14 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-violet-200 ring-1 ring-white/15">
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
              <span className="text-xl font-black tracking-tight">
                Book Vibe
              </span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-indigo-100/70">
              A little space for the stories you love and the ones you have yet
              to discover.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm font-medium text-indigo-100/75">
              <li>
                <Link className="transition hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/books">
                  Browse books
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-white"
                  href="/listedBooks"
                >
                  My library
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-white"
                  href="/read-books"
                >
                  Reading stats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              Get in touch
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-indigo-100/70">
              Have a suggestion or spotted something we can improve? Reach out
              through the project.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/muzahiddipu/book-vibe-project"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the Book Vibe project on GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-indigo-100 transition hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.14-2.99-.12-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>
              <a
                href="https://github.com/muzahiddipu/book-vibe-project/issues"
                target="_blank"
                rel="noreferrer"
                aria-label="Send feedback on GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-indigo-100 transition hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-6.5A7.5 7.5 0 1 1 20 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-2 text-xs text-indigo-100/55">
              GitHub · Feedback
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-indigo-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Book Vibe. Made for readers.</p>
          <p>Find a story. Make it yours.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
