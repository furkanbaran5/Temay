import { Link } from "wouter";
import Logo1 from "../../assets/Logo1.png"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-30 rounded-lg flex items-center justify-center">
                <img src={Logo1} alt="Logo" className="mx-auto w-48 h-auto"></img>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              We're a full-service creative agency specializing in helping brands grow through strategic design and digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-third text-lg font-bold mb-6 font-heading">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/branding-identity">
                  <a className="text-white/80 hover:text-primary transition duration-300">Branding & Identity</a>
                </Link>
              </li>
              <li>
                <Link href="/services/web-design">
                  <a className="text-white/80 hover:text-primary transition duration-300">Web Design & Development</a>
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing">
                  <a className="text-white/80 hover:text-primary transition duration-300">Digital Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/services/social-media">
                  <a className="text-white/80 hover:text-primary transition duration-300">Social Media Management</a>
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design">
                  <a className="text-white/80 hover:text-primary transition duration-300">Graphic Design</a>
                </Link>
              </li>
              <li>
                <Link href="/services/seo-analytics">
                  <a className="text-white/80 hover:text-primary transition duration-300">SEO & Analytics</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-third text-lg font-bold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white/80 hover:text-primary transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/80 hover:text-primary transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="text-white/80 hover:text-primary transition duration-300">Portfolio</a>
                </Link>
              </li>


              <li>
                <Link href="/contact">
                  <a className="text-white/80 hover:text-primary transition duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-third text-lg font-bold mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-white/80">123 Creative Street, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span className="text-white/80">info@creativeagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">&copy; {currentYear} Creative Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy-policy" className="text-white/80 hover:text-primary transition duration-300">Privacy Policy</a>
            <a href="#terms-of-service" className="text-white/80 hover:text-primary transition duration-300">Terms of Service</a>
            <a href="#cookies-policy" className="text-white/80 hover:text-primary transition duration-300">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
