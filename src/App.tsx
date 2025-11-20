import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import OliveOilHealthBenefits from "./pages/articles/OliveOilHealthBenefits";
import AuthenticOliveOil from "./pages/articles/AuthenticOliveOil";
import MediterraneanDiet from "./pages/articles/MediterraneanDiet";
import OliveOilFreshnessCalculator from "./pages/calculators/OliveOilFreshnessCalculator";
import DailyIntakeCalculator from "./pages/calculators/DailyIntakeCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:handle" element={<ProductDetail />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/knowledge-center/olive-oil-health-benefits-complete-guide" element={<OliveOilHealthBenefits />} />
            <Route path="/knowledge-center/how-to-identify-authentic-extra-virgin-olive-oil" element={<AuthenticOliveOil />} />
            <Route path="/knowledge-center/mediterranean-diet-beginners-guide" element={<MediterraneanDiet />} />
            <Route path="/calculators/olive-oil-freshness" element={<OliveOilFreshnessCalculator />} />
            <Route path="/calculators/daily-intake" element={<DailyIntakeCalculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
