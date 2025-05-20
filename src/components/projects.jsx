import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    thumb: 'AutoScreenshot.png',
    title: 'Braitenburg Vehicles Lab',
    stack: ['Unreal Engine', 'C++', 'Blueprints'],
    summary:
      'A demonstration of the first four Braitenburg‐style vehicles in Unreal Engine; showcases emergent behaviors from simple sensor–motor couplings.',
    live: '',
    repo: 'https://github.com/Natdan24/Braitenburg-Vehicles-Lab',
  },
  {
    thumb: 'churn-rate.jpg',
    title: 'Bank Customer Churn Analysis',
    stack: ['Microsoft Power BI'],
    summary:
      'End-to-end churn-prediction workflow and interactive dashboard built in Power BI.',
    live: '',
    repo: 'https://github.com/Natdan24/Bank-Customer-Churn-Analysis',
  },
  {
    thumb: 'output.png',
    title: 'Musical Instrument Recognition',
    stack: ['Python', 'Librosa', 'Scikit-Learn', 'TensorFlow'],
    summary:
      'Hybrid GMM–SVM & LSTM audio classification of 10 instrument classes; achieved 91% accuracy with the LSTM model.',
    live: '',
    repo: 'https://github.com/Natdan24/Musical_Instrument_recognition',
  },
  {
    thumb: 'ab3.jpg',
    title: 'Cervical Cancer Prediction',
    stack: ['MATLAB', 'Image Processing', 'PNN'],
    summary:
      'RGB→LAB + entropy features + probabilistic neural network for cervical cell malignancy detection.',
    live: '',
    repo:
      'https://github.com/Natdan24/Survey_cervical_Cancer_prediction',
  },
  {
    thumb: 'DataE-plot.png',
    title: 'Hospital Readmission Prediction',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'H2O AutoML'],
    summary:
      'EDA & predictive modeling for patient readmission risk using eICU data; GBM model achieved 99% accuracy & 1.0 AUC.',
    live: '',
    repo:
      'https://github.com/Natdan24/Hospital_Readmission_prediction',
  },
  {
    thumb: '1.png',
    title: 'AI Email Assistant',
    stack: ['Python', 'Streamlit', 'Requests', 'Mistral-7B'],
    summary:
      'Offline Streamlit app that drafts professional emails from bullet points with tone selection.', 
    large: true,
    live: '',
    repo: 'https://github.com/Natdan24/AI-Email-Assistant',
  },
  {
    thumb: 'portfolio.jpg',
    title: 'This Portfolio',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    summary:
      'Personal portfolio showcasing AI and EDA projects in a single-page flip-card design.',
    large: true,  
    live: '',
    repo: 'https://github.com/Natdan24/my-portfolio',
  },
  {
    thumb: 'movie-land.jpg',
    title: 'Movie App',
    stack: ['React', 'Create React App', 'TMDb API', 'CSS'],
    summary:
      'A TMDb-backed movie browser built with Create React App; users can search and view details including ratings and overview.',
    large: true,
    live: '',
    repo: 'https://github.com/Natdan24/movie-app',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-12">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
