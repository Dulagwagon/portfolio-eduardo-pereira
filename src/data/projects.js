// src/data/projects.js

export const projectData = [
  {
    id: 1,
    title: "EcoConnect - Plataforma de Sustentabilidade",
    image: "/images/ecoconnect-thumb.png", // Certifique-se que o caminho da imagem existe!
    mainTags: ["React", "Node.js", "PostgreSQL"],
    // Opcional, mas útil: uma breve descrição para o Card
    shortDescription: "SaaS de gestão de resíduos com cálculo de pegada de carbono.",
    
    // DETALHES COMPLETOS (Para o Modal/Página Detalhe)
    details: {
      problem: "Empresas pequenas lutam para gerir dados de sustentabilidade e conformidade.",
      solution: "Painel centralizado com relatórios em tempo real e integração com APIs de parceiros.",
      challenges: ["Otimização da performance da query PostgreSQL em grande escala.", "Autenticação JWT complexa."],
      liveLink: "https://app.ecoconnect.com",
      githubLink: "https://github.com/eduardopereira/ecoconnect",
    }
  },
  {
    id: 2,
    title: "DevBlog - CMS Sem Servidor",
    image: "/images/devblog-thumb.png",
    mainTags: ["Next.js", "TypeScript", "Tailwind CSS"],
    shortDescription: "Blog pessoal de alta performance, 100% estático (SSG) com MDX e hospedagem Vercel.",
    details: {
      // ... detalhes do projeto 2
    }
  },
  // Adicione mais projetos aqui...
];