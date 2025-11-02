"use client";

import Image, { StaticImageData } from "next/image";
import design1 from "@/assets/design-1.jpg";
import design2 from "@/assets/design-2.jpg";
import design3 from "@/assets/design-3.jpg";
import { FC } from "react";

interface Design {
  image: StaticImageData;
  title: string;
  category: string;
}

const DesignsSection: FC = () => {
  const designs: Design[] = [
    {
      image: design1,
      title: "مجموعة غرف الطعام العصرية",
      category: "غرفة الطعام",
    },
    {
      image: design2,
      title: "مجموعة غرف النوم الفاخرة",
      category: "غرفة النوم",
    },
    {
      image: design3,
      title: "مكتب عصري",
      category: "مكتب منزلي",
    },
  ];

  return (
    <section id="designs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تصاميمنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعتنا المختارة من تصاميم الأثاث الخالدة
          </p>
        </div>

        {/* شبكة التصاميم */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* الصورة */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  placeholder="blur"
                />
              </div>

              {/* التراكب */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {design.category}
                </p>
                <h3 className="text-primary-foreground text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignsSection;
