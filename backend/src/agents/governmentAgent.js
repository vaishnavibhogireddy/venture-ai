const generateGovernmentPrompt = (idea, context = "") => {
  return `
### GOVERNMENT SCHEMES

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Startup India
- MSME
- SIDBI
- State Government Schemes
- Grants
- Subsidies
`;
};

module.exports = {
  generateGovernmentPrompt,
};