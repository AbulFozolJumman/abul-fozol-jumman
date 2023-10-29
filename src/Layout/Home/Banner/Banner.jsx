import { Slide } from "react-awesome-reveal";
import Hill1 from "../../../assets/hill1.png"
import Hill2 from "../../../assets/hill2.png"
import Hill3 from "../../../assets/hill3.png"
import Hill4 from "../../../assets/hill4.png"
import Hill5 from "../../../assets/hill5.png"
import Tree from "../../../assets/tree.png"
import Leaf from "../../../assets/leaf.png"
import Plant from "../../../assets/plant.png"
import { useRef, useEffect } from 'react';

const Banner = () => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const leafRef = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);

    useEffect(() => {
        let text1 = text1Ref.current;
        let text2 = text2Ref.current;
        let leaf = leafRef.current;
        let hill4 = hill4Ref.current;
        let hill5 = hill5Ref.current;
    
        if (text1 && text2 && leaf && hill4 && hill5) {
          window.addEventListener("scroll", () => {
            let value = window.scrollY;
    
            text1.style.marginLeft = value * 2.5 + "px";
            text2.style.marginRight = value * 2.5 + "px";
            leaf.style.top = value * -1.5 + "px";
            leaf.style.left = value * 1.5 + "px";
            hill5.style.right = value * -1.5 + "px";
            hill4.style.left = value * -1.5 + "px";
          });
        }
      }, []);

    return (
        <div className="flex items-center relative justify-center h-screen">
            <img className="absolute bottom-0 w-full" src={Hill1} alt="Hill1" />
            <img className="absolute bottom-0 left-0 w-full" src={Hill2} alt="Hill2" />
            <img className="absolute bottom-0 right-0 w-full" src={Hill3} alt="Hill3" />
            <img className="absolute bottom-0 left-0 w-full" src={Hill4} alt="Hill4" ref={hill4Ref} />
            <img className="absolute bottom-0 right-0 w-full" src={Hill5} alt="Hill5" ref={hill5Ref} />
            <img className="absolute bottom-0 w-full" src={Tree} alt="Tree" />
            <img className="absolute top-0 right-0 w-full" src={Leaf} alt="Leaf" ref={leafRef} />
            <div>
                <Slide duration={1300}>
                    <h1 className="text-[5em] text-[#fff] font-bold text-center" ref={text1Ref}>ABUL FOZOL JUMMAN</h1>
                </Slide>
                <Slide direction={"right"} duration={1300}>
                    <p className="text-[4em] text-[#fff] font-bold text-center" ref={text2Ref}>Full Stack Web Developer</p>
                </Slide>
            </div>
            <img className="absolute bottom-0 w-full" src={Plant} alt="Plant" />
        </div>
    );
};

export default Banner;