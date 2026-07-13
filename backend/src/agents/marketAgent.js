const generateMarketPrompt = (idea, context = "") => {
  return `
### MARKET ANALYSIS

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Target Customers
- Market Size
- Customer Demand
- Industry Trends
- Market Opportunities
`;
};

module.exports = {
  generateMarketPrompt,
};