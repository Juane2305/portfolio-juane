import Main from "../../Components/Main/Main";
import Header from "../../Components/Header/Header";
import Technologies from "../../Components/Technologies/Technologies";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "@/Components/Projects/Projects";

const Home = () => {
    return (
      <div>
        <Header/>
        <Main/>
        <Technologies/>
        <AboutMe/>
        <Projects/>
      </div>
    );
};

export default Home;