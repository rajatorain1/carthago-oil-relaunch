import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to Carthago Oil to explore our premium Tunisian extra virgin olive oil products."
        noindex={true}
      />
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background pt-20">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold font-serif text-olive">404</h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-olive hover:bg-olive/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
