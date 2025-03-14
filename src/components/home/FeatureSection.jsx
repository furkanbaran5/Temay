import { motion } from "framer-motion";
import { features } from "../../lib/data";
import { staggerChildren, fadeInUp } from "../../lib/animations";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-light">
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
            Neden Biz?
          </motion.h2>
          <motion.p
            className="text-secondary max-w-2xl mx-auto"
            variants={fadeInUp()}
          >
            We combine creative strategy, design expertise, and technical knowledge to deliver exceptional results for our clients.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg text-center"
              variants={fadeInUp()}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
