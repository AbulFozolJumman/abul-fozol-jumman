import { JackInTheBox } from "react-awesome-reveal";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const ContactMe = () => {
    return (
        <div id="contact" className="text-white text-center md:pb-16 pb-12 px-5">
            <JackInTheBox>
                <h2 className="text-4xl font-bold text-center pb-8 text-white">Contact Me</h2>
            </JackInTheBox>
            <div>
                <div>
                    <p className="flex items-center justify-center gap-2"><span className="text-xl"><ImMail></ImMail></span><a className="font-medium text-xl" href="mailto:abulfozoljumman@gmail.com">abulfozoljumman@gmail.com</a></p>
                    <p className="flex items-center justify-center gap-2"><span className="text-xl"><FaWhatsappSquare></FaWhatsappSquare></span><a className="font-medium text-xl" href="tel:+8801677949565">+8801677949565</a></p>

                    <div className="flex text-5xl mt-5 gap-3 justify-center">
                        <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/"><span><FaGithubSquare></FaGithubSquare></span></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abul-fozol-jumman-414734279/"><span className="text-blue-500"><FaLinkedin></FaLinkedin></span></a>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/MDAFZumman/"><span className="text-blue-700"><FaFacebookSquare></FaFacebookSquare></span></a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ContactMe;