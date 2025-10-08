import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ProductVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The future of communication
              <span className="text-gradient"> is here</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Comm360 is your AI-powered communications platform that doesn't just record meetings — it participates.
              Your AI avatar joins, listens, contributes insights, and turns conversations into action.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              With Comm360, communication happens seamlessly in one place. In any language. From anywhere.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>Meetings reimagined</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>50+ languages supported</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </motion.div>

          {/* Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-sky-500/20 rounded-3xl blur-3xl" />

              {/* Main visual */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 p-8 overflow-hidden">
                {/* Animated avatar */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-brand flex items-center justify-center"
                >
                  <div className="w-28 h-28 rounded-full bg-slate-900 flex items-center justify-center text-4xl">
                    🤖
                  </div>
                </motion.div>

                {/* Simulated meeting UI */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-300">Live transcription</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-300">Translating to Spanish</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-300">Generating insights</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductVision;
