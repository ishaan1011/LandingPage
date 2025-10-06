import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12", 
    large: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main C letter with gradient */}
        <defs>
          <linearGradient id="cGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="speechGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main C letter */}
        <path
          d="M20 20 C20 10, 30 5, 45 5 C60 5, 70 10, 70 20 L70 30 C70 35, 75 40, 80 40 C85 40, 90 35, 90 30 L90 20 C90 5, 75 0, 45 0 C15 0, 0 15, 0 45 C0 75, 15 90, 45 90 C75 90, 90 75, 90 60 L90 50 C90 45, 85 40, 80 40 C75 40, 70 45, 70 50 L70 60 C70 70, 60 75, 45 75 C30 75, 20 70, 20 60 L20 20 Z"
          fill="url(#cGradient)"
          filter="url(#glow)"
        />

        {/* Speech bubble */}
        <g transform="translate(25, 35)">
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="8"
            fill="url(#speechGradient)"
            filter="url(#glow)"
          />
          <path
            d="M8 18 L12 22 L16 18"
            fill="url(#speechGradient)"
            filter="url(#glow)"
          />
        </g>

        {/* Video camera */}
        <g transform="translate(55, 30)">
          <rect
            x="0"
            y="8"
            width="20"
            height="14"
            rx="3"
            fill="url(#cameraGradient)"
            filter="url(#glow)"
          />
          <path
            d="M20 8 L25 12 L20 16 Z"
            fill="url(#cameraGradient)"
            filter="url(#glow)"
          />
          <circle
            cx="10"
            cy="15"
            r="3"
            fill="#1e293b"
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default Logo;
