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
import { siteContent } from "@/content";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const Footer: FC = () => {
  const { footer } = siteContent;
  const socialIcons = [Facebook, Instagram, Twitter, Linkedin];

  const socialLinks: SocialLink[] = footer.socialLinks.map((social, index) => ({
    icon: socialIcons[index],
    href: social.href,
    label: social.label,
  }));

  const quickLinks = footer.quickLinks;
  const services = footer.services;

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* معلومات الشركة */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{footer.companyName}</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {footer.companyDescription}
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
            <h4 className="text-lg font-bold mb-4">{footer.contact.title}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {footer.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-primary-foreground/20 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-primary-foreground/70 text-sm">
              {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
