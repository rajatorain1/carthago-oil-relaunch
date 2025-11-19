import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Slata Mechouia",
    subtitle: "Grilled Pepper & Tomato Salad",
    image: "/images/recipe-vegetables.jpg",
    time: "25 min",
    servings: "4",
    difficulty: "Easy",
    description: "A traditional Tunisian salad featuring fire-roasted peppers and tomatoes, finished with a generous drizzle of our premium olive oil.",
    oilUse: "Drizzle 3-4 tbsp generously over grilled vegetables",
  },
  {
    id: 2,
    title: "Pasta with Carthago Oil",
    subtitle: "Mediterranean Pasta Perfection",
    image: "/images/recipe-pasta-pouring.jpg",
    time: "20 min",
    servings: "4",
    difficulty: "Easy",
    description: "Simple pasta elevated to perfection with the golden pour of Carthago Oil, fresh basil, and sun-dried tomatoes. A celebration of quality ingredients.",
    oilUse: "Finish with 2-3 tbsp poured directly over hot pasta",
  },
  {
    id: 3,
    title: "Slata Tunisiya",
    subtitle: "Classic Tunisian Salad",
    image: "/images/recipe-salad.jpg",
    time: "15 min",
    servings: "4",
    difficulty: "Easy",
    description: "A vibrant, refreshing salad combining tomatoes, cucumbers, peppers, and onions with our cold-pressed olive oil and spices.",
    oilUse: "Mix 4 tbsp with lemon juice and harissa for dressing",
  },
];

export const Recipes = () => {
  return (
    <section id="recipes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-olive border-olive/30 text-sm px-6 py-2">
              <ChefHat className="w-4 h-4 mr-2 inline" />
              Tunisian Cuisine
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Traditional Recipes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover authentic Tunisian flavors enhanced by our premium extra virgin olive oil. Each recipe celebrates the Mediterranean tradition of simple, wholesome ingredients.
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recipes.map((recipe, index) => (
            <Card 
              key={recipe.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-sand/20">
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 right-4 bg-olive/90 backdrop-blur-sm text-white">
                  {recipe.difficulty}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-olive font-medium mb-3">
                    {recipe.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {recipe.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>

                {/* Oil Usage */}
                <div className="bg-sand/30 rounded-lg p-3 border-l-4 border-olive">
                  <p className="text-xs font-semibold text-foreground mb-1">
                    Olive Oil Use:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {recipe.oilUse}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-block p-8 bg-gradient-to-br from-sand/50 to-olive/10 rounded-2xl border border-olive/20">
            <p className="text-lg text-muted-foreground mb-4">
              Each recipe is elevated by the rich, authentic flavor of Carthago Oil
            </p>
            <p className="text-sm text-muted-foreground italic">
              "In Tunisian cooking, quality olive oil isn't just an ingredient—it's the soul of the dish"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
