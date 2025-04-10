import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center p-4 bg-gradient-to-r from-sky-500 to-blue-700'>
        <h1 className='text-xl font-extrabold text-white ml-40'>
          Guelewar<span className='text-sm font-bold text-red-700'>.Dev</span>
        </h1>

        <div className='lg:hidden'>
          <button 
            onClick={toggleMenu} 
            className='text-white p-2'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className='w-6 h-6'>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className='flex items-center gap-10 mr-60 hidden lg:flex'>
          <ul className='text-white'>
            <Link to="/">Home</Link>
          </ul>
          <ul className='text-white'>
            <Link to="/about">About</Link>
          </ul>
          <ul className='text-white'>
            <Link to="/skills">Skills</Link>
          </ul>
          <ul className='text-white'>
            <Link to="/projects">Projects</Link>
          </ul>
          <ul className='text-white'>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/4 sm:w-1/2 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-extrabold">Guelewar<span className="text-sm font-bold text-red-700">.Dev</span></h2>
              <button onClick={toggleMenu} className="text-black p-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-blue-700 font-bold">Home</Link>
              <Link to="/about" className="text-blue-700 font-bold">About</Link>
              <Link to="/skills" className="text-blue-700 font-bold">Skills</Link>
              <Link to="/projects" className="text-blue-700 font-bold">Projects</Link>
              <Link to="/contact" className="text-blue-700 font-bold">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
