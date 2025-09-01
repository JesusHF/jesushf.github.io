import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Code, Gamepad2, Palette, Zap, Speech } from "lucide-react";

const categories = [
  "Languages",
  "Game Engines",
  "Programming Languages",
  "Tools"
];

const skills = [
  { name: "Unity", icon: Gamepad2, category: "Game Engines" },
  { name: "Unreal Engine", icon: Gamepad2, category: "Game Engines" },
  { name: "C++", icon: Code, category: "Programming Languages" },
  { name: "C#", icon: Code, category: "Programming Languages" },
  { name: "Python", icon: Code, category: "Programming Languages" },
  { name: "Git", icon: Zap, category: "Tools" },
  { name: "Perforce", icon: Zap, category: "Tools" },
  { name: "English (Advanced)", icon: Speech, category: "Languages" },
  { name: "Spanish (Native)", icon: Speech, category: "Languages" },
  { name: "Italian (Intermediate)", icon: Speech, category: "Languages" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="pb-10 mb-10 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate game developer with 5+ years of experience crafting immersive
                interactive experiences. My journey began with a Computer Science degree and
                evolved through countless hours of experimentation with game engines, programming
                languages, and creative problem-solving.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me is the unique intersection of technology and creativity that game
                development offers. Whether I'm optimizing performance for mobile platforms,
                or collaborating with designers and artists to bring fantastical worlds to life, 
                I thrive on the challenges that come with creating something truly engaging.
              </p>

              <div className="pt-4">
                <Button
                  variant="cyber"
                  className="group"
                  onClick={() => window.open('cv.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Full CV
                </Button>
              </div>
            </div>

            {/* Right side - Skills */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Skills & Technologies</h3>

                <div className="space-y-6">
                  {categories.map((category) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills
                          .filter(skill => skill.category === category)
                          .map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                              <Badge
                                key={skill.name}
                                variant="secondary"
                                className="px-3 py-2 bg-card border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 cursor-default group"
                              >
                                <IconComponent className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                                {skill.name}
                              </Badge>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};