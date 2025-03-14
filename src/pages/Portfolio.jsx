import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../lib/data";
import { staggerChildren, fadeInUp, scaleIn } from "../lib/animations";
import CtaSection2 from "../components/home/CtaSection2";
import Title from "../components/forPage/Title.jsx";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItem, setActiveItem] = useState(null); // Seçili öğeyi sakla

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveItem(null); // Kategori değişince aktif öğeyi sıfırla
  };

  const toggleDetails = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Our Portfolio | Creative Agency</title>
        <meta
          name="description"
          content="Explore our portfolio of creative and digital projects showcasing our expertise in design, branding, marketing, and web development."
        />
      </Helmet>

      {/* Hero Section */}
      <Title
        title="Our Portfolio"
        subtitle="Explore our latest work and successful projects that showcase our expertise and creative capabilities."
      />

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center mb-12 space-x-2"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {["all", "web-design", "branding", "marketing", "social-media"].map(
              (category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-md ${activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 hover:bg-black hover:text-white"
                    } transition duration-300 mb-2`}
                  onClick={() => handleCategoryChange(category)}
                  variants={scaleIn()}
                >
                  {category.replace("-", " ")}
                </motion.button>
              )
            )}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                  data-category={item.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  layout
                  onClick={() => toggleDetails(item.id)} // Mobil için tıklama ekledik
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-6 transition duration-300 ${activeItem === item.id ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100"
                      }`}
                  >
                    <h3 className="text-third text-xl font-bold mb-2 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-center mb-4">
                      {item.subtitle}
                    </p>
                    <Link href={item.link}>
                      <span className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-primary/90">
                        View Project
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection2 />
    </>
  );
};

export default Portfolio;
