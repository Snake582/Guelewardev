import React from "react";
import maphoto from "../../asset/maphoto.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import cvFile from "../../asset/CV_Guelewar.pdf";
import Reveal from "../Reveal/Reveal";

const content = {
  EN: {
    greeting: "Hi, I'm",
    name: "Guelewar Dev",
    role: "Fullstack JavaScript Developer",
    bio: "I'm Mamadou Kaba Diagne, a Fullstack JavaScript Developer based in Dakar, Senegal. I build modern, scalable and high-performance web & mobile applications, focused on clean architecture and impactful digital solutions.",
    availability: "Open to freelance projects, collaborations and full-time opportunities.",
    contact: "Contact Me",
    download: "Download CV",
  },
  FR: {
    greeting: "Bonjour, je suis",
    name: "Guelewar Dev",
    role: "Développeur Fullstack JavaScript",
    bio: "Je suis Mamadou Kaba Diagne, développeur Fullstack JavaScript basé à Dakar, Sénégal. Je conçois des applications web et mobiles modernes, performantes et évolutives, avec une architecture propre et une expérience utilisateur soignée.",
    availability: "Disponible pour des projets freelance, collaborations ou opportunités en entreprise.",
    contact: "Me Contacter",
    download: "Télécharger CV",
  },
};

const Home = ({ language }) => {
  const t = content[language];

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-28 pb-16 bg-ink-900 relative overflow-hidden"
    >
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl w-full grid md:grid-cols-[auto,1fr] gap-12 items-center relative z-10">
        <Reveal>
          <div className="w-56 h-56 sm:w-72 sm:h-72 mx-auto rounded-2xl overflow-hidden shadow-glow ring-1 ring-ink-500">
            <img src={maphoto} alt={t.name} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={120} className="text-center md:text-left">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            {t.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            {t.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 mt-3 font-medium">{t.role}</h2>

          <p className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
            {t.bio}
          </p>
          <p className="text-gray-300 font-medium mt-4">{t.availability}</p>

          {/* Social icons */}
          <div className="flex gap-5 mt-7 justify-center md:justify-start">
            <a href="https://wa.me/221706063217" target="_blank" rel="noopener noreferrer">
              <FaSquareWhatsapp className="text-gray-400 hover:text-accent text-2xl transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/mamadou-diagne-a7b86227b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-accent text-2xl transition duration-300" />
            </a>
            <a href="https://github.com/Snake582" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-accent text-2xl transition duration-300" />
            </a>
            <a href="https://x.com/mkd_snake" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-accent text-2xl transition duration-300" />
            </a>
            <a href="https://www.instagram.com/guelewar_" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-accent text-2xl transition duration-300" />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-7 py-3 bg-accent text-ink-950 font-semibold rounded-xl hover:bg-accent-light transition duration-300 shadow-glow text-center"
            >
              {t.contact}
            </a>
            <a
              href={cvFile}
              download="Guelewarcv (1).pdf"
              className="px-7 py-3 border border-ink-500 text-gray-200 font-semibold rounded-xl hover:border-accent hover:text-accent transition duration-300 text-center"
            >
              {t.download}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
