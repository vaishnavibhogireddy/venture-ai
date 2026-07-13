// ==========================================
// FINANCE AGENT
// Local financial estimation
// No AI tokens used
// ==========================================

const financeTemplates = {
  saas: {
    developmentCost: "$15,000 - $50,000",
    infrastructureCost: "$100 - $500/month",
    marketingBudget: "$5,000 - $20,000",
    operationalCost: "$500 - $2,000/month",
    revenueForecast: "Subscription Revenue",
    ROI: "12-24 months"
  },

  health: {
    developmentCost: "$20,000 - $60,000",
    infrastructureCost: "$200 - $800/month",
    marketingBudget: "$10,000 - $30,000",
    operationalCost: "$1,000 - $3,000/month",
    revenueForecast: "Subscriptions + Partnerships",
    ROI: "18-30 months"
  },

  education: {
    developmentCost: "$15,000 - $40,000",
    infrastructureCost: "$150 - $600/month",
    marketingBudget: "$5,000 - $15,000",
    operationalCost: "$800 - $2,500/month",
    revenueForecast: "Subscriptions",
    ROI: "12-24 months"
  },

  ecommerce: {
    developmentCost: "$25,000 - $80,000",
    infrastructureCost: "$500 - $2,000/month",
    marketingBudget: "$15,000 - $50,000",
    operationalCost: "$2,000 - $10,000/month",
    revenueForecast: "Product Sales",
    ROI: "18-36 months"
  }
};

function detectFinanceCategory(idea) {
  const text = idea.toLowerCase();

  if (
    text.includes("nutrition") ||
    text.includes("health") ||
    text.includes("fitness")
  ) {
    return financeTemplates.health;
  }

  if (
    text.includes("student") ||
    text.includes("education") ||
    text.includes("learning")
  ) {
    return financeTemplates.education;
  }

  if (
    text.includes("shopping") ||
    text.includes("ecommerce") ||
    text.includes("marketplace")
  ) {
    return financeTemplates.ecommerce;
  }

  return financeTemplates.saas;
}

function generateFinancePrompt(idea) {
  const info = detectFinanceCategory(idea);

  return {
    developmentCost: info.developmentCost,
    infrastructureCost: info.infrastructureCost,
    marketingBudget: info.marketingBudget,
    operationalCost: info.operationalCost,
    revenueForecast: info.revenueForecast,
    ROI: info.ROI
  };
}

module.exports = {
  generateFinancePrompt,
};