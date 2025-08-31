import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, Globe } from "lucide-react";
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const ContactSection = () => {
  return (
    <section id="contact" className="pb-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on your next gaming project? I'm always excited to discuss 
              new opportunities and creative challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-accent">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a passionate developer to join your team, 
                  have a project idea you'd like to discuss, or just want to connect 
                  with a fellow game enthusiast, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@jesushfdev.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Current Location</p>
                    <p className="text-muted-foreground">Barcelona, Spain</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Timezone</p>
                    <p className="text-muted-foreground">Central Europe Time (CET)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    size="icon"
                    className="border-accent/30 hover:border-accent hover:bg-accent/10"
                    onClick={() => window.open('https://www.linkedin.com/in/jesushf/', '_blank')}
                  >
                    <SiLinkedin className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="icon"
                    className="border-accent/30 hover:border-accent hover:bg-accent/10"
                    onClick={() => window.open('https://github.com/jesushf', '_blank')}
                  >
                    <SiGithub className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-accent">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input 
                        className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email" 
                        className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20" 
                      placeholder="Job opportunity, project collaboration, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20 min-h-32" 
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button variant="cyber" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};