import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useCartAnimation } from "@/hooks/useCartAnimation";

interface ProductCardProps {
  product: ShopifyProduct;
  featured?: boolean;
}

export const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const navigate = useNavigate();
  const { animateToCart } = useCartAnimation();
  
  const firstVariant = product.node.variants.edges[0]?.node;
  const firstImage = product.node.images.edges[0]?.node;
  const hasMultipleSizes = product.node.variants.edges.length > 1;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!firstVariant || !firstImage) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };
    
    // Trigger floating animation
    const button = e.currentTarget as HTMLElement;
    animateToCart({
      imageUrl: firstImage.url,
      startElement: button,
    });
    
    addItem(cartItem);
    toast.success("Added to cart! 🎉", {
      description: `${product.node.title} (${firstVariant.title}) added to your cart.`,
      position: "top-center",
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.node.handle}`);
  };

  if (featured) {
    return (
      <Card 
        className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-gradient-to-br from-background to-sand/30 border-2 border-olive/10"
        onClick={handleCardClick}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-lg bg-sand/50">
            {firstImage && (
              <img 
                src={firstImage.url}
                alt={firstImage.altText || product.node.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
            <Badge className="absolute top-6 right-6 bg-olive text-white text-sm px-4 py-2">
              Platinum Award Winner
            </Badge>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <Badge variant="outline" className="mb-4 text-olive border-olive/30">
                Premium Extra Virgin Olive Oil
              </Badge>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
                {product.node.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed line-clamp-4">
                {product.node.description}
              </p>
            </div>
            
            {/* Size Options Preview */}
            {hasMultipleSizes && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Available Sizes:</p>
                <div className="flex flex-wrap gap-3">
                  {product.node.variants.edges.map((variant) => (
                    <Badge 
                      key={variant.node.id} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-olive hover:text-white transition-colors"
                    >
                      {variant.node.title} - ${parseFloat(variant.node.price.amount).toFixed(2)}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-olive">
                ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
              </span>
              {hasMultipleSizes && (
                <span className="text-lg text-muted-foreground">starting from</span>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="bg-olive hover:bg-olive-light text-white text-lg px-8 py-6 flex-1"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                onClick={handleCardClick}
                size="lg"
                variant="outline"
                className="border-olive text-olive hover:bg-olive hover:text-white text-lg px-8 py-6"
              >
                View Details
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
              <span className="inline-flex items-center gap-2">
                ✓ Free shipping over $100
              </span>
              <span className="inline-flex items-center gap-2">
                ✓ Cold-pressed within 4 hours
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer group bg-card h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="aspect-square overflow-hidden bg-sand/20 relative">
        {firstImage && (
          <img 
            src={firstImage.url}
            alt={firstImage.altText || product.node.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        {hasMultipleSizes && (
          <Badge variant="secondary" className="absolute top-4 right-4 backdrop-blur-sm">
            {product.node.variants.edges.length} Sizes
          </Badge>
        )}
      </div>
      
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight">
            {product.node.title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {product.node.description}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-olive">
              ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
            </span>
            {hasMultipleSizes && (
              <span className="text-sm text-muted-foreground">starting at</span>
            )}
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-olive hover:bg-olive-light text-white py-5"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          
          {hasMultipleSizes && (
            <p className="text-center text-xs text-muted-foreground">
              Click to view all sizes
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};
