import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Palmtree, 
  Globe, 
  Microscope, 
  ChefHat, 
  ShoppingBag,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { generateWebPageSchema, siteConfig } from "@/lib/seo";

const categories = [
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Discover the scientifically-proven health benefits of extra virgin olive oil",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    articles: 3
  },
  {
    id: "mediterranean-lifestyle",
    title: "Mediterranean Lifestyle",
    description: "Embrace the Mediterranean way of living for longevity and vitality",
    icon: Palmtree,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    articles: 2
  },
  {
    id: "tunisian-culture",
    title: "Tunisian Culture",
    description: "Explore Tunisia's rich olive oil heritage and culinary traditions",
    icon: Globe,
    color: "text-olive",
    bgColor: "bg-sand/30",
    articles: 2
  },
  {
    id: "olive-oil-science",
    title: "Olive Oil Science",
    description: "Learn about production methods, quality standards, and chemistry",
    icon: Microscope,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    articles: 3
  },
  {
    id: "recipes",
    title: "Recipes",
    description: "Authentic Mediterranean and Tunisian recipes featuring premium EVOO",
    icon: ChefHat,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    articles: 5
  },
  {
    id: "buying-guides",
    title: "Buying Guides",
    description: "Expert advice on selecting, storing, and using extra virgin olive oil",
    icon: ShoppingBag,
    color: "text-green-600",
    bgColor: "bg-green-50",
    articles: 2
  }
];

const featuredArticles = [
  {
    title: "The Complete Guide to Olive Oil Health Benefits",
    category: "Health & Wellness",
    slug: "olive-oil-health-benefits-complete-guide",
    excerpt: "Discover the scientifically-proven health benefits of extra virgin olive oil, from heart health to anti-inflammatory properties.",
    readTime: "12 min read",
    image: "/images/hero-olive-oil-pour.jpg"
  },
  {
    title: "How to Identify Authentic Extra Virgin Olive Oil",
    category: "Olive Oil Science",
    slug: "how-to-identify-authentic-extra-virgin-olive-oil",
    excerpt: "Learn the telltale signs of genuine EVOO and protect yourself from fraud with this comprehensive authentication guide.",
    readTime: "10 min read",
    image: "/images/carthago-bottle-elegant.jpg"
  },
  {
    title: "The Mediterranean Diet: A Complete Beginner's Guide",
    category: "Mediterranean Lifestyle",
    slug: "mediterranean-diet-beginners-guide",
    excerpt: "Start your journey to better health with this comprehensive guide to the world's healthiest diet pattern.",
    readTime: "15 min read",
    image: "/images/hero-carthago-with-dish.jpg"
  }
];

const KnowledgeCenter = () => {
  const schema = generateWebPageSchema({
    name: "Knowledge Center - Olive Oil Education & Mediterranean Lifestyle",
    description: "Comprehensive guides on olive oil health benefits, Mediterranean diet, Tunisian culture, and expert buying advice.",
    url: `${siteConfig.url}/knowledge-center`
  });

  return (
    <>
      <SEO
        title="Knowledge Center - Olive Oil Education & Mediterranean Lifestyle"
        description="Expert guides on extra virgin olive oil health benefits, Mediterranean diet, authentic EVOO identification, Tunisian olive oil culture, and buying guides. Evidence-based information from olive oil experts."
        canonical="/knowledge-center"
        keywords="olive oil health benefits, Mediterranean diet guide, extra virgin olive oil guide, olive oil buying guide, Tunisian olive oil, EVOO science, authentic olive oil, olive oil education"
        schema={schema}
      />
      <Header />
      <main className="pt-24 pb-20 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sand/30 to-olive/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 text-olive border-olive/30">
                <BookOpen className="w-4 h-4 mr-2" />
                Knowledge Center
              </Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                The Ultimate Guide to Extra Virgin Olive Oil
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Evidence-based information about olive oil health benefits, Mediterranean lifestyle, 
                quality standards, and expert buying advice. Everything you need to know about 
                the world's healthiest oil.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-4">
              Explore by Category
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dive deep into the world of premium extra virgin olive oil with our expertly curated categories
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={category.id}
                    className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {category.articles} {category.articles === 1 ? 'article' : 'articles'}
                        </span>
                        <ArrowRight className="w-5 h-5 text-olive group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-sand/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-4">
              Featured Articles
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Start with these comprehensive guides - our most popular and highly-cited articles
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article) => (
                <Link 
                  key={article.slug}
                  to={`/knowledge-center/${article.slug}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl font-serif group-hover:text-olive transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        <Button variant="ghost" size="sm" className="group-hover:text-olive">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-olive/10 to-sand/20 rounded-2xl p-12 border border-olive/20">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Experience What You've Learned
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Now that you understand what makes exceptional olive oil, discover Carthago Oil - 
                premium Tunisian extra virgin olive oil that embodies everything you've just learned.
              </p>
              <Link to="/#products">
                <Button size="lg" className="bg-olive hover:bg-olive/90">
                  Explore Our Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default KnowledgeCenter;
