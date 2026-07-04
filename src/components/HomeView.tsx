import React, { useState, useEffect } from "react";
import { 
  Star, Wifi, Utensils, Trees, Tv, Car, Sparkles, Clock, 
  ArrowRight, ShieldCheck, Users, Award, Heart, Compass, 
  ChevronLeft, ChevronRight, Calendar, Building2, Play, CheckCircle2, MapPin,
  MessageCircle, Phone
} from "lucide-react";
import { ROOMS, SERVICES, TESTIMONIALS, NEARBY_ATTRACTIONS, HOTEL_DETAILS } from "../data";
import RoomImageGallery from "./RoomImageGallery";

interface HomeViewProps {
  onPageChange: (page: string, bookingState?: any) => void;
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  // Static Hero Background Image of a majestic hotel and lawn
  const heroBackground = "/rbs_hotel_official_1.webp";

  // Form State for Hero Booking Card
  const [checkIn, setCheckIn] = useState("2026-06-30");
  const [checkOut, setCheckOut] = useState("2026-07-01");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [roomType, setRoomType] = useState("deluxe-king");

  // Counter State (for animated stats)
  const [pilgrimsServed, setPilgrimsServed] = useState(0);
  const [weddingEvents, setWeddingEvents] = useState(0);
  const [starRating, setStarRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPilgrimsServed((prev) => (prev < 15000 ? prev + 350 : 15000));
      setWeddingEvents((prev) => (prev < 180 ? prev + 5 : 180));
      setStarRating((prev) => (prev < 4.9 ? parseFloat((prev + 0.1).toFixed(1)) : 4.9));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Facility Cards
  const facilities = [
    { icon: <Wifi className="text-gold" size={24} />, title: "Free High-Speed Wi-Fi", desc: "100+ Mbps reliable coverage in all rooms, gardens, and lobby." },
    { icon: <Users className="text-gold" size={24} />, title: "Kitty Party & Socials", desc: "Elegant setups, custom decorations, games, and premium catering for social gatherings." },
    { icon: <Trees className="text-gold" size={24} />, title: "Grand Wedding Lawn", desc: "25,000+ sq. ft. manicured garden perfect for royal marriages (2,000 to 2,500 guests capacity)." },
    { icon: <Building2 className="text-gold" size={24} />, title: "Two Banquet Halls", desc: "Featuring two banquet halls, where each hall can accommodate 100 to 150 guests, with premium crystal chandeliers and centralized AC." },
    { icon: <Tv className="text-gold" size={24} />, title: "Premium LED Television", desc: "Interactive smart entertainment with high-definition cable." },
    { icon: <Car className="text-gold" size={24} />, title: "Safe Private Parking", desc: "Spacious within-hotel secure parking monitored 24/7." },
    { icon: <Sparkles className="text-gold" size={24} />, title: "Royal Room Service", desc: "Round-the-clock premium dining, cleaning, and assistance." },
    { icon: <Clock className="text-gold" size={24} />, title: "24/7 Reception Care", desc: "Dedicated fast check-in, temple tour guidance, and transport." },
  ];

  // Why Choose Us Info
  const whyChooseUsData = [
    { icon: <MapPin className="text-saffron shrink-0" size={26} />, title: "Near Ram Mandir", desc: "Just 4 to 5 km from Ram Mandir (8 minutes from Shri Ram Janmabhoomi), easily accessible via Ram Mandir highway." },
    { icon: <Award className="text-saffron shrink-0" size={26} />, title: "Affordable Luxury", desc: "State-of-the-art five-star experience priced thoughtfully for premium travelers." },
    { icon: <ShieldCheck className="text-saffron shrink-0" size={26} />, title: "Safe Private Parking", desc: "Massive secure gated premises for premium cars, buses, and family vehicles." },
    { icon: <Clock className="text-saffron shrink-0" size={26} />, title: "24-Hour Active Service", desc: "No matter your arrival time, our dedicated reception team is always available." },
    { icon: <Users className="text-saffron shrink-0" size={26} />, title: "Highly Family Friendly", desc: "Peaceful, quiet surroundings, custom family suites, and alcohol-free premises." },
    { icon: <Utensils className="text-saffron shrink-0" size={26} />, title: "Pure Veg Fine Dining", desc: "Entirely pure-veg kitchen honoring traditional sacred satvik parameters." },
    { icon: <Building2 className="text-saffron shrink-0" size={26} />, title: "Centralized Banquets", desc: "Grand venues customized beautifully for engagement rings and high-society assemblies." },
    { icon: <Trees className="text-saffron shrink-0" size={26} />, title: "Vast Celestial Lawns", desc: "A dreamy venue decorated with traditional carvings and starry sky stages." },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://www.makemytrip.com/hotels/rbs_hotel_and_lawn-details-ayodhya.html", "_blank", "noopener,noreferrer");
  };

  const handleRoomBookClick = (roomId: string) => {
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

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] lg:h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Removed per user request */}
        <div className="hidden" />

