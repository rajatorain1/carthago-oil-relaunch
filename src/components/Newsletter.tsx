import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Carthago Wellness Circle!", {
        description: "You'll receive Mediterranean recipes and wellness tips soon.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-olive text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Join the Carthago Wellness Circle
          </h2>
          <p className="text-xl opacity-90">
            Get Mediterranean recipes, health tips with olive oil, and early access to limited harvests
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-foreground flex-1"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-gold hover:bg-gold-light text-foreground whitespace-nowrap"
            >
              Join Now
            </Button>
          </form>
          <p className="text-sm opacity-75">
            Join hundreds of health-conscious food lovers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
