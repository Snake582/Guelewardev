import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Navbar/Skills';
import Project from './Components/Navbar/Project';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Navbar/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [language, setLanguage] = useState('FR');

  return (
    <div className="bg-ink-900">
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} />
      <Skills language={language} />
      <Project language={language} />
      <Experience language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default App;
