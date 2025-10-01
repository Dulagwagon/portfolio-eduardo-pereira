// src/components/HeroSection.jsx

import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 
                        bg-gradient-to-br from-gray-900 to-black p-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Nome */}
        <h2 className="text-xl sm:text-3xl text-gray-400 font-light mb-12">
          <strong>EDUARDO PEREIRA</strong>
        </h2>

        {/* Destaque (Tech Stack) */}
        <p className="text-lg sm:text-xl text-indigo-400 font-medium mb-3 
                      tracking-widest animate-pulse">
          FUTURO FULL STACK DEV | REACT | NODE.JS
        </p>
        
        {/* Título Principal (Headline) */}
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4 
                       bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
          De Ideias a Deploy. Futuro Full Stack Developer.
        </h1>
        
        {/* Subtítulo */}
        <h2 className="text-xl sm:text-3xl text-gray-400 font-light mb-12">
          Explore meus projetos em <strong>React, Node.js e Python</strong> e veja como conceitos ganham vida em soluções reais.
        </h2>
        
        {/* Container para os CTAs */}
        <div className="flex justify-center space-x-4">
          
          {/* CTA Principal: Ver Projetos */}
          <a href="#projects" className="
            bg-indigo-600 hover:bg-indigo-500 text-white font-semibold 
            py-3 px-8 rounded-full shadow-2xl 
            transition duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-70
          ">
            Ver Projetos →
          </a>
          
          {/* CTA Secundário: Baixar CV */}
          <a href="/seu-cv.pdf" download className="
            bg-transparent border border-white hover:bg-white hover:text-gray-900 
            text-white font-semibold py-3 px-8 rounded-full 
            transition duration-300 transform hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
          ">
            Download CV
          </a>
        </div>

        {/* Indicador de Rolar (Opcional) */}
        <div className="mt-16 text-gray-500">
             <span className="animate-bounce">↓</span> Explore meus projetos em React, Node.js e Python e veja como conceitos ganham vida em soluções reais.
        </div>

      </div>
    </section>
  );
};

export default HeroSection;