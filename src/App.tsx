import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { HOTEL_DETAILS } from "./data";

// Lazy load non-initial views for faster initial bundle parse and fast TTI
const AboutView = lazy(() => import("./components/AboutView"));
const RoomsView = lazy(() => import("./components/RoomsView"));
const GalleryView = lazy(() => import("./components/GalleryView"));
const GuideView = lazy(() => import("./components/GuideView"));
const ContactView = lazy(() => import("./components/ContactView"));
const BookOnlineView = lazy(() => import("./components/BookOnlineView"));
const PoliciesView = lazy(() => import("./components/PoliciesView"));

// Prefetch non-home route components in background after initial load
const prefetchRoutes = () => {
  import("./components/AboutView");
  import("./components/RoomsView");
  import("./components/GalleryView");
  import("./components/GuideView");
  import("./components/ContactView");
  import("./components/BookOnlineView");
  import("./components/PoliciesView");
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [bookingState, setBookingState] = useState<any | null>(null);

  // Background prefetch during idle time after initial render
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => prefetchRoutes());
    } else {
      const timer = setTimeout(prefetchRoutes, 2000);
      return () => clearTimeout(timer);
    }
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

  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark-brown selection:bg-saffron/20 selection:text-maroon relative font-sans">
      
      {/* Sticky Header */}
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main View Area with State-Driven Router & Fallback Suspense */}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FFF8EE]">
              <div className="w-10 h-10 border-3 border-gold/30 border-t-saffron rounded-full animate-spin mb-4" />
              <p className="text-xs uppercase tracking-widest font-bold text-maroon">Loading View...</p>
            </div>
          }
        >
          {currentPage === "home" && <HomeView onPageChange={handlePageChange} />}
          {currentPage === "about" && <AboutView />}
          {currentPage === "rooms" && <RoomsView onPageChange={handlePageChange} />}
          {currentPage === "gallery" && <GalleryView />}
          {currentPage === "guide" && <GuideView />}
          {currentPage === "contact" && <ContactView />}
          {currentPage === "policies" && <PoliciesView />}
          {currentPage === "book-online" && (
            <BookOnlineView initialBookingState={bookingState} onPageChange={handlePageChange} />
          )}
        </Suspense>
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
        <span className="absolute left-full ml-3 bg-dark-brown text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gold/15">
          Call Front Desk
        </span>
      </a>

      {/* Premium subtle visual banner helper */}
      <div className="fixed bottom-24 right-6 z-40 hidden xl:flex items-center gap-2 bg-[#FFF8EE]/90 backdrop-blur-md border border-gold/20 px-3.5 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Sparkles size={14} className="text-saffron animate-pulse" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-maroon">
          Premium Direct-Rate Active
        </span>
      </div>

    </div>
  );
}
