import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function ServiceRequestModal({
  isOpen,
  onClose,
  serviceName = 'الخدمة',
}: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.details) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    // Create WhatsApp message
    const message = `
مرحباً، أود طلب خدمة: ${serviceName}

الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
التفاصيل: ${formData.details}
    `.trim();

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/967739750294?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form and close modal
    setFormData({ name: '', phone: '', details: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground mb-6 pr-8">
              اطلب {serviceName}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك"
                  className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9671234567"
                  className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  تفاصيل الطلب
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="اشرح احتياجاتك بالتفصيل..."
                  rows={4}
                  className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mt-6"
              >
                أرسل عبر واتساب
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
