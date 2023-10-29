import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-start md:px-10 px-5 absolute top-0 left-0 py-10 z-50 w-full">
            <Link to="/">
                <img className="w-[200px] md:mr-40" src="https://i.ibb.co/x8fD3zz/logo-2.png" alt="" />
            </Link>
            <div className="font-bold flex items-center justify-center display">
                <Link to="/" className="py-2 px-4 ml-3 rounded-3xl transition-colors duration-500 font-semibold text-white bg-[#359381]">Home</Link>
                <a href="#projects" className="text-[#359381] py-2 px-4 ml-3 rounded-3xl transition-colors duration-500 font-semibold hover:text-white hover:bg-[#359381]">Projects</a>
                <a href="#about" className="text-[#359381] py-2 px-4 ml-3 rounded-3xl transition-colors duration-500 font-semibold hover:text-white hover:bg-[#359381]">About</a>
                <a href="#contact" className="text-[#359381] py-2 px-4 ml-3 rounded-3xl transition-colors duration-500 font-semibold hover:text-white hover:bg-[#359381]">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;