// src/App.jsx

import React, { useState } from 'react';
import HeroSection from './components/HeroSection'; 
import ProjectGrid from './components/ProjectGrid';
import SkillsAndContact from './components/SkillsAndContact'; 
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal'; 
import JourneySection from './components/JourneySection';

function App() {
  const [selectedProject, setSelectedProject] = useState(null); 
  const closeModal = () => setSelectedProject(null);

  return (
    // O fragmento ou <div> principal
    <>
      {/* 1. SEÇÃO DE APRESENTAÇÃO */}
      <HeroSection />

      {/* 2. MINHA JORNADA (Nova Seção) */}
      <JourneySection />

      {/* 3. CONTEÚDO PRINCIPAL (Depth of Work) */}
      <ProjectGrid onProjectSelect={setSelectedProject} />

      {/* 4. SEÇÃO DE HABILIDADES E CONTATO (Integração) */}
      <SkillsAndContact />

      {/* 5. RODAPÉ */}
      <Footer />

      {/* 6. MODAL (Sempre por último para garantir que fique por cima) */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={closeModal} 
      />
    </>
  );
}

export default App;