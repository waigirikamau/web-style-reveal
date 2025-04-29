
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="portfolio-website">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div className="skills-expertise-container bg-gray-50">
        <Skills />
        <Expertise />
      </div>
      <Stats />
      <Portfolio />
      <div className="certification-section bg-teal-700 py-16">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-16">
            {["Award", "Experience", "Quality", "Support"].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
