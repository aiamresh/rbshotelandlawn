import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Scale,
  FileText,
  XCircle,
  Info,
  Calendar,
  CreditCard,
  UserCheck,
  Clock,
  Ban,
  Shield,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUp,
  Menu,
  ChevronRight,
  AlertTriangle,
  FileSpreadsheet,
  Utensils,
  Sparkles,
  Award,
  ChevronDown,
  HelpCircle,
  ParkingCircle,
  Wifi
} from "lucide-react";
import { HOTEL_DETAILS } from "../data";

type TabType = "terms" | "cancellation" | "general";

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function PoliciesView() {
  const [activeTab, setActiveTab] = useState<TabType>("terms");
  const [showMobileToC, setShowMobileToC] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detect active section on scroll
      const scrollPosition = window.scrollY + 200;
      const currentTabSections = activeTab === "terms" ? termsSections : cancellationSections;
      
      for (const sec of currentTabSections) {
        const el = sectionRefs.current[sec.id];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = el.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
      setActiveSection(id);
      setShowMobileToC(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // 1. TERMS & CONDITIONS SECTIONS
  const termsSections: PolicySection[] = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <Scale className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          By accessing, browsing, or booking a stay at <strong>RBS Hotel & Lawn</strong> (either via our official website, authorized travel portals, or in person), you explicitly acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions. If you do not agree to these terms, please refrain from making bookings or using our facilities. These terms constitute a legally binding agreement between you (the guest) and the management of RBS Hotel & Lawn, registered in Ayodhya, Uttar Pradesh, India.
        </p>
      )
    },
    {
      id: "booking",
      title: "2. Booking & Reservation Policy",
      icon: <Calendar className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            Reservations are confirmed only upon receipt of the specified advance payment or authorized corporate guarantee.
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li>Standard individual room reservations require a minimum of 50% advance payment during regular seasons, and 100% advance payment during peak spiritual festivals and auspicious holidays.</li>
            <li>RBS Hotel & Lawn reserves the right to release un-guaranteed rooms if the required advance payment is not cleared within 24 hours of initiating the booking hold.</li>
            <li>All booking confirmations sent via email or SMS are conditional upon verification of credit card details or bank transaction clearances.</li>
          </ul>
        </div>
      )
    },
    {
      id: "checkin-checkout",
      title: "3. Check-In, Check-Out & Timings",
      icon: <Clock className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-4 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            To maintain our luxury cleanliness and sanitization standards, we adhere strictly to the following schedule:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/65 p-4 rounded-xl border border-gold/15 shadow-sm">
              <span className="block text-xs font-bold text-gold uppercase tracking-widest mb-1">Standard Check-In</span>
              <span className="text-xl font-serif font-extrabold text-maroon">12:00 PM</span>
              <span className="block text-xs text-dark-brown/60 mt-1">Early arrival request is subject to room availability and additional hourly rates.</span>
            </div>
            <div className="bg-white/65 p-4 rounded-xl border border-gold/15 shadow-sm">
              <span className="block text-xs font-bold text-gold uppercase tracking-widest mb-1">Standard Check-Out</span>
              <span className="text-xl font-serif font-extrabold text-maroon">11:00 AM</span>
              <span className="block text-xs text-dark-brown/60 mt-1">Late check-outs are monitored and may incur half-day or full-day charges.</span>
            </div>
          </div>
          <p className="text-xs text-dark-brown/70 italic bg-[#FFF8EE] p-3 rounded-lg border-l-2 border-saffron">
            * Note: For smooth operations during peak pilgrimage dates (e.g., Ram Navami, Deepotsav, Kartik Poornima), check-in and check-out queues may experience brief delays. We appreciate your patience as we ensure every suite is fully sanitized for your arrival.
          </p>
        </div>
      )
    },
    {
      id: "early-late",
      title: "4. Early Check-In & Late Check-Out",
      icon: <Clock className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            We endeavor to accommodate early check-ins and late check-outs, but they cannot be guaranteed in advance:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li><strong>Check-in before 6:00 AM:</strong> Attracts 100% of the previous night's room charge.</li>
            <li><strong>Check-in between 6:00 AM and 10:00 AM:</strong> Subject to 50% of the room tariff, strictly depending on real-time availability.</li>
            <li><strong>Check-out between 12:00 PM and 6:00 PM:</strong> Half-day room tariff is applicable.</li>
            <li><strong>Check-out after 6:00 PM:</strong> Standard full-night room tariff is applicable.</li>
          </ul>
        </div>
      )
    },
    {
      id: "id-requirement",
      title: "5. Valid Government ID Requirement",
      icon: <UserCheck className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            According to the mandates of the local administration of Ayodhya, Uttar Pradesh, and the Government of India, <strong>every individual guest</strong> must produce a valid physical government-issued photo identification proof at the time of check-in:
          </p>
          <div className="p-4 bg-red-50/50 rounded-xl border border-red-200/40 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="block font-bold text-red-800 text-sm">Mandatory Verification Rules</span>
              <p className="text-xs text-red-700/90 mt-1">
                Acceptable documents include: **Aadhaar Card, Passport, Voter ID Card, or Driving License**. 
                Please note that **PAN Cards are NOT accepted** as valid proof of address. Foreign nationals must submit a valid Passport and physical Indian Visa or e-Visa document, and complete Form C upon arrival. Failure to submit documents will result in immediate booking rejection without refund.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guest-responsibilities",
      title: "6. Guest Conduct & Responsibilities",
      icon: <Shield className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Ayodhya is a holy pilgrim city of global significance. Guests are expected to maintain respectable standards of public decorum, dress appropriately in shared areas, and refrain from any behavior that may cause offense to local customs, temple guidelines, or fellow hotel residents. Loud music, unruly conduct, or unauthorized assembly in guest corridors is strictly prohibited. Management reserves the absolute right to terminate the stay of any guest whose behavior is deemed disruptive, offensive, or hazardous, without liability for refund.
        </p>
      )
    },
    {
      id: "payment-terms",
      title: "7. Payment Terms & Currencies",
      icon: <CreditCard className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            All financial transactions are calculated and billed in Indian Rupees (INR).
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li>We accept all major credit cards, debit cards, UPI payments, net banking, and verified corporate wire transfers.</li>
            <li>For incidentals, extra bed charges, and in-room Naivedyam dining, we request clearance of bills either daily or upon check-out.</li>
            <li>Credit facilities are extended only to pre-registered corporate partners with active billing agreements.</li>
          </ul>
        </div>
      )
    },
    {
      id: "taxes-gst",
      title: "8. Taxes & GST Guidelines",
      icon: <CreditCard className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          All room tariffs, banquet bookings, and restaurant bills are subject to Goods and Services Tax (GST) as mandated by the Government of India. As of current tax laws, room rates below ₹7,500 per night attract 12% GST, while rates above ₹7,500 attract 18% GST. Restaurant meals attract 5% GST. Taxes are calculated dynamically and will be shown separately on the final tax invoice. Any changes in tax rates by the government will be applied to bookings retroactively.
        </p>
      )
    },
    {
      id: "occupancy",
      title: "9. Room Occupancy Rules",
      icon: <UserCheck className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            To comply with local safety and fire codes, maximum occupancy rules are set for each room type:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li><strong>Deluxe King Room:</strong> Maximum of 2 Adults and 1 Child under 12 years.</li>
            <li><strong>Family Room / Suites:</strong> Maximum of 4 Adults and 2 Children.</li>
            <li>Any additional guest above the base room limit requires an extra mattress/bed, which will be charged at ₹1,000 + applicable taxes per night (including breakfast).</li>
          </ul>
        </div>
      )
    },
    {
      id: "children-policy",
      title: "10. Children Policy",
      icon: <Sparkles className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Up to two children under the age of 5 stay complimentary when sharing existing bedding with parents. Children between 5 and 11 years of age are subject to standard child rates (or require an extra bed setup). Children aged 12 and above are classified as adults for pricing purposes and require an extra bed reservation. Parents or guardians are solely responsible for supervising children in all hotel zones, especially on the outdoor lawns and stairs.
        </p>
      )
    },
    {
      id: "pets",
      title: "11. Pets Policy (Strictly Prohibited)",
      icon: <Ban className="w-5 h-5 text-saffron" />,
      content: (
        <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/50 flex items-start gap-3 text-dark-brown/85 font-sans text-sm">
          <Ban className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
          <div>
            <span className="block font-bold text-maroon text-base">No Pets Allowed</span>
            <p className="mt-1 text-dark-brown/75">
              To ensure supreme hygiene, respect traditional dietary restrictions, and maintain the peaceful spiritual atmosphere of our property for all travelers, **pets are strictly prohibited** inside the hotel rooms, lobby, restaurant, banquets, and garden lawns of RBS Hotel & Lawn. We regret any inconvenience caused.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "smoking-alcohol",
      title: "12. Smoking & Alcohol Policy",
      icon: <Ban className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            RBS Hotel & Lawn maintains a strict public environment protocol:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li><strong>Smoking:</strong> All guest rooms, bathrooms, corridors, and dining venues are 100% smoke-free. Smoking is strictly prohibited inside closed rooms. Guests may smoke only in designated outdoor open-air areas. A deep cleaning fee of ₹5,000 will be applied to the bill of any guest who violates the room smoking ban.</li>
            <li><strong>Alcohol:</strong> In keeping with the sacred status of the spiritual corridor of Ayodhya, consumption of alcoholic beverages is strictly prohibited in public areas, lawns, and the Naivedyam Restaurant.</li>
          </ul>
        </div>
      )
    },
    {
      id: "visitor",
      title: "13. Visitor Policy",
      icon: <UserCheck className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          To protect guest privacy and ensure maximum building security, any external visitor (who is not a registered guest of the hotel) is requested to present identification at the front reception desk. Visitors are permitted in guest rooms only between 9:00 AM and 8:00 PM, with a maximum of 2 visitors per room at any time. Overnight stays for unregistered visitors are strictly forbidden by local police regulations; visitors must be officially checked in as additional guests.
        </p>
      )
    },
    {
      id: "damage",
      title: "14. Damage to Hotel Property",
      icon: <AlertTriangle className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Guests are expected to treat the hotel rooms, heritage carvings, linens, carpets, and fixtures with utmost care. Any loss or destruction of hotel assets, including breakage of smart TVs, stained upholstery, damaged electronic safes, or lost keys, will be assessed by management. The repair or replacement costs, along with a 15% administration fee, will be charged directly to the guest’s final bill or charged to the credit card on file.
        </p>
      )
    },
    {
      id: "liability",
      title: "15. Limitation of Liability",
      icon: <Shield className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          RBS Hotel & Lawn provides high-security facilities, including electronic safes in rooms and 24/7 CCTV surveillance in shared zones. However, the hotel management shall not be held liable for any loss, theft, or damage to personal valuables, jewelry, cash, or electronic devices kept in guest rooms. Guests are strongly advised to keep all high-value items inside their locked electronic safe. The hotel is also not liable for any personal injury, health issues, or physical accidents suffered by guests during their travel within Ayodhya.
        </p>
      )
    },
    {
      id: "parking",
      title: "16. Parking Disclaimer",
      icon: <ParkingCircle className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          We offer secure, complimentary parking within our hotel premises for all registered lodging guests, banquet attendees, and restaurant diners. While our parking lot is monitored by guard patrols and CCTV cameras, vehicles are parked entirely at the owner's risk. The hotel management assumes no liability for any scratches, collisions, theft of vehicle accessories, or loss of valuables left inside parked cars, motorcycles, or tour buses.
        </p>
      )
    },
    {
      id: "banquet",
      title: "17. Banquet & Event Booking Terms",
      icon: <FileSpreadsheet className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            Bookings for the grand wedding lawns, Siddharth Banquet Hall, and conference venues require formal contracts:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-dark-brown/75">
            <li>An initial non-refundable deposit of 25% is required to secure the venue date.</li>
            <li>Subsequent payments of 50% must be paid 30 days prior to the event, and the remaining balance of 25% cleared at least 7 days prior to the function.</li>
            <li>Outside catering, heavy sound systems, and massive structural decorations are subject to written approval and security clearance.</li>
            <li>All event sound setups must comply with local government decibel rules and shut down strictly by 10:00 PM as per supreme court directives.</li>
          </ul>
        </div>
      )
    },
    {
      id: "restaurant",
      title: "18. Naivedyam Restaurant Terms",
      icon: <Utensils className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Our in-house dining venue, **Naivedyam Restaurant**, serves 100% pure vegetarian Satvik cuisines. Outside food and beverages are strictly prohibited inside the restaurant premises. Table reservations are held for a maximum of 15 minutes during peak hours before being released. Guests are requested to inform our waitstaff of any specific food allergies (such as nuts, dairy, or gluten) prior to ordering.
        </p>
      )
    },
    {
      id: "force-majeure",
      title: "19. Force Majeure Clause",
      icon: <Shield className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          RBS Hotel & Lawn shall not be held liable or responsible for any failure to perform, or delay in performing, any of its obligations under these terms if such failure or delay is caused by a "Force Majeure Event". This includes, but is not limited to, acts of God, earthquakes, floods, extreme weather, local administrative lockdowns, security curfews, political rallies, national emergencies, fires, pandemics, or sudden government travel bans affecting the sacred city of Ayodhya.
        </p>
      )
    },
    {
      id: "privacy",
      title: "20. Privacy & Data Protection Statement",
      icon: <Shield className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          We respect your personal privacy. All booking details, ID card photocopies, telephone numbers, and email addresses collected during reservation are managed securely in compliance with the Digital Personal Data Protection Act of India. Your information is used strictly for regulatory police registers (such as Form C), reservation processing, and sending occasional promotional updates about RBS Hotel. We never sell, rent, or lease guest databases to third-party marketing companies.
        </p>
      )
    },
    {
      id: "intellectual-prop",
      title: "21. Intellectual Property",
      icon: <Award className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          All materials displayed on the official RBS Hotel & Lawn website (including logos, photography of suites, restaurant menu layouts, custom graphics, marketing text, and icons) are the exclusive intellectual property of RBS Hotel & Lawn. No part of this website may be copied, reproduced, hot-linked, or repurposed for commercial travel listings without explicit written authorization from the hotel board.
        </p>
      )
    },
    {
      id: "changes",
      title: "22. Changes to Terms",
      icon: <Scale className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          The hotel management retains the absolute right to update, revise, or modify these Terms & Conditions at any time without prior individual notification. Any changes will become effective immediately upon being published on this page. Guests are encouraged to review these terms periodically to remain informed of our operational guidelines.
        </p>
      )
    }
  ];

  // 2. CANCELLATION & REFUND POLICY SECTIONS
  const cancellationSections: PolicySection[] = [
    {
      id: "window",
      title: "1. Free Cancellation Window",
      icon: <Calendar className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          We understand that travel plans can change dynamically, especially during spiritual journeys. Guests enjoy **free cancellation up to 48 hours prior to the standard check-in time (12:00 PM) of their scheduled arrival date**. Cancellations made within this window will receive a 100% refund of the advance booking deposit.
        </p>
      )
    },
    {
      id: "late-cancel",
      title: "2. Late Cancellation Fee",
      icon: <XCircle className="w-5 h-5 text-saffron" />,
      content: (
        <div className="space-y-3 font-sans text-sm md:text-base text-dark-brown/85">
          <p>
            If a booking is cancelled **within 48 hours of the scheduled check-in date**, it is considered a late cancellation:
          </p>
          <div className="p-4 bg-[#FFF8EE] rounded-xl border border-gold/25">
            <span className="font-bold text-maroon text-sm block">Penalty Rates</span>
            <p className="text-xs text-dark-brown/75 mt-1 leading-relaxed">
              Late cancellations will incur a penalty equivalent to **one night's full room charge plus applicable government taxes**. The remaining balance of the advance payment (if any) will be eligible for a refund. For single-night bookings, the entire advance payment will be forfeited.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "no-show",
      title: "3. No-Show Bookings",
      icon: <Ban className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          A "No-Show" occurs when a guest fails to arrive at the hotel by 11:59 PM on the scheduled check-in date without providing written or verbal notification of delay. **No-show bookings are entirely non-refundable**. The room will be automatically released back into our inventory for booking the following morning, and the entire advance payment will be forfeited.
        </p>
      )
    },
    {
      id: "refund-process",
      title: "4. Refund Processing Time",
      icon: <Clock className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Once a cancellation is formally approved by our reservation desk, the refund is processed immediately through our secure merchant banking partners. Please allow **7 to 10 business days** for the credited amount to reflect in your banking statement, depending on your bank's clearance cycles.
        </p>
      )
    },
    {
      id: "refund-method",
      title: "5. Original Payment Method Mode",
      icon: <CreditCard className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          To comply with anti-money laundering regulations and standard banking procedures, **all refunds will be made strictly using the original payment channel** used during booking. We do not provide cash refunds, and we cannot credit refunds to alternative accounts or third-party digital wallets.
        </p>
      )
    },
    {
      id: "group-rules",
      title: "6. Group & Corporate Bookings",
      icon: <FileSpreadsheet className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Reservations of **three (3) or more rooms** on the same dates under a single family, corporate, or tour operator booking are classified as Group Bookings. Group bookings are subject to customized group contracts. They do not qualify for the standard 48-hour free cancellation window. The exact cancellation schedules and refund percentages for groups are explicitly drafted in their invoice agreements.
        </p>
      )
    },
    {
      id: "banquet-cancel",
      title: "7. Banquet & Event Lawn Cancellations",
      icon: <XCircle className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Due to high demand for wedding lawn bookings and extensive logistics preparations (such as procurement of catering supplies and decor blockings), **banquet and wedding lawn booking advance deposits are non-refundable**. In case of emergency postponements, management may, at its sole discretion, allow shifting the deposit to a future open date within 6 months, subject to seasonal rate differences and availability.
        </p>
      )
    },
    {
      id: "promotional",
      title: "8. Non-Refundable Promotional Offers",
      icon: <Ban className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          Any bookings made under discounted promotional codes, flash sales, early-bird vouchers, or last-minute special room packages are **strictly non-refundable and non-amendable** at the time of purchase. Standard cancellation windows do not apply to promotional campaigns.
        </p>
      )
    },
    {
      id: "hotel-cancel",
      title: "9. Hotel's Right to Cancel Bookings",
      icon: <AlertTriangle className="w-5 h-5 text-saffron" />,
      content: (
        <p className="text-dark-brown/85 leading-relaxed font-sans text-sm md:text-base">
          In highly exceptional circumstances (such as technical failures in the room's AC/plumbing, unexpected administrative blockages for government delegates, or extreme force majeure events), RBS Hotel & Lawn reserves the right to cancel any guest booking. Under such rare events, guests will be offered a full 100% refund or an upgrade to an equivalent suite at a partner luxury hotel in Ayodhya, along with free transport. No secondary compensation will be paid.
        </p>
      )
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans relative">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-saffron/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO TITLE SEGMENT */}
        <section className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gold/35 shadow-sm text-xs font-bold text-maroon uppercase tracking-widest select-none">
            <Scale size={13} className="text-saffron animate-pulse" />
            <span>Official Hotel Rules & Guidelines</span>
          </div>
          <h1 className="font-serif font-extrabold text-3xl md:text-5xl text-maroon tracking-tight leading-tight">
            Policies & Legal Terms
          </h1>
          <p className="max-w-2xl mx-auto text-dark-brown/75 text-sm md:text-base font-sans">
            Please review the legal frameworks, booking policies, and cancellation guidelines of <strong>RBS Hotel & Lawn</strong> to ensure a comfortable stay in Ayodhya.
          </p>
          <div className="w-24 h-0.5 bg-gold/45 mx-auto rounded"></div>
        </section>

        {/* TAB NAVIGATION CONTROLS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10 bg-[#FFFBF5] p-2 rounded-2xl border border-gold/15 shadow-sm max-w-3xl mx-auto">
          <button
            onClick={() => { setActiveTab("terms"); scrollToTop(); }}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-serif text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
              activeTab === "terms"
                ? "bg-maroon text-white shadow-md shadow-maroon/20"
                : "text-dark-brown/70 hover:text-maroon hover:bg-gold/10"
            }`}
          >
            <Scale size={16} />
            <span>Terms & Conditions</span>
          </button>
          
          <button
            onClick={() => { setActiveTab("cancellation"); scrollToTop(); }}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-serif text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
              activeTab === "cancellation"
                ? "bg-maroon text-white shadow-md shadow-maroon/20"
                : "text-dark-brown/70 hover:text-maroon hover:bg-gold/10"
            }`}
          >
            <XCircle size={16} />
            <span>Cancellation & Refunds</span>
          </button>

          <button
            onClick={() => { setActiveTab("general"); scrollToTop(); }}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-serif text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer ${
              activeTab === "general"
                ? "bg-maroon text-white shadow-md shadow-maroon/20"
                : "text-dark-brown/70 hover:text-maroon hover:bg-gold/10"
            }`}
          >
            <Info size={16} />
            <span>Key Hotel Policies</span>
          </button>
        </div>

        {/* ACTIVE VIEW GRID */}
        <AnimatePresence mode="wait">
          {activeTab === "general" ? (
            <motion.section
              key="general"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* IMPORTANT SUMMARY BANNER */}
              <div className="bg-[#FFF8EE] border border-gold/30 p-5 rounded-2xl shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-saffron/10 border border-saffron/25 flex items-center justify-center text-saffron shrink-0">
                  <Sparkles size={24} />
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-serif font-bold text-maroon text-lg">Guaranteed Service Excellence</span>
                  <span className="block text-xs md:text-sm text-dark-brown/75 mt-1">
                    At RBS Hotel & Lawn, we are dedicated to providing a premium, spiritual, and comfortable atmosphere. Enjoy free enterprise Wi-Fi, round-the-clock room cleaning, secure private parking, and gourmet Satvik dining.
                  </span>
                </div>
              </div>

              {/* GRID OF POLICIES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Clock size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Check-In Time</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Check-in starts at <strong>12:00 PM</strong>. Please bring a valid physical photo ID card for secure registration. Early check-in is subject to availability.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Clock size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Check-Out Time</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Standard check-out is at <strong>11:00 AM</strong>. Late check-out requests must be authorized in advance and may incur nominal fees.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Shield size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">24x7 Front Desk</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Our front reception and guest relations support operate <strong>24 Hours a day, 7 days a week</strong> to assist with transportation, keycard issues, and guide booking.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Ban size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Pets Restriction</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Pets are <strong>strictly not allowed</strong> within the hotel suites, restaurant, banquets, and lawns to maintain hygiene standards for all pilgrims.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <AlertTriangle size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Smoking Policy</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Smoking is <strong>strictly prohibited</strong> inside guest rooms and closed public corridors. Designated outdoor smoking zones are available.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Sparkles size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Children Stay</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Children <strong>under 5 years of age</strong> stay free of cost when using existing bedding. Extra mattresses can be provided with nominal standard rates.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <ParkingCircle size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Secure Parking</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    We offer <strong>complimentary parking</strong> inside our hotel boundary for all lodging guests, with 24/7 CCTV surveillance and security guards on duty.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Wifi size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Free Enterprise Wi-Fi</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    High-speed fiber-optic Wi-Fi connectivity is available <strong>complimentary throughout the entire property</strong>, including guest rooms, lawns, and the lobby.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gold/15 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-saffron">
                      <Utensils size={20} className="stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif font-bold text-maroon text-base">Pure Veg Kitchen</h3>
                  </div>
                  <p className="text-xs text-dark-brown/85 font-medium leading-relaxed">
                    Our Naivedyam Restaurant serves **100% Pure Vegetarian Satvik food**. Traditional North Indian and local Avadhi specialties are cooked under strict hygiene.
                  </p>
                </div>
              </div>

              {/* SUMMARY LEGAL STATEMENT */}
              <div className="max-w-4xl mx-auto bg-white border border-gold/10 p-8 rounded-2xl text-center space-y-4 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-maroon">Official Registered Address & Registration</h4>
                <p className="text-xs md:text-sm text-dark-brown/70 leading-relaxed font-sans max-w-2xl mx-auto">
                  RBS Hotel & Lawn is operated under authorized licenses by local state government departments of Uttar Pradesh. For corporate room blocking, event partnerships, or official legal queries, please reach out to our legal compliance department.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-serif font-bold text-maroon border-t border-gold/10">
                  <div className="space-y-1">
                    <span className="block text-[10px] text-dark-brown/40 font-sans uppercase">Contact Helpline</span>
                    <span>{HOTEL_DETAILS.phoneNumbers[0]}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-dark-brown/40 font-sans uppercase">Support Email</span>
                    <span>{HOTEL_DETAILS.emails[0]}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] text-dark-brown/40 font-sans uppercase">Web Portal</span>
                    <span>www.rbshotelandlawn.com</span>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              
              {/* SIDEBAR TABLE OF CONTENTS (Desktop Sticky) */}
              <aside className="hidden lg:block lg:col-span-1 self-start sticky top-28 bg-[#FFFBF5] border border-gold/20 p-5 rounded-2xl shadow-sm max-h-[80vh] overflow-y-auto">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gold/15">
                  <FileText className="w-4 h-4 text-maroon" />
                  <span className="font-serif font-extrabold text-sm text-maroon tracking-wider uppercase">Table of Contents</span>
                </div>
                <ul className="space-y-1.5 text-xs">
                  {(activeTab === "terms" ? termsSections : cancellationSections).map((sec) => (
                    <li key={sec.id}>
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left py-1.5 px-3 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                          activeSection === sec.id
                            ? "bg-maroon/10 text-maroon border-l-2 border-saffron font-semibold pl-2.5"
                            : "text-dark-brown/70 hover:bg-gold/5 hover:text-maroon"
                        }`}
                      >
                        {sec.title.substring(3)}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* MOBILE TABLE OF CONTENTS PANEL */}
              <div className="lg:hidden col-span-1">
                <button
                  onClick={() => setShowMobileToC(!showMobileToC)}
                  className="w-full flex items-center justify-between bg-[#FFFBF5] border border-gold/20 px-4 py-3 rounded-xl text-sm font-bold text-maroon font-serif shadow-sm cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Menu size={16} />
                    <span>Navigate Document Sections</span>
                  </div>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${showMobileToC ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {showMobileToC && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 bg-[#FFFBF5] border border-gold/15 rounded-xl overflow-hidden shadow-md max-h-72 overflow-y-auto z-20"
                    >
                      <ul className="divide-y divide-gold/10 text-xs">
                        {(activeTab === "terms" ? termsSections : cancellationSections).map((sec) => (
                          <li key={sec.id}>
                            <button
                              onClick={() => scrollToSection(sec.id)}
                              className="w-full text-left px-4 py-3 font-medium text-dark-brown/80 hover:bg-gold/5 hover:text-maroon transition-colors"
                            >
                              {sec.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* POLICY CONTENT SEGMENT */}
              <section className="lg:col-span-3 space-y-6">
                {(activeTab === "terms" ? termsSections : cancellationSections).map((sec) => (
                  <div
                    key={sec.id}
                    ref={(el) => { sectionRefs.current[sec.id] = el; }}
                    className="scroll-mt-28 bg-white border border-gold/15 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-gold/10">
                      <div className="w-8 h-8 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center">
                        {sec.icon}
                      </div>
                      <h2 className="font-serif font-extrabold text-lg md:text-xl text-maroon leading-tight tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                    <div>{sec.content}</div>
                  </div>
                ))}

                {/* HELPFUL CONTACT NOTICE BLOCK */}
                <div className="bg-[#FFF8EE] border border-gold/25 p-8 rounded-2xl shadow-sm text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 border border-saffron/25 flex items-center justify-center mx-auto text-saffron">
                    <HelpCircle size={24} />
                  </div>
                  <h3 className="font-serif font-bold text-maroon text-lg">Need Further Clarification?</h3>
                  <p className="text-xs md:text-sm text-dark-brown/75 max-w-lg mx-auto">
                    If you have any questions regarding our lodging policies, group bookings, banquet event cancellation schedules, or custom requests, please reach out directly to our Front Office Desk.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-2 text-xs font-serif font-bold text-maroon">
                    <a
                      href={`tel:${HOTEL_DETAILS.phoneNumbers[0].replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 bg-white hover:bg-gold/10 border border-gold/25 p-3 rounded-xl shadow-sm hover:shadow transition-all"
                    >
                      <Phone size={14} className="text-saffron" />
                      <span>{HOTEL_DETAILS.phoneNumbers[0]}</span>
                    </a>
                    <a
                      href={`mailto:${HOTEL_DETAILS.emails[0]}`}
                      className="flex items-center justify-center gap-2 bg-white hover:bg-gold/10 border border-gold/25 p-3 rounded-xl shadow-sm hover:shadow transition-all"
                    >
                      <Mail size={14} className="text-saffron" />
                      <span>{HOTEL_DETAILS.emails[0]}</span>
                    </a>
                  </div>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>

        {/* BACK TO TOP FLOATING BUTTON */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-maroon hover:bg-saffron text-white hover:text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10 cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp size={20} className="stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
