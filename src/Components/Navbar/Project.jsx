import React from 'react';
import projet1 from '../../asset/projet1.jpg';
import projet2 from '../../asset/projet2.jpg';
import projet3 from '../../asset/projet3.jpg';
import projet4 from '../../asset/projet4.jpg';
import projet5 from '../../asset/projet5.jpg';
import projet6 from '../../asset/projet6.jpg';
import projet7 from '../../asset/projet7.png';
import projet8 from '../../asset/projet8.png';
import projet9 from '../../asset/projet9.png';

const projects = [
  {
    title: "Landing Page Moderne",
    description: "Site vitrine responsive développé en HTML/CSS.",
    image: projet1,
    link: "https://snake582.github.io/projet1/"
  },
  {
    title: "Portfolio Personnel",
    description: "Portfolio professionnel développé avec React.",
    image: projet2,
    link: "https://snake582.github.io/"
  },
  {
    title: "Maison Déco",
    description: "Site e-commerce design et responsive.",
    image: projet3,
    link: "https://snake582.github.io/Maisondeco/"
  },
  {
    title: "Ndougou E-commerce",
    description: "Plateforme e-commerce complète.",
    image: projet4,
    link: "https://snake582.github.io/Ndougou-ecommerce/"
  },
  {
    title: "Touki Travel",
    description: "Application moderne de réservation de voyages.",
    image: projet5,
    link: "https://touki-travel.vercel.app/"
  },
  {
    title: "Ice Cream Shop",
    description: "Application moderne développée avec Next.js.",
    image: projet6,
    link: "https://ice-cream-vert-phi.vercel.app/"
  },
  {
    title: "Cabinet IDAC SARL",
    description: "Site institutionnel professionnel.",
    image: projet7,
    link: "https://cabinet-idac-sarl.vercel.app/"
  },
  {
    title: "WATI SARL",
    description: "Site vitrine d’entreprise orienté business.",
    image: projet8,
    link: "https://www.watisarl.com/"
  },
  {
    title: "coffee shop",
    description: "Application de gestion de commandes pour un coffee shop.",
    image: projet9,
    link: "https://cofeeshop-gold.vercel.app/"
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      
      <div className="mb-10">
        <h1 className="font-extrabold text-4xl text-gray-800">
          Projets Réalisés / Featured Projects
        </h1>
        <p className="text-gray-600 mt-2">
          Voici une sélection de projets développés en frontend et fullstack.
          <br />
          Here is a selection of frontend and fullstack projects I have built.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Voir le projet / Live Demo
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Project;