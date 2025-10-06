import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Bot, FileCheck } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Connect your calendar",
    description: "AI syncs with your schedule automatically. No manual setup, no configuration headaches."
  },
  {
    number: "02",
    icon: Bot,
    title: "Your AI joins and engages",
    description: "Listens, transcribes, and even speaks on your behalf when needed. You stay in control."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get results instantly",
    description: "Summaries, action items, and insights delivered to your inbox. Ready when you are."
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three steps to <span className="text-gradient">better meetings</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get started in minutes, see results immediately
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-brand flex items-center justify-center text-2xl font-bold"
                >
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-50" />
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center"
                >
                  <step.icon size={36} className="text-emerald-400" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
