import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
}

export default function HeroSection({ onRequestService }: HeroSectionProps) {
  const heroImage =
    'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/hero-background-jcCwN2TUxMJnbwzu293pDU.webp';

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-cyan-400">
              حلول أكاديمية وتقنية متكاملة
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">حلول أكاديمية وتقنية</span>
            <br />
            <span className="text-foreground">متكاملة لنجاحك</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            نحن نقدم حلولاً شاملة تغطي جميع احتياجاتك الأكاديمية والتقنية، من حل الواجبات
            والمشاريع إلى تصميم المواقع والاستضافة. فريق متخصص وخبرة عميقة لضمان نجاحك.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              onClick={onRequestService}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              اطلب الخدمة الآن
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="px-8 py-4 rounded-lg border border-white/20 text-foreground font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300">
              تعرف على خدماتنا
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'عميل راضٍ' },
              { number: '1000+', label: 'مشروع مكتمل' },
              { number: '98%', label: 'معدل النجاح' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-4"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
