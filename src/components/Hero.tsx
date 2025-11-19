import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-carthago-bottle.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-sand to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-olive/10 rounded-full">
              <p className="text-sm font-semibold text-olive">✨ Single-Origin • Cold-Pressed • No Additives</p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Pure Tunisian Extra Virgin Olive Oil
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience the authentic taste of Tunisia's ancient olive groves. No blends. No mixing. Just pure, cold-pressed excellence in every drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-olive hover:bg-olive-light text-white text-lg px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2 border-olive text-olive hover:bg-olive hover:text-white"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">5.0/5.0</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div>
                <span className="text-muted-foreground">500+ Happy Customers</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-olive/20 to-gold/20 rounded-3xl blur-2xl"></div>
            <img 
              src={heroImage} 
              alt="Carthago Premium Tunisian Extra Virgin Olive Oil bottle displayed with fresh olives and Mediterranean sunlight" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
