import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-darkBrown py-8 text-center px-6">
      <p className="text-[#EFE8DA]/40 text-sm">
        Copyright © 2025 — Todos os Direitos Reservados. Nutrifit30.
      </p>
      <div className="mt-4 flex justify-center gap-4 text-[#EFE8DA]/20 text-xs">
        <span>Termos de Uso</span>
        <span>Políticas de Privacidade</span>
      </div>
    </footer>
  );
};