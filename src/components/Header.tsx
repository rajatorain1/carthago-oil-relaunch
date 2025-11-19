import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";

export const Header = () => {
  const items = useCartStore(state => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-serif font-bold text-olive">Carthago Oil</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => {
                const element = document.getElementById('story');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-foreground hover:text-olive transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('products');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-foreground hover:text-olive transition-colors cursor-pointer"
            >
              Shop
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('recipes');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-foreground hover:text-olive transition-colors cursor-pointer"
            >
              Recipes
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('newsletter');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-foreground hover:text-olive transition-colors cursor-pointer"
            >
              Newsletter
            </button>
          </nav>

          <div data-cart-button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};
