import { Link } from "react-router-dom";


function Navbar() {

  return (
    
    <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full
    fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Ailen Hair Stylist
        </Link>
        <div className="items-center hidden space-x-8 lg:flex">
          <Link to="/services" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Services
          </Link>
          <Link to="/gallery" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Gallery
          </Link>
          <Link to="/about" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            About
          </Link>
          <Link to="/instagram" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-3002">
            Instagram
          </Link>
          <Link to="/privacypolicy" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="/contact" className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
            Contact
          </Link>
  
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
