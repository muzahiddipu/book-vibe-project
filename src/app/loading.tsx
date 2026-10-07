const GlobalLoading = () => {
  return (
    <main
      className="flex min-h-[60vh] flex-col items-center justify-center bg-linear-to-b from-slate-50 via-white to-indigo-50/40 px-4 text-center"
      role="status"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 animate-pulse"
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
      <p className="mt-5 text-base font-bold text-indigo-950">
        Finding your next great read...
      </p>
      <span className="sr-only">Loading</span>
    </main>
  );
};

export default GlobalLoading;
