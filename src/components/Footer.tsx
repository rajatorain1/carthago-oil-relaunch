export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="text-2xl font-serif font-bold hover:opacity-80 transition-opacity">Carthago Oil</a>
            <p className="text-sm opacity-80">
              Award-winning Tunisian Extra Virgin Olive Oil. Global Olive Oil Stars Platinum Award 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/#products" className="hover:opacity-100 transition-opacity">All Products</a></li>
              <li><a href="/#story" className="hover:opacity-100 transition-opacity">Our Story</a></li>
              <li><a href="/#recipes" className="hover:opacity-100 transition-opacity">Recipes</a></li>
              <li><a href="/#newsletter" className="hover:opacity-100 transition-opacity">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/#recipes" className="hover:opacity-100 transition-opacity">Tunisian Cuisine</a></li>
              <li><a href="/#products" className="hover:opacity-100 transition-opacity">Health Benefits</a></li>
              <li><a href="/#story" className="hover:opacity-100 transition-opacity">From Grove to Table</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/#story" className="hover:opacity-100 transition-opacity">Our Mission</a></li>
              <li><a href="/#newsletter" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="/#products" className="hover:opacity-100 transition-opacity">Free Shipping Over $100</a></li>
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
