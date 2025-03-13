import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/animations";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 font-heading text-third"
            {...fadeIn(0.1)}
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8 text-lg"
            {...fadeIn(0.3)}
          >
            Let's collaborate to create a customized solution that meets your business objectives and delivers exceptional results.
          </motion.p>

          <motion.div {...fadeIn(0.5)}>
            <Link href="/contact">
              <a className="inline-block bg-white text-black font-medium py-3 px-8 rounded-lg transition duration-300 hover:bg-light">
                Get in Touch
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
