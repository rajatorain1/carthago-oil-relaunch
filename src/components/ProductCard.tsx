import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const navigate = useNavigate();
  
  const firstVariant = product.node.variants.edges[0]?.node;
  const firstImage = product.node.images.edges[0]?.node;
  const hasMultipleSizes = product.node.variants.edges.length > 1;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!firstVariant) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart! 🎉", {
      description: `${product.node.title} (${firstVariant.title}) added to your cart.`,
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.node.handle}`);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
      onClick={handleCardClick}
    >
      <Badge className="absolute top-4 left-4 z-10 bg-olive text-white">
        Premium Quality
      </Badge>
      
      <div className="aspect-square overflow-hidden bg-sand relative">
        {firstImage && (
          <img 
            src={firstImage.url}
            alt={firstImage.altText || product.node.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        {hasMultipleSizes && (
          <Badge variant="secondary" className="absolute bottom-4 right-4">
            {product.node.variants.edges.length} Sizes Available
          </Badge>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(500+ reviews)</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{product.node.title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">{product.node.description}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-olive">
              ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
            </span>
            {hasMultipleSizes && (
              <span className="text-sm text-muted-foreground">starting at</span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              ✓ Free shipping over $100
            </span>
          </div>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-olive hover:bg-olive-light text-lg py-6"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
        
        {hasMultipleSizes && (
          <p className="text-center text-sm text-muted-foreground">
            Click to view all sizes
          </p>
        )}
      </div>
    </Card>
  );
};
