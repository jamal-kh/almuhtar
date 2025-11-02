"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = siteContent.header.navItems;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : isMobileMenuOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        {/* === Navbar Grid Layout === */}
        <nav className="grid grid-cols-3 items-center">
          {/* === Left: Logo === */}
          <div className="row-span-2 flex justify-start">
            <Image
              src={logo}
              alt="لوكس للأثاث"
              width={60}
              height={20}
              className="object-contain select-none"
              priority
            />
          </div>

          {/* === Center: Navigation Links === */}
          <ul className="hidden md:flex row-span-8 items-center justify-center gap-4 text-lg font-semibold tracking-wide">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* === Right: CTA Button / Menu === */}
          <div className="row-span-2 flex justify-end items-center">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="accent"
                size="lg"
                onClick={() => scrollToSection("designs")}
              >
                {siteContent.header.ctaButton}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* === Mobile Menu === */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in rounded-lg bg-white shadow-lg">
            <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-accent transition-colors w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full cursor-pointer"
                  onClick={() => scrollToSection("designs")}
                >
                  شاهد التصاميم
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
