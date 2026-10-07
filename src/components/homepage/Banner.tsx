import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 lg:py-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 px-6 py-10 shadow-2xl sm:px-10 lg:px-16 lg:py-14">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          {/* Content */}
          <div className="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              Curated for curious readers
            </span>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Discover your next
                <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  favorite read.
                </span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore handpicked books that inspire, inform, and elevate your
                everyday reading experience.
              </p>
            </div>

            {/* CTA */}
            <button className="btn mt-2 rounded-full border-0 bg-white px-7 text-base font-semibold text-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl">
              Explore the collection
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-8 rounded-full bg-violet-500/20 blur-3xl" />

            <Image
              className="relative h-auto w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.03]"
              src={bannerImage}
              alt="A collection of books"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
