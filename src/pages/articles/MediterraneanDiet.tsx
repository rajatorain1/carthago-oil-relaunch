import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palmtree, Clock, Share2, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { generateArticleSchema, generateBreadcrumbSchema, siteConfig } from "@/lib/seo";

const MediterraneanDiet = () => {
  const publishDate = "2025-01-17";
  
  const articleSchema = generateArticleSchema({
    headline: "The Mediterranean Diet: A Complete Beginner's Guide to the World's Healthiest Diet",
    description: "Complete guide to starting the Mediterranean diet: meal plans, shopping lists, health benefits, and practical tips for sustainable weight loss and longevity.",
    image: `${siteConfig.url}/images/hero-carthago-with-dish.jpg`,
    datePublished: publishDate,
    keywords: "Mediterranean diet, Mediterranean diet meal plan, healthy eating, weight loss, heart healthy diet, longevity diet"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Knowledge Center", url: `${siteConfig.url}/knowledge-center` },
    { name: "Mediterranean Diet Guide", url: `${siteConfig.url}/knowledge-center/mediterranean-diet-beginners-guide` }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="The Mediterranean Diet: Complete Beginner's Guide - Meal Plans & Benefits"
        description="Start the Mediterranean diet today with this comprehensive guide. Includes meal plans, shopping lists, health benefits, weight loss tips, and recipes. The world's #1 diet for heart health and longevity."
        canonical="/knowledge-center/mediterranean-diet-beginners-guide"
        keywords="Mediterranean diet, Mediterranean diet meal plan, Mediterranean diet recipes, heart healthy diet, best diet for weight loss, longevity diet, healthy eating plan"
        ogImage="/images/hero-carthago-with-dish.jpg"
        ogType="article"
        schema={combinedSchema}
      />
      <Header />
      <main className="pt-24 pb-20 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/knowledge-center" className="text-olive hover:underline">Knowledge Center</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Mediterranean Lifestyle</span>
            </div>
            
            <Badge variant="outline" className="mb-4">
              <Palmtree className="w-4 h-4 mr-2" />
              Mediterranean Lifestyle
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              The Mediterranean Diet: A Complete Beginner's Guide
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Discover why the Mediterranean diet is consistently ranked #1 by nutrition experts. 
              Get started with meal plans, shopping lists, and practical tips for sustainable health.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div>Published: January 17, 2025</div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-2xl mb-12 shadow-xl">
            <img 
              src="/images/hero-carthago-with-dish.jpg"
              alt="Mediterranean diet meal with extra virgin olive oil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">What is the Mediterranean Diet?</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                The Mediterranean diet isn't a "diet" in the restrictive sense—it's a lifestyle based on the traditional eating 
                patterns of countries bordering the Mediterranean Sea, particularly Greece, Italy, and Tunisia. It emphasizes 
                whole foods, healthy fats, and social meals.
              </p>
              
              <Card className="p-6 bg-blue-50 border-l-4 border-blue-600 mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">🏆 Award-Winning Diet:</p>
                <p className="text-sm text-muted-foreground">
                  Ranked #1 Best Diet Overall by U.S. News & World Report for 6 consecutive years. Recognized by UNESCO 
                  as Intangible Cultural Heritage of Humanity.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Core Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-green-50">
                  <h3 className="text-lg font-bold text-foreground mb-4">Eat Plenty Of:</h3>
                  <ul className="space-y-2">
                    {[
                      "Extra virgin olive oil (primary fat source)",
                      "Fresh vegetables and fruits",
                      "Whole grains and legumes",
                      "Fish and seafood (2-3x per week)",
                      "Nuts and seeds",
                      "Herbs and spices"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                
                <Card className="p-6 bg-sand/20">
                  <h3 className="text-lg font-bold text-foreground mb-4">Eat in Moderation:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Poultry and eggs</li>
                    <li>• Cheese and yogurt</li>
                    <li>• Red wine (optional, 1 glass with meals)</li>
                    <li>• Sweets and desserts (special occasions)</li>
                    <li>• Red meat (monthly, not weekly)</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Sample 7-Day Meal Plan</h2>
              <div className="space-y-4">
                {[
                  { day: "Monday", breakfast: "Greek yogurt with honey, walnuts, fresh berries", lunch: "Mediterranean chickpea salad with EVOO", dinner: "Grilled fish with lemon, roasted vegetables" },
                  { day: "Tuesday", breakfast: "Whole grain toast with tomato, EVOO drizzle", lunch: "Lentil soup with vegetables and herbs", dinner: "Pasta with tomato sauce, fresh basil, Parmesan" },
                  { day: "Wednesday", breakfast: "Smoothie with spinach, banana, almonds", lunch: "Tuna salad with white beans and olive oil", dinner: "Chicken with Mediterranean spices, quinoa" }
                ].map((day, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-bold text-foreground mb-2">{day.day}</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>Breakfast:</strong> {day.breakfast}</p>
                      <p><strong>Lunch:</strong> {day.lunch}</p>
                      <p><strong>Dinner:</strong> {day.dinner}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-olive/10 to-sand/20 border-2 border-olive/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Mediterranean Journey</h3>
                <p className="text-muted-foreground mb-6">
                  The cornerstone of the Mediterranean diet is premium extra virgin olive oil. Carthago Oil brings you 
                  authentic Tunisian EVOO—the same quality used in Mediterranean regions for centuries.
                </p>
                <Link to="/#products">
                  <Button size="lg" className="bg-olive hover:bg-olive/90">
                    Shop Carthago Oil
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </Card>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MediterraneanDiet;
