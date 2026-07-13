const generateInvestorPrompt = (idea, context = "") => {
  return `
### INVESTOR RECOMMENDATIONS

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Suitable Investor Types
- Angel Networks
- Venture Capital Firms
- Incubators
- Accelerators
- Investment Readiness
`;
};

module.exports = {
  generateInvestorPrompt,
};