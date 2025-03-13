import { Link } from "wouter";
import { motion } from "framer-motion";
import { services } from "../../lib/data";
import { staggerChildren, fadeInUp } from "../../lib/animations";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-heading text-third"
            variants={fadeInUp()}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-secondary max-w-2xl mx-auto"
            variants={fadeInUp()}
          >
            Comprehensive creative and digital solutions to help your business grow and succeed in the digital landscape.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg"
              variants={fadeInUp()}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                <p className="text-secondary mb-4">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i> {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.detailLink}>
                  <a className="text-primary font-medium hover:text-[#fb923c] transition duration-300 flex items-center">
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
