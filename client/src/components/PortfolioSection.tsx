import { motion } from 'framer-motion';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: 'تصميم مواقع احترافية',
      category: 'تطوير ويب',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-website-design-fBHg5twLHpytJVjxdEAzw6.webp',
    },
    {
      title: 'لوحة تحكم تعليمية',
      category: 'تطبيق تعليمي',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-dashboard-education-bzX5y7twGGfkVgc7Edh2wt.webp',
    },
    {
      title: 'أبحاث أكاديمية',
      category: 'محتوى أكاديمي',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-research-academic-jWvF8fqSU9Y4HkKdudcnyT.webp',
    },
    {
      title: 'عروض تقديمية احترافية',
      category: 'محتوى بصري',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-presentation-i77VxXT8gtrqyiwSUFCYFQ.webp',
    },
    {
      title: 'تصميم جرافيكي إبداعي',
      category: 'تصميم جرافيكي',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-graphic-design-7wu4Q5GgGAgNwE2XmM4nE4.webp',
    },
    {
      title: 'منصة خدمات طلابية',
      category: 'منصة تعليمية',
      image:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-website-design-fBHg5twLHpytJVjxdEAzw6.webp',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 overflow-hidden rounded-xl bg-white/5 border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-background via-background/50 to-transparent">
                <p className="text-xs md:text-sm text-cyan-400 mb-2 font-semibold tracking-wide">{item.category}</p>
                <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
