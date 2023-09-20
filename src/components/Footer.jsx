import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-amber-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <div className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
              Hair Stylist Company
            </div>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="Home"  className="text-white hover:text-gray-300">
              Home
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="Services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="Gallery"className="text-white hover:text-gray-300">
              Gallery
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="About"className="text-white hover:text-gray-300">
              About Us
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="Contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
            <p className="text-white mb-4">Our hairdressers have years of experience and a passion for creating beautiful hairstyles. We keep up to date with the latest trends and technologies to ensure that our customers receive the best possible service. Visit us today and experience the difference.</p>
          
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Services</h3>
            <ul className="text-white">
              <li className="mb-2">Haircuts and Styling</li>
              <li className="mb-2">Coloring and Highlights</li>
              <li className="mb-2">Hair Extensions</li>
              <li className="mb-2">Bridal and Special Occasion Hairstyling</li>
              <li className="mb-2">Hair Treatments and Conditioning</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Social links</h3>
            <ul className="text-white">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">LinkedIn</li>
            
            </ul>
          </div>
          </div>
          <div  className="mt-8 flex justify-between">

        <div className="">
          <p className="text-base text-white">Copyright &copy; {new Date().getFullYear()} | Ailen Hair Stylist . All rights reserved.</p>
        </div>
        <div className="">
          <p className="text-base text-white">Powered by <a href="https://www.linkedin.com/in/alejandro-martinez-0b14a182/" target="_blank" rel='noreferrer' className="text-white hover:text-gray-300">alej1286</a></p>
        </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;