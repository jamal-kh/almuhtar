"use client";

import { Card, CardContent } from "./ui/card";
import { siteContent } from "@/content";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const { services: servicesContent } = siteContent;

  const services: Service[] = servicesContent.items.map((item) => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center m-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl text-center font-bold text-foreground mb-4">
            {servicesContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:-translate-y-2 animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
