"use client";

import { FC, useState } from "react";
import {FaShare} from "react-icons/fa";
import { siteContent } from "@/content";
import { IconType } from "react-icons";
interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color: string;
}

const SocialFloatButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks: SocialLink[] = siteContent.footer.socialLinks

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main trigger button - half circle shape (smaller) */}
      <button
        className={`relative w-10 h-20 bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex items-center justify-center group ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={{
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
        aria-label="Social media links"
      >
        <FaShare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Social buttons as vertical list */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-500 ease-out ${
                  isHovered ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-4 pointer-events-none"
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <Icon className="w-5 h-5 transition-transform duration-300 hover:scale-125" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialFloatButton;

