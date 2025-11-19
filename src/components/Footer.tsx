import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold hover:opacity-80 transition-opacity">Carthago Oil</Link>
            <p className="text-sm opacity-80">
              Award-winning Tunisian Extra Virgin Olive Oil. Global Olive Oil Stars Platinum Award 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('products');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  All Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('story');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('recipes');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Recipes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('newsletter');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('recipes');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Tunisian Cuisine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('products');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Health Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('story');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  From Grove to Table
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('story');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Our Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('newsletter');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('products');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:opacity-100 transition-opacity text-left"
                >
                  Free Shipping Over $100
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Carthago Oil. Award-winning Tunisian EVOO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
