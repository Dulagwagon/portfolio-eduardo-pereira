// src/components/ProjectDetailModal.jsx

import React from 'react';
import { projectData } from '../data/projects'; // Importar dados para buscar todos os detalhes

const ProjectDetailModal = ({ project, onClose }) => {
  // Se não houver projeto selecionado (ou o projeto for null), não renderiza nada
  if (!project) return null;

  // Busca os detalhes COMPLETO do projeto usando o ID (melhor prática)
  // Nota: Isso é um mock. Se você estiver passando o objeto completo no Grid, pode usar ele diretamente.
  const fullProject = projectData.find(p => p.id === project.id) || project;

  return (
    // Fundo fixo e semi-transparente para fechar o modal
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
      onClick={onClose} // Fecha ao clicar fora do modal
    >
      
      {/* O Corpo do Modal - Evita fechar ao clicar dentro */}
      <div 
        // 🚨 CLASSE ATUALIZADA: Adicionamos o 'scrollbar-hide' (e a mágica extra no CSS)
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-scroll scrollbar-hide"
        onClick={e => e.stopPropagation()} 
      >
        <div className="p-8">
          
          {/* Título e Botão de Fechar */}
          <div className="flex justify-between items-start border-b border-gray-700 pb-4 mb-4">
            <h3 className="text-3xl font-bold text-indigo-400">{fullProject.title}</h3>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-white transition duration-200 text-3xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Seção de Conteúdo Detalhado (Depth of Work) */}
          <div className="space-y-6 text-gray-300">
            
            {/* ... (Pilha de Tecnologias) ... */}

            {/* Problema e Solução (A História) */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Problema Resolvido:</h4>
              {/* 🚨 CLASSE ADICIONADA: text-justify */}
              <p className="text-gray-400 text-justify">{fullProject.details?.problem}</p> 
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Minha Solução:</h4>
              {/* 🚨 CLASSE ADICIONADA: text-justify */}
              <p className="text-gray-400 text-justify">{fullProject.details?.solution}</p>
            </div>

            {/* Desafios Técnicos (Lista de Bullets) */}
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Desafios Técnicos e Aprendizados:</h4>
              
              {/* Bullets (Não precisam de text-justify) */}
              {fullProject.details?.challenges?.length > 1 && (
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {fullProject.details.challenges.slice(0, -1).map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                  ))}
                </ul>
              )}

              {/* Parágrafo de Encerramento (Requer justificação, se for um texto longo) */}
              {fullProject.details?.challenges?.length > 0 && (
                  <p className={`
                    mt-4 pt-3 
                    border-t border-gray-600 
                    text-base font-medium 
                    text-indigo-300
                    ${fullProject.details.challenges.length <= 1 ? '' : 'pt-4'}
                    
                    /* 🚨 CLASSE ADICIONADA AQUI TAMBÉM */
                    text-justify
                  `}>
                {fullProject.details.challenges[fullProject.details.challenges.length - 1]}
                  </p>
              )}
            </div>
          </div>
          
          {/* Links Finais */}
          <div className="flex justify-start space-x-4 mt-8 pt-4 border-t border-gray-700">
            <a href={fullProject.details?.liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full transition">
              Ver Demo Live
            </a>
            <a href={fullProject.details?.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full transition">
              Repositório GitHub
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;