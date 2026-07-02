import React from "react";
import { Star, ShieldCheck, Award, Heart, Compass, Clock, CheckCircle2 } from "lucide-react";
import { HOTEL_DETAILS } from "../data";

export default function AboutView() {
  const values = [
    {
      icon: <Compass className="text-saffron" size={24} />,
      title: "Spiritual Integrity",
      desc: "Honoring the sacred vibrations of Ayodhya. We strictly maintain a 100% alcohol-free, smoke-free, and pure vegetarian ecosystem.",
    },
    {
      icon: <Heart className="text-saffron" size={24} />,
      title: "Atithi Devo Bhava",
      desc: "Translating to 'The Guest is God'. We treat every visitor—from humble pilgrims to global dignitaries—with absolute reverence.",
    },
    {
      icon: <Award className="text-saffron" size={24} />,
      title: "Aesthetic Grandeur",
      desc: "Incorporating traditional Avadhi stone patterns, heavy woods, and warm temple lighting to create a ₹5 crore luxury haven.",
    },
    {
      icon: <ShieldCheck className="text-saffron" size={24} />,
      title: "Modern Sanctuary",
      desc: "Providing five-star conveniences, high-speed fiber internet, multi-zone air conditioning, and top-tier security for premium peace of mind.",
    },
  ];

  const management = [
    {
      name: "Mr. Rajendra Bahadur Singh (RBS)",
      role: "Founder & Chairman",
      desc: "A visionary entrepreneur dedicated to elevating hospitality in Ayodhya. Built RBS Hotel and Lawn as a signature contribution to the sacred city's cultural boom.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Mrs. Savitri Singh",
      role: "Managing Director",
      desc: "Ensures the hospitality standards and traditional values of 'Atithi Devo Bhava' are meticulously woven into every guest interaction.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Mr. Amit Pratap Singh",
      role: "General Manager of Operations",
      desc: "Brings over 15 years of premium hospitality management. Directly oversees the grand wedding lawn events, guest relations, and culinary hygiene.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Title Header */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Our Heritage</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">About RBS Hotel & Lawn</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto">
            Discover how we blend royal hospitality with spiritual tranquility to craft Ayodhya's finest lodging experience.
          </p>
        </div>
      </section>

      {/* Hotel Story Section */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Images Collage */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gold-gradient rounded-lg opacity-30 blur-sm" />
                <div className="relative overflow-hidden rounded-lg shadow-xl border border-gold/20 h-80">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Ef6-8QWU5Q8pOfqiT3bp2OLzWSxAabDV"
                    alt="RBS Luxury interior suite"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-gold/15 h-40 shadow">
                  <img
                    src="https://lh3.googleusercontent.com/d/1zbMUR-M2bhGzoDS-fzyC2uc_4BuCtV2A"
                    alt="Naivedyam Pure Veg dining thali"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-gold/15 h-40 shadow">
                  <img
                    src="https://lh3.googleusercontent.com/d/18BSbS0gnd9rZ30UZTzdhfB7ss0uevOFV"
                    alt="Wedding decorations garden"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Hotel Story Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block">Since Inception</span>
              <h2 className="text-3xl font-serif font-bold text-maroon">Our Sacred Journey & Inspiration</h2>
              <div className="w-12 h-0.5 bg-gold"></div>
              
              <div className="space-y-4 text-dark-brown/85 text-sm sm:text-base leading-relaxed">
                <p>
                  The inspiration behind <strong>RBS Hotel and Lawn</strong> stems directly from the timeless spiritual heritage of Ayodhya—the land of righteousness and Lord Rama. As millions of travelers from around the globe converge on this ancient town, our mission was to create a sanctuary that matches the grandeur of Ayodhya's renaissance while honoring its serene roots.
                </p>
                <p>
                  Constructed with beautiful sandstone finishes, heavy warm teakwood, and shimmering gold accents, the hotel operates under a strict code of clean satvik standards. Our grand 25,000+ square foot wedding lawn with a capacity of 2,000 to 2,500 guests and the premium <strong>Banquet Hall</strong> represent Ayodhya's finest event complexes.
                </p>
                <p>
                  At RBS, we don't just provide rooms; we provide a curated spiritual retreat. From organizing fast-track VIP temple darshans and river Saryu Aarti boat rides to providing pristine sound-insulated suites, we look after every minor detail so you can focus entirely on your divine journey.
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-4 border-t border-gold/15">
                {[
                  "Located directly along the Ram Mandir Highway",
                  "8 Minutes Drive to Shri Ram Janmabhoomi",
                  "100% Pure Vegetarian & Alcohol-Free",
                  "25,000+ Sq. Ft. Event Lawn (2,000-2,500 Capacity)",
                  "Dedicated Temple Tour Assistance Desk",
                  "Spacious Secure Gated Valet Parking"
                ].map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-saffron shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-dark-brown/90">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-cream-dark/15 border-y border-gold/15 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Mission */}
            <div className="bg-[#FFF8EE] border border-gold/15 p-8 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mx-auto text-saffron">
                <Compass size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-maroon">Our Mission</h3>
              <p className="text-sm text-dark-brown/70 leading-relaxed max-w-md mx-auto">
                To serve pilgrims and global travelers with immaculate hospitality rooted in the spiritual tradition of "Atithi Devo Bhava". We strive to provide a clean, secure, and luxurious environment that enhances the sacred experience of visiting Ayodhya.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-[#FFF8EE] border border-gold/15 p-8 rounded-xl shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mx-auto text-saffron">
                <Heart size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl text-maroon">Our Vision</h3>
              <p className="text-sm text-dark-brown/70 leading-relaxed max-w-md mx-auto">
                To be recognized globally as the absolute benchmark of luxury spiritual lodging and traditional vegetarian fine-dining in Uttar Pradesh. We aim to preserve local artistic motifs while integrating modern five-star infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block mb-2">Our Pillars</span>
            <h2 className="text-3xl font-serif font-bold text-maroon">Our Guiding Values</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-cream-dark/10 border border-gold/15 p-6 rounded-lg text-center space-y-3.5 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mx-auto text-saffron">
                  {v.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-maroon">{v.title}</h3>
                <p className="text-xs text-dark-brown/75 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Column Section */}
      <section className="py-16 bg-cream-dark/15 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold block mb-2">The Leadership</span>
            <h2 className="text-3xl font-serif font-bold text-maroon">Our Management Team</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3"></div>
            <p className="text-dark-brown/70 text-sm mt-3.5">
              Meet the passionate guardians of RBS Hotel and Lawn, dedicated to making your visit flawlessly satisfying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#FFF8EE] rounded-xl overflow-hidden border border-gold/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full text-center p-6"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gold mx-auto mb-4 shrink-0 shadow-inner">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 flex-grow">
                  <h3 className="font-serif font-bold text-lg text-maroon">{m.name}</h3>
                  <span className="text-xs text-saffron font-bold uppercase tracking-wider block">{m.role}</span>
                  <p className="text-xs text-dark-brown/70 leading-relaxed pt-3">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
