import { Shield, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-sand to-background border-2 border-olive/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-olive/20 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-olive" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Our Purity Promise
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We stand behind every bottle of Carthago Oil with our 100% satisfaction guarantee. If you don't taste the difference of genuine, single-origin Tunisian EVOO, we'll make it right.
                </p>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-1" />
                    <p className="text-foreground"><span className="font-semibold">100% Pure:</span> No blends, no mixing, no additives</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-1" />
                    <p className="text-foreground"><span className="font-semibold">Lab Tested:</span> Acidity below 0.4%, high polyphenol content verified</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-1" />
                    <p className="text-foreground"><span className="font-semibold">Farm-to-Bottle:</span> Complete traceability from our Tunisian groves</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
