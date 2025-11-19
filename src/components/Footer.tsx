export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Carthago Oil</h3>
            <p className="text-sm opacity-80">
              100% Tunisian Extra Virgin Olive Oil, simply made.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#products" className="hover:opacity-100 transition-opacity">All Products</a></li>
              <li><a href="#story" className="hover:opacity-100 transition-opacity">Our Story</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Health Benefits</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">How to Use</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Recipes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Carthago Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
