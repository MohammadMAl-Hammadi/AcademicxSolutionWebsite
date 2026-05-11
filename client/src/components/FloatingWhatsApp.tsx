import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappNumber = '967739750294';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle size={24} className="text-white" />
    </motion.a>
  );
}
