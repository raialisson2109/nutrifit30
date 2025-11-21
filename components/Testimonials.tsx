import React from 'react';

export const Testimonials: React.FC = () => {
  // AQUI: Substitua as URLs abaixo pelos links dos seus prints reais.
  // Se as imagens estiverem no seu computador (na pasta public), use o caminho: "/nome-da-imagem.jpg"
  const testimonialImages = [
    "https://i.ibb.co/R4zddss5/Whats-App-Image-2025-11-10-at-17-09-40-1.jpg", // Imagem atualizada
    "https://i.ibb.co/gLkfbrRq/Whats-App-Image-2025-11-10-at-17-09-40-3.jpg", // Substitua pelo Print 2
    "https://i.ibb.co/0j7SSgWV/Whats-App-Image-2025-11-10-at-17-09-40-2.jpg", // Substitua pelo Print 3
    "https://i.ibb.co/B5ZY93y7/Whats-App-Image-2025-11-10-at-17-09-40.jpg", // Substitua pelo Print 4
  ];

  return (
    <section className="w-full py-20 bg-brand-brown/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown mb-4 uppercase">
            O que falam do Nutrifit30
          </h2>
          <p className="text-brand-brown/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Veja o que as alunas estão compartilhando espontaneamente. Feedback real de quem vive o método dia após dia.
          </p>
        </div>
        
        {/* Masonry Grid for vertical screenshots */}
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {testimonialImages.map((imgSrc, index) => (
              <div key={index} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-4 border-white bg-white">
                <img 
                  src={imgSrc} 
                  alt={`Depoimento aluna ${index + 1}`} 
                  className="w-full h-auto block bg-gray-100" 
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};