import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  const benefits = [
    "Plano alimentar base voltado para o EMAGRECIMENTO (com lista de substituições)",
    "Plano de treino (em casa ou academia). Iniciante e avançado.",
    "Dicas de hidratação e autocuidado.",
    "Passo a passo para fazer o vacum e ativar o core.",
    "Checklist semanal de evolução (peso, medidas, fotos, constância).",
    "Grupo com a nutri (para tirar dúvidas, mandar recados e motivar).",
    "Conteúdo motivacional e educativo (DIÁRIO, ex: como evitar compulsão, sono, TPM etc).",
    "Estratégia de jejum e ciclagem de carboidratos dentro no plano."
  ];

  const whatsappMessage = "Olá! Vi o seu projeto de emagrecimento no site e gostaria de saber mais sobre o plano.";
  const whatsappLink = `https://wa.me/5588988511905?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="bg-brand-brown text-brand-beige rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center relative border-4 border-brand-brown ring-4 ring-brand-beige/50">
          
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-green text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg whitespace-nowrap">
            Oferta por tempo limitado
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide leading-tight">
            VOCÊ ACHA QUE CUIDAR DE SI CUSTA UMA FORTUNA?
          </h3>
          
          <div className="text-sm md:text-base mb-8 opacity-90 space-y-4 leading-relaxed">
            <p>
              Muita gente pensa que precisa gastar centenas de reais com academia, consultas e dietas milagrosas para ver resultado...
            </p>
            <p>
              Mas no NutriFit30, você tem tudo o que precisa para emagrecer com saúde, reunido em um só lugar — sem pesar no bolso.
            </p>
          </div>

          <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-[-10px]">Apenas</p>

          <div className="flex items-start justify-center gap-1 mb-8">
            <span className="text-2xl mt-4">R$</span>
            <span className="text-7xl font-serif font-bold text-white">99,90</span>
          </div>

          <div className="space-y-4 mb-10 text-left bg-brand-darkBrown/30 p-6 rounded-xl">
             {benefits.map((item, idx) => (
               <div key={idx} className="flex items-start gap-3">
                 <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0 mt-1" />
                 <span className="font-medium text-sm leading-snug">{item}</span>
               </div>
             ))}
          </div>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button fullWidth variant="primary" className="text-lg py-5">
              Quero Ter Acesso Ao NUTRIFIT30 Agora
            </Button>
          </a>
        
        </div>
      </div>
    </section>
  );
};