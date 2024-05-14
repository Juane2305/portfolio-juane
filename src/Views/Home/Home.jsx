import Main from "../../Components/Main/Main";
import Header from "../../Components/Header/Header";
import Technologies from "../../Components/Technologies/Technologies";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Projects from "@/Components/Projects/Projects";
import ContactUs from "@/Components/ContactUs/ContactUs";
import Footer from "@/Components/Footer/Footer";

const Home = () => {
    return (
      <div>
        <Header/>
        <Main/>
        <Technologies/>
        <AboutMe/>
        <Projects/>
        <ContactUs/>
        <Footer/>
      </div>
    );
};

export default Home;