const generateCompetitorPrompt = (idea, context = "") => {
  return `
### COMPETITOR ANALYSIS

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Existing Competitors
- Competitor Strengths
- Competitor Weaknesses
- Market Gaps
- Competitive Advantage
`;
};

module.exports = {
  generateCompetitorPrompt,
};