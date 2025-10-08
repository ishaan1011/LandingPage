import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

const WaitlistForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: ''
  });

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xdkwllee';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!FORMSPREE_ENDPOINT) {
      console.warn('VITE_FORMSPREE_ENDPOINT is not set. Unable to submit form.');
      setError('Submission is temporarily unavailable. Please try again later.');
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: '🚨 IMP FROM COMM360 — New Waitlist Submission 🚨',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          useCase: formData.useCase,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', useCase: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="waitlist" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-sky-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the future of <span className="text-gradient">communication</span>
          </h2>
          <p className="text-xl text-slate-400">
            Limited early access spots available. Sign up to be first in line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* Form container */}
          <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800 p-8 md:p-12">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-sky-500/10 rounded-3xl blur-2xl" />

            {submitted ? (
              // Success state
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center"
                >
                  <Check size={40} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-3">You're on the list! 🎉</h3>
                <p className="text-slate-400">
                  We'll reach out soon with early access details.
                </p>
              </motion.div>
            ) : (
              // Form
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {error && (
                  <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-slate-300 mb-2">
                    Primary Use Case <span className="text-slate-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full appearance-none pr-12 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select one...</option>
                      <option value="remote-team">Remote team collaboration</option>
                      <option value="global-meetings">Global meetings & translation</option>
                      <option value="meeting-efficiency">Meeting efficiency</option>
                      <option value="knowledge-management">Knowledge management</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-brand rounded-xl font-semibold text-lg hover:shadow-2xl hover:glow-strong transition-all flex items-center justify-center gap-2"
                >
                  Request Early Access
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>

                <p className="text-center text-sm text-slate-500">
                  No spam. No credit card required. Just early access when we launch.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;