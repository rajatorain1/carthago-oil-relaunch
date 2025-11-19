import { Shield, Droplet, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "100% Tunisian Single-Origin",
    description: "Every drop comes from our ancient Tunisian olive groves"
  },
  {
    icon: Droplet,
    title: "Cold-Pressed & High in Polyphenols",
    description: "Naturally rich in antioxidants for heart health and wellness"
  },
  {
    icon: Leaf,
    title: "No Additives, No Blending, Ever",
    description: "Pure EVOO with no artificial ingredients or country mixing"
  }
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-sand transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive/10">
                <value.icon className="w-8 h-8 text-olive" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
