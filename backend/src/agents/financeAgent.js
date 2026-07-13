const generateFinancePrompt = (idea, context = "") => {
  return `
### FINANCIAL ANALYSIS

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Development Cost
- Infrastructure Cost
- Marketing Budget
- Operational Cost
- Revenue Forecast
- ROI
`;
};

module.exports = {
  generateFinancePrompt,
};