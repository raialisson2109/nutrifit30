import React from 'react';

export const Marquee: React.FC = () => {
  const text = "THAMIRES THAIRES NUTRI";
  const repetitions = Array(12).fill(text);

  return (
    <div className="w-full bg-brand-brown py-2 md:py-3 overflow-hidden border-y border-brand-brown">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-1 flex gap-8 md:gap-12 items-center">
          {repetitions.map((item, index) => (
            <span 
              key={index} 
              className="text-lg md:text-2xl font-bold text-white uppercase tracking-widest font-sans"
            >
              {item} •
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {repetitions.map((item, index) => (
            <span 
              key={`dup-${index}`} 
              className="text-lg md:text-2xl font-bold text-white uppercase tracking-widest font-sans"
            >
              {item} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};