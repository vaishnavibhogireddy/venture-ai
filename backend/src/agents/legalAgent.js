const generateLegalPrompt = (idea, context = "") => {
  return `
### LEGAL REQUIREMENTS

Startup Idea:
${idea}

Additional Context:
${context}

Generate:
- Business Registration
- Licenses
- Compliance
- Data Privacy
- Intellectual Property
- Industry Regulations
`;
};

module.exports = {
  generateLegalPrompt,
};