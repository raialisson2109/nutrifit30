import React from 'react';
import { Button } from './ui/Button';

export const Objections: React.FC = () => {
  const thoughts = [
    "“Eu não consigo controlar a vontade de comer doce depois das refeições.”",
    "“Nenhuma roupa parece ficar bem em mim.”",
    "“Acho que preciso comer o mínimo possível pra emagrecer.”",
    "“Tenho medo de começar e não conseguir continuar.”",
    "“Pra emagrecer, vou ter que abrir mão de tudo o que gosto.”"
  ];

  const whatsappMessage = "Olá! Vi o seu projeto de emagrecimento no site e gostaria de saber mais sobre o plano.";
  const whatsappLink = `https://wa.me/5588988511905?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="w-full py-24 px-6 bg-brand-brown/5 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-12 uppercase">
          COM CERTEZA VOCÊ JÁ PENSOU ASSIM!
        </h2>
        
        <div className="flex flex-col gap-4 mb-12 px-2 md:px-12">
          {thoughts.map((thought, idx) => (
            <div 
              key={idx} 
              className={`p-5 rounded-2xl shadow-sm text-left max-w-[90%] md:max-w-[85%] font-medium text-brand-brown
                ${idx % 2 === 0 
                  ? 'bg-white self-start rounded-tl-none' 
                  : 'bg-[#EFE8DA] self-end rounded-tr-none'
                }
              `}
            >
              <p>{thought}</p>
            </div>
          ))}
        </div>

        <div className="text-lg text-brand-brown/80 mb-10 max-w-2xl mx-auto leading-relaxed space-y-4">
          <p>
            Se você se identificou com alguma dessas frases, o <strong>NutriFit30</strong> foi feito pra você!
          </p>
          <p>
            Aqui, você vai descobrir que é possível emagrecer sem sofrimento, comendo de forma gostosa e equilibrada, e criando uma rotina que realmente cabe na sua vida.
          </p>
        </div>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">
            Quero Facilitar Minha Vida
          </Button>
        </a>
      </div>
    </section>
  );
};