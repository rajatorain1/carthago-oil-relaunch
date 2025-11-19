import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Evangeline T.",
    date: "June 2024",
    text: "The taste of the oil is awesome. It enhances the flavor of all foods. I definitely recommend this product, especially to those who are on a heart healthy diet.",
    rating: 5
  },
  {
    name: "S. Hussain",
    date: "May 2024",
    text: "This oil is a natural gift. It has Good light fruity flavor. Buying again for sure. Excellent customer service by seller.",
    rating: 5
  },
  {
    name: "Jack C.",
    date: "September 2023",
    text: "Great Product straight from Tunisia and delivering Worldwide. Got it as a gift from a friend for the first time. Highly recommended.",
    rating: 5
  }
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Trusted by Health-Conscious Food Lovers
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of customers who've made Carthago Oil their daily wellness ritual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-olive/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-olive">{testimonial.name}</span>
                <span className="text-muted-foreground">{testimonial.date}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Over 500+ satisfied customers worldwide</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-olive">100%</p>
              <p className="text-sm text-muted-foreground">Pure Tunisian</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-olive">&lt;0.4%</p>
              <p className="text-sm text-muted-foreground">Acidity Level</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-olive">4 Hours</p>
              <p className="text-sm text-muted-foreground">From Harvest to Press</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
