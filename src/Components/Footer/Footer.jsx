import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const text = {
  FR: { rights: "Tous droits réservés.", made: "Conçu et développé par Guelewar Dev." },
  EN: { rights: "All rights reserved.", made: "Designed and built by Guelewar Dev." },
};

const Footer = ({ language = "FR" }) => {
  const t = text[language];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 border-t border-ink-600 px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © {year} GuelewarDev — {t.rights} <br className="sm:hidden" />
          {t.made}
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/Snake582" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-500 hover:text-accent text-xl transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/mamadou-diagne-a7b86227b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-500 hover:text-accent text-xl transition duration-300" />
          </a>
          <a href="https://x.com/mkd_snake" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-500 hover:text-accent text-xl transition duration-300" />
          </a>
          <a href="https://www.instagram.com/guelewar_" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-500 hover:text-accent text-xl transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
