import oliveGroveImage from "@/assets/olive-grove-tunisia.jpg";

export const Story = () => {
  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Tunisian Heritage
          </h2>
          <p className="text-xl text-muted-foreground">
            From ancient groves to your table, every bottle tells a story of purity and tradition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={oliveGroveImage}
              alt="Ancient Tunisian olive groves under Mediterranean sunlight"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Ancient Tunisian Traditions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our olive trees have stood in Tunisian soil for generations, their roots deep in the Mediterranean earth. This isn't just olive oil—it's a connection to ancient traditions of quality and care.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Hand-Harvested Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We hand-harvest our olives and cold-press them within hours of picking. This traditional method preserves the natural polyphenols and antioxidants that make our oil so beneficial for health.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Single-Origin Purity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike mass-market oils blended from multiple countries, every drop of Carthago Oil comes exclusively from our Tunisian groves. No mixing, no blending—just pure, traceable excellence from farm to bottle.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-lg font-semibold text-olive">
                "We are not a mass-market blend. We are farm-to-bottle purity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
