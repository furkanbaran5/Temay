import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/animations";

const CtaSection = () => {
    return (
        <section className="py-16 bg-light">
            <div className="container mx-auto px-4">
                <motion.div
                    className="bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6 font-heading">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-secondary mb-8">
                        Let's collaborate to create a customized solution that meets your
                        business objectives and delivers exceptional results.
                    </p>
                    <Link href="/contact">
                        <span className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                            Get in Touch
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;
