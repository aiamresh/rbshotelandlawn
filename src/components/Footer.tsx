import React from "react";
import { Phone, Mail, MapPin, ChevronRight, Globe, MessageCircle } from "lucide-react";
import { HOTEL_DETAILS } from "../data";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Wifi- Internet",
    "Free Parking",
    "24*7 House Keeping",
    "Centralized Air Condition",
    "Dining",
    "Wedding Venue",
    "Kitty Party & Social Events",
    "Shakun (Banquet Hall)",
    "Affordable Catering Services",
    "Wedding Lawn",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E120C] to-[#140B07] text-[#FFF8EE] border-t-2 border-gold/40">
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Description Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow border border-gold/40 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1KxYQ4corFCUcdbe1XeBnHBiJq_wkP8c3"
                alt="RBS Hotel and Lawn Logo"
                className="w-full h-full object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block font-serif font-bold text-lg tracking-wider text-saffron leading-none">
                RBS HOTEL
              </span>
              <span className="block text-[10px] font-sans tracking-[0.25em] text-gold font-semibold uppercase leading-tight">
                And Lawn • Ayodhya
              </span>
            </div>
          </div>
          <p className="text-[#FFF8EE]/70 text-sm leading-relaxed">
            Nestled in the spiritual heartbeat of Ayodhya, RBS Hotel and Lawn integrates modern grandeur with royal Avadhi heritage. Experience exemplary pure veg dining, exquisite suites, and majestic wedding celebrations.
          </p>
          <div className="pt-2">
            <span className="block text-xs font-semibold text-gold tracking-widest uppercase mb-2">Connect With Us</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gold/20 hover:border-saffron hover:bg-saffron/15 flex items-center justify-center transition-all duration-300 text-gold hover:text-saffron"
                aria-label="Facebook"
              >
                <Globe size={14} />
              </a>
              <a
                href={`https://wa.me/${HOTEL_DETAILS.whatsapp}`}
                className="w-8 h-8 rounded-full border border-gold/20 hover:border-saffron hover:bg-saffron/15 flex items-center justify-center transition-all duration-300 text-gold hover:text-saffron"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="font-serif font-semibold text-lg text-gold tracking-wide mb-5 pb-2 border-b border-gold/20">
            LATEST SERVICES
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-[#FFF8EE]/80">
            {services.map((srv, idx) => (
              <li key={idx} className="flex items-center gap-2 group hover:text-saffron transition-colors duration-200">
                <ChevronRight size={12} className="text-gold group-hover:translate-x-1 transition-transform" />
                <span>{srv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Column */}
        <div>
          <h3 className="font-serif font-semibold text-lg text-gold tracking-wide mb-5 pb-2 border-b border-gold/20">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2.5 text-sm text-[#FFF8EE]/80">
            <li>
              <button
                onClick={() => handleLinkClick("home")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("about")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>About us</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("rooms")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Rooms</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("gallery")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Gallery</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("contact")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Contact us</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("policies")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Terms & Conditions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("policies")}
                className="flex items-center gap-2 group hover:text-saffron transition-colors cursor-pointer"
              >
                <ChevronRight size={12} className="text-gold" />
                <span>Cancellation Policy</span>
              </button>
            </li>
          </ul>

          <div className="mt-6 border-t border-gold/15 pt-4">
            <span className="block text-xs font-semibold text-gold tracking-widest uppercase mb-2">HOTEL LOCATION</span>
            <div className="flex gap-2 text-xs text-[#FFF8EE]/70">
              <MapPin size={16} className="text-saffron shrink-0 mt-0.5" />
              <span>{HOTEL_DETAILS.address}</span>
            </div>
          </div>
        </div>

        {/* Contact Details Column */}
        <div>
          <h3 className="font-serif font-semibold text-lg text-gold tracking-wide mb-5 pb-2 border-b border-gold/20">
            CONTACT US
          </h3>
          <ul className="space-y-3.5 text-xs text-[#FFF8EE]/90">
            <li className="flex items-start gap-2.5 pb-2 border-b border-[#FFF8EE]/5">
              <Phone size={14} className="text-gold mt-1 shrink-0" />
              <div>
                <span className="block font-semibold text-gold">F/O Manager</span>
                <a href={`tel:${HOTEL_DETAILS.phoneNumbers[0].replace(/\s/g, "")}`} className="hover:text-saffron transition-colors">
                  {HOTEL_DETAILS.phoneNumbers[0]}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5 pb-2 border-b border-[#FFF8EE]/5">
              <Phone size={14} className="text-gold mt-1 shrink-0" />
              <div>
                <span className="block font-semibold text-gold">Reservation & Support</span>
                <a href={`tel:${HOTEL_DETAILS.phoneNumbers[1].replace(/\s/g, "")}`} className="hover:text-saffron transition-colors">
                  {HOTEL_DETAILS.phoneNumbers[1]}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5 pb-2 border-b border-[#FFF8EE]/5">
              <Phone size={14} className="text-gold mt-1 shrink-0" />
              <div>
                <span className="block font-semibold text-gold">Guest Relations</span>
                <a href={`tel:${HOTEL_DETAILS.phoneNumbers[2].replace(/\s/g, "")}`} className="hover:text-saffron transition-colors">
                  {HOTEL_DETAILS.phoneNumbers[2]}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5 pb-2 border-b border-[#FFF8EE]/5">
              <Mail size={14} className="text-gold mt-1 shrink-0" />
              <div>
                <span className="block font-semibold text-gold">Reservation Email</span>
                <a href="mailto:rbshotelandlawm@gmail.com" className="hover:text-saffron transition-colors">rbshotelandlawm@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe size={14} className="text-gold mt-0.5 shrink-0" />
              <div>
                <span className="block font-semibold text-gold">Web Address</span>
                <a href="https://www.rbshotelandlawn.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8EE]/70 hover:text-saffron transition-colors">
                  www.rbshotelandlawn.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive-looking Schematic Map Section */}
      <div className="w-full bg-[#140B07] border-t border-gold/15 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <span className="text-xs text-gold font-bold tracking-widest uppercase block">Ayodhya Sacred Corridor Connection</span>
            <span className="text-xs text-[#FFF8EE]/60">Conveniently situated along the Ram Mandir Highway corridor with swift bypass access.</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright segment */}
      <div className="bg-[#0D0704] py-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#FFF8EE]/50 text-center sm:text-left">
          <span>
            Copyright © {new Date().getFullYear()} <span className="text-gold font-semibold">RBS Hotel and Lawn</span>. All Rights Reserved.
          </span>
          <span>
            Developed by <span className="text-gold/80 font-semibold">DEVKALI WEB AGENCY</span> (<a href="tel:+917379478374" className="hover:text-saffron transition-colors">+91 7379478374</a>)
          </span>
        </div>
      </div>
    </footer>
  );
}