        {/* Solid, Elegant Branding Background matching the website color */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon to-dark-brown z-10" />

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Brand Header & Features */}
          <div className="lg:col-span-7 space-y-6 text-[#FFF8EE] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-wide leading-tight text-cream">
              RBS Hotel and Lawn <br className="hidden lg:inline"/>
              <span className="text-saffron">Royal Hospitality</span> in Ayodhya
            </h1>
            
            <p className="text-lg sm:text-xl font-serif italic text-gold/95 tracking-wide">
              Comfort • Luxury • Spiritual Stay
            </p>

            {/* Split Features List with Custom Check Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 text-left">
              {[
                "Modern Rooms & Spacious Suites",
                "A Gourmet Dining Experience",
                "Affordable Family Room Options",
                "Vast 25,000+ sq. ft. Wedding Lawn",
                "Centralized AC Banquet Hall",
                "24x7 Valet & Gated Safe Parking"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="text-saffron bg-[#FFF8EE]/10 rounded-full p-1 border border-gold/20">
                    <CheckCircle2 size={15} />
                  </span>
                  <span className="font-sans text-cream/90 text-sm sm:text-base">{feat}</span>
                </div>
              ))}
            </div>

            {/* Interactive Badge */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-[#7A2E2E]/40 border border-gold/30 rounded-full px-4 py-1.5 text-xs text-gold font-sans font-semibold tracking-wider">
                <Compass size={14} className="animate-spin-slow" />
                SITUATED IN CLOSE PROXIMITY TO SHRI RAM JANMABHOOMI TEMPLE
              </span>
            </div>
          </div>

          {/* Right Side: Floating Glassmorphic Booking Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto relative">
            <div className="bg-[#FFF8EE] rounded-xl shadow-2xl border-t-4 border-saffron overflow-hidden p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-2 mb-1.5">
                  <Calendar size={18} className="text-saffron" />
                  <h3 className="font-serif font-bold text-xl text-maroon uppercase tracking-wider">Book Online</h3>
                </div>
                <p className="text-xs text-dark-brown/60">Reserve your premium rooms or elegant suites today</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
                {/* Check In Date */}
                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase tracking-wider mb-1.5">Check In Date</label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FFF8EE] border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                  />
                </div>

                {/* Check Out Date */}
                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase tracking-wider mb-1.5">Check Out Date</label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FFF8EE] border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                  />
                </div>

                {/* Grid for Guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-dark-brown uppercase tracking-wider mb-1.5">Adults</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-[#FFF8EE] border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5+ Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-dark-brown uppercase tracking-wider mb-1.5">Children</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-[#FFF8EE] border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                    </select>
                  </div>
                </div>

                {/* Room Preference */}
                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase tracking-wider mb-1.5">Select Sanctuary/Room</label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-[#FFF8EE] border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                  >
                    <option value="deluxe-king">Deluxe King Room</option>
                    <option value="family">Family Room</option>
                    <option value="royal-darbar">Stylish Hall</option>
                    <option value="siddharth-banquet">Banquet Area</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gold-gradient hover:opacity-95 text-cream py-3 rounded font-bold tracking-widest text-xs uppercase shadow-lg border border-gold/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  BOOK NOW
                </button>

                {/* WhatsApp booking option */}
                <a
                  href={`https://wa.me/917570000335?text=Hello!%20I%20am%20interested%20in%20booking%20a%20stay%20at%20RBS%20Hotel%20and%20Lawn.%0A%0AType:%20${encodeURIComponent(ROOMS.find(r => r.id === roomType)?.name || roomType)}%0ACheck-in:%20${checkIn}%0ACheck-out:%20${checkOut}%0AAdults:%20${adults}%0AChildren:%20${children}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded font-bold tracking-widest text-xs uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <MessageCircle size={16} className="stroke-[2.5]" />
                  BOOK ON WHATSAPP
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ROOMS SECTION */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block mb-2">Pristine Sanctuaries</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Our Luxury Rooms & Suites</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3"></div>
            <p className="text-dark-brown/70 text-sm mt-3.5">
              Choose from our meticulously styled accommodations featuring traditional wooden carvings, golden details, and pristine comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gold/15 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Room Image Gallery (Interactive for deluxe king / any with multiple images) */}
                <div className="shrink-0 relative">
                  <RoomImageGallery
                    images={room.images}
                    defaultImage={room.image}
                    roomName={room.name}
                    aspectRatioClassName="h-64"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-gold text-[10px] font-bold px-2 py-1 rounded border border-gold/20 z-10 uppercase tracking-wider">
                    {room.view}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="font-serif font-bold text-xl text-maroon">{room.name}</h3>
                        <div className="flex items-center gap-1 text-gold mt-1">
                          <Star size={13} className="fill-gold" />
                          <span className="text-xs font-semibold text-dark-brown/60">({room.rating})</span>
                        </div>
                      </div>
                      
                      {/* Price tag only for actual accommodation rooms */}
                      {(room.id === "deluxe-king" || room.id === "family") && (
                        <div 
                          className="bg-cream/90 border border-gold/30 px-2.5 py-1 rounded shadow-sm text-right shrink-0"
                          itemScope
                          itemType="https://schema.org/Offer"
                        >
                          <meta itemprop="priceCurrency" content="INR" />
                          <meta itemprop="price" content={room.price.toString()} />
                          <meta itemprop="availability" content="https://schema.org/InStock" />
                          <span className="block text-[8px] text-dark-brown/50 font-bold uppercase tracking-wider">Per Night</span>
                          <span className="block text-base font-serif font-bold text-maroon leading-none mt-0.5">₹{room.price.toLocaleString("en-IN")}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-dark-brown/70 line-clamp-3 leading-relaxed">
                      {room.description}
                    </p>
                    
                    {/* Room Stats */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-sans text-dark-brown/60 bg-cream/50 p-2.5 rounded border border-gold/10">
                      {room.size ? (
                        <>
                          <span>📏 {room.size}</span>
                          <span>👥 {room.occupancy}</span>
                        </>
                      ) : (
                        <span className="col-span-2">👥 {room.occupancy}</span>
                      )}
                      <span className="col-span-2">🛏️ {room.bedType}</span>
                      {room.bathroom && (
                        <span className="col-span-2">🚿 {room.bathroom}</span>
                      )}
                    </div>

                    {/* Amenities Icons Row */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {room.amenities.slice(0, 4).map((am, idx) => (
                        <span key={idx} className="bg-cream-dark/20 text-maroon text-[10px] font-medium px-2 py-0.5 rounded border border-gold/5">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onPageChange("rooms")}
                      className="border border-gold text-maroon hover:bg-gold-gradient hover:text-cream text-xs font-bold tracking-widest py-2.5 rounded transition-all duration-300 text-center cursor-pointer"
                    >
                      VIEW DETAILS
                    </button>
                    {room.id === "royal-darbar" || room.id === "siddharth-banquet" ? (
                      <a
                        href={`https://wa.me/919838430000?text=${encodeURIComponent(`Hello! I am interested in booking the ${room.name} at RBS Hotel and Lawn.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold tracking-widest py-2.5 rounded shadow hover:opacity-95 transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle size={14} className="stroke-[2.5]" />
                        WHATSAPP
                      </a>
                    ) : (
                      <button
                        onClick={() => handleRoomBookClick(room.id)}
                        className="bg-gold-gradient text-cream text-xs font-bold tracking-widest py-2.5 rounded hover:opacity-95 shadow border border-gold/30 transition-all text-center cursor-pointer"
                      >
                        BOOK NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onPageChange("rooms")}
              className="bg-gold-gradient hover:opacity-95 text-cream text-xs font-bold tracking-widest px-8 py-3.5 rounded shadow border border-gold/40 inline-flex items-center gap-2 cursor-pointer"
            >
              VIEW ALL ROOMS & SUITES
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="py-16 bg-cream-dark/15 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Left */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-gold-gradient rounded-lg transform translate-x-2.5 translate-y-2.5 opacity-40 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 -z-1" />
              <div className="overflow-hidden rounded-lg shadow-xl border border-gold/20">
                <img
                  src="https://lh3.googleusercontent.com/d/1Jdzqq9TDZeUCBuOqVJRFE921T6NzFll6"
                  alt="RBS Hotel Entrance & Luxury"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold-gradient border border-gold/30 text-cream px-5 py-4 rounded-md shadow-lg hidden sm:block">
                <span className="block font-serif font-bold text-3xl">100%</span>
                <span className="block text-[10px] font-sans font-semibold uppercase tracking-widest text-gold">Pure Vegetarian</span>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block">Sacred Hospitality</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon leading-tight">
                Embrace the Royal Sanctuary <br />
                Of RBS Hotel and Lawn
              </h2>
              <p className="text-dark-brown/80 text-sm sm:text-base leading-relaxed">
                RBS HOTEL AND LAWN welcomes you to the spiritual capital of Uttar Pradesh. Nestled along the beautiful sacred corridor near the Ram Mandir highway, our premium hotel merges classic elements of traditional sandstone carving with elegant contemporary furnishings and five-star hospitality.
              </p>
              <p className="text-dark-brown/70 text-sm leading-relaxed">
                Whether you are a pilgrim seeking the peaceful darshan of Shri Ram Janmabhoomi, a family looking for pristine accommodation, or wedding hosts planning a lifetime celebration on our grand 25,000 sq. ft. lush garden, we promise unparalleled warmth and meticulous service.
              </p>

              {/* Animated Counters Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gold/20">
                <div>
                  <span className="block font-serif font-bold text-2xl sm:text-3xl text-saffron">
                    {pilgrimsServed.toLocaleString()}+
                  </span>
                  <span className="block text-[10px] font-sans font-semibold uppercase tracking-wider text-dark-brown/60">
                    Guests Served
                  </span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl sm:text-3xl text-saffron">
                    {weddingEvents}+
                  </span>
                  <span className="block text-[10px] font-sans font-semibold uppercase tracking-wider text-dark-brown/60">
                    Grand Weddings
                  </span>
                </div>
                <div>
                  <span className="block font-serif font-bold text-2xl sm:text-3xl text-saffron">
                    {starRating} ★
                  </span>
                  <span className="block text-[10px] font-sans font-semibold uppercase tracking-wider text-dark-brown/60">
                    Google Reviews
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onPageChange("about")}
                  className="bg-gold-gradient hover:opacity-90 text-cream font-bold text-xs uppercase tracking-widest px-6 py-3 rounded shadow border border-gold/40 flex items-center gap-2 transition-all cursor-pointer"
                >
                  READ OUR FULL STORY
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FACILITY CARDS SECTION */}
      <section className="py-16 bg-[#FFF8EE] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold font-sans block mb-2">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Our Awesome Services</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3"></div>
            <p className="text-dark-brown/70 text-sm mt-3.5 leading-relaxed">
              We provide unmatched royal facilities and tailored assistance to make your stay in Lord Rama's historic town truly memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-cream-dark/15 border border-gold/15 rounded-lg p-5 hover:bg-[#FFF8EE] hover:border-saffron hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-maroon/5 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-[#FFF8EE] transition-all duration-300 mb-4">
                  <div className="group-hover:text-cream text-saffron">{fac.icon}</div>
                </div>
                <h3 className="font-serif font-semibold text-lg text-maroon group-hover:text-saffron transition-colors mb-2">
                  {fac.title}
                </h3>
                <p className="text-xs text-dark-brown/70 leading-relaxed leading-normal">
                  {fac.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* KITTY PARTY & BANQUET HALL SECTION */}
      <section className="py-16 bg-[#FFF8EE] border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block mb-2">Festive & Royal Gatherings</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Kitty Party & Majestic Banquet Halls</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3"></div>
            <p className="text-dark-brown/70 text-sm mt-3.5 leading-relaxed">
              Host your dream events with premium hospitality, luxury centralized AC banquets, beautiful setups, and custom-curated pure-vegetarian menus in Ayodhya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: Banquet Hall */}
            <div className="bg-white rounded-xl overflow-hidden border border-gold/15 shadow-md hover:shadow-xl hover:border-saffron transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Ef6-8QWU5Q8pOfqiT3bp2OLzWSxAabDV"
                    alt="Majestic Indoor Banquet Hall"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-maroon text-cream text-[10px] font-bold tracking-widest px-2.5 py-1 rounded shadow">
                    CENTRALIZED AC • 100-150 GUESTS
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-xl text-maroon">The Royal Banquet Halls</h3>
                  <p className="text-xs text-dark-brown/70 leading-relaxed">
                    Featuring two pristine air-conditioned banquet halls, each comfortably hosting up to 150 guests. Adorned with glittering crystal chandeliers, traditional sandstone-inspired motifs, and state-of-the-art audio-visual setups. Perfect for luxury birthday milestones, premium pre-wedding rituals, corporate conferences, and holy meets.
                  </p>
                  <ul className="text-xs text-dark-brown/80 space-y-2 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> Premium Royal Lighting & Chandeliers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> Centralized High-Performance Air Conditioning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> Highly Trained Executive Service Staff
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => window.open(`https://wa.me/919838430000?text=${encodeURIComponent("Hello! I am interested in planning a Banquet Hall event at RBS Hotel and Lawn.")}`, "_blank")}
                  className="w-full bg-gold-gradient text-cream hover:opacity-90 font-bold text-xs uppercase tracking-widest py-3 rounded shadow-md border border-gold/40 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle size={15} className="stroke-[2.5]" />
                  PLAN BANQUET EVENT: +91 9838430000
                </button>
              </div>
            </div>

