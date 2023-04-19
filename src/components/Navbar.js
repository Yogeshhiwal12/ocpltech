// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <Link to="/" className="navbar-logo">
          Navbar
        </Link>
      </motion.div>
      <ul className="navbar-links">
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/page1" className="navbar-link">
            About
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/page2" className="navbar-link">
            Testimonials          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/page3" className="navbar-link">
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
