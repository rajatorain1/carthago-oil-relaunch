// SEO Utility Functions and Schema Generators

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  author?: string;
}

export const siteConfig = {
  name: "Carthago Oil",
  description: "Premium Tunisian Extra Virgin Olive Oil - Cold-pressed from century-old groves. Experience authentic Mediterranean tradition with award-winning quality.",
  url: "https://carthagooil.org",
  ogImage: "https://carthagooil.org/images/hero-carthago-bright.jpg",
  author: "Carthago Oil",
  keywords: "Tunisian olive oil, extra virgin olive oil, Mediterranean diet, premium olive oil, cold-pressed olive oil, authentic EVOO, best olive oil, Tunisian cuisine, olive oil benefits",
};

// Generate Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Carthago Oil",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/carthago-bottle-elegant.jpg`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "TN",
    addressRegion: "Tunisia"
  },
  sameAs: [
    // Add social media profiles here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "info@carthagooil.org"
  }
});

// Generate Product Schema
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
  sku?: string;
  brand?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.brand || "Carthago Oil"
  },
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency,
    availability: product.availability || "https://schema.org/InStock",
    url: `${siteConfig.url}/product/${encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, '-'))}`
  },
  ...(product.rating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 0,
      bestRating: 5,
      worstRating: 1
    }
  }),
  ...(product.sku && { sku: product.sku })
});

// Generate BreadcrumbList Schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Generate Recipe Schema
export const generateRecipeSchema = (recipe: {
  name: string;
  description: string;
  image: string;
  prepTime?: string;
  cookTime?: string;
  totalTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  keywords?: string;
  cuisine?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Recipe",
  name: recipe.name,
  description: recipe.description,
  image: recipe.image,
  recipeYield: recipe.servings,
  totalTime: recipe.totalTime,
  ...(recipe.prepTime && { prepTime: recipe.prepTime }),
  ...(recipe.cookTime && { cookTime: recipe.cookTime }),
  recipeIngredient: recipe.ingredients,
  recipeInstructions: recipe.instructions.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    text: step
  })),
  ...(recipe.keywords && { keywords: recipe.keywords }),
  ...(recipe.cuisine && { recipeCuisine: recipe.cuisine }),
  ...(recipe.category && { recipeCategory: recipe.category })
});

// Generate Article Schema
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.headline,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Organization",
    name: article.author || "Carthago Oil"
  },
  publisher: {
    "@type": "Organization",
    name: "Carthago Oil",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/carthago-bottle-elegant.jpg`
    }
  },
  ...(article.keywords && { keywords: article.keywords })
});

// Generate FAQ Schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// Generate WebPage Schema
export const generateWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.name,
  description: page.description,
  url: page.url,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url
  }
});

// Generate WebApplication Schema (for calculators and tools)
export const generateWebApplicationSchema = (app: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: app.name,
  description: app.description,
  url: app.url,
  applicationCategory: app.applicationCategory,
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  ...(app.offers && {
    offers: {
      "@type": "Offer",
      price: app.offers.price,
      priceCurrency: app.offers.priceCurrency
    }
  }),
  author: {
    "@type": "Organization",
    name: "Carthago Oil"
  }
});

// Helper to insert schema into page
export const insertSchema = (schema: any) => {
  if (typeof window === 'undefined') return;
  
  const scriptId = 'schema-' + Math.random().toString(36).substr(2, 9);
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
  
  return () => {
    const elem = document.getElementById(scriptId);
    if (elem) elem.remove();
  };
};
