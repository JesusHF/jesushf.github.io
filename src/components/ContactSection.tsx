import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, Globe } from "lucide-react";
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactSection = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    honeypot: "", // Anti-spam field
    replyTo: "@", // This will set replyTo to the email provided
    apiKey: import.meta.env.VITE_STATIC_FORMS_API_KEY || '',
    "g-recaptcha-response": "" // Will be filled programmatically
  });

  const [response, setResponse] = useState({
    type: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Force extraction of name from id if name is empty
    const name = e.target.name || e.target.id;
    const value = e.target.value;

    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setFormData({
      ...formData,
      "g-recaptcha-response": token || ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If we don't have a reCAPTCHA response yet, return early
    if (!formData["g-recaptcha-response"]) {
      setResponse({
        type: "error",
        message: "❌ Please confirm reCAPTCHA first."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      });

      const json = await response.json();
      if (json.success || json.message?.toLowerCase().includes("success")) {
        setResponse({
          type: "success",
          message: "✅ Message sent successfully! I'll get back to you soon."
        });
        // Reset form fields
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
          "g-recaptcha-response": ""
        });

        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setResponse({
          type: "error",
          message: json.message || "❌ Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse({
        type: "error",
        message: "❌ Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

                {response.type === "success" ? (
                  <div className="p-4 mb-4 text-sm rounded-md bg-green-50 text-green-700">
                    {response.message}
                  </div>
                ) : response.type === "error" ? (
                  <div className="p-4 mb-4 text-sm rounded-md bg-red-50 text-red-700">
                    {response.message}
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field to prevent spam */}
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20"
                        placeholder="Your name"
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20"
                        placeholder="your.email@example.com"
                        type="email"
                        id="email"
                        autoComplete="off"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20"
                      placeholder="Job opportunity, project collaboration, etc."
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      className="bg-muted/50 border-accent/20 focus:border-accent focus:ring-accent/20 min-h-32"
                      placeholder="Tell me about your project or opportunity..."
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Invisible reCAPTCHA */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}
                    onChange={handleRecaptchaChange}
                    theme="dark"
                  />

                  <Button
                    variant={`${isSubmitting ? 'outline' : 'cyber'}`}
                    className="w-full group"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
