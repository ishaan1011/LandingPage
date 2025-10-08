import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Pricing', href: '#waitlist' },
      { name: 'Docs', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/comm360ai', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-12 md:gap-20 mb-12">
          {/* Logo & Description */}
          <div>
            <a href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              Comm360
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Your AI that joins meetings for you — listens, speaks, and delivers results.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Comm360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
