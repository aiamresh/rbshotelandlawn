import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Menu, X, Calendar, Globe, Send } from "lucide-react";
import { HOTEL_DETAILS } from "../data";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", value: "home" },
    { label: "ABOUT US", value: "about" },
    { label: "ROOMS", value: "rooms" },
    { label: "GALLERY", value: "gallery" },
    { label: "HOLY GUIDE", value: "guide" },
    { label: "CONTACT US", value: "contact" },
  ];

  const handleNavClick = (pageValue: string) => {
    if (pageValue === "book-online") {
      window.open("https://www.makemytrip.com/hotels/rbs_hotel_and_lawn-details-ayodhya.html", "_blank", "noopener,noreferrer");
      setIsMobileMenuOpen(false);
      return;
    }
    onPageChange(pageValue);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full z-50">
      {/* Top Information Bar */}
      <div className="w-full bg-maroon text-[#FFF8EE]/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-gold/20 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6">
          <a
            href={`tel:${HOTEL_DETAILS.phoneNumbers[0].replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
          >
            <Phone size={13} className="text-gold" />
            <span>{HOTEL_DETAILS.phoneNumbers[0]}</span>
          </a>
          <a
            href={`mailto:${HOTEL_DETAILS.emails[0]}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200"
          >
            <Mail size={13} className="text-gold" />
            <span>{HOTEL_DETAILS.emails[0]}</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-[#FFF8EE]/70">
            <MapPin size={13} className="text-gold" />
            <span>Ayodhya, UP</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gold/80 italic text-[11px] font-serif tracking-widest hidden lg:inline">
            जय श्री राम • Welcome to Ayodhya's Royal Abode
          </span>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-gold/20"
            : "relative bg-cream/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <div className="relative w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md border border-gold/40 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/d/1KxYQ4corFCUcdbe1XeBnHBiJq_wkP8c3"
                  alt="RBS Hotel and Lawn Logo"
                  className="w-full h-full object-contain p-0.5"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-transparent rounded-full border border-gold/20 scale-110 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div>
                <span className="block font-serif font-bold text-lg sm:text-xl tracking-wider text-maroon group-hover:text-saffron transition-colors duration-300 leading-none">
                  RBS HOTEL
                </span>
                <span className="block text-[10px] font-sans tracking-[0.25em] text-gold font-semibold uppercase leading-tight">
                  And Lawn • Ayodhya
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-7">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`relative text-xs font-semibold tracking-widest py-1.5 transition-colors duration-200 cursor-pointer ${
                      currentPage === item.value
                        ? "text-saffron font-bold"
                        : "text-dark-brown hover:text-saffron"
                    }`}
                  >
                    {item.label}
                    {currentPage === item.value && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNavClick("book-online")}
                className="bg-gold-gradient hover:opacity-90 text-cream text-xs font-bold tracking-widest px-5 py-2.5 rounded shadow-lg border border-gold/40 flex items-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Calendar size={14} />
                BOOK ONLINE
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => handleNavClick("book-online")}
                className="bg-gold-gradient text-cream text-[10px] font-bold tracking-wider px-3.5 py-2 rounded shadow border border-gold/30 flex items-center gap-1 transition-all duration-200"
              >
                <Calendar size={11} />
                BOOK
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-maroon hover:text-saffron p-1.5 rounded-lg border border-gold/20 bg-cream-dark/20"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-cream border-b border-gold/30 shadow-2xl py-4 px-4 z-40 transition-all duration-300">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left text-sm font-semibold tracking-wider py-2 px-3 rounded-md transition-colors duration-200 ${
                    currentPage === item.value
                      ? "bg-saffron/10 text-saffron border-l-4 border-saffron pl-2"
                      : "text-dark-brown hover:bg-cream-dark/30 hover:text-saffron"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gold/10 pt-3 mt-1">
                <button
                  onClick={() => handleNavClick("book-online")}
                  className="w-full bg-gold-gradient hover:opacity-90 text-cream text-sm font-bold tracking-widest py-3 rounded-md shadow-md flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Calendar size={16} />
                  BOOK ROYAL STAY
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
