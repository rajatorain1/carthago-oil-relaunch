import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Check, ShoppingCart, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { storefrontApiRequest, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

const ProductDetail = () => {
  const { handle } = useParams();
  const addItem = useCartStore(state => state.addItem);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      const response = await storefrontApiRequest(PRODUCT_QUERY, { handle });
      const product = response.data.productByHandle;
      if (product) {
        setSelectedVariant(product.variants.edges[0]?.node);
      }
      return product;
    }
  });

  const handleAddToCart = () => {
    if (!selectedVariant || !data) return;

    const productWrapper: ShopifyProduct = {
      node: data
    };

    const cartItem = {
      product: productWrapper,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart! 🎉", {
      description: `${data.title} (${selectedVariant.title}) has been added to your cart.`,
      position: "top-center",
    });
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <Loader2 className="w-12 h-12 animate-spin text-olive" />
        </div>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-xl text-muted-foreground">Product not found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="sticky top-24">
              {data.images.edges[0]?.node && (
                <div className="aspect-square overflow-hidden rounded-2xl bg-sand/20 shadow-xl">
                  <img 
                    src={data.images.edges[0].node.url}
                    alt={data.images.edges[0].node.altText || data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-olive text-white">Premium Tunisian EVOO</Badge>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  {data.title}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(500+ reviews)</span>
                </div>
                <p className="text-4xl font-bold text-olive mb-2">
                  ${parseFloat(selectedVariant?.price.amount || data.priceRange.minVariantPrice.amount).toFixed(2)}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-olive">
                    <Truck className="w-4 h-4" />
                    Free shipping over $100
                  </span>
                  <span className="flex items-center gap-2 text-olive">
                    <Shield className="w-4 h-4" />
                    100% Pure Guarantee
                  </span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-olive pl-4">
                {data.description}
              </p>

              {data.variants.edges.length > 1 && (
                <div className="space-y-3 p-6 bg-sand rounded-lg">
                  <label className="font-semibold text-lg">Choose Your Size:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {data.variants.edges.map((variant: any) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariant?.id === variant.node.id ? "default" : "outline"}
                        onClick={() => setSelectedVariant(variant.node)}
                        className={`h-auto py-4 flex flex-col gap-1 ${
                          selectedVariant?.id === variant.node.id 
                            ? "bg-olive hover:bg-olive-light border-2 border-olive" 
                            : "hover:border-olive"
                        }`}
                      >
                        <span className="font-bold">{variant.node.title}</span>
                        <span className="text-xs">${parseFloat(variant.node.price.amount).toFixed(2)}</span>
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    💡 Most popular: 500ml for daily use
                  </p>
                </div>
              )}

              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-olive hover:bg-olive-light text-xl py-8 shadow-lg hover:shadow-xl transition-all"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Add {selectedVariant?.title || ''} to Cart
              </Button>

              <div className="flex items-center gap-4 justify-center p-4 bg-sand/50 rounded-lg">
                <Check className="w-5 h-5 text-olive" />
                <span className="text-sm">In stock and ready to ship</span>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Health Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Rich in antioxidants and polyphenols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Supports heart health and reduces inflammation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Perfect for cooking, finishing, or daily wellness</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Origin & Quality</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">100% Single-origin from Tunisia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Cold-pressed within hours of harvest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">No blending, no artificial ingredients</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Ingredients</h3>
                  <p className="text-muted-foreground">
                    100% Tunisian Extra Virgin Olive Oil – nothing else
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
