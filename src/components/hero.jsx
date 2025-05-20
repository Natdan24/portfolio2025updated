import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* — Optional AI-themed background graphic — */}
      <div
        className="absolute inset-0 bg-[url('3d-render-network-communications-background-with-rainbow-coloured-plexus-design.jpg')] bg-center bg-cover opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* ↑ Make the container `relative` so the bg graphic sits behind */}
        <img
          src="Profile-image.jpg" 
          alt="Natasha Shereen"
          className="
            w-56 h-56      /* default size: 14rem */
            md:w-64 md:h-64 /* larger on desktop: 16rem */
            ring-4 ring-pink-500
            rounded-full
            object-cover
          "
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-500">
            Master’s Student in AI & Data Explorer
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            AI Enthusiast • Creative Problem Solver • Tech Communicator
          </p>

          {/* ─── Quick‐jump Buttons ─── */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded shadow transition"
            >
              View Projects
            </a>
            <a
              href="#skills"
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-medium rounded transition"
            >
              My Skillset
            </a>
            <a
              href="#education"
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-medium rounded transition"
            >
              Certifications
            </a>
            <a
             href="Data-Science-and-Analysis-resume.pdf"
             download
             className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded shadow transition"
            >
            Download Resume
            </a>
          </div>

          {/* … your social icons, etc. */}
        </div>
      </div>
    </section>
  );
}