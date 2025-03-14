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
            Projeye başlamaya hazır mısın?
          </motion.h2>

          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8 text-lg"
            {...fadeIn(0.3)}
          >
            İşletmenizin hedeflerine uygun, özelleştirilmiş bir çözüm oluşturmak ve olağanüstü sonuçlar elde etmek için birlikte çalışalım.
          </motion.p>

          <motion.div {...fadeIn(0.5)}>
            <Link href="/contact" className="inline-block bg-white text-black font-medium py-3 px-8 rounded-lg transition duration-300 hover:bg-black hover:text-white">
              Bizimle iletişime geçin
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
