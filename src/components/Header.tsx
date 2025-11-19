import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  const items = useCartStore(state => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-serif font-bold text-olive">Carthago Oil</h1>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-foreground hover:text-olive transition-colors">Our Story</a>
            <a href="#products" className="text-foreground hover:text-olive transition-colors">Shop</a>
            <a href="#newsletter" className="text-foreground hover:text-olive transition-colors">Newsletter</a>
          </nav>

          <div data-cart-button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};
