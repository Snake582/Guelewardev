import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-slate-100 p-10'>
      <div className='flex justify-start mb-8'>
        <h1 className='font-extrabold text-3xl text-gray-800'>About Me</h1>
      </div>

      <div className='w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 mx-auto mb-12'>
        <p className='text-center text-xl font-semibold text-blue-700'>
          My name is Mamadou Kaba Diagne (Guelewar.Dev), I'm 25 years old. I'm Senegalese, living in Dakar (Yoff).
        </p>
        <p className='mt-4 text-lg text-gray-700'>
          I graduated from high school in 2020 before deciding to pursue web and mobile development at Cheikh Hamidou Kane University (formerly UVS).
          After 3 years of higher education, I obtained my Bachelor's degree in Computer Science, specializing in web and mobile development.
          In November 2024, I joined Xarala to specialize in Fullstack JavaScript development.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='w-full bg-white rounded-xl shadow-lg p-6'>
          <p className='text-2xl font-semibold text-gray-800 text-center'>Education</p>
          <div className='mt-4'>
            <p className='text-sm font-medium text-gray-600 text-center'>
              Bachelor at "Lycée Mixte Maurice Delafosse" <span className='text-blue-700 text-lg'>2020</span>
            </p>
            <p className='text-sm font-medium text-gray-600 text-center'>
              License at "Cheikh Hamidou Kane University (formerly UVS)" <span className='text-blue-700 text-lg'>2024</span>
            </p>
            <p className='text-sm font-medium text-gray-600 text-center'>
              Training in Fullstack JavaScript development at Xarala <span className='text-blue-700 text-lg'>2025</span>
            </p>
          </div>
        </div>

        <div className='w-full bg-white rounded-xl shadow-lg p-6'>
          <p className='text-2xl font-semibold text-gray-800 text-center'>Experience</p>
          <div className='mt-4'>
            <p className='text-sm font-medium text-gray-600 text-center'>
              Bricklayer (Ouvrier en maçonnerie) <span className='text-blue-700 text-lg'>2021 & 2022</span>
            </p>
            <p className='text-sm font-medium text-gray-600 text-center'>
              Paving of an alley (Pavage ruelle) <span className='text-blue-700 text-lg'>2023</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
