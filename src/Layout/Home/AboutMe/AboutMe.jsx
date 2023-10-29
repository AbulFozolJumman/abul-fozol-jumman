import html from "../../../assets/html5.png"
import css from "../../../assets/css-3.png"
import tailwind from "../../../assets/tailwind.png"
import node from "../../../assets/node.png"
import express from "../../../assets/express.png"
import next from "../../../assets/nextJs.png"
import firebase from "../../../assets/firebase.png"
import github from "../../../assets/github.png"
import mongoDB from "../../../assets/mongoDB.png"
import js from "../../../assets/js.png"
import react from "../../../assets/react.png"
import bootstrap from "../../../assets/bootstrap.png"
import { JackInTheBox } from "react-awesome-reveal"
import { FaFileDownload } from "react-icons/fa";
import resume from "../../../assets/Abul Fozol Jumman - Resume - Full Stack Web Developer.pdf"

const AboutMe = () => {
    return (
        <div className="text-white md:pb-16 py-12 px-5 md:px-[20%]" id="about">
            <JackInTheBox><h2 className="text-4xl font-bold text-center pb-8 text-white">About Me</h2></JackInTheBox>
            <img src="https://i.ibb.co/MSd7mCz/ABUL-FOZOL-JUMMAN.jpg" alt="" className="h-52 block mx-auto w-52 rounded-full mb-5" />
            <p className="text-white text-justify">
                I am a passionate Full Stack web developer with strong foundational skills in HTML, CSS, JavaScript,
                and hands-on experience in MongoDB, Express.js, React.js, and Node.js. I&#39;m Quick learner,
                adaptable, and problem-solver, eager to contribute to dynamic development projects. Seeking
                collaborative opportunities to learn, grow, and contribute to innovative web solutions.
            </p>
            <a download="Abul Fozol Jumman - Resume" href={resume} id="resume" className="text-base mt-5 py-2 px-5 bg-green-600 font-bold rounded-3xl flex items-center gap-2 max-w-[160px] mx-auto">
                <span><FaFileDownload></FaFileDownload></span> MY RESUME
            </a>
            <JackInTheBox>
                <h2 className="text-4xl font-bold text-center pt-20 pb-10 text-white">My Skills</h2>
            </JackInTheBox>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 animate-pulse">
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={html} alt="" /></span> HTML</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={css} alt="" /></span> CSS</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={bootstrap} alt="" /></span> Bootstrap</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={tailwind} alt="" /></span> Tailwind</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={js} alt="" /></span> JavaScript</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={react} alt="" /></span> React.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={node} alt="" /></span> Node.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={express} alt="" /></span> Express.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={next} alt="" /></span> Next.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={mongoDB} alt="" /></span> MongoDB</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={firebase} alt="" /></span> Firebase</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={github} alt="" /></span> Github</p>
            </div>
        </div>
    );
};

export default AboutMe;