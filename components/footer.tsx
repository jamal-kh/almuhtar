"use client";

import { FC } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const Footer: FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks: string[] = ["من نحن", "خدماتنا", "تصاميمنا", "لماذا نحن", "اتصل بنا"];
  const services: string[] = ["تصميم مخصص", "استشارات التصميم", "التركيب", "التوصيل", "ضمان الجودة"];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* معلومات الشركة */}
          <div>
            <h3 className="text-2xl font-bold mb-4">لوكس للأثاث</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              نصنع أثاثاً استثنائياً يحول المساحات ويثري الحياة منذ عام 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-primary-foreground/10 hover:bg-accent w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="text-lg font-bold mb-4">الخدمات</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 شارع التصميم، الحي الإبداعي، نيويورك 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@luxefurniture.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@luxefurniture.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 لوكس للأثاث. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                شروط الخدمة
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                سياسة ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
