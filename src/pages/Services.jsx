import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { services } from '../lib/data';
import { staggerChildren, fadeInUp } from '../lib/animations';
import CtaSection from '../components/home/CtaSection';
import Title from '../components/forPage/Title'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | TEMAY events</title>
        <meta name="description" content="Explore our comprehensive range of creative and digital services designed to help your business grow and succeed." />
      </Helmet>

      {/* Hero Section */}
      <Title
        title="Hizmetlerimiz"
        subtitle="İşletmenizin günümüzün rekabetçi ortamında başarılı olması için kapsamlı yaratıcı ve dijital çözümler sunuyoruz."
      />
      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerChildren}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg h-full flex flex-col"
                variants={fadeInUp()}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                  <p className="text-secondary mb-6">{service.description}</p>
                  <ul className="mb-6 space-y-2 flex-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-primary mr-2"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.detailLink} className="text-primary font-medium hover:text-[#fb923c] transition duration-300 flex items-center mt-auto">
                    Daha Fazla <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default Services;
