import React from 'react';
import { FaFilePowerpoint } from 'react-icons/fa';

const resources = [
  {
    title: 'Musical Instrument Recognition Poster Presentation',
    link: 'Music_Instrument_Classification_using_Traditional_Methods.pdf',
  },
  {
    title: 'Cervical Cancer Prediction Slides',
    link: 'cervicalcancerppt.pdf',
  },
  {
    title: 'Hospital Readmission Analysis Slides',
    link: 'Data_Exp.pdf',
  },
  {
    title: 'Hotel Booking System (My first project)',
    link: 'hotel-power.pdf',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-gray-800 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-8">
          Resources & Downloads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map(({ title, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              <FaFilePowerpoint size={32} className="text-orange-400" />
              <span className="font-medium">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
