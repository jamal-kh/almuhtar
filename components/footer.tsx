"use client";

import { FC } from "react";
import { siteContent } from "@/content";
import { IconType } from "react-icons";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // ✅ replaced Lucide with React Icons

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const Footer: FC = () => {
  const { footer } = siteContent;

  const socialLinks: SocialLink[] = footer.socialLinks.map((social) => ({
    icon: social.icon,
    href: social.href,
    label: social.label,
  }));

  const quickLinks = footer.quickLinks;

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:col-span-8 lg:grid-cols-3 gap-12 mb-12">
          {/* 🟢 Company Info */}
          <div className="md:grid-span-6">
            <h3 className="text-3xl font-bold mb-4 text-amber-300">{footer.companyName}</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {footer.companyDescription}
            </p>

            {/* 🟢 Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 hover:bg-accent w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 🟡 Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:col-span-2 text-amber-300">اختصارات</h4>
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

          {/* 🔵 Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 md:col-span-2 text-amber-300">
              {footer.contact.title}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <bdi>{footer.contact.phone}</bdi>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${footer.contact.email}`}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🟣 Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-primary-foreground/70 text-sm">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
