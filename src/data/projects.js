// src/data/projects.js

import { DiJavascript } from "react-icons/di";

export const projectData = [
  {
    id: 1,
    title: "Realtime USD Monitor 🤑",
    image: "images/realtimeusd.png", // Certifique-se que o caminho da imagem existe!
    mainTags: ["Python", "Real-Time", "Data-Monitoring", "REST-API", "Finance", "Exchange-Rate", "Automation", "CSV"],

    // Opcional, mas útil: uma breve descrição para o Card
    shortDescription: "Script em Python que consulta a cotação do dólar, registra dados históricos em CSV e atualiza automaticamente.",
    
    // DETALHES COMPLETOS (Para o Modal/Página Detalhe)
    details: {
      problem: "O processo de monitoramento de cotações em tempo real é ineficiente e propenso a erros quando realizado manualmente. Isso requer o acesso repetitivo a múltiplas fontes e a intervenção humana para registrar o histórico dos dados, resultando em um sistema de monitoramento não personalizável, não confiável e com alto custo de tempo.",
      solution: "Desenvolveu-se um script Python automatizado para centralizar a coleta de dados de cotações em tempo real através de uma REST API especializada. A solução não apenas automatiza a consulta de forma programável, mas também garante a integridade dos dados através do registro persistente e estruturado em formato CSV, com a personalização completa do intervalo de monitoramento pelo usuário.",
      challenges: ["Integração com API externa;", "Tratamento de erros de rede;", "Histórico de dados confiável;", "Prevenção de duplicidades;", "Controle de Frequência;", "Gerenciamento de Credenciais.", "O principal desafio foi construir uma solução robusta de data collection, lidando com a integração e tratamento de erros de uma REST API externa. Fui responsável por garantir a persistência e integridade dos dados históricos no arquivo CSV e implementar a automação do script para que o monitoramento funcionasse de forma contínua em tempo real."],
      //liveLink: "https://app.ecoconnect.com",
      githubLink: "https://github.com/Dulagwagon/realtime-usd-monitor",
    }
  },
  {
    id: 2,
    title: "Portfólio pessoal - Node.js - React",
    image: "images/portfolio.png",
    mainTags: ["React", "Tailwind-CSS", "Vite", "JavaScript", "Full-Stack", "Clean-Architecture", "Responsive-Design", "Node.js", "Redux"],
    shortDescription: "Portfólio Pessoal moderno construído com React (Hooks/Redux) e estilizado com Tailwind CSS. Demonstra habilidades Full Stack, com foco em arquitetura escalável e design totalmente responsivo.",
    details: {
      problem: "O desafio era criar uma plataforma única e moderna que servisse como vitrine profissional digital, capaz de exibir minhas habilidades técnicas de Desenvolvedor Full Stack de forma organizada e com alto padrão de design. Era necessário ir além de um simples currículo, oferecendo uma experiência de usuário fluida e responsiva que demonstrasse proficiência em tecnologias de ponta.",
      solution: "Desenvolvi um Portfólio Pessoal como uma Single Page Application (SPA) de alta performance. A solução foi construída utilizando React para o frontend, priorizando a componentização e o gerenciamento de estado (via Hooks/Context/Redux). Para garantir um design limpo e de fácil manutenção, utilizei o Tailwind CSS para estilização, resultando em uma interface totalmente responsiva e otimizada para todas as telas.",
      challenges: ["React;", "Tailwind-CSS;", "Vite;", "JavaScript;", "Full-Stack;", "Clean-Architecture;", "Responsive-Design.", "Este projeto exigiu a integração do frontend React com o framework de estilização Tailwind CSS para criar uma Single Page Application (SPA) de alto padrão. O desafio foi garantir um design totalmente responsivo e otimizar a Web Performance, ao mesmo tempo que adotei uma arquitetura limpa e modular. A solução final é uma vitrine Full Stack que demonstra proficiência em soluções modernas e escaláveis."],
      liveLink: "https://portfolio-eduardo-pereira-fawn.vercel.app",
      githubLink: "https://github.com/Dulagwagon/portfolio-eduardo-pereira",
    }
  },
  {
    id: 3, 
    title: "Coletor de Dados de E-commerce (Web Scraper)",
    image: "images/scraper.png", 
    mainTags: ["Python", "Scrapy", "Async I/O", "JSON/CSV"], 
    shortDescription: "Motor de Web Scraping customizado e assíncrono, desenvolvido com Scrapy, para coleta de dados de produtos e avaliações em grandes varejistas online.",
    
    details: {
      problem: "A falta de dados estruturados e atualizados sobre a concorrência e a opinião do consumidor dificultava a análise de mercado e a precificação dinâmica.",
      solution: "Desenvolvimento de um spider customizado usando o framework Scrapy em Python. A arquitetura assíncrona garante alta eficiência na coleta de milhares de pontos de dados, que são então estruturados em JSON para processamento posterior ou exportação para CSV.",
      challenges: [
        "Implementação de rotação de proxies e User-Agents para evitar bloqueio por bot-detection da plataforma alvo.",
        "Padronização e limpeza de dados (Data Cleaning) complexos, incluindo tratamento de strings inconsistentes antes da exportação.",
        "O principal desafio foi a arquitetura legal e ética. Assegurei que a solução respeitasse estritamente o `robots.txt` do site alvo e as políticas de uso da plataforma, garantindo a integridade e legalidade de toda a coleta de dados."
      ],
      //liveLink: "", 
      githubLink: "https://github.com/Dulagwagon/web-scraper", 
    }
  },
  {
    id: 4,
    title: "Hobby - Pygame: Criminal Hunt",
    image: "images/portfolio.png",
    mainTags: ["Python", "Pygame", "Game-Development", "Beat-em-up", "2D-Game", "OOP","Retro-Gaming"],
    shortDescription: "Projeto hobby de Desenvolvimento de Jogos (Game Dev): Um jogo estilo Beat 'em up 2D inspirado nos clássicos dos anos 90. Construído totalmente em Python utilizando a biblioteca Pygame, demonstrando proficiência em lógica de jogo, física e OOP.",
    details: {
      problem: "O desafio era traduzir a jogabilidade dinâmica e complexa de um jogo estilo Beat 'em up 2D (que exige animação, combate e movimentação precisa) em um ambiente de desenvolvimento de hobby como o Pygame. Era crucial desenvolver uma arquitetura de código sólida capaz de gerenciar múltiplos elementos em tela, estados de jogo e interações de combate fluidas.",
      solution: "Desenvolvi o 'Criminal Hunt' utilizando a abordagem Orientada a Objetos (OOP) em Python, onde cada entidade (jogador, inimigos, armas) é uma classe distinta. A solução implementa um loop de jogo eficiente para gerenciar a renderização de gráficos, o áudio e a detecção de colisões, resultando em um protótipo funcional de jogo 2D arcade que captura a essência dos clássicos dos anos 90.",
      challenges: ["Python;", "Pygame;", "Game-Development;", "Beat-em-up;", "2D-Game;", "OOP;", "Retro-Gaming.", "Detecção e Resposta a Colisão (Collision Detection): Implementar e otimizar a lógica de detecção de colisões entre os sprites (personagens, ataques, cenário) para garantir interações de combate e física precisas e justas. Gerenciamento de Estados e Animações: Desenvolver um sistema robusto para gerenciar os diferentes estados do jogador e dos inimigos (parado, andando, atacando, sofrendo dano), garantindo transições de animação suaves sem falhas visuais (glitches). Sistema de Input e Controle: Criar um input handler (manipulador de entrada) eficiente para processar comandos complexos e combinados (ex: soco, chute, pulo) que exigem rápida resposta para a jogabilidade beat 'em up."],
      //liveLink: "https://app.ecoconnect.com",
      githubLink: "https://github.com/Dulagwagon/portfolio-eduardo-pereira",
    }
  },
  {
    id: 5,
    title: "Dashboard Power BI: Painel Nacional de Acidentes Rodoviários",
    image: "images/PBI.png",
    mainTags: ["Power BI", "DAX", "Power Query", "M Language", "Data Modeling", "Data Visualization", "ETL", "KPI", "Dashboard Design", "Data Analysis", "Interactive Reports"],
    shortDescription: "Dashboard interativo desenvolvido no Power BI para análise de acidentes rodoviários em território nacional. O painel integra dados públicos, visualizações geoespaciais e indicadores dinâmicos, permitindo insights sobre causas, regiões críticas e evolução temporal dos acidentes.",
    details: {
      problem: "O desafio era consolidar e interpretar grandes volumes de dados públicos de acidentes rodoviários provenientes de diferentes fontes e formatos. A ausência de padronização, a falta de integração entre os registros estaduais e federais, e a necessidade de comunicar informações complexas de forma visual e acessível exigiam uma solução analítica robusta e bem estruturada.",
      solution: "A solução foi desenvolver um dashboard interativo no Power BI capaz de unificar e visualizar dados nacionais de acidentes rodoviários. O projeto utilizou modelagem de dados otimizada no Power Query, criação de medidas e indicadores em DAX, e aplicação de segmentações dinâmicas para permitir análises por estado, tipo de ocorrência, período e gravidade. O design foi pensado para apresentar insights de forma clara e intuitiva, auxiliando a tomada de decisão e a compreensão dos padrões de acidentes em todo o território brasileiro.",
      challenges: [
        "Integração de múltiplas fontes de dados com diferentes estruturas e formatos;",
        "Criação de medidas e KPIs complexos utilizando DAX;", "Garantia de performance e responsividade do dashboard em consultas com grande volume de dados;",
        "Aplicação de princípios de Data Storytelling para comunicar padrões e tendências com clareza;",
        "Padronização visual e hierarquia informacional, assegurando consistência entre painéis;",
        "Construção de filtros e segmentações dinâmicas sem comprometer a fluidez da navegação.",
        "Esse projeto exigiu o domínio da linguagem DAX e um olhar analítico voltado para a experiência do usuário. O maior desafio foi transformar um grande volume de informações em um painel visualmente coeso, intuitivo e capaz de gerar insights relevantes sobre a segurança viária no Brasil."
      ], 
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiMzRiZGQyMzktMTcwYi00MDdhLWI5MmEtZTgxMTdlNmVjZDhhIiwidCI6IjY1NWFhNjFkLTVkY2ItNDE4Mi05N2YxLTJmNTQ5MTlkZTBjZiJ9",
      //githubLink: "https://github.com/Dulagwagon/portfolio-eduardo-pereira",
    }
  },
    {
    id: 6,
    title: "SIGAC - Sistema Integrado de Gestão de Acervo",
    image: "images/sigac.png",
      mainTags: [
    "Django",
    "Python",
    "Vite",
    "Bootstrap",
    "SQLite",
    "Full-Stack",
    "CRUD"
  ],
    shortDescription:
    "Sistema completo de gestão de acervo literário, desenvolvido com Django no backend e Vite + Bootstrap no frontend. O SIGAC permite cadastrar, organizar e consultar obras, autores e categorias de forma prática e intuitiva.",
    details: {
      problem:
      "O desafio era criar uma solução acessível e eficiente para o gerenciamento de acervos literários, permitindo organização, busca e controle de obras. Além disso, era necessário integrar frontend moderno com backend robusto utilizando tecnologias distintas.",

    solution:
      "A solução foi a construção de um sistema full-stack utilizando Django como base para regras de negócio e persistência de dados, enquanto o frontend em Vite + Bootstrap fornece uma interface rápida, responsiva e moderna. O sistema oferece CRUD completo, validação de formulários, paginação e uma arquitetura escalável.",

    challenges: [
      "Integração entre Django e frontend moderno (Vite);",
      "Modelagem de dados eficiente no SQLite;",
      "Implementação de CRUD robusto com validações;",
      "Criação de interface responsiva com Bootstrap;",
      "Configuração de rotas e comunicação entre camadas.",
      "Esse projeto exigiu a integração harmoniosa entre um backend robusto em Django e um frontend moderno em Vite, além de uma modelagem de dados sólida para garantir consistência e escalabilidade. O maior desafio foi equilibrar arquitetura, usabilidade e organização do acervo, transformando requisitos funcionais em uma aplicação prática, clara e eficiente para gerenciamento literário."
    ],
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiMzRiZGQyMzktMTcwYi00MDdhLWI5MmEtZTgxMTdlNmVjZDhhIiwidCI6IjY1NWFhNjFkLTVkY2ItNDE4Mi05N2YxLTJmNTQ5MTlkZTBjZiJ9",
      //githubLink: "https://github.com/Dulagwagon/portfolio-eduardo-pereira",
    }
  },
  // Adicione mais projetos aqui...
];