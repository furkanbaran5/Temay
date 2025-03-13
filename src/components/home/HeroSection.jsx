import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../lib/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { slides } from '../../lib/data.js'

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{ clickable: true }}
        className="h-full w-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className=" relative h-[600px] ">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                className="object-cover object-center w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.8)] to-[rgba(30,41,59,0.4)]"></div>
            </div>

            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-2xl">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading"
                  style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                  {...slideIn("up", 0.2)}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-xl text-white/90 mb-8 max-w-lg"
                  style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
                  {...fadeIn(0.4)}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4"
                  {...fadeIn(0.6)}
                >
                  <Link href="/services" className="sm:mb-8">
                    <a className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg text-center">
                      Our Services
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg text-center">
                      View Portfolio
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
