import React from 'react';
import projet1 from '../../asset/projet1.jpg';
import projet2 from '../../asset/projet2.jpg';
import projet3 from '../../asset/projet3.jpg';

const Project = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col p-10">
      <div className="flex justify-start mb-8">
        <h1 className="font-extrabold text-3xl text-gray-800">PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 sm:px-4 md:px-6 lg:px-8 py-10">
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
          <div className='w-full h-40 mb-2 rounded-xl'>
            <img src={projet1} alt="picture" className='w-full h-full object-cover rounded-xl' />
          </div>
          <a href="https://snake582.github.io/projet1/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
>Open</a>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
          <div className='w-full h-40 mb-2 rounded-xl'>
            <img src={projet2} alt="picture" className='w-full h-full object-cover rounded-xl' />
          </div>
          <a href="https://snake582.github.io/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
>Open</a>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
          <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>
          <img src={projet3} alt="picture" className='w-full h-full object-cover rounded-xl' />
          </div>
          <a href="https://snake582.github.io/Maisondeco/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
>Open</a>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
        <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>01</div>
          <button className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300">
            OPOP</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 sm:px-4 md:px-6 lg:px-8 py-10">
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
        <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>01</div>
          <button className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300">
            OPOP</button>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
        <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>01</div>
          <button className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300">
            OPOP</button>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
        <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>01</div>
          <button className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300">
            OPOP</button>
        </div>
        <div className="w-full h-60 shadow-2xl flex flex-col items-center justify-center">
        <div className='w-full h-40 bg-slate-400 mb-2 m-2 rounded-xl'>01</div>
          <button className="rounded-lg text-xl font-semibold mb-2 text-white py-2 bg-blue-500 px-4 mt-6 hover:bg-blue-700 transition-colors duration-300">
            OPOP</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
