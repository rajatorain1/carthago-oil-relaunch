import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
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
    <section id="products" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Shop Premium Tunisian EVOO
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose your perfect size and experience the difference of true quality
          </p>
        </div>

        {!data || data.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-6">No products found</p>
            <p className="text-muted-foreground">
              Create products by telling me what you'd like to sell and at what price.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
