import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Poysky Productions",
    role: "Unity Developer",
    duration: "03/2024 - 09/2025",
    location: "Remote",
    description: "Lead Unity C# Developer on two unreleased projects, responsible for core gameplay systems and overall technical architecture. Implemented systems including an advanced Animation State Machine with attack combos, AI Behavior Trees, and farming mechanics.",
    technologies: ["Unity", "C#", "Git"],
    games: [
      { name: "Two unreleased projects", link: "#experience" }
    ]
  },
  {
    company: "Outplay Entertainment (with Rovio)",
    role: "C++ Engineer",
    duration: "08/2023 - 02/2024",
    location: "Remote",
    description: "C++ Gameplay Engineer on Angry Birds Pop, partnered with Rovio to deliver live feature updates and ensure efficient bug resolution.",
    technologies: ["C++", "Unity", "Jenkins (CI/CD)", "SVN"],
    games: [
      { name: "Angry Birds Pop", link: "https://www.rovio.com/games/angry-birds-pop/" }
    ]
  },
  {
    company: "Ubisoft Barcelona",
    role: "Junior Gameplay Programmer",
    duration: "07/2021 - 07/2023",
    location: "Barcelona (Hybrid)",
    description: "Gameplay Programmer on Rainbow Six Siege. Collaborated with international teams across +/-6h time zones to implement live features using C++ and Ubisoft's proprietary Anvil engine.",
    technologies: ["C++", "Anvil (Ubisoft proprietary engine)", "Perforce"],
    games: [
      { name: "Tom Clancy's Rainbow Six Siege", link: "https://www.ubisoft.com/en-us/game/rainbow-six/siege" }
    ]
  },
  {
    company: "King",
    role: "Game Developer (Temporary Contract)",
    duration: "03/2020 - 09/2020",
    location: "Barcelona (Remote)",
    description: "Delivered new LiveOps features, reduced crash frequency through bug fixing, and improved game performance by refactoring and maintaining legacy systems.",
    technologies: ["C++", "Fiction Factory (King's propietary engine)", "Jenkins (CI/CD)", "Git"],
    games: [
      { name: "Pyramid Solitaire Saga", link: "https://www.king.com/es/game/pyramid/" }
    ]
  },
  {
    company: "Devilish Games",
    role: "Game Programmer Intern",
    duration: "02/2019 - 05/2019",
    location: "Alicante (On-site)",
    description: "Developed a Unity3D adaptation of Who Wants to Be a Millionaire, building core gameplay systems and UI from scratch.",
    technologies: ["Unity", "C#", "Git"],
    games: [
      { name: "Who Wants to Be a Millionaire (Gameplay video)", link: "https://www.youtube.com/watch?v=e1UFBaTBnAU" }
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-10 mb-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_8px_32px_rgba(0,255,255,0.1)]"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      <h4 className="text-xl font-semibold text-accent mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary/50 border border-accent/20 hover:border-accent/40 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Games Worked On */}
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                        Games Shipped
                      </h5>
                      <div className="space-y-2">
                        {exp.games.map((game) => (
                          <a
                            key={game.name}
                            href={game.link}
                            className="flex items-center gap-2 text-accent hover:text-accent-glow transition-colors group/link"
                          >
                            <span>{game.name}</span>
                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
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