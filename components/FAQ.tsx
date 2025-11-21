import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-brand-beige border border-brand-brown/10 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-serif text-lg font-bold text-brand-brown pr-4">{question}</span>
        {isOpen ? <Minus className="text-brand-green shrink-0" /> : <Plus className="text-brand-brown shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-brand-brown/80 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O programa funciona para quem tem rotina corrida?",
      answer: "Sim! Ele foi criado exatamente para quem não tem tempo sobrando. Os cardápios são práticos, com substituições, opções rápidas e flexíveis. Além disso, você recebe orientações que se adaptam à sua realidade — plantão, estudos, correria, filhos, academia ou até quem está começando do zero."
    },
    {
      question: "Preciso treinar para ter resultado?",
      answer: "Os treinos ajudam, mas não são obrigatórios. O foco principal é ajustar a alimentação e o comportamento alimentar. Quem treina potencializa os resultados, mas quem não treina também emagrece seguindo as orientações. Se quiser começar, o NutriFit30 inclui treinos acessíveis para iniciantes."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Alguns alunos relatam mudanças já na primeira semana: menos inchaço, mais energia, melhora no sono e redução da compulsão. O emagrecimento vem de forma progressiva e saudável ao longo dos 30 dias — sem loucuras, sem dietas impossíveis e sem cortar tudo que você gosta."
    },
    {
      question: "O NutriFit30 é individual ou em grupo?",
      answer: "O NutriFit30 é um programa em grupo, mas com orientações que se adaptam à sua rotina, aos seus horários e ao seu nível. O suporte é próximo, e você tem acesso direto às orientações, materiais e ajustes necessários para garantir que o processo funcione para você — mesmo dentro do formato coletivo."
    },
    {
      question: "Preciso comprar produtos, suplementos ou algo adicional para participar?",
      answer: "Não. O NutriFit30 é baseado em alimentação de verdade e prática, usando alimentos acessíveis do dia a dia. Nada no programa exige gastos extras ou produtos “milagrosos”. Temos prescrições, mas NÃO É OBRIGATÓRIO."
    }
  ];

  return (
    <section className="w-full py-20 px-6 max-w-4xl mx-auto">
      <h2 className="font-serif text-4xl font-bold text-brand-brown mb-12 text-center">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};