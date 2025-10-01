// src/components/ProjectGrid.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projects'; // Importa a lista de dados

const ProjectGrid = ({ onProjectSelect }) => { 
  return (

    <section id="projects" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (Título da Seção permanece) ... */}
                <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
                    Projetos
                </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {
            projectData.map((project) => (
              // 🚨 Passa a função de seleção para o card
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={onProjectSelect} // Passamos a função aqui
              />
            ))
          }
        </div>
        
        {/* ... (CTA para GitHub permanece) ... */}

      </div>
    </section>
  );
};

export default ProjectGrid;