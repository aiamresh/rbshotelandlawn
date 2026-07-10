import deluxeKingImage from "./assets/images/regenerated_image_1782833901957.jpg";

export interface Room {
  id: string;
  name: string;
  price: number;
  rating: number;
  size?: string;
  occupancy: string;
  bedType: string;
  view: string;
  description: string;
  image: string;
  images?: { url: string; caption: string }[];
  amenities: string[];
  bathroom?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details?: string[];
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  time: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Beverages";
  description: string;
  price: number;
  isSpicy?: boolean;
}

export interface GalleryItem {
  id: string;
  category: "Rooms" | "Restaurant" | "Lawn & Banquet" | "Temple & Heritage";
  title: string;
  image: string;
}

export const HOTEL_DETAILS = {
  name: "RBS HOTEL AND LAWN",
  location: "Ayodhya, Uttar Pradesh",
  address: "I.E.T. Campus, Faizabad, Uttar Pradesh 224133",
  phoneNumbers: ["+91 7570000335", "+91 7267876600", "+91 9838430000"],
  emails: ["rbshotelandlawm@gmail.com", "info@rbshotel.in"],
  whatsapp: "+917570000335",
  mapCoordinates: { lat: 26.7922, lng: 82.2014 },
};

export const SERVICES: Service[] = [
  {
    id: "dining",
    title: "Naivedyam Pure Veg Restaurant",
    description: "Ayodhya's ultimate fine-dining experience serving royal satvik food, traditional North Indian thalis, and continental specialties.",
    iconName: "Utensils",
    details: ["100% Pure Vegetarian Kitchen", "Fresh local organic ingredients", "Special Satvik menu during festivals", "Private dining rooms available"],
  },
  {
    id: "lawn",
    title: "Grand Wedding Lawn & Garden",
    description: "An expansive 25,000+ sq. ft. landscaped lush green lawn with a capacity of 2,000 to 2,500 guests, perfect for hosting royal weddings, receptions, and mega events under the stars.",
    iconName: "Trees",
    details: ["Capacity of 2,000 to 2,500 guests", "Lush premium grass and water features", "Custom golden dome mandap options", "Ample catering preparation zones"],
  },
  {
    id: "banquet",
    title: "Banquet Hall",
    description: "A fully centralized air-conditioned royal indoor hall meticulously designed for engagement ceremonies, corporate meets, and intimate gatherings.",
    iconName: "Building2",
    details: ["State-of-the-art sound & lighting", "Elegant designer crystal chandeliers", "Capacity of up to 400 seated guests", "Stage & green room facilities"],
  },
  {
    id: "parking",
    title: "Secure Private Parking",
    description: "Spacious and fully guarded private parking within hotel premises, complete with 24/7 CCTV surveillance and valet services.",
    iconName: "Car",
    details: ["Secure boundaries", "CCTV monitoring", "Valet parking service", "Driver accommodation available"],
  },
  {
    id: "housekeeping",
    title: "24/7 Housekeeping & Care",
    description: "Impeccable round-the-clock room cleaning, laundry, and butler service to ensure your royal stay remains absolutely pristine.",
    iconName: "Sparkles",
    details: ["Express dry cleaning", "Twice-daily room service option", "Custom linen preferences", "Sanitized and sealed toiletries"],
  },
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    description: "Seamless high-speed enterprise-grade Wi-Fi throughout the hotel rooms, lobby, restaurant, and event lawns.",
    iconName: "Wifi",
    details: ["100+ Mbps reliable bandwidth", "Unlimited device connections", "Secure guest logins", "Full outdoor coverage"],
  },
];

