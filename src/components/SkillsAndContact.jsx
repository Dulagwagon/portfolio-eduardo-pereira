// src/components/SkillsAndContact.jsx

import React from 'react';
// Ícones do React Icons (você precisará instalá-los: npm install react-icons)
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const SkillsAndContact = () => {
    
    const skills = [
        { category: "Front-end Core", icon: FaReact, list: ["React", "JavaScript (ES6+)", "TypeScript (Básico)", "Tailwind CSS", "Redux/Zustand"] },
        { category: "Back-end & DB", icon: FaNodeJs, list: ["Node.js", "Express", "Python", "SQL (PostgreSQL)", "MongoDB (NoSQL)"] },
        { category: "Ferramentas & DevOps", icon: FaGitAlt, list: ["Git/GitHub", "Docker", "CI/CD (Conceitos)", "Vite", "ESLint"] },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-100 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-4xl font-extrabold text-center mb-16">
                    Habilidades Técnicas e Contato
                </h2>

                {/* Grid de Habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {skills.map((skill) => (
                        <div key={skill.category} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <skill.icon className="text-indigo-600 text-3xl mb-3" />
                            <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {skill.list.map((item) => (
                                    <li key={item} className="hover:text-indigo-600 transition duration-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Seção de Contato (CTA Final) */}
                <div className="text-center bg-indigo-600 p-10 rounded-xl shadow-2xl">
                    {/* ... (títulos e parágrafos) ... */}

                    <div className="flex justify-center space-x-6">
                        
                        <a 
                            href="mailto:eduardo.pereira@sme.prefeitura.sp.gov.br" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-white text-indigo-600 font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-200"
                        >
                            <FaEnvelope className="text-xl" />
                            <span>Enviar E-mail</span>
                        </a>
                        
                        {/* CTA para LinkedIn (mantido) */}
                        <a href="https://linkedin.com/in/edupereira84" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-gray-700">
                            <FaLinkedin className="text-xl" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SkillsAndContact;