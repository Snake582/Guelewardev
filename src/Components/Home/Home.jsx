import React from 'react';
import maphoto from '../../asset/maphoto.png';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-start m-8">
        <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-80 lg:h-80 object-cover rounded-full overflow-hidden bg-slate-200 shadow-2xl border-r-blue-500 border-4 border-l-sky-500 m-8 transform hover:scale-105 transition-transform duration-300 mx-auto mt-6 sm:mt-10">
          <img src={maphoto} alt="picture" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-black text-4xl font-semibold">
          Hello, I am <span className="text-blue-500 font-bold">Guelewar Dev</span>
        </h1>
        <p className="text-black text-xl mt-2">
          Web and Mobile Developer.
        </p>
        <p className="text-black text-xl mt-2">
          As a Fullstack JavaScript developer, my goal is to create robust websites <br /> and mobile or web applications.
        </p>
        <p className="text-black text-xl mt-2">
          Feel free to contact me for any collaboration.
        </p>

        <div className="flex gap-6 mt-6 h-10 justify-start">
        <a href="https://wa.me/221706063217"
  target="_blank"
  rel="noopener noreferrer"
  >
  <FaSquareWhatsapp className="text-green-500 text-2xl hover:scale-110 transition-transform duration-300 shadow-md shadow-green-800" /></a>
<a href="https://www.linkedin.com/in/mamadou-diagne-a7b86227b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
  target="_blank"
  rel="noopener noreferrer"
  ><FaLinkedin className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-800" /> </a>
          <a href="https://github.com/Snake582"
  target="_blank"
  rel="noopener noreferrer"
  ><FaGithub className="text-black text-2xl hover:scale-110 transition-transform duration-300 shadow-md shadow-black" /></a>
          <a href="https://x.com/mkd_snake?s=21"
  target="_blank"
  rel="noopener noreferrer"
  ><FaTwitter className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-800" /></a>
         <a href="https://www.instagram.com/guelewar_"
  target="_blank"
  rel="noopener noreferrer"
  ><FaInstagram className="text-red-500 text-2xl hover:scale-110 transition-transform duration-300 shadow-md shadow-red-800" /></a>
        </div>

        <button className="rounded-lg text-xl font-semibold text-white py-2 bg-blue-500 px-6 mt-6 hover:bg-blue-700 transition-colors duration-300">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
