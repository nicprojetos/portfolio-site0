import { motion } from "framer-motion";

interface CatalogCardProps {
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}

export default function CatalogCard({ title, description, onClick, delay }: CatalogCardProps) {
  return (
    <motion.div
      className="card-hover bg-gradient-to-br from-deep-black to-dark-green border-2 border-matrix-green rounded-lg p-8 transition-all duration-300 cursor-pointer hover:border-neon-green hover:shadow-lg hover:shadow-matrix-green/30"
      onClick={onClick}
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
      whileHover={{ 
        scale: 1.08,
        y: -15,
        boxShadow: "0 25px 50px rgba(0, 255, 65, 0.4)",
        borderColor: "var(--neon-green)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-matrix-green mb-4"
        animate={{ 
          textShadow: [
            "0 0 5px #00FF41, 0 0 10px #00FF41",
            "0 0 10px #00FF41, 0 0 20px #00FF41"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        {title}
      </motion.h3>
      <p className="text-gray-300 font-courier">{description}</p>
      
      <motion.div
        className="mt-4 text-matrix-green text-sm font-courier"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        → Clique para explorar
      </motion.div>
    </motion.div>
  );
}
