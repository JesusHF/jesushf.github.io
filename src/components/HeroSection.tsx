import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="mb-10 min-h-screen relative flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Gaming Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mario Mushroom */}
        <div className="absolute top-1/3 right-1/4 w-8 h-8 animate-float opacity-60" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-6 bg-red-500/60 rounded-t-full relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/80 rounded-full"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-white/80 rounded-full"></div>
          </div>
          <div className="w-6 h-2 bg-yellow-200/60 rounded-b mx-1"></div>
        </div>

        {/* Mario Coin */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400/60 rounded-full border-2 border-yellow-300/40 animate-float opacity-70" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-1 border border-yellow-200/60 rounded-full"></div>
        </div>

        {/* Tetris Blocks */}
        <div className="absolute top-1/2 left-1/4 animate-float opacity-50" style={{ animationDelay: '1.5s' }}>
          {/* T-piece */}
          <div className="flex">
            <div className="w-3 h-3 bg-purple-500/60 border border-purple-400/40"></div>
            <div className="w-3 h-3 bg-purple-500/60 border border-purple-400/40"></div>
            <div className="w-3 h-3 bg-purple-500/60 border border-purple-400/40"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-3 h-3 bg-purple-500/60 border border-purple-400/40"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/3 animate-float opacity-50" style={{ animationDelay: '3s' }}>
          {/* L-piece */}
          <div className="flex flex-col">
            <div className="w-3 h-3 bg-orange-500/60 border border-orange-400/40"></div>
            <div className="w-3 h-3 bg-orange-500/60 border border-orange-400/40"></div>
            <div className="flex">
              <div className="w-3 h-3 bg-orange-500/60 border border-orange-400/40"></div>
              <div className="w-3 h-3 bg-orange-500/60 border border-orange-400/40"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 left-20 animate-float opacity-50" style={{ animationDelay: '4s' }}>
          {/* I-piece */}
          <div className="flex flex-col">
            <div className="w-3 h-3 bg-cyan-500/60 border border-cyan-400/40"></div>
            <div className="w-3 h-3 bg-cyan-500/60 border border-cyan-400/40"></div>
            <div className="w-3 h-3 bg-cyan-500/60 border border-cyan-400/40"></div>
            <div className="w-3 h-3 bg-cyan-500/60 border border-cyan-400/40"></div>
          </div>
        </div>

        {/* Space Invaders Aliens */}
        <div className="absolute top-40 right-1/3 w-8 h-6 animate-float opacity-60" style={{ animationDelay: '2.5s' }}>
          <div className="text-green-400/60 text-xl font-mono leading-none">👾</div>
        </div>

        <div className="absolute bottom-40 left-20 w-8 h-6 animate-float opacity-60" style={{ animationDelay: '3.5s' }}>
          <div className="text-green-400/60 text-xl font-mono leading-none">👾</div>
        </div>

        {/* Pac-Man Ghost */}
        <div className="absolute bottom-32 right-1/3 w-6 h-8 animate-float opacity-60" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-5 bg-red-500/60 rounded-t-full"></div>
          <div className="w-6 h-3 bg-red-500/60 relative">
            <div className="absolute bottom-0 flex">
              <div className="w-1 h-2 bg-red-500/60"></div>
              <div className="w-1 h-1 bg-transparent"></div>
              <div className="w-1 h-2 bg-red-500/60"></div>
              <div className="w-1 h-1 bg-transparent"></div>
              <div className="w-1 h-2 bg-red-500/60"></div>
              <div className="w-1 h-1 bg-transparent"></div>
            </div>
          </div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-white/80 rounded-full"></div>
        </div>

        {/* 8-bit Heart */}
        <div className="absolute top-60 left-1/3 animate-float opacity-60" style={{ animationDelay: '1.8s' }}>
          <div className="flex">
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-transparent"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
          </div>
          <div className="flex">
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
            <div className="w-2 h-2 bg-red-500/60"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-red-500/60"></div>
          </div>
        </div>

        {/* Binary code rain effect */}
        <div className="absolute top-0 left-10 text-accent/20 text-xs font-mono animate-fade-in">
          01001000
        </div>
        <div className="absolute top-20 left-40 text-primary-glow/30 text-xs font-mono animate-fade-in" style={{ animationDelay: '1s' }}>
          11010011
        </div>
        <div className="absolute top-40 left-80 text-accent/25 text-xs font-mono animate-fade-in" style={{ animationDelay: '2s' }}>
          10100110
        </div>
        <div className="absolute bottom-40 right-40 text-accent/20 text-xs font-mono animate-fade-in" style={{ animationDelay: '3s' }}>
          11110000
        </div>
        <div className="absolute bottom-60 left-60 text-primary-glow/25 text-xs font-mono animate-fade-in" style={{ animationDelay: '4s' }}>
          01010101
        </div>
        <div className="absolute top-80 right-60 text-accent/20 text-xs font-mono animate-fade-in" style={{ animationDelay: '5s' }}>
          11001100
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
          {/* Profile Avatar */}
          <div className="mb-8 mt-16">
            <div className="w-32 h-32 mx-auto rounded-full bg-secondary border-4 border-accent/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-accent">
                JH
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary-glow bg-clip-text text-transparent leading-tight py-2">
            Jesus Hernandez
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-accent">
            Game Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive gaming experiences with cutting-edge technology. 
            Passionate about bringing creative visions to life through code and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="cyber" 
              size="lg" 
              className="group"
              onClick={() => window.open('https://jesushfdev.com/cv.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>
  );
};