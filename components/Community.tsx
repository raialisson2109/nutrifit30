import React from 'react';
import { Users } from 'lucide-react';

export const Community: React.FC = () => {
  const steps = [
    "Você preenche um formulário simples com suas informações, rotina e preferências alimentares.",
    "Em até 1 dia útil, recebe seu plano alimentar personalizado + estratégia de treino pensada especialmente pro seu objetivo.",
    "Entra no grupo exclusivo NutriFit30, onde vai ter suporte, motivação e troca real com outras mulheres que estão na mesma jornada que você.",
    "Durante os 30 dias, vai receber orientações, desafios, receitas e acompanhamento pra manter o foco e não desistir.",
    "No final do ciclo, você vai perceber o quanto pode transformar seu corpo e sua relação com a comida — de forma leve, prática e possível."
  ];

  return (
    <section className="w-full py-20 px-6 bg-brand-beige">
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        
        <div className="w-full text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
             <Users className="text-brand-green w-5 h-5" />
             <span className="text-brand-brown font-bold text-sm uppercase tracking-wider">Grupo Exclusivo</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-2 uppercase leading-tight">
            MULHERES EM BUSCA DO MESMO OBJETIVO
          </h2>
          
          <p className="text-lg font-bold text-brand-green mb-8 uppercase tracking-wide">
            VOCÊ NÃO VAI ESTAR SOZINHA NESSE PROCESSO!
          </p>

          <h3 className="font-bold text-brand-brown text-xl mb-6 uppercase">
            COMO FUNCIONA NA PRÁTICA:
          </h3>

          <ul className="space-y-5 mb-8">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-brown text-brand-beige flex items-center justify-center font-bold text-sm mt-[-2px]">
                  {index + 1}
                </span>
                <p className="text-brand-brown/90 leading-relaxed text-base">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          <div className="bg-brand-brown/5 p-6 rounded-2xl border border-brand-brown/10">
             <p className="text-brand-brown font-medium mb-2">
               Em 30 dias você terá acesso a tudo isso e o início da sua melhor versão!
             </p>
             <p className="text-brand-brown font-bold text-lg font-serif italic">
               NutriFit30: seu ponto de virada começa agora.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};