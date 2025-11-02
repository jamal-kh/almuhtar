"use client";

import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection: FC = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* خلفية الصورة */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="صالة عرض الأثاث الفاخر"
          className="w-full h-full object-cover"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-linear-to-l from-background/95 via-background/70 to-transparent" />
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            حوّل مساحتك
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            اختبر المزيج المثالي من الأناقة والراحة والتصميم الخالد مع مجموعة الأثاث المختارة بعناية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection("designs")}
            >
              استكشف المجموعة
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
            >
              اعرف المزيد
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