            {/* Box 2: Kitty Parties & Socials */}
            <div className="bg-white rounded-xl overflow-hidden border border-gold/15 shadow-md hover:shadow-xl hover:border-saffron transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/d/1FAYtcFtGoO37i4hwdVzj7AwGKoGQniwV"
                    alt="Vibrant Kitty Party and Social Setup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-saffron text-cream text-[10px] font-bold tracking-widest px-2.5 py-1 rounded shadow">
                    THEMED DECOR • CUSTOM CATERING
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-xl text-maroon">Vibrant Kitty Parties & Celebrations</h3>
                  <p className="text-xs text-dark-brown/70 leading-relaxed">
                    Make your ladies' kitty parties, group socials, and family get-togethers absolute masterclasses in fun. We offer stunningly customized thematic staging, colorful balloon installations, Instagrammable selfie booths, and beautiful indoor or lush garden seating options backed by rich activities.
                  </p>
                  <ul className="text-xs text-dark-brown/80 space-y-2 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> Custom Theme Stage Decor & Flower Arrangements
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> 100% Pure Veg (Satvik with zero onion/garlic on request)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-saffron">★</span> State-of-the-Art JBL Sound System & Interactive Games
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/917570000335?text=${encodeURIComponent("Hello! I am interested in booking or inquiring about a Kitty Party or Social Event at RBS Hotel and Lawn.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest py-3 rounded shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors text-center"
                >
                  <MessageCircle size={15} className="stroke-[2.5]" />
                  BOOK ON WHATSAPP
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
