import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Smarty Lending Corporation"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-20"}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.path
                    ? "text-primary-600"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-600/20">
              <a
                href="https://ofwfinancialservice.com/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium ${
                    location.pathname === link.path
                      ? "text-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://ofwfinancialservice.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary-600/20"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
