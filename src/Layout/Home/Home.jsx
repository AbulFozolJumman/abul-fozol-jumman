import AboutMe from "./AboutMe/AboutMe";
import Aside from "./Aside/Aside";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";


const Home = () => {
    return (
        <div className="md:flex relative bg-black">
            <div className="md:w-[15%]">
                <Aside></Aside>
            </div>
            <div className="md:w-[85%]">
                <Banner></Banner>
                <Projects></Projects>
                <AboutMe></AboutMe>
                <ContactMe></ContactMe>
            </div>
        </div>
    );
};

export default Home;