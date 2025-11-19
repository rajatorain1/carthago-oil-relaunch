import { X, Check } from "lucide-react";
import olivePourImage from "@/assets/olive-oil-pour.jpg";

export const ProblemSolution = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Not All Olive Oil Is Created Equal
              </h2>
              <p className="text-lg text-muted-foreground">
                Many store-bought oils are blended and low quality
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">Hidden seed oils and additives</p>
                  <p className="text-sm text-muted-foreground">Many brands mix in lower-quality oils</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">Poor freshness and quality</p>
                  <p className="text-sm text-muted-foreground">Sitting on shelves for months losing nutrients</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-1">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <p className="font-semibold">Mystery blends from multiple countries</p>
                  <p className="text-sm text-muted-foreground">No transparency about true origin</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-2xl font-bold text-olive mb-6">The Carthago Solution</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold">Pure, single-origin Tunisian EVOO</p>
                    <p className="text-sm text-muted-foreground">Traceable from our groves to your table</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold">Naturally rich in antioxidants</p>
                    <p className="text-sm text-muted-foreground">High polyphenol content for health benefits</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-olive" />
                  </div>
                  <div>
                    <p className="font-semibold">No chemicals or artificial ingredients</p>
                    <p className="text-sm text-muted-foreground">Just pure olive oil, nothing else</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={olivePourImage}
              alt="Premium olive oil being poured onto fresh Mediterranean bread"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
