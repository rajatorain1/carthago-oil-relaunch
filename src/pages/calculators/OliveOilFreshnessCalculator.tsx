import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { generateWebApplicationSchema, generateBreadcrumbSchema, siteConfig } from "@/lib/seo";

const OliveOilFreshnessCalculator = () => {
  const [harvestDate, setHarvestDate] = useState("");
  const [result, setResult] = useState<{
    status: "excellent" | "good" | "fair" | "poor";
    monthsOld: number;
    message: string;
    recommendation: string;
  } | null>(null);

  const calculateFreshness = () => {
    if (!harvestDate) return;

    const harvest = new Date(harvestDate);
    const today = new Date();
    const monthsDiff = Math.floor((today.getTime() - harvest.getTime()) / (1000 * 60 * 60 * 24 * 30));

    let status: "excellent" | "good" | "fair" | "poor";
    let message: string;
    let recommendation: string;

    if (monthsDiff < 0) {
      status = "poor";
      message = "Invalid harvest date - cannot be in the future";
      recommendation = "Please check the harvest date on your bottle";
    } else if (monthsDiff <= 6) {
      status = "excellent";
      message = "Peak Freshness - Your olive oil is at its absolute best!";
      recommendation = "This is premium quality oil. Use it for drizzling, dips, and raw applications to enjoy its full flavor profile.";
    } else if (monthsDiff <= 12) {
      status = "good";
      message = "Very Fresh - Still excellent quality with robust flavor";
      recommendation = "Your oil is still in great condition. Perfect for all cooking methods and raw uses. Store properly to maintain quality.";
    } else if (monthsDiff <= 18) {
      status = "fair";
      message = "Acceptable - Oil is aging but still usable";
      recommendation = "Use for cooking rather than raw applications. The flavor may have diminished. Consider replacing soon for optimal taste.";
    } else {
      status = "poor";
      message = "Past Prime - Quality has significantly declined";
      recommendation = "This oil has likely lost most of its beneficial compounds and flavor. We recommend purchasing fresh oil for the best experience.";
    }

    setResult({ status, monthsOld: monthsDiff, message, recommendation });
  };

  const appSchema = generateWebApplicationSchema({
    name: "Olive Oil Freshness Calculator",
    description: "Calculate the freshness of your extra virgin olive oil based on harvest date. Get instant recommendations on quality and optimal usage.",
    url: `${siteConfig.url}/calculators/olive-oil-freshness`,
    applicationCategory: "HealthApplication",
    offers: {
      price: "0",
      priceCurrency: "USD"
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Knowledge Center", url: `${siteConfig.url}/knowledge-center` },
    { name: "Olive Oil Freshness Calculator", url: `${siteConfig.url}/calculators/olive-oil-freshness` }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [appSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="Olive Oil Freshness Calculator - Check Your EVOO Quality"
        description="Free olive oil freshness calculator. Enter your harvest date to instantly check if your extra virgin olive oil is still at peak quality. Get expert recommendations on usage and storage."
        canonical="/calculators/olive-oil-freshness"
        keywords="olive oil freshness calculator, EVOO quality check, harvest date calculator, olive oil expiration, fresh olive oil, olive oil shelf life"
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
                <span className="text-foreground">Freshness Calculator</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-b from-sand/20 to-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Free Tool</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Olive Oil Freshness Calculator
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Check if your extra virgin olive oil is still at peak quality. Enter the harvest date to get instant results and expert recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-2xl">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Check Your Oil's Freshness</CardTitle>
                  <CardDescription>
                    Enter the harvest date found on your olive oil bottle to calculate its current freshness level
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="harvest-date">Harvest Date</Label>
                    <Input
                      id="harvest-date"
                      type="date"
                      value={harvestDate}
                      onChange={(e) => setHarvestDate(e.target.value)}
                      max={new Date().toISOString().split('T')[0]}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Look for the harvest date on your bottle label (usually printed near the production date)
                    </p>
                  </div>

                  <Button 
                    onClick={calculateFreshness} 
                    className="w-full"
                    disabled={!harvestDate}
                  >
                    Calculate Freshness
                  </Button>

                  {result && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center gap-3">
                        {result.status === "excellent" && <CheckCircle2 className="w-8 h-8 text-green-600" />}
                        {result.status === "good" && <Info className="w-8 h-8 text-blue-600" />}
                        {result.status === "fair" && <AlertTriangle className="w-8 h-8 text-yellow-600" />}
                        {result.status === "poor" && <XCircle className="w-8 h-8 text-red-600" />}
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{result.message}</h3>
                            <Badge variant={result.status === "excellent" || result.status === "good" ? "default" : "destructive"}>
                              {result.monthsOld} months old
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <Alert>
                        <AlertDescription className="text-sm">
                          <strong>Expert Recommendation:</strong> {result.recommendation}
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Educational Content */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Understanding Olive Oil Freshness</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Peak Freshness (0-6 months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Maximum polyphenol content, vibrant flavor, and optimal health benefits. Perfect for raw applications like salads, dips, and finishing dishes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      Very Fresh (6-12 months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Still excellent quality with robust flavor. Suitable for all uses including cooking and raw applications. Store in a cool, dark place.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Acceptable (12-18 months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Flavor has diminished but still safe to use. Best for cooking rather than raw applications. Consider replacing for optimal taste experience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Past Prime (18+ months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Significantly reduced quality and health benefits. Time to replace with fresh oil to enjoy the full Mediterranean experience.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4">Why Freshness Matters</h3>
                <p className="text-muted-foreground mb-4">
                  Extra virgin olive oil is not like wine—it doesn't improve with age. The beneficial polyphenols and antioxidants that make EVOO a superfood gradually degrade over time, even when properly stored.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Key factors affecting freshness:</strong>
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li><strong>Light exposure:</strong> UV rays accelerate oxidation—always use dark glass bottles</li>
                  <li><strong>Heat:</strong> Store at 60-72°F (15-22°C) away from stoves and ovens</li>
                  <li><strong>Air exposure:</strong> Keep bottle sealed tight after each use</li>
                  <li><strong>Time:</strong> Even perfectly stored oil loses quality after harvest</li>
                </ul>
                
                <h3 className="text-2xl font-bold mb-4">Reading Your Bottle Label</h3>
                <p className="text-muted-foreground mb-4">
                  Quality producers like <Link to="/" className="text-primary hover:underline">Carthago Oil</Link> clearly display harvest dates. Look for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Harvest date:</strong> Month and year olives were picked (most important)</li>
                  <li><strong>Best by date:</strong> Usually 18-24 months after harvest</li>
                  <li><strong>Production date:</strong> When oil was bottled (less important than harvest)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Experience Peak Freshness</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every bottle of Carthago Oil displays a clear harvest date and is pressed from olives picked at optimal ripeness. Experience olive oil the way it was meant to be.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg">
                  <Link to="/">Shop Fresh Olive Oil</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/knowledge-center">Explore Knowledge Center</Link>
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
                    <Link to="/calculators/daily-intake" className="text-primary hover:underline">
                      Daily Olive Oil Intake Calculator
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Calculate your optimal daily olive oil consumption based on Mediterranean diet guidelines and your personal health goals
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

export default OliveOilFreshnessCalculator;
