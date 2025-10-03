import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* Zalo Button */}
      <motion.a
        id="zalo-vr"
        href="https://zalo.me/0397707745"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MessageCircle className="h-6 w-6 text-white relative z-10" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        id="phone-vr"
        href="tel:0397707745"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-accent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <Phone className="h-6 w-6 text-white relative z-10" />
      </motion.a>
    </>
  );
};

export default FloatingButtons;