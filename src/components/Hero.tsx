import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-olive-oil.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-sand to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Pure Tunisian Extra Virgin Olive Oil
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Single origin, cold pressed. No blends. No additives. Just authentic Tunisian EVOO crafted from ancient groves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-olive hover:bg-olive-light text-white text-lg px-8"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Carthago Oil
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src={heroImage} 
              alt="Premium Tunisian Extra Virgin Olive Oil bottles on Mediterranean counter" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
