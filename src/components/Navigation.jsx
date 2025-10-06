import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Comm360" className="h-12 md:h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#waitlist" className="text-slate-300 hover:text-white transition-colors">
              Docs
            </a>
            <button className="px-5 py-2 bg-gradient-brand rounded-lg font-medium hover:shadow-lg hover:glow transition-all">
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-slate-800"
        >
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-slate-300 hover:text-white transition-colors py-2">
              Features
            </a>
            <a href="#how-it-works" className="block text-slate-300 hover:text-white transition-colors py-2">
              How it works
            </a>
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors py-2">
              About
            </a>
            <a href="#waitlist" className="block text-slate-300 hover:text-white transition-colors py-2">
              Docs
            </a>
            <button className="w-full px-5 py-2 bg-gradient-brand rounded-lg font-medium">
              Join Waitlist
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
