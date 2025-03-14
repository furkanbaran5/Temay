import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { services } from '../lib/data';
import { staggerChildren, fadeInUp } from '../lib/animations';

const ServiceDetail = () => {
  const [_, params] = useRoute('/services/:slug');
  const [service, setService] = useState(services[0]);

  useEffect(() => {
    if (params && params.slug) {
      const foundService = services.find(s => s.slug === params.slug);
      if (foundService) {
        setService(foundService);
      }
    }
  }, [params]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/services" className="inline-block bg-primary hover:bg-primary text-white font-medium py-2 px-6 rounded-lg transition duration-300">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | TEMAY events</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
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
              {service.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
              variants={fadeInUp()}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-secondary hover:text-primary transition duration-300">
              Ana Sayfa
            </Link>
            <i className="fas fa-chevron-right text-xs mx-2 text-secondary"></i>
            <Link href="/services" className="text-secondary hover:text-primary transition duration-300">
              Hizmetlerimiz
            </Link>
            <i className="fas fa-chevron-right text-xs mx-2 text-secondary"></i>
            <span className="text-primary">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-third text-3xl font-bold mb-6 font-heading">{service.title} Hakkında</h2>
              <p className="text-secondary mb-6"> {service.about_text1} </p>
              <p className="text-secondary mb-6">{service.about_text2} </p>

              <h3 className="text-third text-2xl font-bold mt-10 mb-4 font-heading">Yaklaşımımız</h3>
              <p className="text-secondary mb-6">{service.approach_text} </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Araştırma & Strateji</h4>
                  <p className="text-secondary">{service.research_text}</p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Yaratıcı Geliştirme</h4>
                  <p className="text-secondary">{service.creative_text} </p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Uygulama</h4>
                  <p className="text-secondary">{service.practice_text}</p>
                </div>
                <div className="bg-light p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 font-heading">Analiz & Optimizasyon</h4>
                  <p className="text-secondary">{service.analyse_text}</p>
                </div>
              </div>

              <h3 className="text-third text-2xl font-bold mt-10 mb-4 font-heading">Neden {service.title} Hizmetimizi Tercih Etmelisiniz?</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-secondary">{service.why_us_text1}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-secondary">{service.why_us_text2}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-secondary">{service.why_us_text3}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-secondary">{service.why_us_text4}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-secondary">{service.why_us_text5}</span>
                </li>
              </ul>

            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4 font-heading">Özellikler</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i> {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4 font-heading mt-8">Hemen Başlayalım mı?</h3>
                <p className="text-secondary mb-4">Projenizi konuşmak ve hedeflerinize ulaşmanıza nasıl yardımcı olabileceğimizi öğrenmek için bugün bizimle iletişime geçin.</p>
                <Link href="/contact" className="block bg-primary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center">
                  Bize Ulaşın
                </Link>

              </div>

              <div className="bg-primary-10 rounded-lg p-6">
                <h3 className="text-third text-xl font-bold mb-4 font-heading">Benzer Hizmetler</h3>
                <ul className="text-third space-y-3">
                  {services
                    .filter(s => s.id !== service.id)
                    .slice(0, 3)
                    .map(relatedService => (
                      <li key={relatedService.id}>
                        <Link href={relatedService.detailLink} className="flex items-center py-2 transition duration-300">
                          <i className="fas fa-angle-right mr-2 "></i>
                          {relatedService.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </motion.div>
          </div>
        </div >
      </section >
    </>
  );
};

export default ServiceDetail;
