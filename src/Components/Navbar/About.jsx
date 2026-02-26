import React, { useState } from "react";

const About = () => {
  const [language, setLanguage] = useState("FR");

  const content = {
    FR: {
      title: "À propos",
      sectionTitle: "Présentation",
      education: "Formation",
      paragraph1:
        "Je suis Mamadou Kaba Diagne, développeur Fullstack JavaScript basé à Dakar, Sénégal. Diplômé en Informatique avec une spécialisation en développement web et mobile, je conçois des applications modernes, performantes et orientées expérience utilisateur.",
      paragraph2:
        "Je maîtrise des technologies telles que React, Next.js, Node.js, NestJS, TypeScript et MySQL. Mon objectif est de créer des solutions digitales fiables, évolutives et adaptées aux besoins métiers.",
      paragraph3:
        "Passionné par l'innovation et l'entrepreneuriat digital, je cherche continuellement à améliorer mes compétences techniques et à contribuer à des projets à fort impact.",
      edu1: "🎓 Baccalauréat – Lycée Mixte Maurice Delafosse (2020)",
      edu2: "🎓 Licence en Informatique – Université Cheikh Hamidou Kane (2024)",
      edu3: "🎓 Certification Fullstack JavaScript – Xarala (2025)",
    },
    EN: {
      title: "About",
      sectionTitle: "Professional Profile",
      education: "Education",
      paragraph1:
        "I am Mamadou Kaba Diagne, a Fullstack JavaScript Developer based in Dakar, Senegal. With a Bachelor's degree in Computer Science specialized in web and mobile development, I build modern, scalable and user-focused applications.",
      paragraph2:
        "My technical stack includes React, Next.js, Node.js, NestJS, TypeScript and MySQL. I focus on delivering reliable, maintainable and business-oriented digital solutions.",
      paragraph3:
        "Passionate about innovation and digital entrepreneurship, I continuously improve my skills and aim to contribute to high-impact projects.",
      edu1: "🎓 High School Diploma – Lycée Mixte Maurice Delafosse (2020)",
      edu2: "🎓 Bachelor's Degree in Computer Science – Université Cheikh Hamidou Kane (2024)",
      edu3: "🎓 Fullstack JavaScript Certification – Xarala (2025)",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10 relative">

      {/* Toggle Button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {language === "FR" ? "EN" : "FR"}
        </button>
      </div>

      {/* Title */}
      <div className="flex justify-start mb-8">
        <h1 className="font-extrabold text-3xl text-gray-800">
          {t.title}
        </h1>
      </div>

      {/* Profile Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          {t.sectionTitle}
        </h2>

        <p className="text-lg text-gray-800 leading-8">
          {t.paragraph1}
        </p>

        <p className="mt-4 text-lg text-gray-800 leading-8">
          {t.paragraph2}
        </p>

        <p className="mt-4 text-lg text-gray-800 leading-8">
          {t.paragraph3}
        </p>
      </div>

      {/* Education Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          {t.education}
        </h2>

        <div className="space-y-4 text-center">
          <p className="text-gray-700">{t.edu1}</p>
          <p className="text-gray-700">{t.edu2}</p>
          <p className="text-gray-700">{t.edu3}</p>
        </div>
      </div>

    </div>
  );
};

export default About;