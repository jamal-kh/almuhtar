"use client";

import { Shield, Star, Leaf, Clock } from "lucide-react";
import React from "react";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseSection: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: Star,
      title: "جودة فائقة",
      description:
        "نستخدم فقط أفضل المواد ونوظف حرفيين متمرسين لضمان أن كل قطعة تلبي معاييرنا الصارمة.",
    },
    {
      icon: Leaf,
      title: "مواد مستدامة",
      description:
        "ملتزمون بالمسؤولية البيئية، نحصل على مواد صديقة للبيئة ونمارس التصنيع المستدام.",
    },
    {
      icon: Shield,
      title: "ضمان مدى الحياة",
      description:
        "ثقتنا في الجودة مدعومة بضمانات شاملة ودعم مخصص للعملاء.",
    },
    {
      icon: Clock,
      title: "تصميم خالد",
      description:
        "نصنع قطعاً تتجاوز الصيحات، وتقدم الجمال والوظيفة الدائمة للأجيال.",
    },
  ];

  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            لماذا تختارنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف ما يميزنا في عالم تصميم الأثاث الفاخر
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 animate-slide-in-right group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-accent/20 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
