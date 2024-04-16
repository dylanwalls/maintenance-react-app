import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
