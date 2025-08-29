import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/CommunitySection";
import IntegrationsSection from "./components/IntegrationsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle 'dark' class on <html> for proper dark mode handling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <CommunitySection />
      <IntegrationsSection />
      <AboutSection />
      <Footer />
      <AIChatbot />
    </div>
  );
}
