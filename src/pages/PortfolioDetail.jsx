import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { portfolioItems } from '../lib/data';
import { fadeIn, staggerChildren, fadeInUp } from '../lib/animations';
import Logos from "../assets/importReferences.jsx";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioDetail = () => {
  const [_, params] = useRoute('/portfolio/:id');
  const [project, setProject] = useState(undefined);
  const [relatedProjects, setRelatedProjects] = useState([]);


  useEffect(() => {
    if (params?.id) {
      const id = parseInt(params.id);
      const foundProject = portfolioItems.find(p => p.id === id);

      if (foundProject) {
        setProject(foundProject);

        const related = portfolioItems
          .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
          .slice(0, 3);

        setRelatedProjects(related);
      }
    }
  }, [params?.id]);


  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link href="/portfolio">
          <a className="inline-block bg-primary hover:bg-primary-90 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
            Back to Portfolio
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Creative Agency Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.8)] to-[rgba(30,41,59,0.4)]"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            className="max-w-2xl"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
              variants={fadeInUp()}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-4"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
              variants={fadeInUp()}
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              className="inline-block px-4 py-2 bg-primary-90 text-white rounded-lg text-sm font-medium mt-4"
              variants={fadeInUp()}
            >
              {project.category === 'web-design' ? 'Web Design' :
                project.category === 'branding' ? 'Branding' :
                  project.category === 'marketing' ? 'Marketing' :
                    project.category === 'social-media' ? 'Social Media' : project.category}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/">
              <a className="text-secondary hover:text-primary transition duration-300">Home</a>
            </Link>
            <i className="fas fa-chevron-right text-xs mx-2 text-secondary"></i>
            <Link href="/portfolio">
              <a className="text-secondary hover:text-primary transition duration-300">Portfolio</a>
            </Link>
            <i className="fas fa-chevron-right text-xs mx-2 text-secondary"></i>
            <span className="text-primary">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-third text-3xl font-bold mb-6 font-heading">Project Overview</h2>
              <p className="text-secondary mb-6">
                {project.description}
              </p>

              <div className="relative h-[600px] overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 5000 }}
                  loop
                  pagination={{ clickable: true }}
                  className="h-full w-full "
                >
                  {Logos.map((slide, index) => (
                    <SwiperSlide key={index} className=" relative h-[600px] ">
                      <div className="absolute inset-0">
                        <img
                          src={slide}
                          className="object-cover object-center w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,41,59,0.8)] to-[rgba(30,41,59,0.4)]"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <h3 className="text-third text-2xl font-bold mt-10 mb-4 font-heading">The Challenge</h3>
              <p className="text-secondary mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3 className="text-third text-2xl font-bold mt-10 mb-4 font-heading">Our Solution</h3>
              <p className="text-secondary mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Research & Strategy</h4>
                  <p className="text-secondary">
                    We started with thorough research and strategic planning to ensure our approach aligned with business goals.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Creative Development</h4>
                  <p className="text-secondary">
                    Our creative team developed innovative solutions that were both visually compelling and functionally effective.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Implementation</h4>
                  <p className="text-secondary">
                    We executed the plan with precision, ensuring every detail met our high-quality standards.
                  </p>
                </div>
              </div>

              <h3 className="text-third text-2xl font-bold mt-10 mb-4 font-heading">The Results</h3>
              <p className="text-secondary mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="bg-transparent rounded-lg mt-8">
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg shadow-md"
                  src="vs" // Buraya istediğin YouTube video URL'sini koy
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4 font-heading">Need a Similar Project?</h3>
                <p className="text-secondary mb-4">Let's collaborate to create a customized solution that meets your business objectives and delivers exceptional results.</p>
                <Link href="/contact">
                  <a className="block bg-primary hover:bg-primary-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                    Start a Project
                  </a>
                </Link>
              </div>

              {relatedProjects.length > 0 && (
                <div className="bg-light rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 font-heading">Related Projects</h3>
                  <div className="space-y-4">
                    {relatedProjects.map(relatedProject => (
                      <div key={relatedProject.id} className="group">
                        <Link href={relatedProject.link}>
                          <a className="block">
                            <div className="rounded-lg overflow-hidden mb-2">
                              <img
                                src={relatedProject.image}
                                alt={relatedProject.title}
                                className="w-full h-36 object-cover transition duration-300 group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-bold group-hover:text-primary transition duration-300">{relatedProject.title}</h4>
                            <p className="text-sm text-secondary">{relatedProject.subtitle}</p>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section >
    </>
  );
};

export default PortfolioDetail;
