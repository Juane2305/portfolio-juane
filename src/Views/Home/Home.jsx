import { useState, useEffect } from "react";

import Main from "../../Components/Main/Main";
import Header from "../../Components/Header/Header";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "@/Components/Projects/Projects";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

    return (
      <div className="overflow-hidden">
        <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main language={language} darkMode={darkMode} />
        <AboutMe language={language} darkMode={darkMode}/>
        <Projects language={language} darkMode={darkMode}/>
        <Contact language={language} darkMode={darkMode}/>
        <Footer language={language} darkMode={darkMode}/>
      </div>
    );
};

export default Home;