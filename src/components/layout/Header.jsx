import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo1 from '../../assets/siyah_logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  let timeoutId;

  const openMenu = () => {
    setServicesOpen(true);
    clearTimeout(timeoutId); // Önceki zamanlayıcıyı temizle
  };

  const closeMenu = () => {
    timeoutId = setTimeout(() => {
      setServicesOpen(false);
    }, 1000); // 2 saniye sonra kapat
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const isActive = (path) => location === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/60 via-white/30 to-white/5 backdrop-blur-sm">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-10 w-30 rounded-lg flex items-center justify-center">
                <img src={Logo1} alt="Logo" className="mx-auto w-48 h-auto"></img>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium ${isActive("/") ? "text-gray-700" : "text-black"}`}>Home</Link>
            <div className="relative group" >
              <Link href="/services" onMouseEnter={openMenu} onMouseLeave={closeMenu} className={`font-medium ${isActive("/services") ? "text-gray-700" : "text-black"} flex items-center`}>
                Services <i className="fas fa-chevron-down text-xs ml-1"></i>
              </Link>
              {servicesOpen && (
                <div onMouseEnter={openMenu} onMouseLeave={closeMenu} className="absolute left-0 mt-2 w-48  bg-gradient-to-b from-white/15 to-white/60 rounded-lg py-2 z-50">
                  <Link href="/services/branding-identity" className="block px-4 py-2 text-sm text-black">Branding</Link>
                  <Link href="/services/web-design" className="block px-4 py-2 text-sm text-black">Web Design</Link>
                  <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm text-black">Digital Marketing</Link>
                  <Link href="/services/seo-analytics" className="block px-4 py-2 text-sm text-black">SEO</Link>
                  <Link href="/services/social-media" className="block px-4 py-2 text-sm text-black">Social Media</Link>
                </div>
              )}
            </div>
            <Link href="/portfolio" className={`font-medium ${isActive("/portfolio") ? "text-gray-700" : "text-black"} hover:text-primary transition duration-300`}>Portfolio</Link>
            <Link href="/about" className={`font-medium ${isActive("/about") ? "text-gray-700" : "text-black"} hover:text-primary transition duration-300`}>About</Link>
            <Link href="/references" className={`font-medium ${isActive("/references") ? "text-gray-700" : "text-black"} hover:text-primary transition duration-300`}>Referanslarımız</Link>
            <Link href="/contact" className={`font-medium ${isActive("/contact") ? "text-gray-700" : "text-black"} hover:text-primary transition duration-300`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dark" onClick={toggleMenu} aria-label="Toggle mobile menu">
            {isOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pl-6 "
        >
          <Link href="/" onClick={toggleMenu} className="block py-2 text-black hover:text-primary">Home</Link>
          <div className="relative">
            <button onClick={toggleServices} className="block py-2 text-black hover:text-primary items-center">
              Services <i className="fas fa-chevron-down text-xs ml-1"></i>
            </button>
            {servicesOpen && (
              <div className="pl-4 ">
                <Link href="/services/branding-identity" onClick={toggleMenu} className="block text-black py-2 ">Branding</Link>
                <Link href="/services/web-design" onClick={toggleMenu} className="block text-black py-2 ">Web Design</Link>
                <Link href="/services/digital-marketing" onClick={toggleMenu} className="block text-black py-2 ">Digital Marketing</Link>
                <Link href="/services/seo-analytics" onClick={toggleMenu} className="block text-black py-2 ">SEO</Link>
                <Link href="/services/social-media" onClick={toggleMenu} className="block text-black py-2 ">Social Media</Link>
              </div>
            )}
          </div>
          <Link href="/portfolio" onClick={toggleMenu} className="block py-2 text-black hover:text-primary">Portfolio</Link>
          <Link href="/about" onClick={toggleMenu} className="block py-2 text-black hover:text-primary">About</Link>
          <Link href="/references" onClick={toggleMenu} className="block py-2 text-black hover:text-primary">Referanslarımız</Link>
          <Link href="/contact" onClick={toggleMenu} className="block py-2 text-black hover:text-primary">Contact</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;