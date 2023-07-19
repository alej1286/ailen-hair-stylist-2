import { Link } from "react-router-dom";


function Navbar() {

  return (
    <nav className="sticky top-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Ailen Hair Stylist
        </Link>
        <div>
          <Link to="/services" className="mx-2">
            Services
          </Link>
          <Link to="/gallery" className="mx-2">
            Gallery
          </Link>
          <Link to="/about" className="mx-2">
            About
          </Link>

          <Link to="/contact" className="mx-2">
            Contact
          </Link>
  
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
