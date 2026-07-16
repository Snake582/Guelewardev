import React from "react";
import { DiMysql } from "react-icons/di";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import Reveal from "../Reveal/Reveal";

const groups = {
  FR: [
    {
      title: "Langages",
      items: [
        { title: "HTML", icon: <FaHtml5 className="text-orange-400" />, level: 90 },
        { title: "CSS", icon: <FaCss3Alt className="text-sky-400" />, level: 75 },
        { title: "JavaScript (ES6+)", icon: <IoLogoJavascript className="text-yellow-400" />, level: 80 },
      ],
    },
    {
      title: "Frontend",
      items: [
        { title: "React.js", icon: <GrReactjs className="text-sky-400" />, level: 80 },
        { title: "Next.js", icon: <TbBrandNextjs className="text-gray-200" />, level: 85 },
        { title: "React Native", icon: <TbBrandReactNative className="text-sky-400" />, level: 75 },
        { title: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-300" />, level: 80 },
      ],
    },
    {
      title: "Backend",
      items: [
        { title: "NestJS", level: 85 },
        { title: "Express.js", level: 80 },
        { title: "MySQL", icon: <DiMysql className="text-sky-400" />, level: 80 },
      ],
    },
  ],
  EN: [
    {
      title: "Languages",
      items: [
        { title: "HTML", icon: <FaHtml5 className="text-orange-400" />, level: 90 },
        { title: "CSS", icon: <FaCss3Alt className="text-sky-400" />, level: 75 },
        { title: "JavaScript (ES6+)", icon: <IoLogoJavascript className="text-yellow-400" />, level: 80 },
      ],
    },
    {
      title: "Frontend",
      items: [
        { title: "React.js", icon: <GrReactjs className="text-sky-400" />, level: 80 },
        { title: "Next.js", icon: <TbBrandNextjs className="text-gray-200" />, level: 85 },
        { title: "React Native", icon: <TbBrandReactNative className="text-sky-400" />, level: 75 },
        { title: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-300" />, level: 80 },
      ],
    },
    {
      title: "Backend",
      items: [
        { title: "NestJS", level: 85 },
        { title: "Express.js", level: 80 },
        { title: "MySQL", icon: <DiMysql className="text-sky-400" />, level: 80 },
      ],
    },
  ],
};

const titleText = { FR: "Compétences Techniques", EN: "Technical Skills" };

const SkillCard = ({ title, icon, level }) => (
  <div className="px-6 py-5 rounded-xl bg-ink-800 border border-ink-600 w-60 hover:border-accent/60 hover:-translate-y-1 transition duration-300">
    <p className="flex items-center font-semibold text-base text-white">
      {title} {icon && <span className="ml-2 text-xl">{icon}</span>}
    </p>
    <p className="text-accent text-xs mt-1">{level}%</p>
    <div className="w-full h-1.5 bg-ink-600 rounded-full mt-3">
      <div
        className="h-full bg-accent rounded-full transition-all duration-700"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = ({ language }) => {
  const data = groups[language];

  return (
    <section id="competences" className="min-h-screen bg-ink-950 px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">02</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-14">
            {titleText[language]}
          </h1>
        </Reveal>

        <div className="space-y-14">
          {data.map((group, gi) => (
            <div key={group.title}>
              <Reveal delay={gi * 60}>
                <h2 className="text-lg font-semibold text-gray-300 mb-6">{group.title}</h2>
              </Reveal>
              <div className="flex flex-wrap gap-6">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={gi * 60 + i * 60}>
                    <SkillCard {...item} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
