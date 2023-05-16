import React from 'react';
import Navbar from './Navbar';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = () => (
  <div>
    <Navbar />

    {/* Hero Section */}
    <header className="hero bg-primary text-white text-center">
      <div className="container">
        <h1 className="display-4">Welcome to HealthTech!</h1>
        <p className="lead">We provide innovative healthcare technology solutions.</p>
        <a href="#contact" className="btn btn-light btn-lg">Contact Us</a>
      </div>
    </header>

    <Features />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
