import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Rooms", "Lawn & Banquet", "Temple & Heritage"];

  // Filter gallery items based on active category
  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (itemIndex: number) => {
    // Find the actual index of the clicked item in the filtered list
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="w-full">
      {/* Gallery Page Header */}
      <section className="relative py-20 bg-maroon text-[#FFF8EE] overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-[#140B07] z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] block mb-2">Visual Splendor</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Our Royal Gallery</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4 mb-3"></div>
          <p className="text-[#FFF8EE]/80 text-sm sm:text-base max-w-xl mx-auto">
            Glimpse the luxury, divine warmth, and majestic celebration setup of RBS Hotel and Lawn in Ayodhya.
          </p>
        </div>
      </section>

      {/* Filter Options Menu */}
      <section className="py-8 bg-[#FFF8EE] border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-cream border-gold shadow"
                    : "bg-white text-dark-brown border-gold/20 hover:border-saffron hover:text-saffron"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Grid Gallery Content */}
      <section className="py-12 bg-[#FFF8EE] min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-lg overflow-hidden shadow-md border border-gold/15 bg-white cursor-pointer h-72 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Saffron Gradient Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-[#FFF8EE]" />

                {/* Text and Icons on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-end justify-between">
                  <div className="space-y-1 text-left">
                    <span className="text-gold text-[10px] font-sans font-bold uppercase tracking-widest block">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-base text-cream leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-dark-brown/50">
              <Sparkles size={40} className="mx-auto text-gold mb-3 animate-pulse" />
              <p className="font-serif text-lg">No images available in this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal Component */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 select-none">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-default" onClick={closeLightbox} />

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream bg-white/10 p-2.5 rounded-full z-50 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full z-50 transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Display Image Container */}
          <div className="relative max-w-5xl max-h-[80vh] z-40 flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl border border-gold/15"
              referrerPolicy="no-referrer"
            />
            {/* Title Details below image */}
            <div className="text-center mt-4 text-[#FFF8EE]">
              <span className="text-gold text-xs font-sans font-bold uppercase tracking-widest block mb-1">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-serif font-bold text-lg leading-tight">
                {filteredItems[lightboxIndex].title}
              </h4>
              <span className="text-cream/50 text-[10px] mt-2 block font-mono">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full z-50 transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
