"use client";

import { useContext } from "react";
import Link from "next/link";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  type BarShapeProps,
  type XAxisTickContentProps,
} from "recharts";
import { BooksContext } from "@/context/BookContext";

const barColors = ["#4f46e5", "#6366f1", "#7c3aed", "#8b5cf6", "#4338ca"];

const wrapBookName = (name: string, maxLineLength = 22) => {
  const words = name.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;

    if (nextLine.length > maxLineLength && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  });

  if (line) {
    lines.push(line);
  }

  return lines;
};

const BookNameTick = ({ x, y, payload }: XAxisTickContentProps) => {
  const lines = wrapBookName(String(payload.value));

  return (
    <text
      x={Number(x)}
      y={Number(y) + 14}
      textAnchor="middle"
      fill="#64748b"
      fontSize={12}
      fontWeight={700}
    >
      {lines.map((line, index) => (
        <tspan key={`${line}-${index}`} x={Number(x)} dy={index === 0 ? 0 : 14}>
          {line}
        </tspan>
      ))}
    </text>
  );
};

const CurvedBar = ({ x, y, width, height, index, isActive }: BarShapeProps) => {
  const color = barColors[index % barColors.length];
  const path = `M ${x},${y + height} C ${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3} ${x + width / 2},${y} C ${x + width / 2},${
    y + height / 3
  } ${x + (2 * width) / 3},${y + height} ${x + width},${y + height} Z`;

  return (
    <path
      d={path}
      fill={color}
      stroke={isActive ? "#312e81" : "none"}
      strokeWidth={isActive ? 2 : 0}
      style={{ transition: "fill 180ms ease, stroke-width 180ms ease" }}
    />
  );
};

const ReadBooksPage = () => {
  const booksContext = useContext(BooksContext);

  if (!booksContext) {
    throw new Error("ReadBooksPage must be used within a BooksProvider");
  }

  const { readBooks } = booksContext;
  const chartData = readBooks.map((book) => ({
    bookName: book.bookName,
    pages: book.totalPages,
  }));
  const totalPages = chartData.reduce((total, book) => total + book.pages, 0);
  const averagePages = chartData.length
    ? Math.round(totalPages / chartData.length)
    : 0;
  const chartWidth = Math.max(760, chartData.length * 200);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-indigo-50/40">
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="relative isolate overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 px-6 py-9 text-white shadow-2xl shadow-indigo-950/15 sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
          />

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-200">
            Your reading progress
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Every page adds up.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-100/80 sm:text-base">
            Compare the length of the books you have read. Each bar shows a
            book&apos;s total page count.
          </p>

          <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-black">{readBooks.length}</p>
              <p className="mt-0.5 text-xs font-medium text-indigo-100/75">
                Books read
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-black">{totalPages.toLocaleString()}</p>
              <p className="mt-0.5 text-xs font-medium text-indigo-100/75">
                Total pages
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-black">{averagePages.toLocaleString()}</p>
              <p className="mt-0.5 text-xs font-medium text-indigo-100/75">
                Average pages per book
              </p>
            </div>
          </div>
        </header>

        <section className="mt-9 sm:mt-12" aria-labelledby="chart-heading">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Your collection
            </p>
            <h2
              id="chart-heading"
              className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              Pages by book
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Book names are shown along the horizontal axis; page counts are
              shown on the vertical axis.
            </p>
          </div>

          {chartData.length > 0 ? (
            <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-white p-4 shadow-sm sm:p-6">
              <div
                className="overflow-x-auto pb-3"
                role="region"
                aria-label="Scrollable chart of pages per read book"
                tabIndex={0}
              >
                <BarChart
                  width={chartWidth}
                  height={440}
                  data={chartData}
                  margin={{ top: 24, right: 24, left: 12, bottom: 20 }}
                  barCategoryGap="20%"
                  accessibilityLayer
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="#e0e7ff"
                    strokeDasharray="4 6"
                  />
                  <XAxis
                    dataKey="bookName"
                    interval={0}
                    height={90}
                    tickMargin={10}
                    tick={BookNameTick}
                    axisLine={{ stroke: "#c7d2fe" }}
                    tickLine={false}
                  />
                  <YAxis
                    width={72}
                    tick={{ fill: "#475569", fontSize: 13, fontWeight: 700 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(pages: number) => pages.toLocaleString()}
                    label={{
                      value: "Pages",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#475569",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  />
                  <Tooltip
                    cursor={{ fill: "#eef2ff", fillOpacity: 0.75 }}
                    contentStyle={{
                      border: "1px solid #c7d2fe",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgb(49 46 129 / 12%)",
                    }}
                    labelStyle={{ color: "#312e81", fontWeight: 800 }}
                    itemStyle={{ color: "#5b21b6", fontWeight: 700 }}
                    formatter={(value) => [
                      `${Number(value).toLocaleString()} pages`,
                      "Length",
                    ]}
                  />
                  <Bar
                    dataKey="pages"
                    name="Pages"
                    shape={CurvedBar}
                    maxBarSize={90}
                    activeBar
                  />
                </BarChart>
              </div>
              <p className="mt-2 text-center text-xs text-slate-500">
                Scroll horizontally to explore all books.
              </p>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-indigo-200 bg-white/80 px-6 py-14 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-100 to-violet-100 text-2xl text-indigo-700">
                ▤
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Your chart is ready for its first book
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Mark a book as read and its page count will appear here.
              </p>
              <Link
                href="/books"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-900/15 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore books
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ReadBooksPage;
