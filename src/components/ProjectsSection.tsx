import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Play } from "lucide-react";
import { SiGithub } from 'react-icons/si'
import wwGameImage from '@/assets/img/ww.png'
import kotjGameImage from '@/assets/img/kotj.png'
import packedtoryGameImage from '@/assets/img/packedtory.png'
import rollablazeGameImage from '@/assets/img/rollablaze.jpg'
import itchGameImage from '@/assets/img/itchio.png'
import catchyGameImage from '@/assets/img/catchy.png'

const projects = [
  {
    title: "Wizards and Warlocks",
    description: "Team-based 3D shooter, local-network multiplayer, with the goal to defend or conquer the Holy Grail. Built from scratch in C++ using a custom engine (Travelers Ocular Engine).",
    image: wwGameImage,
    technologies: ["C++", "Custom Physics Engine", "Net/Graphics Engine", "Travelers Ocular Engine"],
    links: {
      demo: "https://travellersinn.itch.io/wizardsandwarlocks",
      github: "https://github.com/TravelersInnOfficial/WizardsAndWarlocks"
    },
    status: "Released",
    featured: true
  },
  {
    title: "King of the Jungle",
    description: "Local multiplayer 2D shooter for GNU/Linux, with up to 4 players (or AI). Two game modes: All vs All and Coin Collect. Developed using C++, SFML, and Box2D.",
    image: kotjGameImage,
    technologies: ["C++", "SFML", "Box2D", "GNU/Linux"],
    links: {
      demo: "https://travellersinn.itch.io/kotj",
      github: "https://github.com/TravelersInnOfficial/KingJungle2k17"
    },
    status: "Released",
    featured: true
  },
  {
    title: "Catchy Tune Replica",
    description: "This game is a replica of the minigame Catchy Tune for the 3ds game \"Rhythm Paradise Megamix\" made in Unity. All the sprites are redrawn by me, also tried to recreate the same feel when you play the original game.",
    image: catchyGameImage,
    technologies: ["Unity3D", "C#"],
    links: {
      demo: "https://jesushf.itch.io/catchy-tune",
      github: "https://github.com/JesusHF/catchy-tune-replica"
    },
    status: "Released",
    featured: false
  },
  {
    title: "Packedtory",
    description: "Made for my Bachelor's Thesis. Written in assembly for the Game Boy (gbZ80), playable on classic Game Boy, Game Boy Color, and Game Boy Advance. A factory planning game involving limited space and routing boxes.",
    image: packedtoryGameImage,
    technologies: ["Assembly (gbZ80)", "Game Boy"],
    links: {
      demo: "https://jesushf.itch.io/packedtory",
      github: "https://github.com/JesusHF/packedtory/"
    },
    status: "Released",
    featured: false
  },
  {
    title: "RollaBlaze",
    description: "Developed for CPCRetroDev 2017 contest. Written in Z80 assembly using the CPCtelera library. Playable on a real Amstrad CPC 464. Dodge increasing obstacles to reach the end.",
    image: rollablazeGameImage,
    technologies: ["Z80 Assembly", "CPCtelera", "Amstrad CPC 464"],
    links: {
      demo: "https://jesushf.itch.io/rollablaze",
      github: "https://github.com/ABPMultimediaUA/grupo3"
    },
    status: "Released",
    featured: false
  },
  {
    title: "More Projects",
    description: "A curated list of additional games created over the years, including gamejam entries and personal projects, available on itch.io.",
    image: itchGameImage,
    technologies: ["Unity3D", "C#", "Various"],
    links: {
      demo: "https://jesushf.itch.io/"
    },
    status: "Portfolio",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-10 mb-10 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Personal Projects
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my independent game development projects, ranging from experimental prototypes to fully released games.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`bg-card border transition-all duration-300 group hover:shadow-[0_12px_40px_rgba(0,255,255,0.15)] ${
                  project.featured 
                    ? "border-accent/40 hover:border-accent" 
                    : "border-accent/20 hover:border-accent/40"
                }`}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="aspect-video bg-muted relative group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          project.status === "Released" 
                            ? "bg-green-500/20 text-green-400 border-green-400/30" 
                            : project.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-400/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-400/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-secondary/50 border border-accent/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.links.demo && (
                      <Button 
                        variant="cyber" 
                        size="sm" 
                        className="group"
                        onClick={() => window.open(project.links.demo, '_blank', 'noopener,noreferrer')}
                      >
                        <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Play the game
                      </Button>
                    )}
                    
                    {project.links.github && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-accent/30 hover:border-accent hover:bg-accent/10"
                        onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}
                      >
                        <SiGithub className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};