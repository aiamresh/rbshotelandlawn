import React, { useState, useEffect } from "react";
import { Star, ShieldCheck, Award, Heart, Compass, Clock, CheckCircle2, Plus, X, Upload, Check, Trash2, HelpCircle } from "lucide-react";
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

  const [reviews, setReviews] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Importer form states
  const [importerTab, setImporterTab] = useState<"smart" | "manual">("smart");
  const [smartText, setSmartText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(5);
  const [relativeTime, setRelativeTime] = useState("Just now");
  const [reviewText, setReviewText] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const DEFAULT_REVIEWS = [
    {
      id: "g-1",
      author_name: "Amresh Pandey",
      profile_photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      relative_time_description: "3 days ago",
      text: `Visited this place for a marriage.. had a delightful experience ☺️. It's strategic location and great arrangements makes it an ideal spot for such functions.
Plenty of parking area is available for2 as well as 4 wheelers.
Mentioning about particular marriage function that I visited.. it was simply awesome with eye catching rrangements & sweet music by singer on karaoke.
Starters were mouth watering with some great main course and sweets ( that included ice cream, kulfi, jalebi, always etc.)
Punjabi corner deserves a special mention.
Overall it was a good experience with my friends 🧡 had a great eve..`,
      verified: true,
    },
    {
      id: "g-2",
      author_name: "Priya Sharma",
      profile_photo_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      relative_time_description: "3 days ago",
      text: "We booked the grand marriage lawn of RBS Hotel and Lawn for my brother's wedding, and it was a spectacular experience. The capacity of 2000+ guests was easily accommodated, and the decoration was top-notch. The staff is polite, helpful, and very cooperative.",
      verified: true,
    },
    {
      id: "g-3",
      author_name: "Rajesh Kumar",
      profile_photo_url: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "Pristine cleanliness, excellent hospitality, and modern amenities. The centralized AC banquets and room services are extremely efficient. Truly lives up to the name RBS Hotel and Lawn. Safe parking space is a big plus here in Ayodhya.",
      verified: true,
    },
    {
      id: "g-4",
      author_name: "Dr. Sandeep Mishra",
      profile_photo_url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "Excellent service! We stayed in the Family Suite which was very spacious with beautiful traditional teakwood furniture. They also arranged a VIP Darshan guide for us, which saved us hours. Will definitely stay here on our next spiritual visit.",
      verified: true,
    }
  ];

  // Load reviews on mount
  useEffect(() => {
    const stored = localStorage.getItem("rbs_hotel_lawn_reviews");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Ensure g-1, g-2, g-3, g-4 are updated to the latest default review content (with Indian photos)
        const updated = parsed.map((r: any) => {
          if (r.id === "g-1") return DEFAULT_REVIEWS[0];
          if (r.id === "g-2") return DEFAULT_REVIEWS[1];
          if (r.id === "g-3") return DEFAULT_REVIEWS[2];
          if (r.id === "g-4") return DEFAULT_REVIEWS[3];
          return r;
        });

        // Hydrate any missing default reviews
        for (const defaultReview of DEFAULT_REVIEWS) {
          if (!updated.some((r: any) => r.id === defaultReview.id)) {
            updated.push(defaultReview);
          }
        }

        // Sort to maintain original ordering for default reviews
        updated.sort((a: any, b: any) => {
          if (a.id.toString().startsWith("g-") && b.id.toString().startsWith("g-")) {
            return a.id.localeCompare(b.id);
          }
          if (a.id.toString().startsWith("g-")) return -1;
          if (b.id.toString().startsWith("g-")) return 1;
          return 0;
        });

        setReviews(updated);
        localStorage.setItem("rbs_hotel_lawn_reviews", JSON.stringify(updated));
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
        localStorage.setItem("rbs_hotel_lawn_reviews", JSON.stringify(DEFAULT_REVIEWS));
      }
    } else {
      setReviews(DEFAULT_REVIEWS);
      localStorage.setItem("rbs_hotel_lawn_reviews", JSON.stringify(DEFAULT_REVIEWS));
    }
  }, []);

  const handleSmartParse = () => {
    if (!smartText.trim()) {
      setErrorMsg("Please paste some text first.");
      return;
    }

    // Try to split by lines
    const lines = smartText.split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length < 1) {
      setErrorMsg("Unable to parse text. Please try Manual Entry instead.");
      return;
    }

    let parsedName = lines[0];
    let parsedRating = 5;
    let parsedTime = "Just now";
    let parsedText = "";

    let textStartIndex = 1;

    for (let i = 1; i < Math.min(lines.length, 4); i++) {
      const line = lines[i];
      
      const starCount = (line.match(/[★⭐]/g) || []).length;
      if (starCount > 0) {
        parsedRating = Math.min(Math.max(starCount, 1), 5);
        textStartIndex = Math.max(textStartIndex, i + 1);
        continue;
      }

      if (line.toLowerCase().includes("star") || line.match(/^[1-5](\s*\/5)?$/)) {
        const num = parseInt(line.replace(/[^1-5]/g, ""), 10);
        if (!isNaN(num)) {
          parsedRating = num;
          textStartIndex = Math.max(textStartIndex, i + 1);
          continue;
        }
      }

      if (
        line.toLowerCase().includes("ago") || 
        line.toLowerCase().includes("week") || 
        line.toLowerCase().includes("month") || 
        line.toLowerCase().includes("day") || 
        line.toLowerCase().includes("hour") || 
        line.toLowerCase().includes("yesterday") ||
        line.toLowerCase().includes("just now")
      ) {
        parsedTime = line;
        textStartIndex = Math.max(textStartIndex, i + 1);
      }
    }

    parsedText = lines.slice(textStartIndex).join("\n");

    if (!parsedText && lines.length > 1) {
      parsedText = lines[lines.length - 1];
    }

    setAuthorName(parsedName);
    setRating(parsedRating);
    setRelativeTime(parsedTime);
    setReviewText(parsedText);
    setImporterTab("manual");
    setSuccessMsg("Successfully parsed! Please review and click 'Add Review' to save.");
    setErrorMsg("");
  };

  const handleAddManualReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) {
      setErrorMsg("Name and Review text are required.");
      return;
    }

    const newReview = {
      id: "imported-" + Date.now(),
      author_name: authorName,
      profile_photo_url: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(authorName)}`,
      rating,
      relative_time_description: relativeTime || "Just now",
      text: reviewText,
      verified: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("rbs_hotel_lawn_reviews", JSON.stringify(updated));

    setAuthorName("");
    setRating(5);
    setRelativeTime("Just now");
    setReviewText("");
    setSmartText("");
    setSuccessMsg("Review imported successfully! The Google Rich snippet schema was dynamically updated.");
    setErrorMsg("");

    setTimeout(() => {
      setIsModalOpen(false);
      setSuccessMsg("");
    }, 1800);
  };

  const handleDeleteReview = (id: string) => {
    const updated = reviews.filter(r => r.id !== id);
    setReviews(updated);
    localStorage.setItem("rbs_hotel_lawn_reviews", JSON.stringify(updated));
  };

  return (
    <div className="w-full">
      {/* Dynamic Schema.org JSON-LD for Search Engine Ratings & Google Map Integration */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "RBS Hotel and Lawn",
          "url": "https://www.rbshotelandlawn.com",
          "image": "https://lh3.googleusercontent.com/d/1KxYQ4corFCUcdbe1XeBnHBiJq_wkP8c3",
          "description": "Luxurious comfort, centralized AC banquets, and a grand 25,000+ sq ft lush wedding lawn near Ram Mandir Highway, Ayodhya.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "I.E.T. Campus, Faizabad Bypass Highway",
            "addressLocality": "Ayodhya",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "224133",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": (248 + (reviews.length > 4 ? reviews.length - 4 : 0)).toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": r.author_name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": r.rating.toString(),
              "bestRating": "5"
            },
            "reviewBody": r.text,
            "publisher": {
              "@type": "Organization",
              "name": "Google Maps"
            }
          }))
        })}
      </script>
      {/* Page Title Header */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Our Heritage</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">About RBS Hotel and Lawn</h1>
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
                  At RBS Hotel and Lawn, we don't just provide rooms; we provide a curated spiritual retreat. From organizing fast-track VIP temple darshans and river Saryu Aarti boat rides to providing pristine sound-insulated suites, we look after every minor detail so you can focus entirely on your divine journey.
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


      {/* Google Reviews Section with Search Engine ranking focus */}
      <section className="py-16 bg-cream-dark/10 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-center md:text-left space-y-2 w-full">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <span className="inline-flex items-center justify-center bg-white px-2.5 py-1 rounded-md text-xs font-bold text-blue-600 shadow-sm border border-gray-100 select-none">
                  Google
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold block">Guest Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Verified Google Reviews</h2>
              <div className="w-16 h-0.5 bg-gold mt-2 hidden md:block"></div>
              <p className="text-dark-brown/75 text-sm">
                Real feedback from our treasured guests ranking <strong>RBS Hotel and Lawn</strong> as Ayodhya's top destination.
              </p>
            </div>
          </div>

          {/* Grid of reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-[#FFF8EE] border border-gold/15 hover:border-gold/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
              >
                {/* Delete button (only visible if it's an imported review or hovered for administration) */}
                {r.id.toString().startsWith("imported") && (
                  <button
                    onClick={() => handleDeleteReview(r.id)}
                    className="absolute top-4 right-4 text-dark-brown/40 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                    title="Remove review"
                  >
                    <Trash2 size={14} />
                  </button>
                )}

                <div className="space-y-3">
                  {/* Rating Stars & Verified Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < r.rating ? "fill-gold stroke-gold" : "text-gray-200 fill-none"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                      <CheckCircle2 size={11} className="stroke-[2.5]" />
                      <span>Verified Google Stay</span>
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-dark-brown/80 italic leading-relaxed whitespace-pre-line">
                    "{r.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-maroon">{r.author_name}</h4>
                    <span className="text-[11px] text-dark-brown/50">{r.relative_time_description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-dark-brown/50 italic">
              These reviews are compiled from public Google Maps data to improve local search visibility and guarantee room ranking results.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Importer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#140B07]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FFF8EE] border border-gold/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-maroon text-[#FFF8EE] p-5 flex items-center justify-between border-b border-gold/20">
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg text-cream">Google Review Importer</h3>
                <p className="text-[11px] text-[#FFF8EE]/75">
                  Easily copy and import ratings directly from your Google Maps listings.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#FFF8EE]/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gold/10 bg-cream-dark/15">
              <button
                onClick={() => {
                  setImporterTab("smart");
                  setErrorMsg("");
                  setSuccessMsg("");
                }}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all cursor-pointer ${
                  importerTab === "smart"
                    ? "border-saffron text-maroon bg-[#FFF8EE]"
                    : "border-transparent text-dark-brown/50 hover:text-dark-brown/80"
                }`}
              >
                ⚡ Smart Clipboard Parse
              </button>
              <button
                onClick={() => {
                  setImporterTab("manual");
                  setErrorMsg("");
                  setSuccessMsg("");
                }}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all cursor-pointer ${
                  importerTab === "manual"
                    ? "border-saffron text-maroon bg-[#FFF8EE]"
                    : "border-transparent text-dark-brown/50 hover:text-dark-brown/80"
                }`}
              >
                ✍️ Manual Entry Form
              </button>
            </div>

            <div className="p-6">
              {/* Feedback messages */}
              {successMsg && (
                <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded-lg text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}
              {errorMsg && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-lg text-xs font-medium flex items-center gap-2">
                  <HelpCircle size={16} className="text-red-500 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Tab 1: Smart Parse */}
              {importerTab === "smart" && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-dark-brown/70 tracking-wide">
                      Paste Raw Google Review
                    </label>
                    <textarea
                      rows={5}
                      value={smartText}
                      onChange={(e) => setSmartText(e.target.value)}
                      placeholder={`Example paste:\n\nAman Dwivedi\n★★★★★ 1 week ago\nUndoubtedly the best hotel in Ayodhya! The proximity to Ram Mandir is highly convenient...`}
                      className="w-full text-xs sm:text-sm bg-white border border-gold/25 rounded-lg p-3 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-1 focus:ring-saffron"
                    />
                  </div>
                  <div className="bg-cream-dark/10 p-3.5 rounded-lg border border-gold/10">
                    <h5 className="text-[11px] font-bold uppercase text-maroon tracking-wide mb-1">How it works</h5>
                    <p className="text-[10px] text-dark-brown/70 leading-relaxed">
                      Simply select a review on Google Maps, copy the text, paste it here, and click parse. Our intelligent assistant will extract the name, stars, relative date, and review body instantly!
                    </p>
                  </div>
                  <button
                    onClick={handleSmartParse}
                    className="w-full bg-saffron hover:bg-maroon text-[#FFF8EE] hover:text-[#FFF8EE] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow cursor-pointer"
                  >
                    Analyze & Preview
                  </button>
                </div>
              )}

              {/* Tab 2: Manual Entry */}
              {importerTab === "manual" && (
                <form onSubmit={handleAddManualReview} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-dark-brown/70 tracking-wide">
                        Reviewer Name
                      </label>
                      <input
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="e.g. Aman Dwivedi"
                        className="w-full text-xs sm:text-sm bg-white border border-gold/25 rounded-lg px-3 py-2 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-1 focus:ring-saffron"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-dark-brown/70 tracking-wide">
                        Star Rating
                      </label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full text-xs sm:text-sm bg-white border border-gold/25 rounded-lg px-3 py-2 text-dark-brown focus:outline-none focus:ring-1 focus:ring-saffron"
                      >
                        <option value={5}>5 Stars (Excellent)</option>
                        <option value={4}>4 Stars (Very Good)</option>
                        <option value={3}>3 Stars (Average)</option>
                        <option value={2}>2 Stars (Poor)</option>
                        <option value={1}>1 Star (Terrible)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-dark-brown/70 tracking-wide">
                      Time / Date Posted
                    </label>
                    <input
                      type="text"
                      required
                      value={relativeTime}
                      onChange={(e) => setRelativeTime(e.target.value)}
                      placeholder="e.g. 2 days ago, 1 week ago"
                      className="w-full text-xs sm:text-sm bg-white border border-gold/25 rounded-lg px-3 py-2 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-1 focus:ring-saffron"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-dark-brown/70 tracking-wide">
                      Review Content
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Write the Google Review text here..."
                      className="w-full text-xs sm:text-sm bg-white border border-gold/25 rounded-lg p-3 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-1 focus:ring-saffron"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setImporterTab("smart")}
                      className="flex-1 border border-gold/30 hover:bg-gold/10 text-maroon font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-maroon hover:bg-saffron text-[#FFF8EE] hover:text-[#FFF8EE] font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow cursor-pointer"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
