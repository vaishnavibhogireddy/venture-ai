// ==========================================
// MARKET AGENT
// Runs locally (0 AI tokens)
// ==========================================

const industries = {
  nutrition: {
    industry: "HealthTech",
    audience: "Health-conscious users",
    marketSize: "Large",
    growth: "High",
    demand: "Increasing rapidly",
    trends: [
      "AI-powered nutrition",
      "Personalized diet plans",
      "Wearable integration",
      "Health analytics",
    ],
  },
    market: {
    industry: "Market Intelligence Technology",
    audience: "Startups, businesses, analysts and investors",
    marketSize: "Large",
    growth: "High",
    demand: "Increasing",
    trends: [
      "AI-powered market research",
      "Predictive analytics",
      "Real-time business intelligence",
      "Automated trend forecasting",
    ],
  },

  analytics: {
    industry: "Data Analytics",
    audience: "Businesses and decision-makers",
    marketSize: "Large",
    growth: "Very High",
    demand: "High",
    trends: [
      "Predictive analytics",
      "AI business intelligence",
      "Data-driven decision making",
      "Real-time dashboards",
    ],
  },

  predictor: {
    industry: "Predictive Analytics",
    audience: "Businesses, researchers and analysts",
    marketSize: "Large",
    growth: "High",
    demand: "Increasing",
    trends: [
      "Machine learning forecasting",
      "Predictive modelling",
      "Business intelligence",
      "Automated insights",
    ],
  },

  ai: {
    industry: "Artificial Intelligence",
    audience: "Businesses and technology users",
    marketSize: "Very Large",
    growth: "Very High",
    demand: "Very High",
    trends: [
      "Generative AI",
      "AI automation",
      "Predictive intelligence",
      "Personalized digital services",
    ],
  },

  health: {
    industry: "HealthTech",
    audience: "Patients and wellness users",
    marketSize: "Large",
    growth: "High",
    demand: "Very High",
    trends: [
      "Digital healthcare",
      "Telemedicine",
      "AI diagnosis",
      "Preventive healthcare",
    ],
  },

  fitness: {
    industry: "HealthTech",
    audience: "Fitness enthusiasts",
    marketSize: "Large",
    growth: "High",
    demand: "High",
    trends: [
      "Fitness tracking",
      "AI coaching",
      "Wearables",
      "Subscription apps",
    ],
  },

  education: {
    industry: "EdTech",
    audience: "Students",
    marketSize: "Very Large",
    growth: "Very High",
    demand: "High",
    trends: [
      "AI Tutors",
      "Personalized Learning",
      "Online Education",
      "Gamification",
    ],
  },

  student: {
    industry: "EdTech",
    audience: "College Students",
    marketSize: "Very Large",
    growth: "High",
    demand: "High",
    trends: [
      "Campus Technology",
      "AI Learning",
      "Career Guidance",
      "Student Productivity",
    ],
  },

  finance: {
    industry: "FinTech",
    audience: "Individuals and Businesses",
    marketSize: "Huge",
    growth: "Very High",
    demand: "Very High",
    trends: [
      "Digital Banking",
      "AI Finance",
      "UPI",
      "Personal Finance",
    ],
  },

  banking: {
    industry: "FinTech",
    audience: "Bank Customers",
    marketSize: "Huge",
    growth: "Very High",
    demand: "High",
    trends: [
      "Digital Banking",
      "Fraud Detection",
      "AI Banking",
      "Automation",
    ],
  },

  agriculture: {
    industry: "AgriTech",
    audience: "Farmers",
    marketSize: "Large",
    growth: "Growing",
    demand: "Increasing",
    trends: [
      "Smart Farming",
      "Precision Agriculture",
      "IoT",
      "Crop Prediction",
    ],
  },

  food: {
    industry: "FoodTech",
    audience: "Consumers",
    marketSize: "Large",
    growth: "High",
    demand: "High",
    trends: [
      "Food Delivery",
      "Cloud Kitchens",
      "AI Menus",
      "Nutrition Tracking",
    ],
  },

  ecommerce: {
    industry: "E-Commerce",
    audience: "Online Buyers",
    marketSize: "Huge",
    growth: "Very High",
    demand: "High",
    trends: [
      "AI Shopping",
      "Quick Commerce",
      "Personalization",
      "Marketplace Platforms",
    ],
  },

  shopping: {
    industry: "E-Commerce",
    audience: "Consumers",
    marketSize: "Huge",
    growth: "Very High",
    demand: "High",
    trends: [
      "Online Shopping",
      "AI Recommendations",
      "Quick Delivery",
      "Subscriptions",
    ],
  },
};

function detectIndustry(idea) {
  const text = idea.toLowerCase();

  for (const keyword in industries) {
    if (text.includes(keyword)) {
      return industries[keyword];
    }
  }

  return {
    industry: "General Technology",
    audience: "General Users",
    marketSize: "Unknown",
    growth: "Unknown",
    demand: "Unknown",
    trends: ["Technology", "Innovation"],
  };
}

function generateMarketPrompt(idea) {
  return detectIndustry(idea);
}

module.exports = {
  generateMarketPrompt,
};