import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Microscope, Clock, Share2, AlertTriangle, Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, siteConfig } from "@/lib/seo";

const AuthenticOliveOil = () => {
  const publishDate = "2025-01-16";
  
  const faqs = [
    {
      question: "What percentage of olive oil labeled 'extra virgin' is actually fake?",
      answer: "Studies suggest that up to 69% of imported olive oils labeled as 'extra virgin' fail to meet the legal standards for that grade. This fraud occurs through dilution with cheaper refined oils, mislabeling of low-grade oils, or selling oxidized/rancid oil as fresh."
    },
    {
      question: "How can I tell if olive oil is rancid?",
      answer: "Rancid olive oil smells like crayons, putty, or old peanuts. It may taste greasy, musty, or like cardboard. Fresh extra virgin olive oil should smell fruity and grassy with no off-odors."
    },
    {
      question: "Does the color of olive oil indicate quality?",
      answer: "No. Olive oil color can range from deep green to golden yellow depending on the olive variety and harvest time. Color is not a reliable quality indicator. Professional tasters use blue glasses to avoid color bias during evaluation."
    },
    {
      question: "What does 'cold-pressed' mean?",
      answer: "Cold-pressed means the oil was extracted at temperatures below 27°C (80°F), preserving delicate polyphenols and flavor compounds. However, this term is often misleading as most modern EVOO is extracted using centrifuges, not traditional pressing."
    }
  ];

  const articleSchema = generateArticleSchema({
    headline: "How to Identify Authentic Extra Virgin Olive Oil: The Complete Authentication Guide",
    description: "Expert guide to spotting fake olive oil, understanding quality certifications, and ensuring you're buying genuine extra virgin olive oil. Learn the red flags of fraud.",
    image: `${siteConfig.url}/images/carthago-bottle-elegant.jpg`,
    datePublished: publishDate,
    dateModified: publishDate,
    keywords: "authentic olive oil, fake olive oil, extra virgin olive oil fraud, how to spot fake EVOO, olive oil quality, real olive oil vs fake, olive oil certification"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Knowledge Center", url: `${siteConfig.url}/knowledge-center` },
    { name: "Authentic Olive Oil Guide", url: `${siteConfig.url}/knowledge-center/how-to-identify-authentic-extra-virgin-olive-oil` }
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, breadcrumbSchema, faqSchema]
  };

  return (
    <>
      <SEO
        title="How to Identify Authentic Extra Virgin Olive Oil - Complete Authentication Guide"
        description="Learn to spot fake olive oil and ensure authenticity. Expert guide covering fraud detection, quality certifications, sensory evaluation, and chemical markers of genuine EVOO. Protect yourself from olive oil fraud."
        canonical="/knowledge-center/how-to-identify-authentic-extra-virgin-olive-oil"
        keywords="authentic extra virgin olive oil, spot fake olive oil, EVOO fraud detection, olive oil authentication, real vs fake olive oil, olive oil quality standards, DOP PDO certification, olive oil testing"
        ogImage="/images/carthago-bottle-elegant.jpg"
        ogType="article"
        schema={combinedSchema}
      />
      <Header />
      <main className="pt-24 pb-20 bg-background">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/knowledge-center" className="text-olive hover:underline">
                Knowledge Center
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Olive Oil Science</span>
            </div>
            
            <Badge variant="outline" className="mb-4">
              <Microscope className="w-4 h-4 mr-2" />
              Olive Oil Science
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              How to Identify Authentic Extra Virgin Olive Oil
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              The complete guide to spotting fake olive oil, understanding quality certifications, 
              and ensuring you're getting genuine extra virgin olive oil worth your money.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div>
                <span>Published: January 16, 2025</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Alert Box */}
          <Card className="p-6 bg-red-50 border-l-4 border-red-600 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-foreground font-bold mb-2">The Shocking Truth About Olive Oil Fraud</p>
                <p className="text-muted-foreground text-sm">
                  Up to 69% of imported olive oils labeled "extra virgin" fail to meet legal standards. 
                  This $16 billion industry is plagued by fraud, mislabeling, and adulteration. 
                  This guide will teach you how to protect yourself and your family.
                </p>
              </div>
            </div>
          </Card>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-2xl mb-12 shadow-xl">
            <img 
              src="/images/carthago-bottle-elegant.jpg"
              alt="Authentic Tunisian extra virgin olive oil bottle showcasing quality and transparency"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Why Olive Oil Fraud is Rampant
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Extra virgin olive oil is one of the most counterfeited food products in the world. The profit margins 
                on fraudulent olive oil rival those of cocaine, making it an attractive target for organized crime. 
                Common fraud tactics include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground"><strong>Dilution:</strong> Cutting expensive EVOO with cheap refined olive oil or other vegetable oils (soybean, sunflower, canola)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground"><strong>Mislabeling:</strong> Selling low-grade olive oil or lamp oil as "extra virgin"</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground"><strong>False Origin:</strong> Claiming oil comes from Italy when it's actually from cheaper sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground"><strong>Age Fraud:</strong> Selling old, oxidized oil as fresh harvest</span>
                </li>
              </ul>
            </section>

            {/* Red Flags Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                🚩 Red Flags: Signs of Fake or Low-Quality Olive Oil
              </h2>
              
              <div className="space-y-6">
                {/* Price */}
                <Card className="p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    Too Cheap to Be True
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong>Red Flag:</strong> Extra virgin olive oil under $10 per liter (or $8-10 per 750ml bottle)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Why:</strong> Quality EVOO requires manual harvesting, immediate processing, and careful storage. 
                    Production costs alone make it impossible to sell genuine EVOO at discount prices. If it's significantly 
                    cheaper than competitors, it's likely adulterated or mislabeled.
                  </p>
                </Card>

                {/* Clear Bottle */}
                <Card className="p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔆</span>
                    Clear or Plastic Bottles
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong>Red Flag:</strong> Olive oil in clear glass or plastic containers
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Why:</strong> Light exposure rapidly degrades olive oil's delicate polyphenols and antioxidants. 
                    Quality producers always use dark glass bottles (amber, green, or cobalt blue) or tins to protect the oil. 
                    Clear bottles are a sign the producer doesn't care about preserving quality.
                  </p>
                </Card>

                {/* Vague Labeling */}
                <Card className="p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">❓</span>
                    Vague or Missing Information
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong>Red Flags:</strong>
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• No harvest date or "best by" date more than 2 years out</li>
                    <li>• Vague origin like "Product of EU" or "Bottled in Italy"</li>
                    <li>• No producer/estate name, just a brand</li>
                    <li>• Terms like "light" or "pure" (not legal terms for EVOO)</li>
                    <li>• Labels saying "from hand-picked olives" without more specifics</li>
                  </ul>
                </Card>

                {/* Old Oil */}
                <Card className="p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📅</span>
                    Old Harvest Date
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong>Red Flag:</strong> Harvest date more than 18 months ago
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Why:</strong> Even when stored properly, EVOO's flavor and health benefits decline after 12-18 months. 
                    Premium producers ensure fresh oil reaches consumers within months of harvest. If there's no harvest date at all, 
                    assume it's old.
                  </p>
                </Card>
              </div>
            </section>

            {/* Green Flags */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                ✅ Green Flags: Signs of Authentic Extra Virgin Olive Oil
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Dark Glass or Tin Packaging</h3>
                      <p className="text-sm text-muted-foreground">
                        Protects oil from light degradation. Look for amber, dark green, or cobalt blue glass bottles, or metal tins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Harvest Date Clearly Marked</h3>
                      <p className="text-sm text-muted-foreground">
                        The most important date. Should be recent (within 12-18 months) and clearly visible on the label.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Single Origin/Single Estate</h3>
                      <p className="text-sm text-muted-foreground">
                        Specific farm, grove, or region named. "Estate bottled" or "Single origin" indicates traceability and quality control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Quality Certifications</h3>
                      <p className="text-sm text-muted-foreground">
                        DOP/PDO (Protected Designation of Origin), PGI, or organic certifications from legitimate bodies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Specific Olive Variety Named</h3>
                      <p className="text-sm text-muted-foreground">
                        Mentions specific cultivars like Chemlali, Koroneiki, Arbequina, Picual, etc. Shows attention to detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Chemical Analysis Data</h3>
                      <p className="text-sm text-muted-foreground">
                        Best producers include lab test results showing acidity levels, peroxide values, and polyphenol content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sensory Evaluation */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                The Home Sensory Test: Smell and Taste
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Your senses are powerful tools for detecting authentic EVOO. Here's how to conduct a simple sensory evaluation at home:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 bg-sand/20">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">👃</span>
                    Smell Test
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Good Signs:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Fresh grass or herbs</li>
                        <li>• Green tomato or artichoke</li>
                        <li>• Green apple or banana</li>
                        <li>• Freshly cut grass</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Bad Signs (Defects):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Musty or moldy smell</li>
                        <li>• Rancid (like old nuts or crayons)</li>
                        <li>• Winey or vinegary</li>
                        <li>• Greasy or no smell at all</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-sand/20">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">👅</span>
                    Taste Test
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Good Signs:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Fruity flavor (green or ripe)</li>
                        <li>• Peppery finish (may make you cough)</li>
                        <li>• Bitter notes (from polyphenols)</li>
                        <li>• Complex flavor profile</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Bad Signs (Defects):</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Flat or greasy mouthfeel</li>
                        <li>• No peppery finish</li>
                        <li>• Metallic or cardboard taste</li>
                        <li>• Rancid or stale flavor</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-blue-50 border-l-4 border-blue-600">
                <p className="text-sm font-semibold text-foreground mb-2">💡 Pro Tip:</p>
                <p className="text-sm text-muted-foreground">
                  Pour 1-2 tablespoons in a small glass, cup your hands around it to warm it, swirl gently, then smell deeply. 
                  Taste a small amount and slurp it (yes, really!) to aerate it across your palate. The peppery throat sensation 
                  that makes you cough is actually a sign of high-quality polyphenols - it's called the "olive oil cough" and 
                  it's a good thing!
                </p>
              </Card>
            </section>

            {/* Understanding Certifications */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Understanding Quality Certifications
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">DOP/PDO (Protected Designation of Origin)</h3>
                  <p className="text-sm text-muted-foreground">
                    The gold standard. EU certification that guarantees the oil comes from a specific region, uses traditional 
                    methods, and meets strict quality standards. Examples: DOP Veneto, PDO Kalamata.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">PGI (Protected Geographical Indication)</h3>
                  <p className="text-sm text-muted-foreground">
                    Similar to DOP but with slightly less strict requirements. Still indicates quality and geographic authenticity.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Organic Certification</h3>
                  <p className="text-sm text-muted-foreground">
                    USDA Organic, EU Organic, or equivalent certifications ensure no synthetic pesticides or fertilizers. 
                    However, organic doesn't automatically mean high quality - a separate consideration.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">IGP (Indicazione Geografica Protetta)</h3>
                  <p className="text-sm text-muted-foreground">
                    Italian equivalent of PGI. Guarantees at least one production stage occurred in the specified region.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-yellow-50 border-l-4 border-yellow-600 mt-6">
                <p className="text-sm font-semibold text-foreground mb-2">⚠️ Certification Warning:</p>
                <p className="text-sm text-muted-foreground">
                  Beware of meaningless marketing terms like "Premium," "Pure," "Light," "First Press," or medals from 
                  unknown competitions. These aren't regulated terms and can be used by anyone. Focus on legitimate 
                  third-party certifications from recognized bodies.
                </p>
              </Card>
            </section>

            {/* Chemical Standards */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Chemical Standards: The Science of Authenticity
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                True extra virgin olive oil must meet specific chemical parameters established by the International Olive Council (IOC):
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Key Chemical Markers:</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Free Acidity: ≤0.8%</p>
                    <p className="text-sm text-muted-foreground">
                      Measures oleic acid content. Lower is better. Premium EVOOs often have ≤0.3%. High acidity indicates 
                      damaged olives or poor processing.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Peroxide Value: ≤20 meq O₂/kg</p>
                    <p className="text-sm text-muted-foreground">
                      Measures initial oxidation. Lower is fresher. Quality oils typically have ≤15. High values mean the oil is rancid.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">UV Absorption (K232, K270): Specific thresholds</p>
                    <p className="text-sm text-muted-foreground">
                      Detects oxidation and adulteration with refined oils. Technical but crucial for lab analysis.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Polyphenol Content: Higher is better</p>
                    <p className="text-sm text-muted-foreground">
                      Not required by IOC but top producers test for this. Look for ≥250 mg/kg. Premium Tunisian oils often exceed 400 mg/kg.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Note: Most consumers can't conduct chemical analysis at home, but reputable producers will provide these lab results 
                upon request or display them on their websites. If a brand refuses to share this data, that's a red flag.
              </p>
            </section>

            {/* Storage & Freshness */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Preserving Authenticity: Proper Storage
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                Even authentic EVOO will degrade if not stored properly. Follow these guidelines:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Card className="p-4 bg-green-50">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Store in cool, dark place</p>
                        <p className="text-xs text-muted-foreground">60-70°F (15-21°C) ideal. Avoid above stove or near windows.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Keep tightly sealed</p>
                        <p className="text-xs text-muted-foreground">Minimize air exposure. Replace cap immediately after use.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Use within 3-6 months of opening</p>
                        <p className="text-xs text-muted-foreground">Once opened, oxidation accelerates. Buy smaller bottles for fresher oil.</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="space-y-3">
                  <Card className="p-4 bg-red-50">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Don't refrigerate</p>
                        <p className="text-xs text-muted-foreground">Condensation and temperature fluctuations cause damage. Room temp is fine.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-red-50">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Don't expose to light</p>
                        <p className="text-xs text-muted-foreground">Even indirect sunlight or kitchen lights degrade quality over time.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-red-50">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">Don't buy in bulk unless sealed</p>
                        <p className="text-xs text-muted-foreground">Large containers oxidize faster. Better to buy multiple small bottles.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* Trusted Sources */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Where to Buy Authentic EVOO
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  <strong>Direct from Producers:</strong> Buy directly from estates and mills when possible. This ensures 
                  traceability and freshness. Look for producers who ship temperature-controlled.
                </p>
                <p>
                  <strong>Specialty Olive Oil Shops:</strong> Dedicated olive oil retailers often have knowledgeable staff 
                  and allow tastings before purchase.
                </p>
                <p>
                  <strong>Trusted Online Retailers:</strong> Reputable online stores that provide detailed product information, 
                  harvest dates, and lab results. Avoid marketplace sellers with no verifiable information.
                </p>
                <p>
                  <strong>Farmers Markets:</strong> Local producers at farmers markets often offer excellent quality and you 
                  can ask questions directly. However, verify their claims and ask for harvest dates.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                The Bottom Line: Protect Your Health and Wallet
              </h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Olive oil fraud isn't just about wasted money—fake or adulterated oil means you're missing out on the 
                remarkable health benefits that make authentic extra virgin olive oil worth the investment. By learning 
                to identify authenticity markers, you can ensure every bottle you buy delivers the quality, flavor, and 
                health benefits you deserve.
              </p>

              <Card className="p-8 bg-gradient-to-br from-olive/10 to-sand/20 border-2 border-olive/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Experience Verified Authenticity
                </h3>
                <p className="text-muted-foreground mb-6">
                  Carthago Oil comes with complete traceability: harvest date, chemical analysis, single-origin Tunisia certification, 
                  and dark glass protection. Every bottle is tested and verified to exceed extra virgin standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#products">
                    <Button size="lg" className="bg-olive hover:bg-olive/90">
                      Shop Verified Carthago Oil
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/knowledge-center/olive-oil-health-benefits-complete-guide">
                    <Button size="lg" variant="outline" className="border-olive text-olive hover:bg-olive hover:text-white">
                      Learn About Health Benefits
                    </Button>
                  </Link>
                </div>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mb-12 border-t border-border pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section className="mb-12 border-t border-border pt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Sources & Further Reading</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>1. Tom Mueller (2011). <em>"Extra Virginity: The Sublime and Scandalous World of Olive Oil"</em></p>
                <p>2. University of California Davis Olive Center. "Olive Oil Fraud Studies" (2010-2020)</p>
                <p>3. International Olive Council. "Trade Standard Applying to Olive Oils and Olive-Pomace Oils" (2024)</p>
                <p>4. European Commission Regulation (EEC) No 2568/91 on characteristics of olive oil</p>
                <p>5. USDA National Nutrient Database for Olive Oil Standards</p>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-12 border-t border-border pt-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  to="/knowledge-center/olive-oil-health-benefits-complete-guide"
                  className="block p-4 rounded-lg border border-border hover:border-olive hover:bg-sand/10 transition-all"
                >
                  <p className="font-semibold text-foreground mb-2">The Complete Guide to Olive Oil Health Benefits</p>
                  <p className="text-sm text-muted-foreground">Discover why authentic EVOO is worth the investment</p>
                </Link>
                <Link 
                  to="/knowledge-center/mediterranean-diet-beginners-guide"
                  className="block p-4 rounded-lg border border-border hover:border-olive hover:bg-sand/10 transition-all"
                >
                  <p className="font-semibold text-foreground mb-2">The Mediterranean Diet: A Complete Beginner's Guide</p>
                  <p className="text-sm text-muted-foreground">Learn how to incorporate quality EVOO into your diet</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default AuthenticOliveOil;
