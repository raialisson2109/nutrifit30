import React from 'react';
import { Check, Target, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const whoIsItFor = [
    "Você que está cansada de começar dietas toda segunda e desistir na quarta.",
    "Quer emagrecer de forma leve, sem restrição absurda e sem cortar tudo que ama comer.",
    "Já tentou de tudo — shakes, jejum, cortar carbo — mas ainda não chegou no corpo que deseja.",
    "Precisa de um plano simples, prático e que funcione na correria do seu dia a dia.",
    "Quer aprender a se alimentar de verdade, sem depender de modinhas e sem passar fome.",
    "Busca resultados reais, mas quer fazer isso de forma sustentável e com prazer.",
    "Quer se olhar no espelho e se sentir confiante, com roupas que antes não serviam — e um novo olhar pra si mesma."
  ];

  const whatIsItList = [
    "Um plano alimentar personalizado, feito com base nas suas informações (peso, altura, rotina, preferências e metas).",
    "Treinos estratégicos de acordo com o seu nível e objetivo — pra acelerar seus resultados e otimizar o seu tempo.",
    "Acompanhamento próximo e motivador, pra você não se sentir sozinha e se manter firme durante os 30 dias.",
    "Ajustes e orientações semanais, pra garantir que você continue evoluindo de forma leve e contínua.",
    "Receitas práticas, dicas e estratégias inteligentes pra encaixar o processo de emagrecimento na sua rotina sem sofrimento."
  ];

  return (
    <section className="w-full py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Para Quem É */}
        <div className="bg-brand-brown text-brand-beige p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group h-full flex flex-col">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
             <Target size={120} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 uppercase relative z-10">
            Para quem é o Nutrifit30?
          </h2>
          <ul className="space-y-4 relative z-10 flex-grow">
            {whoIsItFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base md:text-lg font-light leading-relaxed">
                <span className="bg-brand-green text-white rounded-full p-1 mt-1 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          
          {/* Slogan Final 1 */}
          <div className="relative z-10 mt-8 pt-6 border-t border-brand-beige/10">
             <p className="font-serif text-lg md:text-xl italic text-brand-beige/90 font-medium leading-tight">
                NutriFit30 — 30 dias pra você se redescobrir, se cuidar e sentir orgulho do seu reflexo.
             </p>
           </div>
        </div>

        {/* Card 2: O Que É */}
        <div className="bg-brand-brown text-brand-beige p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group h-full flex flex-col">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
             <Sparkles size={120} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 uppercase relative z-10">
            O que é o Nutrifit30?
          </h2>
          
          <p className="relative z-10 text-lg mb-6 font-light leading-relaxed opacity-90">
            O NutriFit30 é um programa de acompanhamento online de 30 dias, feito para mulheres que querem emagrecer de forma real, sem passar fome, sem restrições e com orientação profissional do início ao fim.
          </p>

          <ul className="space-y-4 relative z-10 mb-6 flex-grow">
            {whatIsItList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base md:text-lg font-light leading-relaxed">
                 <span className="bg-brand-green text-white rounded-full p-1 mt-1 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="relative z-10 text-lg mb-2 font-light leading-relaxed opacity-90">
             Tudo isso com uma metodologia leve, prática e realista — pra você emagrecer, se sentir bem e ver seu corpo mudar de verdade em apenas 30 dias.
          </p>

          {/* Slogan Final 2 */}
          <div className="relative z-10 mt-8 pt-6 border-t border-brand-beige/10">
             <p className="font-serif text-lg md:text-xl italic text-brand-beige/90 font-medium leading-tight">
                NutriFit30: o início da sua transformação — corpo, mente e hábitos em sintonia
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};