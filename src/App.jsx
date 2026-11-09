import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PropertyList from "./components/PropertyList";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Hero darkMode={darkMode} />
    <div className="about-section">
    <About />
    </div>
    <PropertyList
    favorites={favorites}
    setFavorites={setFavorites}
    />
    <FAQ />
    <Contact />
    <Footer />
    </div>
  );
}

export default App