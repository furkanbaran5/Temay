import { motion } from "framer-motion";
import { stats } from "../../lib/data";
import { fadeIn } from "../../lib/animations";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
