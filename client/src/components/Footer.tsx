import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '#services' },
    { label: 'من نحن', href: '#about' },
    { label: 'الأعمال', href: '#portfolio' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'سياسة الخصوصية', href: '/privacy' },
    { label: 'الشروط والأحكام', href: '/terms' },
  ];

  return (
    <footer className="bg-background/50 border-t border-white/10 py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">ACADEMIX</h3>
            <p className="text-foreground/70 text-sm">
              منصة متخصصة في تقديم حلول أكاديمية وتقنية متكاملة لنجاحك
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              الروابط السريعة
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              المزيد
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              تواصل معنا
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone size={16} className="text-cyan-400" />
                <a href="tel:+967739750294" className="hover:text-cyan-400 transition-colors">
                  +967 739 750 294
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:academicx.solution@gmail.com" className="hover:text-cyan-400 transition-colors">
                  academicx.solution@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin size={16} className="text-cyan-400" />
                <a href="https://t.me/AcademicxSolution" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  التليجرام
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 py-6 mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-6 text-sm"
          >
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-foreground/70 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-foreground/60 text-sm"
          >
            <p>
              جميع الحقوق محفوظة © {currentYear} ACADEMIX SOLUTION. تم التطوير بعناية
              فائقة.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
