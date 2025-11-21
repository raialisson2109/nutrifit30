import React from 'react';

export const Bio: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-white/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Título movido para cima da estrutura de colunas */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-6 uppercase">
            Com quem você vai aprender?
          </h2>
          <div className="w-20 h-1 bg-brand-green"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
             <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
               <img 
                  src="https://i.ibb.co/XkWjtLxv/Whats-App-Image-2025-11-10-at-17-07-50-4.jpg" 
                  alt="Thamires Ferreira Nutricionista" 
                  className="w-full h-full object-cover"
               />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Conteúdo de texto */}
            <div className="space-y-4 text-brand-brown/80 text-lg leading-relaxed">
              <p>
                Sou <span className="font-bold text-brand-brown">Thamires Ferreira</span>, nutricionista há mais de 7 anos, especialista em Nutrição Esportiva, Emagrecimento e Saúde da Mulher.
              </p>
              <p>
                Durante esse tempo, descobri que o verdadeiro segredo para emagrecer não está em dietas radicais, mas sim em criar hábitos simples, sustentáveis e possíveis no dia a dia.
              </p>
              <p>
                Há 5 anos, conduzo grupos de emagrecimento e já ajudei centenas de mulheres a alcançarem resultados reais — sem passar fome, sem cortar tudo o que gostam e sem culpa. 💪
              </p>
              <p>
                No NutriFit30, eu reuni toda a minha experiência em um método prático e direto, pensado para quem quer resultados de verdade, mas também quer viver bem, com leveza e equilíbrio.
              </p>
              <p>
                Aqui, você vai aprender a comer de forma inteligente, entender o seu corpo e conquistar uma rotina saudável e prazerosa.
              </p>
              <p>
                Tudo isso com o meu acompanhamento e estratégias que realmente funcionam — porque você também merece se sentir confiante, feliz e no controle da sua saúde!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};