import { Fade, JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import sportify from "../../assets/Sportify-Academy-Home.png";
import toyVerse from "../../assets/Toy-Verse.png";
import visuality from "../../assets/Visuality.png";
import event_360 from "../../assets/Event-360.png";

const AllProjects = () => {
  return (
    <div className="min-h-screen py-12 bg-[url('https://w0.peakpx.com/wallpaper/146/516/HD-wallpaper-black-texture-with-purple-neon-lines-black-abstract-background-purple-neon-lines-3d-black-background-3d-polygons-texture.jpg')]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center px-5 pb-8">
          <JackInTheBox>
            <h2 className="text-4xl font-bold text-white">All Projects</h2>
          </JackInTheBox>

          <div className="flex justify-center">
            <Link to="/" className="button">
              Back to Home
            </Link>
          </div>
        </div>

        <Fade duration={4000}>
          <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Visuality */}
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

            {/* Sportify Academy */}
            <div className="bg-slate-300 h-auto rounded-lg mb-5">
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

            {/* Toy Verse */}
            <div className="bg-slate-300 h-auto rounded-lg mb-5">
              <div className="h-[300px] overflow-y-scroll">
                <img className="w-full" src={toyVerse} alt="" />
              </div>
              <p className="px-1 mt-5 text-lg">
                <span className="font-bold">Toy Verse -</span> A complete MERN
                Stack web application for Superhero Toys
              </p>
              <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://toy-verse-1b21f.web.app/"
                >
                  Live Site
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AbulFozolJumman/Toy-Verse-Frontend"
                >
                  {" "}
                  Frontend Code
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AbulFozolJumman/Toy-Verse-Backend"
                >
                  {" "}
                  Backend Code
                </a>
              </div>
            </div>

            {/* Master Chef Bangladesh */}
            <div className="bg-slate-300 h-auto rounded-lg mb-5">
              <div className="h-[300px] overflow-y-scroll">
                <img
                  className="w-full"
                  src="https://i.ibb.co/JzNCxht/Master-Chef-Bangladesh.png"
                  alt=""
                />
              </div>
              <p className="px-1 mt-5 text-lg">
                <span className="font-bold">Master Chef Bangladesh -</span> A
                React JS website for Top Chefs top Recipes
              </p>
              <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://master-chef-bangladesh.web.app/"
                >
                  Live Site
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AbulFozolJumman/Master-Chef-Bangladesh-Frontend"
                >
                  {" "}
                  Frontend Code
                </a>{" "}
                |
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AbulFozolJumman/Master-Chef-Bangladesh-Backend"
                >
                  {" "}
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AllProjects;
