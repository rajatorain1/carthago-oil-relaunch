import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart } from "lucide-react";
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
    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.node.handle}`);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="aspect-square overflow-hidden bg-sand">
        {firstImage && (
          <img 
            src={firstImage.url}
            alt={firstImage.altText || product.node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{product.node.title}</h3>
          <p className="text-muted-foreground line-clamp-2">{product.node.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-olive">
            ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
          </span>
          <Button 
            onClick={handleAddToCart}
            className="bg-olive hover:bg-olive-light"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
