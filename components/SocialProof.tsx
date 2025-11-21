import React from 'react';

export const SocialProof: React.FC = () => {
  const images = [
    "https://i.ibb.co/PZHBFXRV/ad1.jpg",
    "https://i.ibb.co/G3Fzdr2X/ad2.jpg",
    "https://i.ibb.co/MkSBWnfh/ad3.jpg",
    "https://i.ibb.co/4Z44rf1z/ad4.jpg"
  ];

  return (
    <section className="w-full py-16 px-0 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-8 px-6 snap-x snap-mandatory md:justify-center md:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="snap-center min-w-[280px] w-[280px] md:w-[250px] h-[400px] md:h-[350px] rounded-2xl border-4 border-white shadow-lg overflow-hidden flex-shrink-0 transform transition hover:scale-105 bg-gray-100 first:ml-0 last:mr-0"
            >
              <img 
                src={img} 
                alt="Resultado de aluna" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-brand-brown/60 text-sm mt-2 uppercase tracking-wide px-6">
          Deslize para ver resultados reais
        </p>
      </div>
    </section>
  );
};