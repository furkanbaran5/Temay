import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../../lib/data";
import { staggerChildren, fadeInUp, scaleIn } from "../../lib/animations";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  const filteredItems = activeCategory === "Hepsi"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
            variants={fadeInUp()}
          >
            Portfolyomuz
          </motion.h2>
          <motion.p
            className="text-secondary max-w-2xl mx-auto"
            variants={fadeInUp()}
          >
            Uzmanlığımızı ve yaratıcı yeteneklerimizi sergileyen en yeni çalışmalarımızı ve başarılı projelerimizi keşfedin.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center mb-10 space-x-2"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          variants={staggerChildren}
        >
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'Hepsi' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('Hepsi')}
            variants={scaleIn()}
          >
            Hepsi
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'Etkinlik Yönetimi' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('Etkinlik Yönetimi')}
            variants={scaleIn()}
          >
            Etkinlik Yönetimi
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'Prodüksiyon' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('Prodüksiyon')}
            variants={scaleIn()}
          >
            Prodüksiyon
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'Menajerlik' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('Menajerlik')}
            variants={scaleIn()}
          >
            Menajerlik
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'İK & Ekip Yönetimi' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('İK & Ekip Yönetimi')}
            variants={scaleIn()}
          >
            İK & Ekip Yönetimi
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${activeCategory === 'Media' ? 'bg-primary text-white' : 'bg-white hover:bg-black hover:text-white'} transition duration-300 mb-2`}
            onClick={() => handleCategoryChange('Media')}
            variants={scaleIn()}
          >
            Media
          </motion.button>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md"
                data-category={item.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-third text-xl font-bold mb-2 font-heading">{item.title}</h3>
                  <p className="text-white/80 text-center mb-4">{item.subtitle}</p>
                  <Link href={item.link} className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-primary-90">
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="bg-black inline-block border border-primary font-medium py-3 px-8 text-white rounded-lg transition duration-300 hover:bg-white hover:text-black">
            Tümünü Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
