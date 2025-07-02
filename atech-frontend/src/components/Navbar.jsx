import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          ATechSquare
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-200">Home</a>
          <a href="/courses" className="hover:text-blue-200">Courses</a>
          <a href="/services" className="hover:text-blue-200">Services</a>
          <a href="/login" className="hover:text-blue-200">Login</a>
          <a href="/register" className="hover:text-blue-200">Register</a>
        </div>
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 