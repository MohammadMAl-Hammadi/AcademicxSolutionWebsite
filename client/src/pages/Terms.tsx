import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">الشروط والأحكام</span>
            </h1>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. قبول الشروط
                </h2>
                <p>
                  باستخدام موقع ACADEMIX SOLUTION، فإنك توافق على الالتزام بهذه الشروط
                  والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام
                  الموقع.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. الخدمات
                </h2>
                <p>
                  نقدم مجموعة من الخدمات الأكاديمية والتقنية بما في ذلك حل الواجبات والمشاريع
                  والأبحاث والاختبارات والاستشارات والتصميم الجرافيكي وتصميم المواقع والاستضافة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. استخدام الخدمات
                </h2>
                <p>
                  توافق على استخدام الخدمات فقط للأغراض القانونية وبطريقة لا تنتهك حقوق
                  الآخرين. يُحظر استخدام الخدمات:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>لأغراض غير قانونية أو غير أخلاقية</li>
                  <li>لانتهاك حقوق الملكية الفكرية</li>
                  <li>لنشر محتوى مسيء أو مزعج</li>
                  <li>لمحاولة الوصول غير المصرح به إلى الموقع</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. الأسعار والدفع
                </h2>
                <p>
                  تختلف أسعار الخدمات حسب نوع الخدمة والمتطلبات. سيتم تقديم عرض سعر قبل
                  بدء العمل. الدفع يجب أن يتم وفقاً للشروط المتفق عليها.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. ضمان الخدمات
                </h2>
                <p>
                  نضمن جودة الخدمات المقدمة. إذا لم تكن راضياً عن الخدمة، يمكنك طلب تعديلات
                  أو استرجاع أموالك وفقاً لشروطنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. السرية والملكية الفكرية
                </h2>
                <p>
                  نضمن سرية تامة لجميع المعلومات والمشاريع. جميع الأعمال المنجزة تبقى
                  ملكية حصرية للعميل. لا نشارك أي معلومات مع أطراف ثالثة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. المسؤولية
                </h2>
                <p>
                  نحن غير مسؤولين عن أي أضرار غير مباشرة أو عرضية ناجمة عن استخدام
                  خدماتنا. مسؤوليتنا محدودة بمبلغ الخدمة المدفوع.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. تعديل الشروط
                </h2>
                <p>
                  نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات
                  جوهرية عن طريق نشر الشروط المحدثة على الموقع.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. الإنهاء
                </h2>
                <p>
                  يمكننا إنهاء الخدمة في أي وقت إذا انتهكت الشروط والأحكام أو إذا كان
                  هناك سوء استخدام.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. القانون الحاكم
                </h2>
                <p>
                  تخضع هذه الشروط والأحكام للقوانين السارية. أي نزاع سيتم حله من خلال
                  التفاوض أو الوساطة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. التواصل معنا
                </h2>
                <p>
                  إذا كان لديك أي أسئلة حول الشروط والأحكام، يرجى التواصل معنا على:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>البريد الإلكتروني: academicx.solution@gmail.com</li>
                  <li>التليجرام: https://t.me/AcademicxSolution</li>
                </ul>
              </section>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mt-8">
                <p className="text-sm text-foreground/70">
                  آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
