import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Rocket, Building2 } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Remote Teams",
    description: "Never miss context across time zones. Your AI ensures everyone stays aligned.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Founders & Executives",
    description: "Multiply yourself. Be in multiple meetings without burning out.",
    gradient: "from-emerald-500 to-sky-500"
  },
  {
    icon: Building2,
    title: "Global Companies",
    description: "One platform for every language, every region, every conversation.",
    gradient: "from-sky-500 to-teal-500"
  }
];

const WhoItsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for teams who <span className="text-gradient">move fast</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you're a startup or an enterprise, Comm360 adapts to your workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card with gradient background */}
              <div className={`relative h-full bg-gradient-to-br ${audience.gradient} p-[1px] rounded-2xl`}>
                <div className="h-full bg-slate-900 rounded-2xl p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6`}
                  >
                    <audience.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${audience.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
