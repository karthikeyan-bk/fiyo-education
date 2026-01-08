import { motion } from 'motion/react';

export default function ThreeDCoin() {
  return (
    <div className="relative w-24 h-24">
      <motion.div
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            transform: 'translateZ(10px)',
          }}
        >
          <span className="text-white text-4xl">₹</span>
        </div>
        
        {/* Back face */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            transform: 'translateZ(-10px) rotateY(180deg)',
          }}
        >
          <span className="text-white text-4xl">₹</span>
        </div>
        
        {/* Edge */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full opacity-50"
          style={{
            transform: 'rotateY(90deg)',
          }}
        />
      </motion.div>
    </div>
  );
}
