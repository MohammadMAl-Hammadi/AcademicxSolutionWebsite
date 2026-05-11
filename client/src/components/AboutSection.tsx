import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const features = [
    'فريق متخصص وذو خبرة عميقة',
    'جودة عالية وسرعة في التنفيذ',
    'دعم عملاء متميز 24/7',
    'أسعار منافسة وشفافة',
    'ضمان رضا العميل 100%',
    'سرية تامة للمعلومات',
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">لماذا نحن؟</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              ACADEMIX SOLUTION هي منصة متخصصة في تقديم حلول أكاديمية وتقنية متكاملة.
              نجمع بين الخبرة العميقة والتكنولوجيا الحديثة لضمان نجاحك.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: '500+', label: 'عميل راضٍ' },
              { number: '1000+', label: 'مشروع مكتمل' },
              { number: '98%', label: 'معدل النجاح' },
              { number: '24/7', label: 'دعم مستمر' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
