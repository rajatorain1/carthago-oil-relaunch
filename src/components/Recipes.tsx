import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, Users, ChefHat, ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";

const recipes = [
  {
    id: 1,
    title: "Slata Mechouia",
    subtitle: "Grilled Pepper & Tomato Salad",
    image: "/images/recipe-vegetables-with-oil.jpg",
    time: "25 min",
    servings: "4",
    difficulty: "Easy",
    description: "A traditional Tunisian salad featuring fire-roasted peppers and tomatoes, finished with a generous drizzle of our premium olive oil.",
    oilUse: "Drizzle 3-4 tbsp generously over grilled vegetables",
    instructions: [
      "Char peppers and tomatoes directly over a gas flame or under the broiler until skin is blackened on all sides (about 15 minutes)",
      "Place charred vegetables in a bowl, cover with plastic wrap, and let steam for 10 minutes",
      "Peel off the blackened skin from peppers and tomatoes, then remove seeds",
      "Finely chop the roasted vegetables and place in a serving bowl",
      "Add minced garlic, caraway seeds, and a pinch of salt",
      "Drizzle generously with 3-4 tablespoons of Carthago Extra Virgin Olive Oil",
      "Add fresh lemon juice to taste and mix gently",
      "Garnish with capers and serve with crusty bread"
    ]
  },
  {
    id: 2,
    title: "Pasta with Carthago Oil",
    subtitle: "Mediterranean Pasta Perfection",
    image: "/images/recipe-pasta-with-bottle.jpg",
    time: "20 min",
    servings: "4",
    difficulty: "Easy",
    description: "Simple pasta elevated to perfection with the golden pour of Carthago Oil, fresh basil, and sun-dried tomatoes. A celebration of quality ingredients.",
    oilUse: "Finish with 2-3 tbsp poured directly over hot pasta",
    instructions: [
      "Bring a large pot of salted water to a boil for the pasta",
      "Cook pasta according to package directions until al dente",
      "While pasta cooks, slice sun-dried tomatoes and tear fresh basil leaves",
      "Mince 3 cloves of garlic finely",
      "Reserve 1 cup of pasta cooking water before draining",
      "In a large pan, gently warm 2 tablespoons of Carthago Oil over low heat",
      "Add garlic and cook for 30 seconds until fragrant (don't brown)",
      "Add drained pasta, sun-dried tomatoes, and a splash of pasta water",
      "Toss everything together, adding more pasta water if needed for silkiness",
      "Remove from heat and drizzle with 2-3 tablespoons of fresh Carthago Oil",
      "Add fresh basil, season with salt and pepper, and toss gently",
      "Serve immediately with grated Parmesan if desired"
    ]
  },
  {
    id: 3,
    title: "Slata Tunisiya",
    subtitle: "Classic Tunisian Salad",
    image: "/images/recipe-salad-with-oil.jpg",
    time: "15 min",
    servings: "4",
    difficulty: "Easy",
    description: "A vibrant, refreshing salad combining tomatoes, cucumbers, peppers, and onions with our cold-pressed olive oil and spices.",
    oilUse: "Mix 4 tbsp with lemon juice and harissa for dressing",
    instructions: [
      "Dice tomatoes, cucumbers, and green peppers into small, even cubes",
      "Finely chop red onion and add to the vegetables",
      "In a small bowl, whisk together 4 tablespoons of Carthago Extra Virgin Olive Oil",
      "Add fresh lemon juice (about 2 tablespoons) to the oil",
      "Mix in 1 teaspoon of harissa paste (or to taste)",
      "Add ground cumin, salt, and black pepper to the dressing",
      "Pour dressing over the chopped vegetables and toss gently",
      "Let sit for 5 minutes to allow flavors to meld",
      "Garnish with fresh mint leaves and olives",
      "Serve chilled as a side dish or with tuna and boiled eggs for a complete meal"
    ]
  },
];

const RecipeCard = ({ recipe, index }: { recipe: typeof recipes[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card 
      className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-fade-in bg-card"
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

        {/* Expandable Instructions */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <ChefHat className="w-4 h-4" />
                {isOpen ? "Hide Instructions" : "Show Cooking Instructions"}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-olive" />
                Step-by-Step Instructions
              </h4>
              <ol className="space-y-2">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive/10 text-olive font-semibold flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Shop Now Button */}
        <Link to="/product/carthago-oil™-tunisian-extra-virgin-olive-oil" className="block">
          <Button className="w-full bg-olive hover:bg-olive/90 text-white group">
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Shop Carthago Oil
          </Button>
        </Link>
      </div>
    </Card>
  );
};

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
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
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
