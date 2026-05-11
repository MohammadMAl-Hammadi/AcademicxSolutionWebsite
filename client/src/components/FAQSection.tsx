import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'ما هي خدمات ACADEMIX SOLUTION؟',
      answer:
        'نقدم مجموعة شاملة من الخدمات الأكاديمية والتقنية تشمل حل الواجبات والمشاريع والأبحاث والاختبارات والاستشارات والتصميم الجرافيكي وتصميم المواقع والاستضافة.',
    },
    {
      question: 'كيف يمكنني طلب خدمة؟',
      answer:
        'يمكنك طلب خدمة من خلال الموقع بملء نموذج الطلب أو التواصل معنا عبر واتساب مباشرة. سنرد عليك في أسرع وقت ممكن.',
    },
    {
      question: 'ما هي أسعار الخدمات؟',
      answer:
        'تختلف الأسعار حسب نوع الخدمة والمتطلبات. نقدم عروض مخصصة لكل عميل. تواصل معنا للحصول على عرض سعر مناسب.',
    },
    {
      question: 'هل هناك ضمان على الخدمات؟',
      answer:
        'نعم، نضمن رضا العميل 100%. إذا لم تكن راضياً عن الخدمة، سنعيد العمل أو نسترد أموالك.',
    },
    {
      question: 'كم الوقت المستغرق لإنجاز الطلب؟',
      answer:
        'يعتمد الوقت على نوع الخدمة والمتطلبات. معظم الطلبات تنجز خلال 24-48 ساعة. سنخبرك بالوقت المتوقع عند تقديم العرض.',
    },
    {
      question: 'هل معلوماتي آمنة معكم؟',
      answer:
        'نعم، نضمن سرية تامة لجميع معلومات العملاء. لا نشارك أي معلومات مع أطراف ثالثة.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">الأسئلة الشائعة</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground text-right">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mr-4"
                >
                  <ChevronDown size={20} className="text-cyan-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <p className="px-6 py-4 text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
