// src/components/ProjectCard.jsx

import React from 'react';

// O componente recebe o objeto do projeto e a função onSelect (o setter do estado do App.jsx)
const ProjectCard = ({ project, onSelect }) => {
  // Uma checagem de segurança para garantir que o React não quebre
  if (!project) return null; 

  return (
    // O evento onClick no card principal chama a função onSelect, 
    // que setta o estado no App.jsx e abre o modal.
    <div 
      className="
        bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer 
        transition duration-300 transform hover:scale-[1.03] hover:shadow-indigo-500/50 
        border border-gray-700
      "
      onClick={() => onSelect(project)} // 🚨 Ação de clique: passa o projeto para o App
    >
      
      {/* Imagem/Miniatura do Projeto */}
      <img 
        src={project.image || 'https://via.placeholder.com/600x400?text=Projeto'} 
        alt={`Miniatura do projeto ${project.title}`} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-5">
        
        {/* Título do Projeto */}
        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
        
        {/* Descrição Curta */}
        <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>

        {/* Tags de Tecnologia (O Foco do Recrutador) */}
        <div className="flex flex-wrap gap-2">
          {project.mainTags.map((tag) => (
            <span key={tag} className="
              bg-indigo-600/30 text-indigo-300 text-xs font-medium 
              px-3 py-1 rounded-full border border-indigo-600
            ">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;