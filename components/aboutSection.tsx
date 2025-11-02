"use client";

import { FC } from "react";
import { Award, Users, Heart, LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const AboutSection: FC = () => {

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              من نحن
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              لأكثر من 15 عاماً، نصنع أثاثاً استثنائياً يحوّل المنازل إلى بيوت.
              شغفنا بالتصميم المتميز والتزامنا بالجودة جعلنا اسماً موثوقاً في
              عالم تصميم الأثاث.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              كل قطعة نصنعها تحكي قصة الحرفية والاهتمام بالتفاصيل والأناقة
              الخالدة. نؤمن بأن الأثاث يجب ألا يكون عملياً فحسب، بل يجب أن يلهم
              ويرفع من مستوى مساحة معيشتك.
            </p>

          </div>

          {/* الرسالة والرؤية */}
          <div className="animate-slide-in-left">
            <div className="bg-linear-to-br from-primary to-primary/70 rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                رسالتنا
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                تصميم وتقديم أثاث يمزج بسلاسة بين الجمال والوظيفة والاستدامة،
                مما يثري حياة عملائنا ومساحاتهم.
              </p>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                رؤيتنا
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                أن نكون الشركة الرائدة في تصميم الأثاث المعترف بها للابتكار
                والحرفية عالية الجودة وإنشاء قطع خالدة تصمد أمام اختبار الزمن.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
