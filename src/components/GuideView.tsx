import React, { useState } from "react";
import {
  MapPin,
  Clock,
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Compass,
  ArrowUpRight
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  heroImage: string;
  description: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    highlights?: string[];
  }[];
  quickFacts?: {
    label: string;
    value: string;
  }[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "ram-mandir",
    title: "Shri Ram Janmabhoomi Darshan: Rules, Timings & VIP Guide",
    category: "Temple Guide",
    readTime: "6 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1CBK0sjgONJUmpIzAbXxUchR8fyw9Um-w",
    description: "Everything you need to know about visiting the magnificent Shri Ram Janmabhoomi Temple, including dress codes, aarti timings, and VIP access.",
    intro: "The sacred birthplace of Lord Rama stands as the ultimate spiritual beacon of India. Consecrated on January 22, 2024, the temple is an architectural marvel built in the classical Nagara style without using any steel or iron reinforcements, constructed entirely of premium pink Bansi Paharpur sandstone from Rajasthan. With millions of pilgrims visiting daily, this comprehensive guide guarantees a smooth, serene, and spiritually enriching darshan experience during your stay.",
    sections: [
      {
        heading: "Temple Timings & Aarti Schedule",
        content: "The temple is open every single day, but the crowd density varies significantly. Planning your entry around the divine Aarti schedule will reward you with unforgettable memories. Here is the official daily schedule:",
        highlights: [
          "Shringar Aarti: 6:00 AM (Requires advance booking passes)",
          "General Darshan: 6:30 AM to 9:30 PM (Free entry, queue-based)",
          "Sandhya Aarti: 7:30 PM (Requires advance booking passes)",
          "Shayan Aarti: 9:00 PM (Requires advance booking passes)"
        ]
      },
      {
        heading: "Crucial Security & Dress Code Rules",
        content: "To maintain the sanctity and high security of the temple complex, local authorities enforce strict guidelines at the entry points. Ensure you adhere to these closely to avoid delays:",
        highlights: [
          "Mobiles, smartwatches, calculators, and bluetooth keys are strictly prohibited. Free secure lockers are available, but leaving them at the hotel room is highly recommended.",
          "Leather items such as belts, wallets, and bags are not allowed inside the main temple path.",
          "While there is no strict mandatory color dress code, devotees are highly encouraged to wear traditional, modest Indian attire (sarees or salwar-suits for women, and kurtas or dhotis for men).",
          "Every visitor must pass through multi-tier physical security checks and scanners."
        ]
      },
      {
        heading: "VIP Entry, Aarti Passes & Special Access",
        content: "General entry is absolutely free, but standing in standard queues can take anywhere from 1 to 3 hours during weekends and festivals. To optimize your visit, you can opt for specialized services:",
        highlights: [
          "Free Aarti Passes: Can be booked on the official Shri Ram Janmabhoomi Teerth Kshetra portal up to 15 days in advance using any valid ID card.",
          "Elderly Assistance: Free wheelchairs and clean golf carts are operational from the outer gates for senior citizens and physically challenged pilgrims.",
          "VIP Darshan Guide: Our RBS Hotel concierge desk can recommend trusted government-certified local guides to fast-track your route and explain the historical stone carvings."
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "3.2 km (8 mins drive)" },
      { label: "Best Time to Visit", value: "Saturdays / Tuesdays early morning" },
      { label: "Wheelchair Facility", value: "Available free of charge" }
    ]
  },
  {
    id: "hanuman-garhi",
    title: "Hanuman Garhi Darshan: Legend of the Guardian & VIP Entry",
    category: "Temple Guide",
    readTime: "5 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1RSDDtIoAnEJqmbgT5OZ-QjYb-pqKLDmQ",
    description: "A prestigious 10th-century temple fortress dedicated to Lord Hanuman. Discover the rituals, legends, and steps to reach the guardian of Ayodhya.",
    intro: "Spiritual custom suggests that before paying tribute to Lord Rama at the Ram Janmabhoomi Temple, pilgrims must first visit Hanuman Garhi to seek the permission and blessings of Lord Hanuman. This magnificent 10th-century temple fortress sits proudly atop a hill, overlooking the sacred city, acting as its eternal guardian deity.",
    sections: [
      {
        heading: "The Ancient Legend of the Guard",
        content: "According to ancient Ramayana lore, Lord Hanuman lived in this cave-like fort to guard Lord Rama's palace. The main sanctuary houses a small, gold-decorated deity of Bal Hanuman sitting gracefully on his mother Maa Anjani's lap. The temple radiates an intense, high-energy devotion with uninterrupted chants of the Hanuman Chalisa echoing through the corridors."
      },
      {
        heading: "Climbing the 76 Holy Steps & Monkey Rules",
        content: "To reach the elevated fortress sanctuary, devotees climb 76 majestic wide stone steps. As you climb, you will be accompanied by playful local temple monkeys. Here is how to navigate the climb safely:",
        highlights: [
          "Avoid keeping any prasad boxes, red flowers, or plastic bags visible in your hand, as monkeys are prone to grabbing them.",
          "Keep your sunglasses, spectacles, and mobile phones inside pockets or a shoulder bag.",
          "Do not tease or make direct eye contact with the monkeys; they are generally harmless and accustomed to crowd movements."
        ]
      },
      {
        heading: "Daily Timings & Offerings",
        content: "The temple is highly popular and opens early in the morning. Tuesdays and Saturdays are extremely busy, with long queues stretching down the street.",
        highlights: [
          "Daily Timings: 5:00 AM to 10:00 PM",
          "Special Offering: Red Boondi Laddoos and basil leaves (tulsi) are Lord Hanuman's favorite offerings and can be bought from local vendors along the temple stairs.",
          "Maha Aarti: Performed at 5:00 AM daily with grand brass lamps and beating drums."
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "3.5 km (10 mins drive)" },
      { label: "Steps to Climb", value: "76 Stone Steps" },
      { label: "Special Days", value: "Tuesday & Saturday" },
      { label: "Must-Try Prasad", value: "Pure Desi Ghee Boondi Laddoo" }
    ]
  },
  {
    id: "kanak-bhawan",
    title: "Kanak Bhawan: The Golden Palace of Divine Love & History",
    category: "Heritage Guide",
    readTime: "5 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1Ayu9KmsCxCicK-FfGcJqIts08YmWVlkc",
    description: "The celestial golden palace gifted to Goddess Sita by Queen Kaikeyi. Explore the Bundelkhand architecture and music guides.",
    intro: "Kanak Bhawan, also referred to as the 'Sone-ka-Ghar' (Golden House), is a gorgeous, palace-like temple dedicated to Lord Rama and Goddess Sita. Historical scriptures detail that this golden palace was originally gifted to Goddess Sita by Queen Kaikeyi upon her royal marriage to welcome her to the Ayodhya royal court.",
    sections: [
      {
        heading: "Marvelous Bundelkhand Royal Architecture",
        content: "The structure we admire today was built in 1891 by the royal Queen of Tikamgarh (Madhya Pradesh). The palace features classic Bundelkhand-style courtyards, beautiful arched pathways, symmetric multi-storied balconies, and a central courtyard where soft musical bhajans are played throughout the day."
      },
      {
        heading: "Deities Adorned in Pure Gold",
        content: "The main gold-plated sanctum houses three sets of beautiful, life-sized deities of Lord Rama and Devi Sita. All deities are beautifully dressed in rich silk robes and wear priceless golden crowns (mukuts) studded with precious gemstones, glowing under the warm temple lighting."
      },
      {
        heading: "Important Timings & Visiting Guide",
        content: "Kanak Bhawan is a peaceful sanctuary ideal for quiet reflection and meditation. Plan your visit carefully as the temple closes during the afternoon hours for the deities' rest:",
        highlights: [
          "Morning Hours: 8:00 AM to 11:30 AM",
          "Evening Hours: 4:30 PM to 9:30 PM",
          "Evening Shringar: The sunset lighting combined with traditional oil lamps makes the evening hours (6:30 PM to 8:00 PM) exceptionally beautiful for photography in the courtyard."
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "3.7 km (11 mins drive)" },
      { label: "Key Specialty", value: "Intricate Bundelkhand Palace architecture" },
      { label: "Peace Level", value: "Very high, serene courtyard" },
      { label: "Photography", value: "Allowed in courtyard, prohibited inside sanctum" }
    ]
  },
  {
    id: "guptar-ghat",
    title: "Guptar Ghat: Sacred Mahasamadhi, Scenic Sunrise & Saryu Walks",
    category: "Riverside Guide",
    readTime: "7 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1168GnznO7HEtptRLhWtwuVmnG_4H6VMX",
    description: "Discover the pristine beauty of Guptar Ghat, where Lord Rama took Mahasamadhi. Explore marble temples, modern parks, and serene evening boat rides.",
    intro: "Guptar Ghat is one of Ayodhya's most pristine, historically significant, and peaceful riverside destinations. Located on the banks of the sacred Saryu River, this is the venerable spot where Lord Rama concluded his divine earthly avatar by entering 'Jal Samadhi' (Mahasamadhi). Beautifully restored with marble steps, lush gardens, and scenic walkways, it offers the ultimate spiritual escape.",
    sections: [
      {
        heading: "The Eternal Sanctity of Mahasamadhi",
        content: "Every stone at Guptar Ghat tells the story of Lord Rama's final earthly journey. Pilgrims take a holy dip in the crystal-clear waters here to seek absolute liberation (Moksha). The ghat features several ancient temples built on the high stone embankments, including the popular Ram Janki Mandir, Charan Paduka Temple, and the majestic old Narasingh Temple."
      },
      {
        heading: "Symmetric Stone Steps & Modern Riverfront Parks",
        content: "Unlike other bustling ghats in Ayodhya, Guptar Ghat has been meticulously developed with clean, wide sandstone stairs, decorative cast-iron railings, and beautifully manicured gardens. It is perfect for a calm morning yoga session, meditation under old banyan trees, or a refreshing evening stroll as a cool breeze blows from the river.",
        highlights: [
          "Beautifully lit heritage streetlights and clean sitting benches.",
          "Charming open-air amphitheaters for evening prayers and musical bhajans.",
          "Surrounding forest-like gardens providing shelter to various migratory birds."
        ]
      },
      {
        heading: "Mesmerizing Sunsets & Boat Rides",
        content: "The sunset view from Guptar Ghat is legendary, painting the expansive sky in brilliant hues of crimson and gold. Embarking on a traditional wooden boat ride here is an incredibly soothing experience:",
        highlights: [
          "Cruising Choices: Rent custom hand-rowed wooden boats, shared motorboats, or modern solar-powered cruisers.",
          "Best Boat Ride Timing: 5:15 PM to 6:45 PM for the perfect twilight reflections.",
          "Cleanliness Commitment: Since the ghat maintains top-tier ecological standards, plastic littering and loud music are strictly discouraged."
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "9.5 km (20 mins drive)" },
      { label: "Key Specialty", value: "Lord Rama's Mahasamadhi site & scenic parks" },
      { label: "Peace Level", value: "Exceptionally high & serene" },
      { label: "Boat Ride Cost", value: "Approx. ₹150 - ₹600 for private excursions" }
    ]
  },
  {
    id: "bharatkund",
    title: "Bharat Kund: Legend of Nandigram, Devotion & Sacred Sandals",
    category: "Spiritual Guide",
    readTime: "6 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1J-S1VZlBRyCuWAJJ5KGm-C8PlCHqh-xu",
    description: "Visit Nandigram's historic Bharat Kund, where Bharat ruled Ayodhya with deep humility, keeping Lord Rama's holy wooden sandals on the throne.",
    intro: "Located in the quiet historical village of Nandigram, about 15 kilometers from Ayodhya, Bharat Kund is one of the most spiritually profound reservoirs in the entire region. This is the sacred ground where Lord Rama's younger brother, Bharat, spent 14 years in self-imposed exile and rigorous penance, refusing to enjoy royal pleasures while his brother was in the forest.",
    sections: [
      {
        heading: "The Sacrifice of Bharat & Nandigram Lore",
        content: "When Lord Rama was sent to the forest, a heartbroken Bharat rushed to bring him back. Rama refused to break his father's vow but gave his gold-plated wooden sandals (Charan Paduka) as a symbol of authority. Bharat returned to Nandigram, dug a deep trench to live like a hermit, placed the holy sandals on the royal throne, and ruled the empire as a humble servant."
      },
      {
        heading: "Shri Bharat Milap Temple & Sacred Sites",
        content: "The sanctuary around the Kund is filled with historical monuments and ancient shrines that evoke a deep sense of devotion. Visitors can explore several heritage spots here:",
        highlights: [
          "Bharat Milap Temple: Marking the touching spot where Rama, Lakshmana, and Sita reunited with Bharat and Shatrughna after exile.",
          "Pishach Mochan Kund: A highly sacred pond within the complex where pilgrims perform special ancestral offerings (Pind Daan) during Pitru Paksha.",
          "Bharat Gufa (Cave): The narrow underground cave where Bharat lived, prayed, and slept on a bed of straw."
        ]
      },
      {
        heading: "Pilgrimage Guidelines & Pind Daan Rituals",
        content: "Bharat Kund is extremely peaceful and receives thousands of devotees during special lunar days. Here are some guidelines for visitors to plan a smooth journey:",
        highlights: [
          "Holy Dip & Ancestor Rites: The waters are considered extremely purifying, and it is a preferred site for performing shradh/tarpan rituals.",
          "Visiting Timings: The complex is open from 6:00 AM to 8:30 PM daily. Early morning is the best time for quiet meditation.",
          "Local Transport: Since it is 15 km away, our RBS travel desk can arrange a round-trip AC cab booking with a driver who knows the regional history."
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "16 km (25 mins drive)" },
      { label: "Key Specialty", value: "Nandigram penance site & Lord Rama's Charan Paduka" },
      { label: "Rituals Allowed", value: "Holy bath, ancestral prayers, and cave meditation" },
      { label: "Best Time to Visit", value: "Early mornings or during Pitru Paksha month" }
    ]
  },
  {
    id: "suryakund",
    title: "Suryakund Stepwell: Laser Shows & Ancient Solar Heritage",
    category: "Light Show",
    readTime: "5 min read",
    date: "July 2026",
    author: "RBS Hotel Travel Desk",
    heroImage: "https://lh3.googleusercontent.com/d/1kPPFr4Uv6CfByU1_24xwlOgs_wcivR0k",
    description: "An ancient, deeply revered solar reservoir. Witness the spectacular evening Laser Light & Sound Show about the Ramayana.",
    intro: "Suryakund is a historically significant, symmetric solar stepwell (kund) surrounded by beautifully carved stone arches and pavilions. According to mythology, the Sun God (Surya Dev) descended onto earth to offer prayers at this spot during the divine birth of Lord Rama, making it an essential destination for heritage and photography enthusiasts.",
    sections: [
      {
        heading: "Spectacular Laser Light & Sound Show",
        content: "In the evening, Suryakund transforms into a dynamic digital canvas. A state-of-the-art Laser Light & Sound Show is projected directly over the pristine water pool. The high-contrast lasers combined with dramatic sound effects portray the heroic tales of the Ramayana, leaving children and elders absolutely spellbound."
      },
      {
        heading: "Heritage Restoration & Peaceful Ambience",
        content: "Beautifully restored by the local administration, the stepwell features lush green pathways, clean sitting steps, and classical lighting. Visitors can sit on the steps to enjoy the peaceful cool breeze and watch the reflection of the sunset sky in the historic water."
      },
      {
        heading: "Timings & Ticket Information",
        content: "To catch the laser show, we recommend arriving slightly before sunset. This allows you to explore the local temples surrounding the kund beforehand:",
        highlights: [
          "Suryakund Opening Hours: 8:00 AM to 8:00 PM Daily",
          "Laser Show Timing: 6:30 PM (Duration: 30 minutes, narrated in Hindi/English)"
        ]
      }
    ],
    quickFacts: [
      { label: "Distance from RBS", value: "4.5 km (12 mins drive)" },
      { label: "Photography", value: "Highly suitable for heritage photos" },
      { label: "Suitable For", value: "Families, couples, and children" }
    ]
  }
];

export default function GuideView() {
  const [selectedBlogId, setSelectedBlogId] = useState<string>("ram-mandir");

  const currentBlog = BLOG_POSTS.find((b) => b.id === selectedBlogId) || BLOG_POSTS[0];

  const handleCardClick = (id: string) => {
    setSelectedBlogId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="root" className="w-full bg-[#FFFBF6] min-h-screen pb-16 selection:bg-saffron/20">
      
      {/* Immersive Dark Hero Section representing the Selected Blog */}
      <section className="relative w-full h-[450px] sm:h-[500px] flex items-center justify-center text-center overflow-hidden">
        {/* Large Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentBlog.heroImage}
            alt={currentBlog.title}
            className="w-full h-full object-cover scale-105 animate-[pulse_8s_infinite] transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#FFFBF6] z-10" />
        </div>

        {/* Hero Overlaid Text Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-12">
          
          {/* Saffron Pill Badge */}
          <div className="flex items-center justify-center gap-3">
            <span className="bg-saffron text-cream text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-md">
              {currentBlog.category}
            </span>
            <span className="text-white/80 text-xs flex items-center gap-1 font-mono">
              <Clock size={14} className="text-gold" />
              {currentBlog.readTime}
            </span>
          </div>

          {/* Majestic Serif Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            {currentBlog.title}
          </h1>

          {/* Author, Date & Hotel Desk Brand Sign-off */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-cream/90 font-sans">
            <span className="flex items-center gap-1">
              <User size={14} className="text-gold" />
              {currentBlog.author}
            </span>
            <span className="text-gold/50">•</span>
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-gold" />
              {currentBlog.date}
            </span>
          </div>
        </div>
      </section>

      {/* Styled Breadcrumbs Navigation Segment */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-30">
        <div className="bg-white/90 backdrop-blur-md border border-gold/15 rounded-full px-6 py-3.5 shadow-md flex items-center gap-2 text-xs sm:text-sm text-dark-brown/60">
          <span className="hover:text-saffron transition-colors cursor-pointer font-medium">Home</span>
          <span className="text-gold/40">/</span>
          <span className="hover:text-saffron transition-colors cursor-pointer font-medium">Ayodhya Blog</span>
          <span className="text-gold/40">/</span>
          <span className="text-maroon font-bold font-serif truncate">{currentBlog.title}</span>
        </div>
      </div>

      {/* Detailed Blog Post Reading Layout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white border border-gold/15 rounded-2xl p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Bold Lead Introduction Paragraph */}
          <p className="text-base sm:text-lg text-dark-brown/90 leading-relaxed font-serif italic border-l-4 border-saffron pl-4 sm:pl-6 py-1">
            "{currentBlog.intro}"
          </p>

          {/* Quick Facts Sidebar Grid inside the article */}
          {currentBlog.quickFacts && (
            <div className="bg-[#FFF8EE] border border-gold/20 rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-gold/10 pb-2.5">
                <Compass className="text-saffron shrink-0" size={18} />
                <h4 className="font-serif font-bold text-sm sm:text-base text-maroon uppercase tracking-wide">
                  Quick Travel Facts
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentBlog.quickFacts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-dark-brown/55 font-bold">
                      {fact.label}
                    </span>
                    <span className="text-sm font-sans font-bold text-maroon">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Article Sections Content mapping */}
          <div className="space-y-8 pt-4">
            {currentBlog.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon flex items-center gap-2 border-b border-gold/10 pb-2">
                  <span className="text-saffron font-mono text-lg">0{idx + 1}.</span>
                  {sec.heading}
                </h3>
                <p className="text-sm sm:text-base text-dark-brown/80 leading-relaxed">
                  {sec.content}
                </p>

                {/* Styled Highlight bullets if present in the section */}
                {sec.highlights && (
                  <ul className="grid grid-cols-1 gap-2.5 pt-2 pl-1">
                    {sec.highlights.map((high, hIdx) => (
                      <li
                        key={hIdx}
                        className="bg-[#FFF8EE]/40 border border-gold/10 rounded-lg p-3 flex items-start gap-3 text-xs sm:text-sm text-dark-brown/85 hover:bg-[#FFF8EE]/80 transition-colors"
                      >
                        {sec.heading.includes("Security") || sec.heading.includes("Rules") ? (
                          <AlertTriangle size={16} className="text-saffron shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-relaxed">{high}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Footer Call to Action block for the specific Selected Blog */}
          <div className="mt-12 pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FFF8EE]/50 p-6 rounded-xl border border-gold/10">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif font-bold text-base text-maroon">Visiting {currentBlog.title.split(":")[0]}?</h4>
              <p className="text-xs text-dark-brown/70 max-w-md">
                RBS Hotel and Lawn provides comfortable air-conditioned private cabs, skilled bilingual travel guides, and fast-track VIP darshan advice for all our guests.
              </p>
            </div>
            <a
              href={`https://wa.me/917570000335?text=${encodeURIComponent(`Hello! I'm staying at RBS Hotel and Lawn and would like to arrange travel arrangements/guide for visiting ${currentBlog.title.split(":")[0]}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-saffron hover:bg-maroon text-cream text-xs font-bold tracking-widest px-6 py-3 rounded-lg shadow-md hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>BOOK PRIVATE CAB</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </a>
          </div>

        </div>
      </section>

      {/* Grid of Other Articles & Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 border-t border-gold/15 pt-16">
        
        {/* Grid Title Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2 text-saffron">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.25em]">Explore More Local Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon">Important Places & Speciality of Place Blog</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          <p className="text-sm text-dark-brown/60 max-w-xl mx-auto">
            Select any guide card below to read detailed rules, timings, and insider tips compiled directly by the RBS Hotel Travel desk.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const isCurrent = post.id === selectedBlogId;
            return (
              <div
                key={post.id}
                onClick={() => handleCardClick(post.id)}
                className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group ${
                  isCurrent ? "border-saffron ring-2 ring-saffron/20" : "border-gold/15 hover:border-saffron"
                }`}
              >
                {/* Hero Image */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-saffron text-cream text-[10px] font-bold tracking-widest px-3 py-1.5 rounded shadow">
                    {post.category}
                  </div>
                  {isCurrent && (
                    <div className="absolute inset-0 bg-maroon/40 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="bg-cream/90 text-maroon font-bold text-xs tracking-wider px-4 py-2 rounded-lg shadow border border-gold/20">
                        NOW READING
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-dark-brown/50">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-maroon leading-snug group-hover:text-saffron transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-dark-brown/70 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-bold tracking-wider text-saffron group-hover:text-maroon transition-colors">
                    <span>READ ARTICLE</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
