import { motion } from 'framer-motion';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: 'منصة تعليمية متقدمة',
      category: 'تطوير ويب',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-hero-N6pY5ZWWDDtYJsynxMYrit.webp',
    },
    {
      title: 'تطبيق إدارة المشاريع',
      category: 'تطبيق موبايل',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/services-section-bg-iLNVFF7ryVF9hEdjb7wGeV.webp',
    },
    {
      title: 'نظام إدارة المحتوى',
      category: 'Backend Development',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/gradient-accent-EBiQm2hBcxVcBdxLHrYS85.webp',
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">أعمالنا المتميزة</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            نماذج من المشاريع الناجحة التي أنجزناها لعملائنا
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-cyan-400 mb-2">{item.category}</p>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
