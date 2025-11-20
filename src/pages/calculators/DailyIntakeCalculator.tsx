import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Calculator, Heart, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { generateWebApplicationSchema, generateBreadcrumbSchema, siteConfig } from "@/lib/seo";

const DailyIntakeCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "moderate" | "active">("moderate");
  const [healthGoal, setHealthGoal] = useState<"maintenance" | "heart-health" | "weight-loss">("maintenance");
  const [result, setResult] = useState<{
    tablespoons: number;
    milliliters: number;
    calories: number;
    benefits: string[];
    timing: string;
  } | null>(null);

  const calculateIntake = () => {
    if (!weight || parseFloat(weight) <= 0) return;

    const weightKg = parseFloat(weight);
    let baseAmount = 2; // tablespoons

    // Adjust for activity level
    if (activityLevel === "active") baseAmount += 1;
    if (activityLevel === "sedentary") baseAmount -= 0.5;

    // Adjust for health goal
    if (healthGoal === "heart-health") baseAmount += 0.5;
    if (healthGoal === "weight-loss") baseAmount -= 0.5;

    // Weight-based adjustment (very approximate)
    if (weightKg < 60) baseAmount -= 0.5;
    if (weightKg > 90) baseAmount += 0.5;

    // Ensure reasonable range
    baseAmount = Math.max(1.5, Math.min(4, baseAmount));

    const tablespoons = Math.round(baseAmount * 2) / 2; // Round to nearest 0.5
    const milliliters = Math.round(tablespoons * 15);
    const calories = Math.round(tablespoons * 120);

    let benefits: string[] = [];
    let timing: string;

    switch (healthGoal) {
      case "heart-health":
        benefits = [
          "Reduces LDL cholesterol and inflammation",
          "Rich in heart-healthy monounsaturated fats",
          "Contains powerful antioxidants for cardiovascular protection",
          "May help reduce blood pressure naturally"
        ];
        timing = "Split throughout the day with meals for optimal absorption";
        break;
      case "weight-loss":
        benefits = [
          "Promotes satiety and reduces cravings",
          "Supports healthy metabolism",
          "Provides essential fatty acids for hormone balance",
          "Replaces less healthy fats in your diet"
        ];
        timing = "Use before meals to help control appetite";
        break;
      default:
        benefits = [
          "Supports overall health and wellness",
          "Provides anti-inflammatory benefits",
          "Rich in antioxidants and vitamin E",
          "Essential part of Mediterranean diet"
        ];
        timing = "Use throughout the day with your meals";
    }

    setResult({ tablespoons, milliliters, calories, benefits, timing });
  };

  const appSchema = generateWebApplicationSchema({
    name: "Daily Olive Oil Intake Calculator",
    description: "Calculate your optimal daily olive oil intake based on Mediterranean diet guidelines. Get personalized recommendations for your health goals.",
    url: `${siteConfig.url}/calculators/daily-intake`,
    applicationCategory: "HealthApplication",
    offers: {
      price: "0",
      priceCurrency: "USD"
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Knowledge Center", url: `${siteConfig.url}/knowledge-center` },
    { name: "Daily Intake Calculator", url: `${siteConfig.url}/calculators/daily-intake` }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [appSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="Daily Olive Oil Intake Calculator - Mediterranean Diet Guidelines"
        description="Free daily olive oil intake calculator based on Mediterranean diet. Get personalized recommendations for your weight, activity level, and health goals. Expert nutrition advice."
        canonical="/calculators/daily-intake"
        keywords="olive oil intake calculator, daily olive oil amount, Mediterranean diet olive oil, how much olive oil per day, EVOO daily dose, olive oil nutrition calculator"
        schema={combinedSchema}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Breadcrumb */}
          <div className="bg-muted/30 py-3">
            <div className="container mx-auto px-4">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <Link to="/knowledge-center" className="hover:text-foreground transition-colors">Knowledge Center</Link>
                <span>/</span>
                <span className="text-foreground">Daily Intake Calculator</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-sand/20 to-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Calculator className="w-4 h-4" />
                  <span className="text-sm font-medium">Free Tool</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Daily Olive Oil Intake Calculator
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover your personalized olive oil recommendation based on Mediterranean diet guidelines, your activity level, and health goals.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-2xl">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Calculate Your Daily Intake</CardTitle>
                  <CardDescription>
                    Enter your information to receive personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Your Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="70"
                      min="30"
                      max="200"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Activity Level</Label>
                    <RadioGroup value={activityLevel} onValueChange={(value: any) => setActivityLevel(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sedentary" id="sedentary" />
                        <Label htmlFor="sedentary" className="font-normal cursor-pointer">
                          Sedentary - Little to no exercise
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate" className="font-normal cursor-pointer">
                          Moderate - Exercise 3-5 days/week
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active" />
                        <Label htmlFor="active" className="font-normal cursor-pointer">
                          Active - Intense exercise 6-7 days/week
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Health Goal</Label>
                    <RadioGroup value={healthGoal} onValueChange={(value: any) => setHealthGoal(value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintenance" id="maintenance" />
                        <Label htmlFor="maintenance" className="font-normal cursor-pointer">
                          General Health Maintenance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="heart-health" id="heart-health" />
                        <Label htmlFor="heart-health" className="font-normal cursor-pointer">
                          Heart Health & Cholesterol
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weight-loss" id="weight-loss" />
                        <Label htmlFor="weight-loss" className="font-normal cursor-pointer">
                          Weight Management
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    onClick={calculateIntake} 
                    className="w-full"
                    disabled={!weight}
                  >
                    Calculate My Intake
                  </Button>

                  {result && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                          <Heart className="w-6 h-6 text-primary" />
                          Your Personalized Recommendation
                        </h3>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{result.tablespoons}</div>
                            <div className="text-sm text-muted-foreground">tablespoons/day</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{result.milliliters}</div>
                            <div className="text-sm text-muted-foreground">ml/day</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{result.calories}</div>
                            <div className="text-sm text-muted-foreground">calories/day</div>
                          </div>
                        </div>

                        <Alert className="mb-4">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Best Timing:</strong> {result.timing}
                          </AlertDescription>
                        </Alert>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Benefits at This Intake Level:</h4>
                          <ul className="space-y-1">
                            {result.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Educational Content */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Mediterranean Diet Guidelines</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-muted-foreground">
                  The Mediterranean diet, recognized by UNESCO as Intangible Cultural Heritage, recommends olive oil as the primary source of dietary fat. Research shows that consuming 2-4 tablespoons (30-60ml) of extra virgin olive oil daily provides significant health benefits.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Minimum</CardTitle>
                    <div className="text-4xl font-bold text-center text-primary">1.5-2</div>
                    <CardDescription className="text-center">tablespoons/day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Basic health maintenance and flavor enhancement
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary shadow-lg">
                  <CardHeader>
                    <Badge className="mx-auto mb-2">Recommended</Badge>
                    <CardTitle className="text-center">Optimal</CardTitle>
                    <div className="text-4xl font-bold text-center text-primary">2-3</div>
                    <CardDescription className="text-center">tablespoons/day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Maximum health benefits according to Mediterranean diet studies
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Maximum</CardTitle>
                    <div className="text-4xl font-bold text-center text-primary">3-4</div>
                    <CardDescription className="text-center">tablespoons/day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      For active individuals with higher caloric needs
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4">Science-Backed Benefits</h3>
                <p className="text-muted-foreground mb-4">
                  The <strong>PREDIMED study</strong>, one of the largest nutritional trials ever conducted, found that participants consuming at least 4 tablespoons of extra virgin olive oil daily had:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>30% reduction in major cardiovascular events</li>
                  <li>Improved cholesterol profiles (lower LDL, higher HDL)</li>
                  <li>Reduced inflammation markers throughout the body</li>
                  <li>Better blood sugar control and insulin sensitivity</li>
                  <li>Enhanced cognitive function and memory</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">How to Incorporate It</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Raw Applications (Preferred)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Salad dressings (1-2 tbsp)</li>
                      <li>• Finishing drizzle on vegetables</li>
                      <li>• Dips with bread (1 tbsp)</li>
                      <li>• Smoothies (1 tbsp)</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Cooking Applications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sautéing vegetables (1-2 tbsp)</li>
                      <li>• Roasting (1-2 tbsp)</li>
                      <li>• Light pan-frying</li>
                      <li>• Baking substitute for butter</li>
                    </ul>
                  </div>
                </div>

                <Alert className="mb-6">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Pro Tip:</strong> Use high-quality extra virgin olive oil raw whenever possible to preserve its delicate polyphenols and antioxidants. <Link to="/knowledge-center/olive-oil-health-benefits-complete-guide" className="text-primary hover:underline">Learn more about health benefits</Link>.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Start Your Mediterranean Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Carthago Oil makes it easy to follow Mediterranean diet guidelines with premium Tunisian extra virgin olive oil. Each bottle is harvest-dated and third-party tested.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg">
                  <Link to="/">Shop Premium EVOO</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/knowledge-center/mediterranean-diet-beginners-guide">Read Mediterranean Diet Guide</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>
                    <Link to="/calculators/olive-oil-freshness" className="text-primary hover:underline">
                      Olive Oil Freshness Calculator
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Check if your extra virgin olive oil is still at peak quality based on harvest date
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DailyIntakeCalculator;
