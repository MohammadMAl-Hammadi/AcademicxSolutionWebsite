import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      value: 'academicx.solution@gmail.com',
      href: 'mailto:academicx.solution@gmail.com',
    },
    {
      icon: MapPin,
      title: 'التليجرام',
      value: 'AcademicxSolution',
      href: 'https://t.me/AcademicxSolution',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('يرجى إدخال اسمك');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('يرجى إدخال بريدك الإلكتروني');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('يرجى إدخال بريد إلكتروني صحيح');
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('يرجى إدخال الموضوع');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('يرجى إدخال رسالتك');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      // Send email via FormSubmit or similar service
      const response = await fetch('https://formspree.io/f/xyzabc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage('حدث خطأ في إرسال الرسالة. يرجى المحاولة لاحقاً');
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('حدث خطأ في الاتصال. يرجى المحاولة لاحقاً');
      setStatus('error');
    }
  };

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
                target={info.href.startsWith('https') ? '_blank' : undefined}
                rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
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
                <p className="text-foreground/70 truncate">{info.value}</p>
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="الاسم الكامل"
                className="px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                className="px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="الموضوع"
              className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="رسالتك"
              rows={5}
              className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
            />

            {/* Status Messages */}
            {status === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
              >
                <AlertCircle size={18} />
                <span className="text-sm">{errorMessage}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
              >
                <CheckCircle size={18} />
                <span className="text-sm">تم إرسال رسالتك بنجاح! سنرد عليك قريباً.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                'أرسل الرسالة'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
