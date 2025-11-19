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

const Index = () => {
  return (
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
  );
};

export default Index;
