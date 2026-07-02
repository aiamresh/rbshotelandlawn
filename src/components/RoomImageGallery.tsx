import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
}

interface RoomImageGalleryProps {
  images?: GalleryImage[];
  defaultImage: string;
  roomName: string;
  aspectRatioClassName?: string;
}

export default function RoomImageGallery({
  images,
  defaultImage,
  roomName,
  aspectRatioClassName = "h-64",
}: RoomImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fallback to a single image structure if no multiple images are provided
  const list = images && images.length > 0
    ? images
    : [{ url: defaultImage, caption: roomName }];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handleThumbClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  const activeImage = list[activeIndex];

  return (
    <div className="relative w-full flex flex-col group/gallery select-none" id={`gallery-${roomName.toLowerCase().replace(/\s+/g, "-")}`}>
      {/* Main Image Viewport */}
      <div className={`relative w-full ${aspectRatioClassName} overflow-hidden bg-black/5`}>
        <img
          src={activeImage.url}
          alt={activeImage.caption}
          className="w-full h-full object-cover transition-all duration-500 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Navigation Arrows (Only shown if multiple images exist) */}
        {list.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-cream flex items-center justify-center transition-all duration-250 cursor-pointer border border-white/10 z-10 hover:scale-105"
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-cream flex items-center justify-center transition-all duration-250 cursor-pointer border border-white/10 z-10 hover:scale-105"
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Caption Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 pt-8 flex items-end justify-between">
          <div className="space-y-0.5">
            {list.length > 1 && (
              <span className="text-[10px] font-sans font-bold tracking-widest text-gold uppercase block">
                Photo {activeIndex + 1} of {list.length}
              </span>
            )}
            <p className="text-cream text-xs font-medium tracking-wide drop-shadow-sm">
              {activeImage.caption}
            </p>
          </div>
          {list.length > 1 && (
            <div className="bg-gold/90 text-maroon text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm backdrop-blur-xs">
              <Eye size={10} />
              <span>ROOM & TOILET TOUR</span>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Bar (Only shown if multiple images exist) */}
      {list.length > 1 && (
        <div className="flex gap-1.5 p-2 bg-[#FFFDF9] border-t border-gold/10 overflow-x-auto scrollbar-none shrink-0 justify-center">
          {list.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => handleThumbClick(idx, e)}
              className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all duration-200 cursor-pointer shrink-0 ${
                activeIndex === idx
                  ? "border-gold shadow-sm scale-95"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              type="button"
            >
              <img
                src={img.url}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
