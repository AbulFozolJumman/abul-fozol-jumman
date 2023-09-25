import { Fade, JackInTheBox } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllProjects = () => {
    return (
        <div>
            <div className="min-h-screen bg-[url('https://w0.peakpx.com/wallpaper/146/516/HD-wallpaper-black-texture-with-purple-neon-lines-black-abstract-background-purple-neon-lines-3d-black-background-3d-polygons-texture.jpg')]">
                <div className="flex justify-between items-center py-10 text-white px-5">
                    <JackInTheBox>
                        <h2 className="text-4xl font-bold">All Projects</h2>
                    </JackInTheBox>
                    <Link to="/"><button className="text-white text-lg mt-5 py-3 px-6 bg-green-600 hover:bg-green-300 hover:text-green-700 font-bold rounded-3xl flex items-center gap-2 max-w-[180px] mx-auto">Back to Home</button></Link>
                </div>
                <Fade duration={4000}>
                    <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                        <div className="bg-slate-300 h-auto rounded-lg mb-5">
                            <div className="h-[300px] overflow-y-scroll">
                                <img className="w-full" src="https://i.ibb.co/zn2zPcJ/Sportify-Academy-Home.png" alt="" />
                            </div>
                            <p className="px-1 mt-5 text-lg"><span className="font-bold">Sportify Academy -</span> A complete MERN stack web application for Sport Academy
                            </p>
                            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
                                <a target="_blank" rel="noreferrer" href="https://sportify-academy-676a4.web.app/">Live Site</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Sportify-Academy-Frontend"> Frontend Code</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Sportify-Academy-Backend"> Backend Code</a>
                            </div>
                        </div>
                        <div className="bg-slate-300 h-auto rounded-lg mb-5">
                            <div className="h-[300px] overflow-y-scroll">
                                <img className="w-full" src="https://i.ibb.co/bzLB21Q/Toy-Verse-Home.png" alt="" />
                            </div>
                            <p className="px-1 mt-5 text-lg"><span className="font-bold">Toy Verse -</span> A complete MERN Stack web  application for Superhero Toys</p>
                            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
                                <a target="_blank" rel="noreferrer" href="https://toy-verse-1b21f.web.app/">Live Site</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Toy-Verse-Frontend"> Frontend Code</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Toy-Verse-Backend"> Backend Code</a>
                            </div>
                        </div>
                        <div className="bg-slate-300 h-auto rounded-lg mb-5">
                            <div className="h-[300px] overflow-y-scroll">
                                <img className="w-full" src="https://i.ibb.co/JzNCxht/Master-Chef-Bangladesh.png" alt="" />
                            </div>
                            <p className="px-1 mt-5 text-lg"><span className="font-bold">Master Chef Bangladesh -</span> A React JS website for Top Chefs top Recipes
                            </p>
                            <div className="text-blue-600 my-4 px-1 text-lg font-semibold">
                                <a target="_blank" rel="noreferrer" href="https://master-chef-bangladesh.web.app/">Live Site</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Master-Chef-Bangladesh-Frontend"> Frontend Code</a> |
                                <a target="_blank" rel="noreferrer" href="https://github.com/AbulFozolJumman/Master-Chef-Bangladesh-Backend"> Backend Code</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default AllProjects;