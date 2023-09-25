import { FaFacebookSquare, FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import resume from "../../../assets/Abul Fozol Jumman - Resume - Full Stack Web Developer.pdf"
import { Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div id="banner" className="min-h-screen md:pt-0 pt-16 text-center fw-bolder text-white banner flex items-center justify-center">
            <div>
                <img src="https://i.ibb.co/MSd7mCz/ABUL-FOZOL-JUMMAN.jpg" alt="" className="h-52 block mx-auto w-52 rounded-full mb-5" />
                <Slide duration={1300}>
                    <h1 className="font-bold text-[40px] md:text-5xl mt-0">ABUL FOZOL JUMMAN</h1>
                </Slide>
                <Slide direction={"right"} duration={1300}>
                    <p className="mt-4 font-medium text-3xl md:text-4xl">Full Stack Web Developer</p>
                </Slide>
                <p className="mt-4 font-medium text-xl"><a href="mailto:abulfozoljumman@gmail.com">abulfozoljumman@gmail.com</a></p>
                <div className="flex text-5xl mt-5 gap-3 justify-center">
                    <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/"><span><FaGithubSquare></FaGithubSquare></span></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abul-fozol-jumman-414734279/"><span className="text-blue-500"><FaLinkedin></FaLinkedin></span></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MDAFZumman/"><span className="text-blue-700"><FaFacebookSquare></FaFacebookSquare></span></a>
                </div>
                <a download="Abul Fozol Jumman - Resume" href={resume} className="text-lg mt-5 py-3 px-6 bg-green-600 font-bold rounded-3xl flex items-center gap-2 max-w-[180px] mx-auto">
                    <span><FaFileDownload></FaFileDownload></span> MY RESUME
                </a>
            </div>
        </div>
    );
};

export default Banner;