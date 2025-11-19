import { Check, X } from "lucide-react";
import { Card } from "./ui/card";

const comparisons = [
  {
    feature: "Single-origin from one country",
    carthago: true,
    others: false
  },
  {
    feature: "No blending with other oils",
    carthago: true,
    others: false
  },
  {
    feature: "Cold-pressed within 4 hours",
    carthago: true,
    others: false
  },
  {
    feature: "High polyphenol content",
    carthago: true,
    others: false
  },
  {
    feature: "Full traceability",
    carthago: true,
    others: false
  },
  {
    feature: "Dark glass bottle protection",
    carthago: true,
    others: false
  },
  {
    feature: "Pesticide-free olives",
    carthago: true,
    others: false
  }
];

export const ValueComparison = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose Carthago Oil?
            </h2>
            <p className="text-xl text-muted-foreground">
              Not all olive oils are created equal. See the difference.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-olive text-white font-bold">
              <div></div>
              <div className="text-center">Carthago Oil</div>
              <div className="text-center">Others</div>
            </div>

            {comparisons.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${
                  index % 2 === 0 ? 'bg-background' : 'bg-sand/50'
                }`}
              >
                <div className="font-medium text-foreground">{item.feature}</div>
                <div className="flex justify-center">
                  {item.carthago ? (
                    <div className="w-8 h-8 rounded-full bg-olive/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-olive" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-8 h-8 rounded-full bg-olive/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-olive" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Card>

          <div className="text-center mt-8">
            <p className="text-lg text-foreground font-semibold mb-2">
              The choice is clear. Choose purity. Choose quality. Choose Carthago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
