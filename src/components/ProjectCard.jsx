// src/components/ProjectCard.jsx
import React, { useState } from 'react';

export default function ProjectCard({ thumb, title, stack, summary, live, repo, tallImage = false, }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`
          relative w-full h-full
          transition-transform duration-500
          transform-style-preserve transform
          ${flipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* ─── FRONT ─── */}
        <div className="absolute inset-0 backface-hidden bg-gray-800 rounded-xl p-4 shadow-xl flex flex-col">
          {/* Bigger image container */}
          <div className="h-48 w-full bg-gray-700 rounded-md overflow-hidden">

            <img
              src={thumb}
              alt={`${title} thumbnail`}
              className="w-full h-full object-co"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-auto text-sm text-gray-300">{stack.join(' • ')}</p>
        </div>

        {/* ─── BACK ─── */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-pink-700 text-white rounded-xl p-6 flex flex-col justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="flex-1 mt-2 text-sm leading-relaxed">{summary}</p>
          <div className="mt-4 flex space-x-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-pink-600 rounded-md font-medium transition hover:bg-pink-50"
              >
                Live Demo
              </a>
            )}
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 border-white rounded-md font-medium transition hover:bg-white hover:text-pink-600"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
