import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'M.Sc. in Artificial Intelligence',
    institution: 'Brandenburg University of Technology',
    year: 'In progress   ( Grade: 2,2 )',
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Sathyabama University',
    year: '2020',
  },
];

const certifications = [
  {
    title: 'Introduction to Data Science Forage Job Simulation',
    issuer: 'Commonwealth Bank',
    issued: 'Apr 2025',
    link: 'Commonwealthbank.pdf',
  },
  {
    title: 'IBM Generative AI for Executives and Business Leaders',
    issuer: 'Coursera',
    issued: 'Jun 2024',
    link: 'IBM-GenAI.pdf',
  },
  {
    title: 'R Programming for Data Science',
    issuer: 'Udemy',
    issued: 'Jul 2022',
    link: 'R-programming-Cert.pdf',
  },
  {
    title: 'Completed Level 1 & 2, Machine Learning Course at Lema labs IIT Madras',
    issuer: 'Lema Labs',
    issued: 'Feb 2021',
    link: 'ML-merged.pdf',
  },
  {
    title: 'Elements of AI – Introduction',
    issuer: 'University of Helsinki',
    issued: 'Jan 2023',
    link: 'certificate-elements-of-ai.png',
  },
  {
    title: 'Python 3.4.3 Training',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    issued: 'Aug 2020',
    link: 'Python-3.4.3-Participant-Certificate.pdf',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative flex flex-col md:flex-row bg-black text-white overflow-hidden"
    >
      {/* Content Col */}
      <div className="relative z-10 w-full md:w-3/4 px-8 py-12 md:py-20 max-w-lg mx-auto md:mx-0">
        <h2 className="text-4xl font-bold text-pink-500 mb-8">
          Education & Certifications
        </h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-pink-400" />
            Education
          </h3>
          <ul className="space-y-6">
            {education.map(({ degree, institution, year }) => (
              <li
                key={degree}
                className="pl-4 border-l-4 border-pink-500 space-y-1"
              >
                <p className="font-medium">{degree}</p>
                <p className="text-gray-300 text-sm">
                  {institution} • {year}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCertificate className="text-pink-400" />
            Certifications
          </h3>
          <ul className="space-y-6">
            {certifications.map(({ title, issuer, issued, link }) => (
              <li
                key={title}
                className="pl-4 border-l-4 border-pink-500 space-y-1"
              >
                <p className="font-medium flex items-center gap-2">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-2"
                    >
                      <FaCertificate />
                      {title}
                    </a>
                  ) : (
                    <>
                      <FaCertificate />
                      {title}
                    </>
                  )}
                </p>
                <p className="text-gray-300 text-sm ml-6">
                  {issuer} • {issued}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image + Fade */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="freepik__the-style-is-candid-image-photography-with-natural__47082.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
