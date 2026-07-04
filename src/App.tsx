import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import RoomsView from "./components/RoomsView";
import GalleryView from "./components/GalleryView";
import GuideView from "./components/GuideView";
import ContactView from "./components/ContactView";
import BookOnlineView from "./components/BookOnlineView";
import { MessageCircle, Phone, Sparkles, Compass } from "lucide-react";
import { HOTEL_DETAILS } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [bookingState, setBookingState] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate brand loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: string, bookingParams?: any) => {
    setCurrentPage(page);
    if (bookingParams) {
      setBookingState(bookingParams);
    } else {
      setBookingState(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FFF8EE] flex flex-col items-center justify-center z-50 p-4">
        <div className="text-center space-y-6 max-w-sm">
          {/* Surya Motif Logo Animation */}
          <div className="relative w-20 h-20 flex items-center justify-center bg-gold-gradient rounded-full shadow-2xl border border-gold/40 mx-auto animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-cream animate-spin-slow"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
            </svg>
            <div className="absolute inset-0 bg-transparent rounded-full border border-gold/20 scale-125 animate-ping"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-serif font-bold text-2xl tracking-widest text-maroon uppercase leading-none">
              RBS HOTEL
            </h1>
            <span className="block text-xs font-sans tracking-[0.3em] text-gold font-bold uppercase leading-tight">
              And Lawn • Ayodhya
            </span>
          </div>

          <div className="w-24 h-0.5 bg-gold/30 mx-auto rounded overflow-hidden">
            <div className="h-full bg-saffron w-1/2 rounded animate-[shimmer_1.5s_infinite] origin-left"></div>
          </div>
          
          <span className="block text-[10px] text-dark-brown/40 uppercase tracking-widest font-sans font-bold">
            जय श्री राम • LOADING EXPERIENCE...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark-brown selection:bg-saffron/20 selection:text-maroon relative font-sans">
      
      {/* Sticky Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main View Area with State-Driven Router */}
      <main className="flex-grow">
        {currentPage === "home" && <HomeView onPageChange={handlePageChange} />}
        {currentPage === "about" && <AboutView />}
        {currentPage === "rooms" && <RoomsView onPageChange={handlePageChange} />}
        {currentPage === "gallery" && <GalleryView />}
        {currentPage === "guide" && <GuideView />}
        {currentPage === "contact" && <ContactView />}
        {currentPage === "book-online" && (
          <BookOnlineView initialBookingState={bookingState} onPageChange={handlePageChange} />
        )}
      </main>

      {/* Premium Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* FLOATING ACTION INTERFACES */}
      
      {/* 1. Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${HOTEL_DETAILS.whatsapp}?text=Hello!%20I%20am%20interested%20in%20booking%20a%20stay%20at%20RBS%20Hotel%20and%20Lawn%20in%20Ayodhya.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 border border-white/20 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
        id="whatsapp-float-btn"
      >
        <MessageCircle size={22} className="stroke-[2.5]" />
        {/* Tooltip on Hover */}
        <span className="absolute left-full ml-3 bg-dark-brown text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/15">
          WhatsApp Chat
        </span>
      </a>

      {/* 2. Floating Call Button */}
      <a
        href={`tel:${HOTEL_DETAILS.phoneNumbers[0].replace(/\s/g, "")}`}
        className="fixed bottom-6 left-24 z-40 bg-gold-gradient text-cream p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 border border-gold/30 flex items-center justify-center group"
        aria-label="Call Front Office Desk"
        id="phone-float-btn"
      >
        <Phone size={22} className="stroke-[2.5]" />
        {/* Tooltip on Hover */}
        <span className="absolute left-full ml-3 bg-dark-brown text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/15">
          Call Front Desk
        </span>
      </a>



      {/* Premium subtle visual banner helper (Fixed at the bottom right during simple page-views) */}
      <div className="fixed bottom-24 right-6 z-40 hidden xl:flex items-center gap-2 bg-[#FFF8EE]/90 backdrop-blur-md border border-gold/20 px-3.5 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Sparkles size={14} className="text-saffron animate-pulse" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-maroon">
          Premium Direct-Rate Active
        </span>
      </div>

    </div>
  );
}
