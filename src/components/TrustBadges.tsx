import { Shield, Truck, Award, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Pure Guarantee",
    description: "No blends, no additives"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100"
  },
  {
    icon: Award,
    title: "Acidity Below 0.4%",
    description: "Premium quality certified"
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    description: "Your data is protected"
  }
];

export const TrustBadges = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="text-center space-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-olive/10">
                <badge.icon className="w-6 h-6 text-olive" />
              </div>
              <h4 className="font-semibold text-sm">{badge.title}</h4>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
