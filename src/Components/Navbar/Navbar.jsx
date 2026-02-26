import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-600 shadow-md w-full z-30">
      <div className="flex justify-between items-center p-2 max-w-6xl mx-auto text-white">
        <h1 className="font-bold text-xl">Guelewar Dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/projects" className="hover:text-gray-600">Projects</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-300 shadow-md flex flex-col items-center py-6 space-y-4 text-white">
          <Link to="/" onClick={handleClose}>Home</Link>
          <Link to="/about" onClick={handleClose}>About</Link>
          <Link to="/projects" onClick={handleClose}>Projects</Link>
          <Link to="/contact" onClick={handleClose}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;