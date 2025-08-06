import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlidingPanelProps {
  isActive: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function SlidingPanel({ isActive, onClose, title, children }: SlidingPanelProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 bg-deep-black z-40 p-8 overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-matrix-green text-3xl hover:text-neon-green transition-colors z-50"
          >
            ×
          </button>
          
          <div className="max-w-6xl mx-auto pt-16">
            <motion.h2 
              className="text-4xl font-bold text-matrix-green mb-8 animate-glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
