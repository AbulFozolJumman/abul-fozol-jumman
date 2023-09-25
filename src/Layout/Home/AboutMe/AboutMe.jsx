import html from "../../../assets/html5.png"
import css from "../../../assets/css-3.png"
import tailwind from "../../../assets/tailwind.png"
import node from "../../../assets/node.png"
import express from "../../../assets/express.png"
import firebase from "../../../assets/firebase.png"
import mongoDB from "../../../assets/mongoDB.png"
import js from "../../../assets/js.png"
import react from "../../../assets/react.png"
import bootstrap from "../../../assets/bootstrap.png"
import { JackInTheBox } from "react-awesome-reveal"

const AboutMe = () => {
    return (
        <div className="text-white min-h-screen md:pt-0 pt-14 px-5 md:px-[20%]" id="aboutMe">
            <JackInTheBox><h2 className="text-4xl font-bold text-center py-10 text-white">About Me</h2></JackInTheBox>
            <p className="text-white text-center">
                I am a passionate Full Stack web developer with strong foundational skills in HTML, CSS, JavaScript,
                and hands-on experience in MongoDB, Express.js, React.js, and Node.js. I&#39;m Quick learner,
                adaptable, and problem-solver, eager to contribute to dynamic development projects. Seeking
                collaborative opportunities to learn, grow, and contribute to innovative web solutions.
            </p>
            <JackInTheBox>
                <h2 className="text-4xl font-bold text-center py-10 text-white">My Skills</h2>
            </JackInTheBox>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pb-12 animate-pulse">
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={html} alt="" /></span> HTML</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={css} alt="" /></span> CSS</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={bootstrap} alt="" /></span> Bootstrap</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={tailwind} alt="" /></span> Tailwind</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={js} alt="" /></span> JavaScript</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={react} alt="" /></span> React.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={node} alt="" /></span> Node.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={express} alt="" /></span> Express.js</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={mongoDB} alt="" /></span> MongoDB</p>
                <p className="flex items-center gap-5"><span><img className="w-8 h-8" src={firebase} alt="" /></span> Firebase</p>
            </div>
        </div>
    );
};

export default AboutMe;