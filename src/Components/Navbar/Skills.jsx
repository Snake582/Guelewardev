import React from 'react';
import { DiMysql } from 'react-icons/di';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';

const SkillItem = ({ title, icon, percentage }) => (
  <div className='px-8 py-6 rounded-xl shadow-xl bg-white w-64 hover:scale-105 transition duration-300'>
    <p className='flex items-center font-bold text-xl'>
      {title} {icon && <span className='ml-2 text-2xl'>{icon}</span>}
    </p>

    <p className='text-blue-600 text-sm mt-1'>
      Niveau de maîtrise / Proficiency: {percentage}%
    </p>

    <div className="w-full h-2 bg-gray-300 rounded-full mt-3">
      <div 
        className="h-full bg-blue-600 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col p-10'>
      
      <div className='flex justify-start mb-8'>
        <h1 className='font-extrabold text-4xl text-gray-800'>
          Compétences Techniques / Technical Skills
        </h1>
      </div>

      {/* LANGAGES */}
      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-2xl text-blue-950 font-bold'>
          Langages de Programmation / Programming Languages
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <SkillItem
          title="HTML"
          icon={<FaHtml5 className='text-red-500' />}
          percentage={90}
        />
        <SkillItem
          title="CSS"
          icon={<FaCss3Alt className='text-blue-500' />}
          percentage={75}
        />
        <SkillItem
          title="JavaScript (ES6+)"
          icon={<IoLogoJavascript className='bg-yellow-400 text-black rounded' />}
          percentage={80}
        />
      </div>

      {/* FRONTEND */}
      <div className='flex justify-center items-center mt-12'>
        <h2 className='text-2xl text-blue-950 font-bold'>
          Développement Frontend / Frontend Development
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <SkillItem
          title="React.js"
          icon={<GrReactjs className='text-blue-500' />}
          percentage={80}
        />
        <SkillItem
          title="Next.js"
          icon={<TbBrandNextjs className='text-black' />}
          percentage={85}
        />
        <SkillItem
          title="React Native"
          icon={<TbBrandReactNative className='text-blue-500' />}
          percentage={75}
        />
        <SkillItem
          title="Tailwind CSS"
          icon={<RiTailwindCssFill className='text-blue-400' />}
          percentage={80}
        />
      </div>

      {/* BACKEND */}
      <div className='flex justify-center items-center mt-12'>
        <h2 className='text-2xl text-blue-950 font-bold'>
          Développement Backend / Backend Development
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <SkillItem
          title="NestJS"
          percentage={85}
        />
        <SkillItem
          title="Express.js"
          percentage={80}
        />
        <SkillItem
          title="MySQL"
          icon={<DiMysql className='text-blue-500' />}
          percentage={80}
        />
      </div>

    </div>
  );
};

export default Skills;