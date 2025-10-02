// src/components/JourneySection.jsx

import React from 'react';
import { FaLaptopCode } from 'react-icons/fa'; 

const JourneySection = () => {
  return (
    // Mantemos o fundo e a justificação do texto
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-extrabold text-center mb-16 text-indigo-400">
          Minha Jornada de Desenvolvimento
        </h2>

        {/* Layout de Duas Colunas */}
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          
          {/* Coluna 1: Imagem de Perfil */}
          <div className="w-full lg:w-1/4 flex-shrink-0 mb-8 lg:mb-0 text-center">
            <img
              src="images/eduardo-perfil.jpg"
              alt="Foto de perfil de Eduardo Pereira"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-indigo-600 object-top" 
            />
            <div className="mt-4 text-xl font-semibold text-gray-300">Eduardo Pereira</div>
            <div className="text-indigo-400">Futuro Full Stack Developer</div>
          </div>

          {/* Coluna 2: A Narrativa da Trajetória - Classe text-justify aplicada aqui! */}
          <div className="w-full lg:w-3/4 space-y-6 text-lg text-justify">
            
            {/* Parágrafo 1: A Fundação Técnica (2007) */}
            <p className="border-l-4 border-indigo-600 pl-4">
              Minha paixão por tecnologia nasceu em <strong>2007</strong>, construindo uma <strong>base sólida em hardware, redes e sistemas</strong>. Comecei na Data-Byte, ministrando aulas de montagem, manutenção de micros, Linux e redes, época em que já desenvolvia meus primeiros projetos em <strong>HTML</strong>. Essa fundação me ensinou a pensar de forma <strong>estruturada</strong> e do <strong>bare metal</strong> ao código.
            </p>

            {/* 🚨 Parágrafo 2: O Foco em Gestão e Produto (PO/POED) */}
            <p className="border-l-4 border-indigo-600 pl-4">
              O interesse por soluções de TI e a visão de projeto evoluíram durante minha atuação na rede municipal de ensino de SP. Fui <strong>Professor Orientador de Informática Educacional (POED)</strong> e, entre <strong>2023 e 2024</strong>, atuei como <strong>Product Owner (PO)</strong> do projeto <strong>SIG-Escola</strong> na Secretaria Municipal de Educação. Essa experiência me deu uma visão aprofundada em <strong>gestão de stakeholders, planejamento e definição de requisitos de software em grande escala</strong>.
            </p>

            {/* Parágrafo 3: A Formalização e Stack Moderna (UNIVESP) */}
            <p className="border-l-4 border-indigo-600 pl-4">
              Em 2021, formalizei essa jornada na <strong>UNIVESP</strong> (Engenharia da Computação e TI). Concluí o <strong>BTI em agosto de 2025</strong> (com Engenharia prevista para o final do ano). Nos estudos, dominei frameworks robustos como <strong>Django e Flask</strong>, e adquiri o conhecimento teórico e prático para construir as arquiteturas modernas.
            </p>
            
            {/* CTA Final da Jornada */}
            <div className="flex items-center space-x-3 pt-4 text-indigo-400 font-semibold">
                <FaLaptopCode className="text-2xl" />
                <span>Pronto para aplicar essa experiência em sua próxima solução.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;