import React from "react";
import { Star, Check, Sparkles, MapPin, Coffee, Tv, Wifi, MessageCircle } from "lucide-react";
import { ROOMS } from "../data";
import RoomImageGallery from "./RoomImageGallery";

interface RoomsViewProps {
  onPageChange: (page: string, bookingState?: any) => void;
}

export default function RoomsView({ onPageChange }: RoomsViewProps) {
  const handleBookNow = (roomId: string) => {
    window.open("https://www.makemytrip.com/hotels/rbs_hotel_and_lawn-details-ayodhya.html", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      {/* JSON-LD Structured Data for Google Map Prices & Hotel Room Ranking */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "RBS Hotel and Lawn",
          "description": "Luxurious comfort and traditional hospitality near Shri Ram Janmabhoomi Temple, Ayodhya. Offers premium rooms, suites, and extensive wedding lawns.",
          "image": "https://lh3.googleusercontent.com/d/1KxYQ4corFCUcdbe1XeBnHBiJq_wkP8c3",
          "telephone": "+919838430000",
          "url": "https://www.rbshotelandlawn.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "I.E.T. Campus, Faizabad",
            "addressLocality": "Ayodhya",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "224133",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.7922,
            "longitude": 82.2014
          },
          "priceRange": "INR 3499 - 5499",
          "starRating": {
            "@type": "Rating",
            "ratingValue": "4.9"
          },
          "containsPlace": ROOMS.filter(r => r.id === "deluxe-king" || r.id === "family").map(r => ({
            "@type": "HotelRoom",
            "name": r.name,
            "description": r.description,
            "bed": r.bedType,
            "occupancy": r.occupancy,
            "offers": {
              "@type": "Offer",
              "price": r.price.toString(),
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01",
              "url": "https://www.rbshotelandlawn.com"
            }
          }))
        })}
      </script>

      {/* Rooms Page Banner */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Our Sanctuaries</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Luxury Accommodations</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto">
            Indulge in our exquisite rooms and suites featuring rich warm textures, authentic sandstone palettes, and immaculate modern comforts.
          </p>
        </div>
      </section>

      {/* Main Rooms Listing Grid */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {ROOMS.map((room, index) => (
              <div
                key={room.id}
                className={`bg-white rounded-xl overflow-hidden border border-gold/15 shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column - 6 Cols */}
                <div className={`lg:col-span-6 relative flex flex-col justify-between overflow-hidden bg-cream-dark/5 ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}>
                  <RoomImageGallery
                    images={room.images}
                    defaultImage={room.image}
                    roomName={room.name}
                    aspectRatioClassName="h-[320px] sm:h-[380px] lg:h-[420px]"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-gold text-[10px] font-bold px-2.5 py-1.5 rounded border border-gold/20 z-10 uppercase tracking-widest">
                    {room.view}
                  </div>
                </div>

                {/* Content Column - 7 Cols */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-maroon group-hover:text-saffron transition-colors">
                          {room.name}
                        </h2>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-gold text-gold" />
                          ))}
                          <span className="text-xs font-semibold text-dark-brown/60 ml-1">({room.rating} Rating)</span>
                        </div>
                      </div>
                      
                      {/* Price tag only for actual accommodation rooms */}
                      {(room.id === "deluxe-king" || room.id === "family") && (
                        <div 
                          className="bg-cream/90 border border-gold/30 px-4 py-2 rounded-lg shadow-sm text-right shrink-0"
                          itemScope
                          itemType="https://schema.org/Offer"
                        >
                          <meta itemProp="priceCurrency" content="INR" />
                          <meta itemProp="price" content={room.price.toString()} />
                          <meta itemProp="availability" content="https://schema.org/InStock" />
                          <span className="block text-[9px] text-dark-brown/50 font-bold uppercase tracking-wider">Per Night</span>
                          <div className="flex items-baseline gap-0.5 justify-end">
                            <span className="text-2xl font-serif font-bold text-maroon">₹{room.price.toLocaleString("en-IN")}</span>
                            <span className="text-xs text-dark-brown/60 font-medium">/ night</span>
                          </div>
                          <span className="block text-[8px] text-emerald-600 font-sans font-semibold tracking-wide">Google Certified Rate</span>
                        </div>
                      )}
                    </div>

                    <div className="w-12 h-0.5 bg-gold"></div>

                    {/* Room Description */}
                    <p className="text-xs sm:text-sm text-dark-brown/80 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Structural Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-cream/50 p-3.5 rounded border border-gold/15 text-xs text-dark-brown/70 font-sans font-medium">
                      {room.size ? (
                        <>
                          <div className="space-y-0.5">
                            <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Room Size</span>
                            <span>📏 {room.size}</span>
                          </div>
                          <div className="space-y-0.5 border-l border-gold/20 pl-3">
                            <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Occupancy</span>
                            <span>👥 {room.occupancy}</span>
                          </div>
                          <div className="space-y-0.5 border-l border-gold/20 pl-3 col-span-2 sm:col-span-1 pt-2 sm:pt-0">
                            <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Bed Type</span>
                            <span>🛏️ {room.bedType}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={`space-y-0.5 ${room.bathroom ? "sm:col-span-1" : "sm:col-span-2"}`}>
                            <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Occupancy</span>
                            <span className="leading-relaxed">👥 {room.occupancy}</span>
                          </div>
                          <div className="space-y-0.5 border-t sm:border-t-0 sm:border-l border-gold/20 pt-2 sm:pt-0 sm:pl-3">
                            <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Bed Type</span>
                            <span>🛏️ {room.bedType}</span>
                          </div>
                          {room.bathroom && (
                            <div className="space-y-0.5 border-t sm:border-t-0 sm:border-l border-gold/20 pt-2 sm:pt-0 sm:pl-3">
                              <span className="text-[10px] uppercase font-semibold text-dark-brown/40 block">Bathroom</span>
                              <span>🚿 {room.bathroom}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Included Amenities checklist */}
                    <div>
                      <span className="block text-[10px] font-sans font-bold uppercase tracking-widest text-maroon mb-2">Sanctuary Amenities Included</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {room.amenities.map((am, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-dark-brown/80">
                            <span className="text-saffron shrink-0">
                              <Check size={13} className="stroke-[3]" />
                            </span>
                            <span>{am}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Actions segment */}
                  <div className="pt-8 border-t border-gold/10 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2.5 text-xs text-gold font-sans font-bold italic">
                      <Sparkles size={14} className="animate-pulse" />
                      <span>Direct Web Booking Guarantees 10% Discount</span>
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto shrink-0">
                      {room.id === "royal-darbar" || room.id === "siddharth-banquet" ? (
                        <a
                          href={`https://wa.me/919838430000?text=${encodeURIComponent(`Hello! I am interested in booking the ${room.name} at RBS Hotel and Lawn.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-widest px-8 py-3 rounded shadow-md active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={15} className="stroke-[2.5]" />
                          BOOK ON WHATSAPP
                        </a>
                      ) : (
                        <button
                          onClick={() => handleBookNow(room.id)}
                          className="w-full sm:w-auto bg-gold-gradient hover:opacity-95 text-cream text-xs font-bold tracking-widest px-8 py-3 rounded shadow-md border border-gold/30 active:scale-95 transition-all cursor-pointer"
                        >
                          BOOK SANCTUARY
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking terms callout */}
      <section className="py-12 bg-cream-dark/15 border-t border-gold/15 text-xs sm:text-sm text-dark-brown/60 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h4 className="font-serif font-bold text-lg text-maroon uppercase tracking-wider">Accommodation Policies & Amenities Info</h4>
          <p>
            • Check-in time: 2:00 PM • Check-out time: 11:00 AM. Fast track early check-in is subject to room availability.
            <br />
            • In alignment with local Ayodhya traditions, our premises are strictly 100% vegetarian, non-alcoholic, and smoke-free.
            <br />
            • Complimentary welcome herbal tea and fruit baskets are provided in all suites on arrival.
          </p>
        </div>
      </section>
    </div>
  );
}
