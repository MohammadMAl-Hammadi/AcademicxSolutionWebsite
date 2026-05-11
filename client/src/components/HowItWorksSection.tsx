import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle, Zap, Trophy } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'تواصل معنا',
      description: 'أرسل لنا تفاصيل احتياجاتك عبر الموقع أو واتساب',
    },
    {
      icon: CheckCircle,
      title: 'تقييم الطلب',
      description: 'نقيم احتياجاتك ونقدم لك عرض سعر مناسب',
    },
    {
      icon: Zap,
      title: 'التنفيذ السريع',
      description: 'نبدأ العمل فوراً بسرعة واحترافية عالية',
    },
    {
      icon: Trophy,
      title: 'التسليم والدعم',
      description: 'نسلمك العمل مع ضمان الجودة والدعم المستمر',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">كيف نعمل</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            عملية بسيطة وسهلة للحصول على خدماتنا المتميزة
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transform -translate-y-1/2 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50 relative z-10"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
