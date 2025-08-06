import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MatrixRain from "@/components/matrix-rain";
import SlidingPanel from "@/components/sliding-panel";
import CatalogCard from "@/components/catalog-card";
import { SiReact, SiNextdotjs, SiJavascript, SiPython, SiJson, SiNodedotjs, SiCss3, SiHtml5, SiGithub } from "react-icons/si";

export default function Home() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const showPanel = (panelType: string) => {
    setActivePanel(panelType);
  };

  const hidePanel = () => {
    setActivePanel(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        hidePanel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React e Node.js",
      link: "https://github.com/nicollascarvalh0"
    },
    {
      title: "Task Manager App",
      description: "Aplicativo de gerenciamento de tarefas com interface moderna",
      link: "https://github.com/nicollascarvalh0"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com APIs externas e visualizações",
      link: "https://github.com/nicollascarvalh0"
    }
  ];

  const technologies = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiJson, name: "JSON", color: "#000000" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" }
  ];

  return (
    <div className="bg-deep-black text-white font-orbitron overflow-x-hidden">
      <MatrixRain />
      
      {/* Fixed Side Symbol */}
      <div className="fixed left-6 top-8 z-50">
        <motion.div 
          className="text-matrix-green text-4xl md:text-6xl font-bold font-courier animate-glow"
          animate={{ 
            textShadow: [
              "0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 15px #00FF41",
              "0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41"
            ],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            textShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          &lt;&gt;
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-matrix-green mb-8 animate-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Bem-vindos ao meu portfólio
            </motion.h1>
            
            <motion.div 
              className="text-6xl mb-12 inline-block"
              animate={{ 
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            >
              👋
            </motion.div>
            
            {/* Technologies Rectangle */}
            <motion.div 
              className="bg-gradient-to-br from-deep-black to-dark-green border-2 border-matrix-green rounded-lg p-6 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 255, 65, 0.3)"
              }}
            >
              <h3 className="text-2xl font-bold text-matrix-green mb-6 text-center animate-glow">
                Tecnologias que utilizo
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.2
                      }}
                    >
                      <IconComponent 
                        className="text-3xl md:text-4xl mx-auto text-matrix-green group-hover:text-neon-green transition-all duration-300" 
                        style={{ filter: 'drop-shadow(0 0 8px var(--matrix-green))' }}
                      />
                      <p className="text-matrix-green font-courier text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Catalog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <CatalogCard
                title="Sobre mim"
                description="Conheça minha história e trajetória"
                onClick={() => showPanel('about')}
                delay={0}
              />
              
              <CatalogCard
                title="Alguns dos meus projetos"
                description="Explore meus trabalhos e criações"
                onClick={() => showPanel('projects')}
                delay={0.2}
              />
              
              <CatalogCard
                title="Onde me encontrar?"
                description="Minhas redes sociais e contatos"
                onClick={() => showPanel('contact')}
                delay={0.4}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Sliding Panels */}
      <SlidingPanel 
        isActive={activePanel === 'about'} 
        onClose={hidePanel}
        title="Sobre mim"
      >
        <div className="bg-gradient-to-br from-deep-black to-dark-green border border-matrix-green rounded-lg p-8">
          <p className="text-lg text-gray-300 font-courier leading-relaxed mb-6">
            E aí! Meu nome é Nícollas Carvalho, sou completamente apaixonado por programação e tecnologia. 
            Meu maior sonho é dominar o desenvolvimento para criar meus próprios projetos incríveis e, 
            principalmente, desenvolver games focados em RPG 3D no estilo Pixel Art - seria o máximo!
          </p>
          <p className="text-lg text-gray-300 font-courier leading-relaxed mb-6">
            Atualmente estou cursando Desenvolvimento de Sistemas e sou viciado em Inteligência Artificial. 
            Trabalho tanto com front-end quanto back-end, sempre buscando aprender algo novo e criar 
            experiências digitais que realmente façam diferença na vida das pessoas.
          </p>
          <p className="text-lg text-gray-300 font-courier leading-relaxed">
            Quando não estou programando, fico explorando novas tecnologias, mexendo com IA, 
            jogando RPGs (claro!) e pensando em como transformar ideias malucas em código que funciona. 
            Programar não é só meu trabalho, é minha paixão mesmo!
          </p>
        </div>
      </SlidingPanel>

      <SlidingPanel 
        isActive={activePanel === 'projects'} 
        onClose={hidePanel}
        title="Alguns dos meus projetos"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-deep-black to-dark-green border border-matrix-green rounded-lg p-6 hover:border-neon-green transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-matrix-green mb-4">{project.title}</h3>
              <p className="text-gray-300 font-courier mb-4">{project.description}</p>
              <button 
                onClick={() => window.open(project.link, '_blank')}
                className="bg-matrix-green text-deep-black px-4 py-2 rounded hover:bg-neon-green transition-colors font-bold flex items-center gap-2"
              >
                <SiGithub className="text-lg" />
                Ver no GitHub
              </button>
            </motion.div>
          ))}
        </div>
      </SlidingPanel>

      <SlidingPanel 
        isActive={activePanel === 'contact'} 
        onClose={hidePanel}
        title="Onde me encontrar?"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-deep-black to-dark-green border border-matrix-green rounded-lg p-8">
            <h3 className="text-2xl font-bold text-matrix-green mb-6">Redes Sociais</h3>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/niccarvalho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-matrix-green green-underline transition-all font-courier text-lg"
              >
                📸 Instagram: @niccarvalho
              </a>
              <a 
                href="https://linkedin.com/in/nicollascarvalho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-matrix-green green-underline transition-all font-courier text-lg"
              >
                💼 LinkedIn: nicollascarvalho
              </a>
              <a 
                href="https://github.com/nicollascarvalh0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-matrix-green green-underline transition-all font-courier text-lg"
              >
                🐱 GitHub: nicollascarvalh0
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-deep-black to-dark-green border border-matrix-green rounded-lg p-8">
            <h3 className="text-2xl font-bold text-matrix-green mb-6">Contato Direto</h3>
            <a 
              href="mailto:nicollaascarvalho@gmail.com"
              className="block text-gray-300 hover:text-matrix-green green-underline transition-all font-courier text-lg"
            >
              📧 nicollaascarvalho@gmail.com
            </a>
          </div>
        </div>
      </SlidingPanel>

      {/* Footer */}
      <footer className="fixed bottom-4 right-4 z-50">
        <motion.p 
          className="text-matrix-green font-courier text-sm"
          animate={{ 
            textShadow: [
              "0 0 5px #00FF41, 0 0 10px #00FF41",
              "0 0 10px #00FF41, 0 0 20px #00FF41"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          feito por Nicz, 2025
        </motion.p>
      </footer>
    </div>
  );
}
