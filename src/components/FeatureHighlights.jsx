import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Globe, Brain } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Your AI, your voice",
    description: "Train your AI avatar to represent you in meetings. It listens, speaks, asks questions, and ensures your perspective is heard — even when you're offline.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Speak every language",
    description: "Real-time transcription and translation across 50+ languages. Break down barriers and collaborate effortlessly with global teams.",
    gradient: "from-emerald-500 to-sky-500"
  },
  {
    icon: Brain,
    title: "Never forget a thing",
    description: "Every meeting becomes searchable company memory. AI-generated summaries, action items, and insights — all in one intelligent hub.",
    gradient: "from-sky-500 to-teal-500"
  }
];

const FeatureHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="text-gradient">intelligent automation</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to transform how your team communicates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                >
                  <feature.icon size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
