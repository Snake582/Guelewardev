import React from "react";
import Reveal from "../Reveal/Reveal";

const content = {
  FR: {
    label: "04",
    title: "Expérience & Formation",
    workTitle: "Expérience professionnelle",
    eduTitle: "Formation",
    work: [
      {
        role: "Stage Développeur Web",
        place: "Cabinet IDAC SARL",
        date: "2025 · 2 mois",
        description:
          "Conception et développement de deux sites web durant le stage : le site institutionnel du Cabinet IDAC SARL et le site vitrine de WATI SARL, de la maquette à la mise en production.",
      },
    ],
    education: [
      { title: "Certification Fullstack JavaScript", place: "Xarala", date: "2025" },
      { title: "Licence en Informatique", place: "Université Cheikh Hamidou Kane", date: "2024" },
      { title: "Baccalauréat", place: "Lycée Mixte Maurice Delafosse", date: "2020" },
    ],
  },
  EN: {
    label: "04",
    title: "Experience & Education",
    workTitle: "Professional Experience",
    eduTitle: "Education",
    work: [
      {
        role: "Web Developer Intern",
        place: "Cabinet IDAC SARL",
        date: "2025 · 2 months",
        description:
          "Designed and built two websites during the internship: the corporate site for Cabinet IDAC SARL and the showcase site for WATI SARL, from mockup to production deployment.",
      },
    ],
    education: [
      { title: "Fullstack JavaScript Certification", place: "Xarala", date: "2025" },
      { title: "Bachelor's Degree in Computer Science", place: "Université Cheikh Hamidou Kane", date: "2024" },
      { title: "High School Diploma", place: "Lycée Mixte Maurice Delafosse", date: "2020" },
    ],
  },
};

const TimelineItem = ({ title, place, date, description, delay }) => (
  <Reveal delay={delay}>
    <div className="relative pl-8 border-l border-ink-600 pb-10 last:pb-0">
      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-glow" />
      <p className="text-xs text-accent font-medium tracking-wide">{date}</p>
      <h3 className="text-white font-semibold text-lg mt-1">{title}</h3>
      <p className="text-gray-400 text-sm">{place}</p>
      {description && <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xl">{description}</p>}
    </div>
  </Reveal>
);

const Experience = ({ language }) => {
  const t = content[language];

  return (
    <section id="experience" className="min-h-screen bg-ink-950 px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">{t.label}</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-14">{t.title}</h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <Reveal>
              <h2 className="text-lg font-semibold text-gray-300 mb-8">{t.workTitle}</h2>
            </Reveal>
            {t.work.map((item, i) => (
              <TimelineItem key={item.role} title={item.role} place={item.place} date={item.date} description={item.description} delay={i * 80} />
            ))}
          </div>

          <div>
            <Reveal>
              <h2 className="text-lg font-semibold text-gray-300 mb-8">{t.eduTitle}</h2>
            </Reveal>
            {t.education.map((item, i) => (
              <TimelineItem key={item.title} title={item.title} place={item.place} date={item.date} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
