const generateFundingPrompt = (idea, context = "") => {
  return `
### FUNDING OPPORTUNITIES

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Bootstrapping
- Angel Investors
- Venture Capital
- Grants
- Accelerators
- Incubators
`;
};

module.exports = {
  generateFundingPrompt,
};