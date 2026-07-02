import React, { useState, useEffect } from "react";
import { ROOMS, HOTEL_DETAILS } from "../data";
import { Calendar, Users, Sparkles, CheckCircle2, Phone, ShieldCheck, Mail, FileText, Printer, ArrowLeft } from "lucide-react";

interface BookOnlineViewProps {
  initialBookingState?: any;
  onPageChange: (page: string) => void;
}

export default function BookOnlineView({ initialBookingState, onPageChange }: BookOnlineViewProps) {
  // Input fields state
  const [roomType, setRoomType] = useState("deluxe-king");
  const [checkIn, setCheckIn] = useState("2026-06-30");
  const [checkOut, setCheckOut] = useState("2026-07-01");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  
  // Guest fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [fastTrackDarshan, setFastTrackDarshan] = useState(false);
  const [airportPickup, setAirportPickup] = useState(false);

  // Flow State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResponse, setBookingResponse] = useState<any | null>(null);

  // Initialize form with home page parameters if passed
  useEffect(() => {
    if (initialBookingState) {
      if (initialBookingState.roomType) setRoomType(initialBookingState.roomType);
      if (initialBookingState.checkIn) setCheckIn(initialBookingState.checkIn);
      if (initialBookingState.checkOut) setCheckOut(initialBookingState.checkOut);
      if (initialBookingState.adults) setAdults(initialBookingState.adults);
      if (initialBookingState.children) setChildren(initialBookingState.children);
    }
  }, [initialBookingState]);

  // Find selected room data
  const selectedRoom = ROOMS.find((r) => r.id === roomType) || ROOMS[1];

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return days > 0 ? days : 1;
  };

  const nights = calculateNights();

  // Price calculation
  const roomCost = selectedRoom.price * nights;
  const serviceCharge = (fastTrackDarshan ? 1500 : 0) + (airportPickup ? 2000 : 0);
  const subtotal = roomCost + serviceCharge;
  const tax = Math.round(subtotal * 0.18); // 18% GST for luxury hotels
  const totalAmount = subtotal + tax;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury booking reservation
    setTimeout(() => {
      const confirmationCode = "RBS-" + Math.floor(100000 + Math.random() * 900000);
      setBookingResponse({
        code: confirmationCode,
        guestName: name,
        guestPhone: phone,
        guestEmail: email,
        roomName: selectedRoom.name,
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        totalAmount,
        fastTrackDarshan,
        airportPickup,
        specialRequest,
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Page Title */}
      <section className="relative py-16 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Direct Booking Portal</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Reserve Your Holy Stay</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto">
            Book directly below for exclusive internet rates, complimentary fast Wi-Fi, and personalized welcoming privileges.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <section className="py-12 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {bookingResponse ? (
            /* Booking Confirmation / Invoice Screen */
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border border-gold/25 p-6 sm:p-10 text-left space-y-8">
              
              {/* Header Success Greeting */}
              <div className="text-center space-y-3 pb-6 border-b border-gold/20">
                <div className="w-16 h-16 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} className="stroke-[2.5]" />
                </div>
                <h2 className="font-serif font-bold text-3xl text-maroon">Reservation Confirmed!</h2>
                <p className="text-xs text-dark-brown/60">
                  A verification receipt and guide brochure has been routed to <strong className="text-dark-brown">{bookingResponse.guestEmail}</strong>.
                </p>
                <div className="inline-block bg-[#FFF8EE] border border-gold/30 px-5 py-2 rounded font-mono text-saffron font-bold text-lg tracking-wider">
                  BOOKING CODE: {bookingResponse.code}
                </div>
              </div>

              {/* Invoice Table Segment */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-maroon border-b border-gold/10 pb-2">Invoice Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Primary Guest</span>
                    <span className="font-semibold text-dark-brown">{bookingResponse.guestName}</span>
                  </div>
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Contact Details</span>
                    <span className="font-semibold text-dark-brown">{bookingResponse.guestPhone}</span>
                  </div>
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Room Sanctuary Choice</span>
                    <span className="font-semibold text-dark-brown">{bookingResponse.roomName}</span>
                  </div>
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Sanctuary Dates</span>
                    <span className="font-semibold text-dark-brown">
                      {bookingResponse.checkIn} to {bookingResponse.checkOut} ({bookingResponse.nights} night{bookingResponse.nights > 1 ? "s" : ""})
                    </span>
                  </div>
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Guests Checked</span>
                    <span className="font-semibold text-dark-brown">
                      {bookingResponse.adults} Adults, {bookingResponse.children} Children
                    </span>
                  </div>
                  <div>
                    <span className="text-dark-brown/40 uppercase text-[10px] font-bold block">Special Additions</span>
                    <span className="font-semibold text-dark-brown">
                      {bookingResponse.fastTrackDarshan ? "✓ Fast-track VIP Darshan " : ""}
                      {bookingResponse.airportPickup ? "✓ Airport Pickup " : ""}
                      {!bookingResponse.fastTrackDarshan && !bookingResponse.airportPickup ? "None" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-[#FFF8EE] p-5 rounded-lg border border-gold/20 space-y-3">
                <h4 className="font-serif font-bold text-maroon text-sm uppercase tracking-wider">Charges breakdown</h4>
                <div className="text-xs sm:text-sm space-y-2 text-dark-brown/85 font-sans">
                  <div className="flex justify-between">
                    <span>Rooms Cost ({bookingResponse.nights} nights)</span>
                    <span className="font-semibold">₹{(selectedRoom.price * bookingResponse.nights).toLocaleString()}</span>
                  </div>
                  {bookingResponse.fastTrackDarshan && (
                    <div className="flex justify-between">
                      <span>Fast-track Darshan Guide Setup</span>
                      <span className="font-semibold">₹1,500</span>
                    </div>
                  )}
                  {bookingResponse.airportPickup && (
                    <div className="flex justify-between">
                      <span>Airport / Station Pickup Service</span>
                      <span className="font-semibold">₹2,000</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-gold/10">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{(subtotal).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18% Luxury Tax)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-maroon pt-3 border-t border-gold/20">
                    <span>Grand Total Paid At Hotel</span>
                    <span className="text-saffron">₹{bookingResponse.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Actions and PDF simulation */}
              <div className="pt-6 flex flex-wrap gap-4 justify-between items-center border-t border-gold/20">
                <button
                  onClick={() => onPageChange("home")}
                  className="text-xs font-bold text-maroon hover:text-saffron flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  RETURN TO HOME
                </button>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => window.print()}
                    className="border border-gold text-maroon hover:bg-gold-gradient hover:text-cream text-xs font-bold tracking-widest px-5 py-2.5 rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer size={14} />
                    PRINT RECEIPT
                  </button>
                  <button
                    onClick={() => {
                      alert("Our operations team will contact you on WhatsApp to share local maps.");
                    }}
                    className="bg-gold-gradient text-cream text-xs font-bold tracking-widest px-5 py-2.5 rounded shadow border border-gold/30 cursor-pointer"
                  >
                    CONNECT ON WHATSAPP
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* The Booking Form */
            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Form Input fields Left - 7 Cols */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-gold/15 p-6 sm:p-10 shadow-lg space-y-6">
                
                <div className="border-b border-gold/10 pb-4">
                  <h2 className="font-serif font-bold text-2xl text-maroon">Guest & Stay Information</h2>
                  <p className="text-xs text-dark-brown/60 mt-1">Provide your details to initiate a direct booking</p>
                </div>

                {/* Dates Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Check In Date</label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Check Out Date</label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    />
                  </div>
                </div>

                {/* Sanctuary Select */}
                <div>
                  <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Room Sanctuary Choice</label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                  >
                    <option value="deluxe-king">Deluxe King Room</option>
                    <option value="family">Family Room</option>
                    <option value="royal-darbar">Stylish Hall</option>
                    <option value="siddharth-banquet">Banquet Area</option>
                  </select>
                </div>

                {/* Guests Select */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Adults</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5+ Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Children</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                    </select>
                  </div>
                </div>

                {/* Contact Segment */}
                <div className="border-t border-gold/15 pt-5 space-y-4">
                  <h3 className="font-serif font-bold text-lg text-maroon">Guest Personal Particulars</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rajendra Pratap"
                        className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. pratap@gmail.com"
                        className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                    />
                  </div>
                </div>

                {/* Premium Addons */}
                <div className="border-t border-gold/15 pt-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-maroon">Tailored Spiritual Services</h3>
                  <div className="space-y-3 text-sm text-dark-brown/80">
                    <label className="flex items-start gap-3 p-3 bg-cream/30 border border-gold/10 rounded cursor-pointer hover:bg-cream/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={fastTrackDarshan}
                        onChange={(e) => setFastTrackDarshan(e.target.checked)}
                        className="mt-1 accent-saffron"
                      />
                      <div>
                        <span className="block font-bold text-maroon">VIP Fast-track Temple Darshan Setup (+₹1,500)</span>
                        <span className="text-xs text-dark-brown/60">Includes an expert resident scholar guide to bypass long queues at Ram Janmabhoomi & Hanuman Garhi.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-3 bg-cream/30 border border-gold/10 rounded cursor-pointer hover:bg-cream/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={airportPickup}
                        onChange={(e) => setAirportPickup(e.target.checked)}
                        className="mt-1 accent-saffron"
                      />
                      <div>
                        <span className="block font-bold text-maroon">Ayodhya Airport / Station Luxury pickup (+₹2,000)</span>
                        <span className="text-xs text-dark-brown/60">An exclusive luxury sedan with local refreshments sent to receive your family safely on arrival.</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Special Requests (Optional)</label>
                  <textarea
                    rows={3}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Satvik meals without onion & garlic, early check-in, sangeet wedding lawn setups, floral arrangements..."
                    className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                  />
                </div>

              </div>

              {/* Price Breakdown Summary Sidebar Right - 5 Cols */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Selected Room Preview Card */}
                <div className="bg-white border border-gold/15 rounded-xl overflow-hidden shadow-md">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Price badge removed per user request */}
                  </div>
                  <div className="p-5 text-left space-y-2">
                    <span className="text-saffron text-[10px] font-sans font-bold uppercase tracking-widest">{selectedRoom.view}</span>
                    <h3 className="font-serif font-bold text-xl text-maroon">{selectedRoom.name}</h3>
                    <p className="text-xs text-dark-brown/70 leading-relaxed">{selectedRoom.description}</p>
                    <div className="pt-3 border-t border-gold/10 grid grid-cols-2 gap-2 text-[10px] text-dark-brown/60 uppercase font-bold tracking-wider">
                      <span>📏 {selectedRoom.size}</span>
                      <span>👥 {selectedRoom.occupancy}</span>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Card */}
                <div className="bg-[#1E120C] text-[#FFF8EE] border border-gold/30 rounded-xl p-6 shadow-lg text-left space-y-4">
                  <div className="border-b border-gold/20 pb-2 flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-gold">Booking Summary</h3>
                    <Sparkles size={16} className="text-gold animate-pulse" />
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#FFF8EE]/85">
                    <div className="flex justify-between">
                      <span>Room Choice</span>
                      <span className="font-semibold text-gold">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nights Calculated</span>
                      <span className="font-semibold text-gold">{nights} night{nights > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms Cost Subtotal</span>
                      <span className="font-semibold text-gold">₹{roomCost.toLocaleString()}</span>
                    </div>
                    {fastTrackDarshan && (
                      <div className="flex justify-between">
                        <span>VIP Fast-track Darshan</span>
                        <span className="font-semibold text-gold">+₹1,500</span>
                      </div>
                    )}
                    {airportPickup && (
                      <div className="flex justify-between">
                        <span>Airport Pickup</span>
                        <span className="font-semibold text-gold">+₹2,000</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-2 border-t border-gold/20 text-xs">
                      <span>Total Before Tax</span>
                      <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>GST (18% Luxury Tax)</span>
                      <span className="font-semibold">₹{tax.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-base font-bold text-cream border-t-2 border-dashed border-gold/30 pt-3 mt-1">
                      <span>Grand Total Amount</span>
                      <span className="text-saffron font-serif font-bold text-lg sm:text-xl">
                        ₹{totalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Submit checkout */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-gradient text-cream py-3.5 rounded font-bold tracking-widest text-xs uppercase shadow-xl border border-gold/40 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin"></span>
                        <span>RESERVING ROOMS...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={14} />
                        <span>CONFIRM ROYAL SANCTUARY</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-[10px] text-center text-[#FFF8EE]/50 flex justify-center items-center gap-1.5">
                    <ShieldCheck size={12} className="text-gold" />
                    <span>No advance payments needed. Settle bill on check-out.</span>
                  </div>
                </div>

              </div>

            </form>
          )}

        </div>
      </section>
    </div>
  );
}
