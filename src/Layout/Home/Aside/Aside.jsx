const Aside = () => {
    return (
      <div className="fixed top-0 bottom-0 right-0 left-0 md:sticky lg:h-screen h-[56px] z-10 shadow-xl">
        <div className="md:block hidden text-white font-bold h-screen bg-gray-950">
          <img src="https://i.ibb.co/6XR34qH/IMG-1401.jpg" alt="" />
          <a href="#banner" className="block py-3 hover:bg-gray-800 pl-6">Home</a>
          <a href="#projects" className="block py-3 hover:bg-gray-800 pl-6">Projects</a>
          <a href="#aboutMe" className="block py-3 hover:bg-gray-800 pl-6">About Me</a>
          <a href="#contactMe" className="block py-3 hover:bg-gray-800 pl-6">Contact Me</a>
        </div>
        <div className="md:hidden text-white font-bold flex items-center justify-center bg-gray-950">
          <a href="#banner" className="block py-4 hover:bg-gray-800 px-4">Home</a>
          <a href="#projects" className="block py-4 hover:bg-gray-800 px-4">Projects</a>
          <a href="#aboutMe" className="block py-4 hover:bg-gray-800 px-4">About Me</a>
          <a href="#contactMe" className="block py-4 hover:bg-gray-800 px-4">Contact Me</a>
        </div>
      </div>
    );
  };
  
  export default Aside;
  