export const ROOMS: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    price: 3499,
    rating: 4.8,
    occupancy: "2 Adults + 1 Child",
    bedType: "King Size Bed",
    view: "Spiritual Courtyard View",
    description: "Our deluxe king room is a sanctuary of comfort. Designed with premium sandstone tones, warm mood lighting, a modern study area, and state-of-the-art amenities to ensure your peaceful Ayodhya pilgrimage is perfectly comfortable.",
    image: deluxeKingImage,
    images: [
      { url: deluxeKingImage, caption: "Luxury King Bed Area" },
      { url: "https://lh3.googleusercontent.com/d/12pim-DL3tW8Si5ozaYLA4xipguep3Mi1", caption: "Modern Pristine Bathroom & Toilet" }
    ],
    amenities: ["Free High-speed Wi-Fi", "43\" Smart LED TV", "Tea/Coffee Maker", "Premium Toiletries", "Electronic Safe", "24/7 Room Service"],
    bathroom: "Private Bathroom with Premium Finishes",
  },
  {
    id: "family",
    name: "Family Room",
    price: 5499,
    rating: 4.9,
    size: "550 sq. ft.",
    occupancy: "4 Adults + 2 Children",
    bedType: "Two Double Beds",
    view: "Lush Lawn & Garden View",
    description: "Offering premium comfort and elegance for the entire family, our Family Room features beautiful seating, rich heritage upholstery, and fine tea/coffee setups. Perfect for families seeking a spacious sanctuary in Ayodhya.",
    image: "https://lh3.googleusercontent.com/d/1zbMUR-M2bhGzoDS-fzyC2uc_4BuCtV2A",
    amenities: ["Free High-speed Wi-Fi", "50\" Smart 4K TV", "Tea/Coffee Maker", "Plush Bathrobes & Slippers", "Mini Bar (Non-Alcoholic)", "Executive Work Desk"],
  },
  {
    id: "royal-darbar",
    name: "Stylish Hall",
    price: 25000,
    rating: 5.0,
    occupancy: "100 to 150 Guests",
    bedType: "Elegant Seating Setup",
    view: "Majestic Heritage View",
    description: "A stunning, centralized air-conditioned royal hall featuring beautiful carved pillars and premium upholstery, perfect for conferences, intimate celebrations, and spiritual gatherings.",
    image: "https://lh3.googleusercontent.com/d/1FAYtcFtGoO37i4hwdVzj7AwGKoGQniwV",
    amenities: ["Centralized AC", "High-End JBL Sound System", "State-of-the-Art Stage", "Valet Parking", "24/7 Power Backup", "Dedicated Decor Team"],
  },
  {
    id: "siddharth-banquet",
    name: "Banquet Area",
    price: 45000,
    rating: 5.0,
    occupancy: "Our impressive banquet hall boast a generous capacity, comfortably accommodating from 2,000 to 2,500 guests, making it the perfect venue for weddings, large conferences, and elegant receptions.",
    bedType: "Premium Banquet Setup",
    view: "Panoramic Lawn View",
    description: "Our signature grand banquet hall designed for high-profile weddings, grand receptions, and majestic events, complete with majestic interiors and crystal chandeliers.",
    image: "https://lh3.googleusercontent.com/d/1Ef6-8QWU5Q8pOfqiT3bp2OLzWSxAabDV",
    amenities: ["Centralized AC", "Premium Crystal Chandeliers", "In-house Catering Support", "Spacious Bridal Suite", "Exclusive Lawn Access", "VIP Guest Lounge"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sid",
    role: "Ram Mandir Pilgrim (Delhi)",
    rating: 5,
    text: "RBS Hotel and Lawn is an absolute gem in Ayodhya! The proximity to the Ram Mandir and the spiritual tranquility here is exceptional. The rooms feel incredibly royal, and their pure veg Naivedyam restaurant served the best satvik meals we ever had. Highly recommend to everyone visiting.",
    avatar: "letter:M",
    date: "June 15, 2026",
  },
  {
    id: "t2",
    name: "Meera & Rajesh Patel",
    role: "Wedding Hosts (Mumbai)",
    rating: 5,
    text: "We hosted our daughter's wedding at the RBS Lawn and the experience was flawless. The lawn is massive, beautifully maintained, and the sandstone backdrop gave a highly authentic temple-heritage vibe. Our guests from abroad were amazed by the high-end hospitality and delicious catering.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    date: "May 28, 2026",
  },
  {
    id: "t3",
    name: "Sarah Jenkins",
    role: "International Traveler (UK)",
    rating: 5,
    text: "An incredibly peaceful oasis in the bustling city of Ayodhya. The interior is stunningly premium, blending traditional motifs with five-star modern amenities. The staff went above and beyond to organize our private temple tour and fast-track guides. Truly outstanding service!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    date: "June 10, 2026",
  },
  {
    id: "t4",
    name: "Anand Verma",
    role: "Corporate Executive (Lucknow)",
    rating: 4.8,
    text: "Excellent place for hosting corporate retreats and family get-togethers. The conference facilities in the banquet hall are top-tier. Parking is extremely safe and spacious, which is a rare luxury in Ayodhya. 24/7 support staff was highly cooperative.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    date: "June 22, 2026",
  },
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    id: "ram-mandir",
    name: "Shri Ram Janmabhoomi Mandir",
    distance: "3.2 km",
    time: "8 mins drive",
    description: "The grand, historic temple of Lord Rama, a masterpiece of modern-traditional stone carving and spiritual energy.",
    image: "https://lh3.googleusercontent.com/d/1CBK0sjgONJUmpIzAbXxUchR8fyw9Um-w",
  },
  {
    id: "hanuman-garhi",
    name: "Hanuman Garhi Temple",
    distance: "3.5 km",
    time: "10 mins drive",
    description: "A prestigious 10th-century temple fort dedicated to Lord Hanuman, situated atop a hill guarding the spiritual city.",
    image: "https://lh3.googleusercontent.com/d/1RSDDtIoAnEJqmbgT5OZ-QjYb-pqKLDmQ",
  },
  {
    id: "kanak-bhawan",
    name: "Kanak Bhawan (Golden House)",
    distance: "3.7 km",
    time: "11 mins drive",
    description: "The palace gifted to Devi Sita. Known for its gorgeous deities adorned in golden ornaments and rich spiritual atmosphere.",
    image: "https://lh3.googleusercontent.com/d/1Ayu9KmsCxCicK-FfGcJqIts08YmWVlkc",
  },
  {
    id: "suryakund",
    name: "Suryakund",
    distance: "4.5 km",
    time: "12 mins drive",
    description: "An ancient, beautifully restored holy reservoir and temple dedicated to the Sun God, renowned for its spectacular evening laser light and sound show portraying the epic Ramayana.",
    image: "https://lh3.googleusercontent.com/d/1kPPFr4Uv6CfByU1_24xwlOgs_wcivR0k",
  },
  {
    id: "guptar-ghat",
    name: "Guptar Ghat",
    distance: "9.5 km",
    time: "20 mins drive",
    description: "The scenic and highly sacred banks of the Saryu River where Lord Rama took his Mahasamadhi, beautifully built with clean stone ghats, ancient temples, and tranquil riverside gardens.",
    image: "https://lh3.googleusercontent.com/d/1168GnznO7HEtptRLhWtwuVmnG_4H6VMX",
  },
  {
    id: "bharat-kund",
    name: "Bharat Kund",
    distance: "15.0 km",
    time: "25 mins drive",
    description: "The sacred pond and temple complex in Nandigram, marking the exact spot where Bharat lived in deep penance and ruled Ayodhya during Lord Rama's 14-year exile.",
    image: "https://lh3.googleusercontent.com/d/1J-S1VZlBRyCuWAJJ5KGm-C8PlCHqh-xu",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Naivedyam Maharaja Special Thali",
    category: "Lunch",
    description: "A royal feast including Saffron Rice, paneer makhani, dal bati churma, authentic seasonal vegetables, organic yogurt, rich butter naan, and hot gulab jamuns.",
    price: 499,
  },
  {
    id: "m2",
    name: "Avadhi Dum Biryani (Veg)",
    category: "Lunch",
    description: "Fragrant long-grain basmati rice layered with garden-fresh root vegetables, saffron infusion, mint, and toasted premium nuts cooked on slow charcoal steam.",
    price: 349,
  },
  {
    id: "m3",
    name: "Shri Ram Bhog Kheer",
    category: "Beverages",
    description: "Slow-reduced organic dairy simmered with premium Kashmiri saffron filaments, green cardamoms, sliced almonds, and thick pistachios.",
    price: 189,
  },
  {
    id: "m4",
    name: "Kasturi Paneer Tikka",
    category: "Dinner",
    description: "Farm-fresh cottage cheese cubes marinated in high-grade hung curd, royal fenugreek leaves, and freshly crushed spices, roasted in clay ovens.",
    price: 329,
    isSpicy: true,
  },
  {
    id: "m5",
    name: "Saryu Saffron Lassi",
    category: "Beverages",
    description: "Chilled thick organic curd churned with authentic sweet honey, pure saffron liquid, and finished with a dense silver leaf (varq).",
    price: 149,
  },
  {
    id: "m6",
    name: "Royal Banarasi Tamatar Chaat",
    category: "Breakfast",
    description: "Ayodhya's favorite rich breakfast preparation made of stewed tomatoes, crushed potatoes, spiced sugar syrup, and roasted cumin toppings.",
    price: 179,
    isSpicy: true,
  },
  {
    id: "m7",
    name: "Amritsari Kulcha with Pindi Chole",
    category: "Breakfast",
    description: "Tandoori layered flour flatbread stuffed with spiced potatoes and cottage cheese, served with dark spicy chickpeas and mint chutney.",
    price: 249,
    isSpicy: true,
  },
  {
    id: "m8",
    name: "Ganga Jamuna Kofta Curry",
    category: "Dinner",
    description: "Delicate dumplings of spinach and cottage cheese served in a rich dual-layered cashew nut and spiced onion gravy.",
    price: 389,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Rooms",
    title: "Premium Suite Elegance & Fine Comfort",
    image: "https://lh3.googleusercontent.com/d/1zbMUR-M2bhGzoDS-fzyC2uc_4BuCtV2A",
  },
  {
    id: "g2",
    category: "Rooms",
    title: "Royal Bed Chamber with Heritage Decor",
    image: "https://lh3.googleusercontent.com/d/18BSbS0gnd9rZ30UZTzdhfB7ss0uevOFV",
  },
  {
    id: "g3",
    category: "Rooms",
    title: "Executive Suite Modern Sandstone Layout",
    image: "https://lh3.googleusercontent.com/d/1K8vKWiF7GUtoczaTTGryVlPSJm6RjeMY",
  },
  {
    id: "g4",
    category: "Rooms",
    title: "Superior Deluxe Ambient Interior",
    image: "https://lh3.googleusercontent.com/d/1svJ9FAGC-2K3vBsagq4tul2bOtOesy15",
  },
  {
    id: "g5",
    category: "Lawn & Banquet",
    title: "Expansive Landscaped Wedding Lawn Garden",
    image: "https://lh3.googleusercontent.com/d/1Ef6-8QWU5Q8pOfqiT3bp2OLzWSxAabDV",
  },
  {
    id: "g6",
    category: "Lawn & Banquet",
    title: "Sandstone Gazebo and Floral Pathway",
    image: "https://lh3.googleusercontent.com/d/1FAYtcFtGoO37i4hwdVzj7AwGKoGQniwV",
  },
  {
    id: "g7",
    category: "Lawn & Banquet",
    title: "Grand Banquet Reception Setup",
    image: "https://lh3.googleusercontent.com/d/1thMgMAJ4aXPE1k24bQYsZZMOpuIdJQk0",
  },
  {
    id: "g12",
    category: "Lawn & Banquet",
    title: "Majestic Stage & Golden Dome Mandap Setup",
    image: "https://lh3.googleusercontent.com/d/1_oSjOImK-mUACw8XY2_Hs5D7Vp3rJ6QN",
  },
  {
    id: "g13",
    category: "Lawn & Banquet",
    title: "Festive Evening Illuminations of the Lawn",
    image: "https://lh3.googleusercontent.com/d/1euab1EK05wfX2lkJHg57nI9JwrqyRXz9",
  },
  {
    id: "g14",
    category: "Temple & Heritage",
    title: "Historic Shri Ram Janmabhoomi Mandir Mandap",
    image: "https://lh3.googleusercontent.com/d/1CBK0sjgONJUmpIzAbXxUchR8fyw9Um-w",
  },
  {
    id: "g15",
    category: "Temple & Heritage",
    title: "Sacred Saryu River Aarti Celebrations",
    image: "https://lh3.googleusercontent.com/d/1PLZzMECMECMtZwxBKSdu2VrqMhPPpaUx",
  },
  {
    id: "g16",
    category: "Temple & Heritage",
    title: "Grand Architecture of Hanuman Garhi Temple",
    image: "https://lh3.googleusercontent.com/d/1RSDDtIoAnEJqmbgT5OZ-QjYb-pqKLDmQ",
  },
  {
    id: "g17",
    category: "Temple & Heritage",
    title: "Spiritual Heritage Gateways of Ayodhya",
    image: "https://lh3.googleusercontent.com/d/1168GnznO7HEtptRLhWtwuVmnG_4H6VMX",
  },
  {
    id: "g18",
    category: "Temple & Heritage",
    title: "The Royal Sandstone Shikhara Design",
    image: "https://lh3.googleusercontent.com/d/1J-S1VZlBRyCuWAJJ5KGm-C8PlCHqh-xu",
  },
];
