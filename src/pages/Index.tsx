import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { TrustBadges } from "@/components/TrustBadges";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ValueComparison } from "@/components/ValueComparison";
import { Story } from "@/components/Story";
import { ProductGrid } from "@/components/ProductGrid";
import { Recipes } from "@/components/Recipes";
import { SocialProof } from "@/components/SocialProof";
import { Guarantee } from "@/components/Guarantee";
import { Newsletter } from "@/components/Newsletter";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { generateOrganizationSchema, generateWebPageSchema, siteConfig } from "@/lib/seo";

const Index = () => {
  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema({
    name: "Premium Tunisian Extra Virgin Olive Oil",
    description: siteConfig.description,
    url: siteConfig.url
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, webPageSchema]
  };

  return (
    <>
      <SEO
        title="Premium Tunisian Extra Virgin Olive Oil - Authentic Mediterranean Quality"
        description="Discover Carthago Oil - Award-winning Tunisian extra virgin olive oil, cold-pressed from century-old groves. Experience the authentic taste of the Mediterranean with premium quality EVOO."
        canonical="/"
        keywords="Tunisian olive oil, extra virgin olive oil, premium EVOO, best olive oil, Mediterranean diet, cold-pressed olive oil, authentic olive oil, Tunisian cuisine, healthy cooking oil, award-winning olive oil"
        schema={combinedSchema}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <TrustBadges />
        <ValueProps />
        <ProblemSolution />
        <ValueComparison />
        <Story />
        <ProductGrid />
        <Recipes />
        <SocialProof />
        <Guarantee />
        <FinalCTA />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Index;
