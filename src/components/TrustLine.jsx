import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TrustLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Others give you meetings.
            <br />
            <span className="text-gradient">We give you results.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Trusted by teams who refuse to waste time in back-to-back calls.
          </p>
        </motion.div>

        {/* Optional: Logo cloud placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40"
        >
          {/* Placeholder for company logos */}
          <div className="text-slate-600 text-sm font-medium uppercase tracking-wider">
            Built for remote-first teams
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLine;
