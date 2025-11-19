import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { ProductCard } from "./ProductCard";
import { storefrontApiRequest, STOREFRONT_QUERY, ShopifyProduct } from "@/lib/shopify";

export const ProductGrid = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_QUERY, { first: 10 });
      return response.data.products.edges as ShopifyProduct[];
    }
  });

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 animate-spin text-olive" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-destructive">Error loading products. Please try again.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background via-sand/20 to-background">
      <div className="container mx-auto px-4">
        {/* Elegant Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-olive border-olive/30 text-sm px-6 py-2">
              Award-Winning Excellence
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Our Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Handcrafted from Tunisia's finest olive groves. Each bottle represents generations of expertise and unwavering commitment to quality.
          </p>
        </div>

        {!data || data.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-sand/50 flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-10 h-10 text-olive/40" />
              </div>
              <p className="text-xl text-muted-foreground mb-3">No products found</p>
              <p className="text-muted-foreground">
                Create products by telling me what you'd like to sell and at what price.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {/* Single Premium Product Showcase */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <ProductCard key={data[0].node.id} product={data[0]} featured />
            </div>
            
            {/* Additional Products Grid (if more than one) */}
            {data.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.slice(1).map((product, index) => (
                  <div 
                    key={product.node.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
