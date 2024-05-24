import { Fade, JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import sportify from "../../../assets/Sportify-Academy-Home.png";
import visuality from "../../../assets/Visuality.png";
import event_360 from "../../../assets/Event-360.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="md:pb-16 md:pt-10 pb-12 max-w-[1440px] mx-auto"
    >
      <JackInTheBox>
        <h2 className="text-4xl font-bold text-center pb-10 text-white">
          Top Projects
        </h2>
      </JackInTheBox>
      <Fade duration={4000}>
        <div className="px-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="bg-slate-300 h-auto rounded-lg mb-5">
            <div className="h-[300px] overflow-y-scroll">
              <img className="w-full" src={visuality} alt="" />
            </div>
            <p className="px-1 mt-5 text-lg">
              <span className="font-bold">Visuality -</span> A Next JS web
              application for getting advice from professional life coach
            </p>
            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://visuality-your-life-coach.vercel.app/"
              >
                Live Site
              </a>{" "}
              |
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbulFozolJumman/Visuality-Your-Life-Coach"
              >
                {" "}
                Frontend Code
              </a>{" "}
              |
              <a target="_blank" rel="noreferrer" href="#">
                {" "}
                Backend Code
              </a>
            </div>
          </div>
          <div className="h-auto rounded-lg mb-5 bg-slate-300">
            <div className="h-[300px] overflow-y-scroll">
              <img className="w-full" src={sportify} alt="" />
            </div>
            <p className="px-1 mt-5 text-lg">
              <span className="font-bold">Sportify Academy -</span> A complete
              MERN stack web application for Sport Academy
            </p>
            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sportify-academy.netlify.app/"
              >
                Live Site
              </a>{" "}
              |
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbulFozolJumman/Sportify-Academy-Frontend"
              >
                {" "}
                Frontend Code
              </a>{" "}
              |
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbulFozolJumman/Sportify-Academy-Backend"
              >
                {" "}
                Backend Code
              </a>
            </div>
          </div>

          {/* Event 360 */}
          <div className="bg-slate-300 h-auto rounded-lg mb-5">
            <div className="h-[300px] overflow-y-scroll">
              <img className="w-full" src={event_360} alt="" />
            </div>
            <p className="px-1 mt-5 text-lg">
              <span className="font-bold">Event 360 -</span> A complete MERN
              Stack web application for Event Management.
            </p>
            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://music-event-360.netlify.app/"
              >
                Live Site
              </a>{" "}
              |
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbulFozolJumman/Event-360-Frontend"
              >
                {" "}
                Frontend Code
              </a>{" "}
              |
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbulFozolJumman/Event-360-Backend"
              >
                {" "}
                Backend Code
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <div className="flex justify-center pt-4">
        <Link to="/allProjects" className="button">
          See All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
