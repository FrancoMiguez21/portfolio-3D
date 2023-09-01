import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mongodb,
    git,
    figma,
    threejs,
    carHub,
    codex,
    movieApp,
    musicApp,
    promptopia,
    youtubeClone,
    githubTech,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Mi",
    },
    {
      id: "work",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: githubTech,
    },
  ];
  
  
  const projects = [
    {
      name: "Red Social",
      description:
        "Aplicación full stack creada en base a twitter, el usuario puede registrarse, personalizar su perfil, twittear, comentar y compartir esta experciencia con todo el mundo.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: codex,
      
      source_code_link: "https://github.com/FrancoMiguez21/codex-app",
      live_site_link: "https://codex-app-blue.vercel.app/",
    },
    {
      name: "Car Hub",
      description:
      "Diseñada para el alquiler de autos, proporciona a los usuarios una experiencia completa y conveniente para encontrar y rentar vehículos.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: carHub,
      source_code_link: "https://github.com/FrancoMiguez21/car-showcase",
      live_site_link: "https://car-showcase-psi-nine.vercel.app/",
  
    },
    {
      name: "Util Prompts",
      description:
        "Una aplicación full stack especialmente diseñada para fomentar la creatividad y la inspiración a través de la creación y compartición de prompts.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/FrancoMiguez21/promptopia-final",
      live_site_link: "https://promptopia-final.vercel.app/",
  
    },
    {
      name: "Music App",
      description:
        "Esta plataforma te brinda un vasto catálogo de canciones. Explora, reproduce y sumérgete en la música mientras descubres las letras y la información de los artistas.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: musicApp,
      source_code_link: "https://github.com/FrancoMiguez21/react-music-app",
      live_site_link: "https://react-music-app-gamma.vercel.app/",
    },
    {
      name: "Youtube Clone",
      description:
        "Creada para la visualización de videos, ofrece a los usuarios una plataforma íntegra y accesible para descubrir y disfrutar contenidos audiovisuales.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeClone,
      source_code_link: "https://github.com/FrancoMiguez21/react-youtube-clone",
      live_site_link: "https://react-youtube-clone-rouge.vercel.app/",
  
    },
    {
      name: "Movie App",
      description:
        "Concebida para la búsqueda de películas, brinda a los usuarios una vivencia integral y práctica para descubrir y reproducir contenidos cinematográficos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: movieApp,
      source_code_link: "https://github.com/FrancoMiguez21/react-movie-app",
      live_site_link: "https://react-movie-app-gules.vercel.app/",
  
    },
  ];
  
  export { technologies, projects };