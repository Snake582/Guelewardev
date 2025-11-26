import React from 'react';
import { DiMysql } from 'react-icons/di';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';

const SkillItem = ({ title, icon, percentage }) => (
  <div className='px-8 py-6 rounded-lg shadow-2xl bg-white w-64'>
    <p className='flex items-center font-bold text-2xl'>
      {title} {icon && <span className='ml-2 text-3xl'>{icon}</span>}
    </p>
    <p className='text-blue-400 text-lg'>{percentage}%</p>
    <div className="w-full h-3 bg-gray-400 rounded-full mt-3">
      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col p-10'>
      <div className='flex justify-start mb-8'>
        <h1 className='font-extrabold text-4xl text-gray-800'>SKILLS</h1>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-2xl text-blue-950 font-bold'>Programming Languages</h2>
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
          percentage={70}
        />
        <SkillItem
          title="JavaScript"
          icon={<IoLogoJavascript className='bg-yellow-500 text-black' />}
          percentage={70}
        />
      </div>

      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-2xl text-blue-950 font-bold'>Frontend</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <SkillItem
          title="ReactJS"
          icon={<GrReactjs className='text-blue-500' />}
          percentage={70}
        />
        <SkillItem
          title="React Native"
          icon={<TbBrandReactNative className='text-blue-500' />}
          percentage={70}
        />
        <SkillItem
          title="NextJS"
          icon={<TbBrandNextjs className='text-black' />}
          percentage={85}
        />
        <SkillItem
          title="Tailwind CSS"
          icon={<RiTailwindCssFill className='text-blue-500' />}
          percentage={70}
        />
      </div>

      <div className='flex justify-center items-center mt-10'>
        <h2 className='text-2xl text-blue-950 font-bold'>Backend</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        <SkillItem
          title="NestJS"
          percentage={86}
        />
        <SkillItem
          title="MySQL"
          icon={<DiMysql className='text-blue-500' />}
          percentage={80}
        />
        <SkillItem
          title="ExpressJS"
          percentage={80}
        />
      </div>
    </div>
  );
}

export default Skills;
