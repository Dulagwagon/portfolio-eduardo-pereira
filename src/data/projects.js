// src/data/projects.js

export const projectData = [
  {
    id: 1,
    title: "Realtime USD Monitor 🤑",
    image: "/src/images/realtimeusd.png", // Certifique-se que o caminho da imagem existe!
    mainTags: ["Python", "Real-Time", "Data-Monitoring", "REST-API", "Finance", "Exchange-Rate", "Automation", "CSV"],

    // Opcional, mas útil: uma breve descrição para o Card
    shortDescription: "Script em Python que consulta a cotação do dólar, registra dados históricos em CSV e atualiza automaticamente.",
    
    // DETALHES COMPLETOS (Para o Modal/Página Detalhe)
    details: {
      problem: "Busca por cotação em tempo real na internet, diversas aberturas de página e fontes com intervalo predefinido, sem possibilidade de personalização.",
      solution: "Automatização da consulta à cotação, com possibilidade de configuração do intervalo.",
      challenges: ["Integração com API externa;", "Tratamento de erros de rede;", "Histórico de dados confiável;", "Prevenção de duplicidades;", "Controle de Frequência;", "Gerenciamento de Credenciais.", "O principal desafio foi construir uma solução robusta de data collection, lidando com a integração e tratamento de erros de uma REST API externa. Fui responsável por garantir a persistência e integridade dos dados históricos no arquivo CSV e implementar a automação do script para que o monitoramento funcionasse de forma contínua em tempo real."],
      liveLink: "https://app.ecoconnect.com",
      githubLink: "https://github.com/Dulagwagon/realtime-usd-monitor",
    }
  },
  {
    id: 2,
    title: "DevBlog - CMS Sem Servidor",
    image: "/src/images/realtimeusd.png",
    mainTags: ["Next.js", "TypeScript", "Tailwind CSS"],
    shortDescription: "Blog pessoal de alta performance, 100% estático (SSG) com MDX e hospedagem Vercel.",
    details: {
      // ... detalhes do projeto 2
    }
  },
  // Adicione mais projetos aqui...
];