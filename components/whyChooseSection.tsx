"use client";

import { Shield, Star, Leaf, Clock } from "lucide-react";
import React from "react";
import { siteContent } from "@/content";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WhyChooseSection: React.FC = () => {
  const { whyChoose } = siteContent;
  const icons = [Star, Leaf, Shield, Clock];

  const reasons: Reason[] = whyChoose.reasons.map((reason, index) => ({
    icon: icons[index],
    title: reason.title,
    description: reason.description,
  }));

  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {whyChoose.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {whyChoose.subtitle}
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
