import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, fadeInUp } from '../lib/animations';
import { stats } from '../lib/data';
import CtaSection2 from '../components/home/CtaSection2';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | TEMAY events</title>
        <meta name="description" content="Learn more about Creative Agency - our story, mission, values, and what makes us different." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Creative agency team collaborating"
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
              Hakkımızda
            </motion.h1>

            <motion.p
              className="text-xl text-white/90"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
              variants={fadeInUp()}
            >
              Markaların dijital çağda başarılı olmasına yardımcı olmaya adanmış, tutkulu bir yaratıcılar, stratejistler ve teknoloji uzmanları ekibiyiz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-third text-3xl font-bold mb-6 font-heading">Hikayemiz</h2>
              <p className="text-secondary mb-4">
                Founded in 2010, Creative Agency began with a simple mission: to help businesses succeed through strategic design and digital solutions. What started as a small team of three passionate professionals has grown into a full-service agency with expertise across branding, web design, and digital marketing.
              </p>
              <p className="text-secondary mb-4">
                Over the years, we've had the privilege of working with businesses of all sizes, from ambitious startups to established enterprises. Through these partnerships, we've refined our approach, expanded our capabilities, and built a reputation for delivering results that exceed expectations.
              </p>
              <p className="text-secondary">
                Today, we're proud to be a trusted partner to over 120 businesses worldwide, helping them navigate the ever-evolving digital landscape and achieve sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-light">
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
              Misyonumuz & Değerlerimiz
            </motion.h2>
            <motion.p
              className="text-secondary max-w-2xl mx-auto"
              variants={fadeInUp()}
            >
              Bizi harekete geçiren ve her projeye ve müşteri ilişkisine yaklaşımımızı yönlendiren unsurlar.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Misyonumuz</h3>
              <p className="text-secondary">
                İşletmelere stratejik tasarım ve dijital çözümlerle büyüme sağlamak, marka algısını güçlendirmek ve hedef kitleleriyle anlamlı bağlantılar kurmalarına yardımcı olmak.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-compass text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Vizyonumuz</h3>
              <p className="text-secondary">
                Sürekli gelişen dijital dünyada yenilikçi ve sonuç odaklı çözümler arayan işletmeler için lider yaratıcı iş ortağı olmak.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Mükemmeliyet</h3>
              <p className="text-secondary">
                Tasarım ve stratejiden müşteri hizmetleri ve sonuçlara kadar yaptığımız her işte mükemmeliyeti hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">İnovasyon</h3>
              <p className="text-secondary">
                Yaratıcılığı ve ileri düşünceyi benimsiyor, kalabalık dijital dünyada öne çıkan çözümler geliştiriyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Ortaklık</h3>
              <p className="text-secondary">
                Güven, şeffaflık ve ortak başarıya dayalı, iş birliğine dayalı uzun vadeli ilişkiler kuruyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                {...fadeIn(index * 0.1)}
              >
                <div className="text-4xl font-bold text-[#fb923c] mb-2">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-third text-3xl md:text-4xl font-bold mb-4 font-heading"
              variants={fadeInUp()}
            >
              Sürecimiz
            </motion.h2>
            <motion.p
              className="text-secondary max-w-2xl mx-auto"
              variants={fadeInUp()}
            >
              Sonuç odaklı, stratejik ve iş birliğine dayalı bir yaklaşım.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="bg-primary-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-30 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Keşfet</h3>
              <p className="text-secondary">
                İşletmenizi, hedeflerinizi, kitlenizi ve zorluklarınızı derinlemesine araştırma ve analizle anlamaya başlıyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-primary-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-30 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Strateji Belirle</h3>
              <p className="text-secondary">
                Hedeflerinizle uyumlu, başarınız için sağlam bir temel oluşturan kapsamlı bir strateji geliştiriyoruz.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative">
                <div className="bg-primary-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-30 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Oluştur</h3>
              <p className="text-secondary">
                Yaratıcı ekibimiz, stratejiyi yenilikçi tasarım, etkileyici içerik ve teknik mükemmeliyet ile hayata geçirir.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative">
                <div className="bg-primary-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">4</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Optimize Et</h3>
              <p className="text-secondary">
                Sonuçları en üst düzeye çıkarmak ve uzun vadeli başarıyı sağlamak için sürekli ölçüm, analiz ve iyileştirme yapıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <CtaSection2 />
    </>
  );
};

export default About;
