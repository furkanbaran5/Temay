import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../lib/animations";

function Title({ title, subtitle }) {
    return (
        <section className="pt-30 pb-7 bg-title">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="initial"
                    animate="animate"
                    variants={staggerChildren}
                >
                    <motion.h1
                        className="text-third text-4xl md:text-5xl font-bold mb-6 font-heading"
                        variants={fadeInUp()}
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            className="text-lg text-secondary mb-10"
                            variants={fadeInUp()}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default Title;
