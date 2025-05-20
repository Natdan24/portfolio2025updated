// src/components/Skills.jsx
import React from 'react';
import { FaPython, FaGitAlt } from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiCss3,
  SiTensorflow,
  SiKeras,
  SiCplusplus,
  SiSqlite,
  SiGithub,
  SiStreamlit,
  SiUnrealengine,
} from 'react-icons/si';

const skills = [
  { Icon: FaPython,     name: 'Python' },
  { Icon: SiJavascript,  name: 'JavaScript' },
  { Icon: SiReact,       name: 'React' },
  { Icon: SiVite,        name: 'Vite' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS' },
  { Icon: SiCss3,        name: 'CSS' },
  { Icon: SiTensorflow,  name: 'TensorFlow' },
  { Icon: SiKeras,       name: 'Keras' },
  { Icon: SiCplusplus,   name: 'C++' },
  { Icon: SiSqlite,      name: 'SQL (SQLite)' },
  { Icon: FaGitAlt,      name: 'Git' },
  { Icon: SiGithub,      name: 'GitHub' },
  { Icon: SiStreamlit,   name: 'Streamlit' },
  { Icon: SiUnrealengine,name: 'Unreal Engine' },
];

// only Docker & Kubernetes are future skills
const FUTURE_SKILLS = new Set(['Docker', 'Kubernetes']);

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
        {skills.map(({ Icon, name }) => {
          const isFuture = FUTURE_SKILLS.has(name);
          return (
            <div
              key={name}
              className={`flex flex-col items-center space-y-2 transition-transform hover:scale-110 ${
                isFuture ? 'opacity-50' : ''
              }`}
            >
              <Icon size={40} className="text-pink-400" aria-label={name} />
              <p className="text-white">{name}</p>
            </div>
          );
        })}
      </div>
      

      {/* ─── Specialty Libraries ─── */}
      {/* ─── Specialty Libraries ─── */}
     <div className="mt-8 flex flex-wrap justify-center gap-2">
       {[
         'Librosa',
         'Pandas',
         'Scikit-Learn',
         'H2O AutoML',
         'PNN',
         'Image Processing',
         'MATLAB',
         'TMDb API',
         'Requests',
         'Mistral-7B',
         'LM Studio',
         'GGPlot2',
       ].map((lib) => (
         <span
           key={lib}
           className="bg-gray-700 px-3 py-1 rounded-full text-sm whitespace-nowrap"
         >
           {lib}
         </span>
       ))}
     </div>
    </section>
  );
}
