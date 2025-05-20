import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-16 bg-gray-800 text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-8">
          Publications & Awards
        </h2>

        <div className="space-y-12 text-left">
          {/* ── Springer Chapter ── */}
          <div>
            <h3 className="text-2xl font-semibold">
              Survey of Cervical Cancer Prediction Using Machine Learning
            </h3>
            <p className="text-gray-300 italic mb-2">
              Natasha Shereen Benita, S. Vaishnavi &amp; G. Kalaiarasi
            </p>
            <p className="text-gray-400 mb-4">
              In: Mallick P.K., Bhoi A.K., Marques G., de Albuquerque V.H.C. (eds){' '}
              <em>Advances in Intelligent Systems and Computing, vol 1317</em>,  
              pp 971–982. Springer, Singapore (2021).
            </p>
            <a
              href="https://doi.org/10.1007/978-981-16-1056-1_80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-600 rounded hover:bg-pink-500 transition"
            >
              <FaFilePdf />
              <span>View Chapter (DOI)</span>
            </a>
          </div>

          {/* ── Best Paper Award ── */}
          <div>
            <h3 className="text-2xl font-semibold">
              Best Paper Award – “Survey of Cervical Cancer Prediction Using Machine Learning”
            </h3>
            <p className="text-gray-300 italic mb-2">
              Awarded by Virtual National Conference on “Computational Intelligence and Data Science” (NCCIDS 2020)
            </p>
            <a
              href="NCCIDS2020-BEST-PAPER-CERTIFICATE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-600 rounded hover:bg-pink-500 transition"
            >
              <FaFilePdf />
              <span>View Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
