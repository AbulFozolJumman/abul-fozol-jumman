import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="text-white font-bold flex items-center justify-center bg-[url('https://media.istockphoto.com/id/1286354786/vector/dark-prism-textured-abstract-background.jpg?s=612x612&w=0&k=20&c=lJiYScAyV7Iqn5FKdxMYCuntLO0ljQkR_oEftweNjmE=')]">
            <Link to="/" className="block py-4 hover:bg-gray-400 px-6">Home</Link>
            <Link to="/allProjects" className="block py-4 hover:bg-gray-400 px-6">Projects</Link>
            <Link to="/about" className="block py-4 hover:bg-gray-400 px-6">About Me</Link>
        </div>
    );
};

export default Navbar;