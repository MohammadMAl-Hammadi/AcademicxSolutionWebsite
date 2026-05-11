import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+967 739 750 294',
      href: 'tel:+967739750294',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@academix.com',
      href: 'mailto:info@academix.com',
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'اليمن - صنعاء',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">تواصل معنا</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك والمساعدة في احتياجاتك
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-foreground/70">{info.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
            <input
              type="text"
              placeholder="الموضوع"
              className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
            />
            <textarea
              placeholder="رسالتك"
              rows={5}
              className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              أرسل الرسالة
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
