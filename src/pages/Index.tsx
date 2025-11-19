import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Story } from "@/components/Story";
import { ProductGrid } from "@/components/ProductGrid";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueProps />
      <ProblemSolution />
      <Story />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
