import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const VisualDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Simulated transcript messages
  const transcriptMessages = [
    { speaker: "Sarah", text: "Let's discuss Q4 revenue targets", time: "10:01" },
    { speaker: "Comm360 AI", text: "I'll capture key metrics for the team", time: "10:02", isAI: true },
    { speaker: "Michael", text: "We're projecting 20% growth", time: "10:03" },
    { speaker: "Comm360 AI", text: "Noted: Q4 target is 20% revenue growth", time: "10:03", isAI: true },
  ];

  return (
    <section id="demo" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Comm360 <span className="text-gradient">in action</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch how your AI avatar transforms meeting participation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Main demo container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-sky-500/10" />

            {/* Video placeholder / Demo UI */}
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Live Meeting</span>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
                {/* Video grid placeholder */}
                <div className="lg:col-span-2 bg-slate-800/30 rounded-2xl p-8 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center shadow-2xl glow-strong"
                  >
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </motion.button>
                </div>

                {/* Live transcript */}
                <div className="bg-slate-800/30 rounded-2xl p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Live Transcript</span>
                  </div>

                  <div className="flex-1 space-y-3 overflow-hidden">
                    {transcriptMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + i * 0.3, duration: 0.4 }}
                        className={`text-xs ${msg.isAI ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-slate-700/30'} rounded-lg p-2`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-medium ${msg.isAI ? 'text-emerald-400' : 'text-slate-300'}`}>
                            {msg.speaker}
                          </span>
                          <span className="text-slate-500">{msg.time}</span>
                        </div>
                        <p className="text-slate-400">{msg.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating action indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 rounded-full px-6 py-3 flex items-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Transcribing</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Translating</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-slate-300">Analyzing</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualDemo;
