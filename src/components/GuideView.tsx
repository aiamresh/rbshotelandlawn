import React, { useState } from "react";
import { MapPin, Clock, ArrowRight, MessageCircle, Compass, Search, Phone } from "lucide-react";
import { NEARBY_ATTRACTIONS } from "../data";

export default function GuideView() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAttractions = NEARBY_ATTRACTIONS.filter((att) =>
    att.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    att.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-[#FFF8EE] min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Ayodhya Pilgrimage Guide</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Holy Attractions Near RBS Hotel and Lawn</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            RBS Hotel and Lawn is located strategically to allow quick and convenient access to Ayodhya's most sacred temples and heritage spots.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Intro */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-gold/15">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-2xl font-serif font-bold text-maroon">Explore Ayodhya's Sacred Corridor</h2>
            <p className="text-xs sm:text-sm text-dark-brown/70 leading-relaxed">
              We offer exclusive cab booking and local travel guides for all our guests to ensure your holy darshan remains hassle-free and enriching. Discover the closest sights with exact travel details below.
            </p>
          </div>
          <div className="relative w-full md:max-w-xs shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-dark-brown/40">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search holy spots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gold/30 rounded-lg pl-10 pr-4 py-2.5 text-sm text-dark-brown focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron"
            />
          </div>
        </div>

        {/* Attractions Grid */}
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((att) => (
              <div
                key={att.id}
                className="bg-white rounded-xl border border-gold/15 overflow-hidden shadow-md group hover:shadow-2xl hover:border-saffron transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={att.image}
                    alt={att.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-saffron text-cream text-[10px] font-bold tracking-widest px-3 py-1.5 rounded shadow-md border border-gold/10">
                    {att.distance} ({att.time})
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-1.5">
                      <MapPin size={16} className="text-saffron mt-1 shrink-0" />
                      <h3 className="font-serif font-bold text-lg text-maroon leading-tight group-hover:text-saffron transition-colors">
                        {att.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-dark-brown/70 leading-relaxed leading-normal">
                      {att.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gold/10">
                    <div className="flex items-center justify-between text-xs font-semibold text-saffron mb-3">
                      <span>Travel Assistance Provided</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <a
                      href={`https://wa.me/917570000335?text=${encodeURIComponent(`Hello! I am interested in booking a Cab and Travel Guide for visiting ${att.name} during my stay at RBS Hotel and Lawn.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-widest py-3 px-4 rounded-lg shadow hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={15} className="stroke-[2.5]" />
                      BOOK CAB & TRAVEL GUIDE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gold/10 p-8 max-w-md mx-auto">
            <Compass className="mx-auto text-gold/40 mb-4 animate-spin-slow" size={48} />
            <p className="text-sm text-dark-brown/70 font-semibold">No holy spots match your search.</p>
            <button 
              onClick={() => setSearchQuery("")} 
              className="mt-3 text-xs text-saffron font-bold underline hover:text-maroon"
            >
              Clear Search Query
            </button>
          </div>
        )}

        {/* Travel Info Banner */}
        <div className="mt-16 bg-cream border border-gold/25 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-lg text-maroon">Need Custom Pilgrimage Itinerary?</h3>
            <p className="text-xs text-dark-brown/70">
              Our travel desk can draft a personalized temple-visiting schedule based on your arrival and length of stay.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+917570000335"
              className="bg-gold-gradient text-cream text-center text-xs font-bold tracking-widest px-6 py-3 rounded-lg border border-gold/40 shadow hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              CALL TRAVEL DESK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
