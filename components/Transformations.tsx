import React from 'react';

export const Transformations: React.FC = () => {
  const transformations = [1, 2, 3, 4];

  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown uppercase mb-4">
          Transformações Reais
        </h2>
        <p className="text-brand-brown/70 max-w-2xl mx-auto">
          Resultados que falam por si mesmos. Sem remédios, sem sofrimento, apenas estratégia nutricional.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {transformations.map((item) => (
          <div key={item} className="relative group rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <img 
              src={`https://picsum.photos/seed/transformation${item}/400/800`} 
              alt={`Transformação ${item}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex justify-between text-white text-xs font-bold uppercase">
                <span>Antes</span>
                <span>Depois</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};