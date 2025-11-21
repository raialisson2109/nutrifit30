import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-0 md:pt-16 md:min-h-[90vh] flex flex-col-reverse md:flex-row overflow-hidden">
      {/* Text Content - Left (Bottom on mobile due to reverse) */}
      <div className="w-full md:w-1/2 px-6 md:px-12 flex flex-col justify-center items-center text-center z-10 py-12 md:py-0">
        <span className="inline-block px-3 py-1 mb-6 border border-brand-brown/30 rounded-full text-xs font-bold tracking-widest uppercase text-brand-brown w-fit">
          Método Comprovado
        </span>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-brown mb-6 uppercase">
          Chega de viver de dieta. Comece a emagrecer com 100% simplicidade e resultado.
        </h1>
        <p className="text-xs md:text-sm text-brand-brown/80 max-w-xl leading-relaxed mb-8">
          Você vai aprender a comer de forma inteligente, se exercitar com prazer e ver resultados reais em 30 dias.
        </p>
      </div>

      {/* Image Content - Right (Top on mobile due to reverse) */}
      <div className="w-full md:w-1/2 h-[67vh] md:h-auto relative">
        {/* Removido bg-brand-brown/10 e o gradiente overlay para remover o fundo via código */}
        <div className="absolute inset-0 rounded-tl-[4rem] md:rounded-tl-[8rem] overflow-hidden flex items-end justify-center">
          <img 
            src="https://i.ibb.co/xtcHX9Jt/THAMIRES-4.png" 
            alt="Mulher confiante e feliz" 
            className="w-full h-full object-contain object-bottom origin-bottom"
          />
        </div>
      </div>
    </section>
  );
};