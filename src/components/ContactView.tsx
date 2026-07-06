import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Compass, ShieldCheck, Sparkles, CheckCircle2, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { HOTEL_DETAILS } from "../data";

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the distance of RBS Hotel and Lawn from the sacred Ram Janmabhoomi Mandir?",
      a: "RBS Hotel and Lawn is located strategically just 8 to 10 minutes away from the Shri Ram Janmabhoomi Temple. Its location on the Faizabad Bypass Highway makes it highly accessible for pilgrims arriving from Lucknow, Gorakhpur, or Varanasi without getting stuck in city traffic."
    },
    {
      q: "How can I book a room, wedding banquet, or lawn online?",
      a: "You can book easily online by clicking the 'Book Online' button on our header, or by calling our reservations team directly. For grand weddings and bulk bookings, you can submit an inquiry form on this Contact page or reach out via our official WhatsApp desk for custom packages."
    },
    {
      q: "What is the guest capacity of the grand marriage lawn and banquet hall?",
      a: "Our majestic 25,000+ sq. ft. lush green outdoor lawn has a guest capacity of 2,000 to 2,500 people, making it Ayodhya's premier event space. Additionally, our indoor centralized AC Banquet Hall can easily accommodate large gathering celebrations, corporate meets, or social kitty parties."
    },
    {
      q: "Is the dining prepared according to satvik and pure vegetarian standards?",
      a: "Yes, absolutely. RBS Hotel and Lawn strictly operates under clean Satvik guidelines. Our signature multi-cuisine restaurant, Naivedyam, serves 100% pure vegetarian gourmet meals crafted with fresh ingredients under pristine hygiene conditions."
    },
    {
      q: "What are the standard check-in and check-out timings?",
      a: "Our standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in or late check-out requests are subject to availability and can be arranged by notifying our front desk manager in advance."
    },
    {
      q: "Is secure parking space available for cars and buses?",
      a: "Yes, we provide plenty of secure, private on-site parking spaces absolutely free of charge for both two-wheelers and four-wheelers (including heavy pilgrim tour buses) secured by round-the-clock CCTV cameras and security guards."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Contact Banner */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Connect with us</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Contact RBS Hotel and Lawn</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto">
            Reach out to our reservations desk, event planners, or management for inquiries, custom bookings, and local guides.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Info Right */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column - 7 Cols */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-gold/15 p-6 sm:p-10 shadow-lg relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-maroon">Inquiry Submitted Royal Support</h3>
                  <p className="text-sm text-dark-brown/70 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting RBS Hotel and Lawn. Your inquiry has been routed directly to our General Operations Manager. We will reply to your registered details within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gold-gradient text-cream text-xs font-bold tracking-widest px-6 py-2.5 rounded shadow border border-gold/30 cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gold/10 pb-4">
                    <h2 className="font-serif font-bold text-2xl text-maroon">Send Us A Message</h2>
                    <p className="text-xs text-dark-brown/60 mt-1">Fill out the secure form below to initiate communication</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sharma@gmail.com"
                        className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
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
                    {/* Subject */}
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Subject Of Inquiry</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold"
                      >
                        <option value="">-- Choose Category --</option>
                        <option value="room-booking">Room Booking & Suites</option>
                        <option value="wedding-event">Wedding Lawn & Celebration Setup</option>
                        <option value="banquet-hall">Banquet Hall & Corporate Meets</option>
                        <option value="kitty-party">Kitty Party & Social Events</option>
                        <option value="temple-assistance">Temple Darshan Fast-track Guides</option>
                        <option value="other">General Operations / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-1.5">Your Message / Requirements</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify your arrival timings, family size, dietary preferences, or custom event packages..."
                      className="w-full bg-[#FFF8EE]/50 border border-gold/40 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-saffron text-dark-brown font-semibold placeholder:text-dark-brown/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-gradient hover:opacity-95 text-cream py-3.5 rounded font-bold tracking-widest text-xs uppercase shadow-lg border border-gold/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin"></span>
                        <span>TRANSMITTING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>SEND ROYAL MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column - 5 Cols */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Hotel Coordinates / Location Panel */}
              <div className="bg-white border border-gold/15 rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-xl text-maroon border-b border-gold/10 pb-2">Direct Contact</h3>
                
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0 border border-saffron/10">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-maroon">Our Sacred Address</span>
                      <span className="text-dark-brown/70 text-xs block mt-0.5">{HOTEL_DETAILS.address}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0 border border-saffron/10">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-maroon">Speak With Our Front Desk</span>
                      {HOTEL_DETAILS.phoneNumbers.map((num, idx) => (
                        <a
                          key={idx}
                          href={`tel:${num.replace(/\s/g, "")}`}
                          className="text-xs text-saffron hover:underline block mt-0.5"
                        >
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0 border border-saffron/10">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block font-bold text-maroon">Electronic Inquiries</span>
                      <a href="mailto:rbshotelandlawm@gmail.com" className="text-xs text-saffron hover:underline block mt-0.5">{HOTEL_DETAILS.emails[0]}</a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-gold/10 grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${HOTEL_DETAILS.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 rounded text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <MessageSquare size={14} />
                    WHATSAPP
                  </a>
                  <a
                    href={`tel:${HOTEL_DETAILS.phoneNumbers[0].replace(/\s/g, "")}`}
                    className="bg-gold-gradient text-cream py-2.5 rounded text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-opacity hover:opacity-95 shadow border border-gold/30"
                  >
                    <Phone size={14} />
                    CALL FOR ROOMS
                  </a>
                </div>
              </div>

              {/* Google Map Integration and Location Guide */}
              <div className="bg-[#1E120C] text-[#FFF8EE] border border-gold/30 rounded-xl overflow-hidden p-6 shadow-md relative flex flex-col justify-between space-y-4">
                <div className="absolute inset-0 bg-[radial-gradient(#E67E22_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                
                <div className="relative z-10 space-y-3">
                  <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                    <span className="text-xs text-gold font-bold uppercase tracking-widest">Locate RBS Hotel & Lawn</span>
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-saffron animate-ping"></span>
                  </div>
                  
                  {/* Google Map iframe */}
                  <div className="overflow-hidden rounded-lg border border-gold/20 bg-white p-1 shadow-inner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3411470487034!2d82.2014167!3d26.7921966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a095ea22d974b%3A0x24963498d0b5a320!2sRBS%20Hotel%20and%20Lawn!5e0!3m2!1sen!2sin!4v1719790000000!5m2!1sen!2sin"
                      width="100%"
                      height="240"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RBS Hotel and Lawn Google Map"
                      className="w-full rounded"
                    ></iframe>
                  </div>
                </div>

                <div className="relative z-10 pt-1">
                  <a
                    href="https://maps.app.goo.gl/KNLzR1C8Y86VoNVX6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold-gradient text-cream py-3 rounded text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:opacity-95 shadow border border-gold/30 cursor-pointer text-center"
                  >
                    <MapPin size={14} />
                    GET DIRECTIONS ON GOOGLE MAPS
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Structured Google FAQ section designed for ranking */}
      <section className="py-16 bg-[#FFF8EE] border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="flex items-center justify-center gap-2">
              <HelpCircle className="text-saffron shrink-0" size={20} />
              <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">FAQS & Travel Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Frequently Asked Questions</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
            <p className="text-dark-brown/75 text-sm max-w-xl mx-auto leading-relaxed">
              Find instant answers regarding reservations, event capacities, spiritual darshans, and logistics at <strong>RBS Hotel and Lawn, Ayodhya</strong>.
            </p>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gold/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-maroon hover:bg-[#FFF8EE]/30 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-saffron shrink-0">
                      {isOpen ? <ChevronUp size={18} className="stroke-[2.5]" /> : <ChevronDown size={18} className="stroke-[2.5]" />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 border-t border-gold/10" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-xs sm:text-sm text-dark-brown/80 leading-relaxed bg-[#FFF8EE]/10">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 p-5 bg-white border border-gold/10 rounded-xl max-w-2xl mx-auto">
            <p className="text-xs text-dark-brown/60 leading-relaxed">
              Still have a specific query about your upcoming pilgrimage or event booking? Feel free to call us directly or click the WhatsApp action to chat with our general desk manager.
            </p>
          </div>

        </div>
      </section>

      {/* SEO Schema.org FAQPage Structured Data Metadata */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        })}
      </script>
    </div>
  );
}
