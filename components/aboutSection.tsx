"use client";

import { FC } from "react";
import { siteContent } from "@/content";

const AboutSection: FC = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {about.description2}
            </p>
          </div>

          {/* الرسالة والرؤية */}
          <div className="animate-slide-in-left">
            <div className="bg-linear-to-br from-primary to-primary/70 rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                {about.mission.title}
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                {about.mission.description}
              </p>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                {about.vision.title}
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
