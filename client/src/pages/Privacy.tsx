import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
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
              <span className="gradient-text">سياسة الخصوصية</span>
            </h1>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. مقدمة
                </h2>
                <p>
                  نحن في ACADEMIX SOLUTION نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية
                  جمع واستخدام وحماية معلوماتك الشخصية.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. المعلومات التي نجمعها
                </h2>
                <p>
                  نجمع المعلومات التالية عند استخدام خدماتنا:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>الاسم الكامل ورقم الجوال</li>
                  <li>البريد الإلكتروني</li>
                  <li>تفاصيل الطلب والخدمات المطلوبة</li>
                  <li>معلومات الجهاز والمتصفح</li>
                  <li>سجل التفاعل مع الموقع</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. استخدام المعلومات
                </h2>
                <p>
                  نستخدم معلوماتك الشخصية للأغراض التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>تقديم الخدمات المطلوبة</li>
                  <li>التواصل معك بخصوص طلباتك</li>
                  <li>تحسين جودة خدماتنا</li>
                  <li>الامتثال للقوانين واللوائح</li>
                  <li>منع الاحتيال والأنشطة غير القانونية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. حماية المعلومات
                </h2>
                <p>
                  نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به
                  والتعديل والكشف. ومع ذلك، لا يمكن ضمان أمان أي نقل بيانات عبر الإنترنت
                  بنسبة 100%.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. مشاركة المعلومات
                </h2>
                <p>
                  لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>عند الحصول على موافقتك الصريحة</li>
                  <li>عند الامتثال للقوانين واللوائح</li>
                  <li>مع موفري الخدمات الموثوقين</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. حقوقك
                </h2>
                <p>
                  لديك الحق في:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>الوصول إلى معلوماتك الشخصية</li>
                  <li>تصحيح المعلومات غير الدقيقة</li>
                  <li>حذف معلوماتك</li>
                  <li>الاعتراض على معالجة معلوماتك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. تحديثات السياسة
                </h2>
                <p>
                  قد نحدث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عن طريق
                  نشر السياسة المحدثة على موقعنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. التواصل معنا
                </h2>
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على:
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
