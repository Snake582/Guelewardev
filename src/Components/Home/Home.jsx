import React, { useState } from "react";
import maphoto from "../../asset/maphoto.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import cvFile from "../../asset/CV_Guelewar.pdf"; // ✅ CV importé

const Home = () => {
  const [language, setLanguage] = useState("EN");

  const content = {
    EN: {
      greeting: "Hi, I'm",
      name: "Guelewar Dev",
      role: "Fullstack JavaScript Developer",
      descriptions: [
        "I build modern, scalable and high-performance web & mobile applications using JavaScript technologies.",
        "I focus on clean architecture, seamless user experiences and impactful digital solutions."
      ],
      availability: "Open to freelance projects, collaborations and full-time opportunities.",
      contact: "Contact Me",
      download: "Download CV"
    },
    FR: {
      greeting: "Bonjour, je suis",
      name: "Guelewar Dev",
      role: "Développeur Fullstack JavaScript",
      descriptions: [
        "Je développe des applications web et mobiles modernes, performantes et évolutives avec les technologies JavaScript.",
        "Je mets l’accent sur une architecture propre, une expérience utilisateur fluide et des solutions digitales impactantes."
      ],
      availability: "Disponible pour des projets freelance, collaborations ou opportunités en entreprise.",
      contact: "Me Contacter",
      download: "Télécharger CV"
    }
  };

  const t = content[language];

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4 relative pt-24">

      {/* Toggle Langue */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setLanguage(language === "EN" ? "FR" : "EN")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {language === "EN" ? "FR" : "EN"}
        </button>
      </div>

      <div className="max-w-4xl text-center md:text-left">

        {/* Photo */}
        <div className="w-72 h-72 sm:w-80 sm:h-80 mx-auto md:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 transform hover:scale-105 transition duration-500">
          <img src={maphoto} alt={t.name} className="w-full h-full object-cover" />
        </div>

        {/* Titres */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-8 leading-tight">
          {t.greeting} <span className="text-blue-600">{t.name}</span>
        </h1>
        <h2 className="text-2xl text-gray-700 mt-4 font-semibold">{t.role}</h2>

        {/* Descriptions */}
        {t.descriptions.map((desc, i) => (
          <p key={i} className="text-gray-600 text-lg mt-4 leading-relaxed">{desc}</p>
        ))}

        <p className="text-gray-700 font-medium text-lg mt-6">{t.availability}</p>

        {/* Réseaux sociaux */}
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <a href="https://wa.me/221706063217" target="_blank" rel="noopener noreferrer"><FaSquareWhatsapp className="text-green-500 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://www.linkedin.com/in/mamadou-diagne-a7b86227b" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-600 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://github.com/Snake582" target="_blank" rel="noopener noreferrer"><FaGithub className="text-black text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://x.com/mkd_snake" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-500 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://www.instagram.com/guelewar_" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-500 text-3xl hover:scale-110 transition duration-300" /></a>
        </div>

        {/* Boutons CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            {t.contact}
          </Link>

          <a
            href={cvFile}
            download="CV_Guelewar.pdf"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {t.download}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;