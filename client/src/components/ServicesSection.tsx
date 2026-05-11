import { motion } from 'framer-motion';
import {
  BookOpen,
  Briefcase,
  FileText,
  ClipboardList,
  MessageSquare,
  Palette,
  Globe,
  Server,
} from 'lucide-react';

interface ServicesSectionProps {
  onRequestService: (serviceName: string) => void;
}

export default function ServicesSection({ onRequestService }: ServicesSectionProps) {
  const services = [
    {
      icon: BookOpen,
      title: 'حل الواجبات',
      description: 'حل شامل وسريع لجميع الواجبات الدراسية بجودة عالية',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Briefcase,
      title: 'المشاريع',
      description: 'تطوير مشاريع أكاديمية احترافية وفقاً لمتطلباتك',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: FileText,
      title: 'الأبحاث',
      description: 'كتابة أبحاث علمية متقنة مع توثيق كامل',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ClipboardList,
      title: 'الاختبارات',
      description: 'تحضير شامل وحل نماذج اختبارات سابقة',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: MessageSquare,
      title: 'الاستشارات',
      description: 'استشارات متخصصة في مختلف المجالات الأكاديمية',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'التصميم الجرافيكي',
      description: 'تصاميم احترافية وجذابة لجميع احتياجاتك',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Globe,
      title: 'تصميم المواقع',
      description: 'مواقع ويب حديثة وسريعة وسهلة الاستخدام',
      color: 'from-yellow-500 to-green-500',
    },
    {
      icon: Server,
      title: 'الاستضافة',
      description: 'خدمات استضافة موثوقة وآمنة بأسعار منافسة',
      color: 'from-green-500 to-cyan-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">خدماتنا المتميزة</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الأكاديمية والتقنية المصممة لتلبية جميع احتياجاتك
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl p-6 cursor-pointer"
                onClick={() => onRequestService(service.title)}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-sm font-semibold">اطلب الآن</span>
                  <span className="mr-2">←</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
