import { Button } from "./ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-olive to-olive-light text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Heart className="w-16 h-16 mx-auto" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Ready to Experience True Mediterranean Purity?
          </h2>
          <p className="text-xl opacity-90">
            Join hundreds of health-conscious food lovers who've made the switch to authentic, single-origin Tunisian olive oil. Your wellness journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-white text-olive hover:bg-sand text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Carthago Oil Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold mb-2">✓</p>
                <p className="text-sm opacity-90">Free Shipping Over $100</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">✓</p>
                <p className="text-sm opacity-90">100% Pure Guarantee</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">✓</p>
                <p className="text-sm opacity-90">Secure Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
