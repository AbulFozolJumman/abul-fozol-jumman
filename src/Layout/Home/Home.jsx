import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import Projects from "./Projects/Projects";

import { Slide } from "react-awesome-reveal";
import Navbar from "../Navbar/Navbar";
import Hill1 from "../../assets/hill1.png";
import Hill2 from "../../assets/hill2.png";
import Hill3 from "../../assets/hill3.png";
import Hill4 from "../../assets/hill4.png";
import Hill5 from "../../assets/hill5.png";
import Tree from "../../assets/tree.png";
import Leaf from "../../assets/leaf.png";
import Plant from "../../assets/plant.png";
import { useRef, useEffect } from "react";

const Home = () => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    let text = textRef.current;
    let leaf = leafRef.current;
    let hill4 = hill4Ref.current;
    let hill5 = hill5Ref.current;

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      text.style.marginTop = value * 1.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.right = value * -1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center relative justify-center h-screen bg-white">
        <img className="absolute bottom-0 w-full" src={Hill1} alt="Hill1" />
        <img
          className="absolute bottom-0 left-0 w-full"
          src={Hill2}
          alt="Hill2"
          id="hill2"
        />
        <img
          className="absolute bottom-0 right-0 w-full"
          src={Hill3}
          alt="Hill3"
          id="hill3"
        />
        <img
          className="absolute bottom-0 left-0 w-full"
          src={Hill4}
          alt="Hill4"
          ref={hill4Ref}
        />
        <img
          className="absolute bottom-0 right-0 w-full"
          src={Hill5}
          alt="Hill5"
          ref={hill5Ref}
        />
        <img
          className="absolute bottom-0 w-full"
          src={Tree}
          alt="Tree"
          id="tree"
        />
        <img
          className="absolute top-0 right-0 w-full"
          src={Leaf}
          alt="Leaf"
          ref={leafRef}
        />
        <div className="absolute" ref={textRef}>
          <Slide duration={1300}>
            <h1 className="text-[8vw] md:text-[6vw] md:text-[#fff] text-[#003329] font-bold text-center">
              ABUL FOZOL JUMMAN
            </h1>
          </Slide>
          <Slide direction={"right"} duration={1300}>
            <p className="md:text-[4vw] text-[6vw] md:text-[#fff] text-[#003329] font-bold text-center">
              Full Stack Web Developer
            </p>
          </Slide>
        </div>
        <img className="absolute bottom-0 w-full" src={Plant} alt="Plant" />
      </div>
      <div className="relative bg-[#003329]">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </div>
    </>
  );
};

export default Home;
