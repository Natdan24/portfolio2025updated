// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaWhatsapp} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500 mb-8">Get In Touch</h2>
        <p className="mb-8 text-gray-300">
          I’m always open to new opportunities, questions or collaborations. Feel free to drop me a line! 😊
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:natasha.dan7@outlook.com"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaEnvelope size={24} />
            <span>natasha.dan7@outlook.com</span>
          </a>
          <a
            href="tel:+49 176 48987197"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaPhone size={24} />
            <span>+49 176 48987197</span>
          </a>
          <a
            href="https://www.linkedin.com/in/natasha-shereen-benita-132b70227/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Natdan24"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="https://wa.me/919384792515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-400 transition"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
