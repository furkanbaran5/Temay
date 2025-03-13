import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, fadeInUp } from '../lib/animations';
import CtaSection2 from '../components/home/CtaSection2';
import Title from "../components/forPage/Title.jsx";
import Logos from "../assets/References.jsx";
const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Creative Agency</title>
                <meta name="description" content="Learn more about Creative Agency - our story, mission, values, and what makes us different." />
            </Helmet>

            {/* Hero Section */}
            <Title
                title="Referanslarımız"
                subtitle="Explore our latest work and successful projects that showcase our expertise and creative capabilities."
            />

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap justify-center gap-5 text-center mb-5">
                            {Logos.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Sponsor ${index + 1}`}
                                    className="w-[150px] h-auto object-contain filter grayscale transition duration-300 hover:grayscale-0 sm:w-[100px] xs:w-[80px]"
                                />

                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
