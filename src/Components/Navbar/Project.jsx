import React from "react";
import projet1 from "../../asset/projet1.jpg";
import projet2 from "../../asset/projet2.jpg";
import projet3 from "../../asset/projet3.jpg";
import projet4 from "../../asset/projet4.jpg";
import projet5 from "../../asset/projet5.jpg";
import projet6 from "../../asset/projet6.jpg";
import projet7 from "../../asset/projet7.png";
import projet8 from "../../asset/projet8.png";
import projet9 from "../../asset/projet9.png";
import Reveal from "../Reveal/Reveal";

const projects = [
  { title: "Landing Page Moderne", description: { FR: "Site vitrine responsive développé en HTML/CSS.", EN: "Responsive showcase site built with HTML/CSS." }, image: projet1, link: "https://snake582.github.io/projet1/" },
  { title: "Portfolio Personnel", description: { FR: "Portfolio professionnel développé avec React.", EN: "Professional portfolio built with React." }, image: projet2, link: "https://snake582.github.io/" },
  { title: "Maison Déco", description: { FR: "Site e-commerce design et responsive.", EN: "Responsive, design-forward e-commerce site." }, image: projet3, link: "https://snake582.github.io/Maisondeco/" },
  { title: "Ndougou E-commerce", description: { FR: "Plateforme e-commerce complète.", EN: "Full e-commerce platform." }, image: projet4, link: "https://snake582.github.io/Ndougou-ecommerce/" },
  { title: "Touki Travel", description: { FR: "Application moderne de réservation de voyages.", EN: "Modern travel booking application." }, image: projet5, link: "https://touki-travel.vercel.app/" },
  { title: "Ice Cream Shop", description: { FR: "Application moderne développée avec Next.js.", EN: "Modern app built with Next.js." }, image: projet6, link: "https://ice-cream-vert-phi.vercel.app/" },
  { title: "Cabinet IDAC SARL", description: { FR: "Site institutionnel professionnel.", EN: "Professional corporate website." }, image: projet7, link: "https://cabinet-idac-sarl.vercel.app/" },
  { title: "WATI SARL", description: { FR: "Site vitrine d'entreprise orienté business.", EN: "Business-oriented company showcase site." }, image: projet8, link: "https://www.watisarl.com/" },
  { title: "Coffee Shop", description: { FR: "Application de gestion de commandes pour un coffee shop.", EN: "Order management app for a coffee shop." }, image: projet9, link: "https://cofeeshop-gold.vercel.app/" },
];

const titleText = {
  FR: { title: "Projets Réalisés", subtitle: "Une sélection de projets développés en frontend et fullstack.", cta: "Voir le projet" },
  EN: { title: "Featured Projects", subtitle: "A selection of frontend and fullstack projects I have built.", cta: "Live Demo" },
};

const Project = ({ language }) => {
  const t = titleText[language];

  return (
    <section id="projets" className="min-h-screen bg-ink-900 px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">03</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">{t.title}</h1>
          <p className="text-gray-400 mt-3 max-w-2xl">{t.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 80}>
              <div className="bg-ink-800 border border-ink-600 rounded-xl overflow-hidden hover:border-accent/60 hover:-translate-y-1 transition duration-300 group h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 flex-1">{project.description[language]}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-center border border-accent/70 text-accent py-2 rounded-lg hover:bg-accent hover:text-ink-950 transition duration-300 text-sm font-medium"
                  >
                    {t.cta}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
