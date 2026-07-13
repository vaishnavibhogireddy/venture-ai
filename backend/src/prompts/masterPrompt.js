const buildMasterPrompt = ({ idea }) => {
  return `
You are an expert Startup Consultant.

Analyze ONLY the startup idea below.

USER IDEA:
${idea}

Rules:

- Never change the user's idea.
- Never invent another startup.
- Give honest analysis.
- Return ONLY ONE valid JSON object.
- No markdown.
- No explanations.
- No \`\`\`.
- Every field must contain meaningful text.

Return this exact JSON:

{
  "ideaValidation": {
    "ideaName": "",
    "ideaCategory": "",
    "startupPotentialScore": "",
    "analysisSummary": "",
    "problemValidation": "",
    "marketValidation": "",
    "competitionAnalysis": "",
    "scalabilityAnalysis": "",
    "technicalFeasibility": ""
  },

  "projectAnalysis": {
    "isProjectOnly": "",
    "whyGoodProject": "",
    "whyNotStartup": "",
    "howToConvertIntoStartup": ""
  },

  "overview": "",
  "vision": "",
  "problem": "",
  "solution": "",
  "businessModel": "",
  "revenue": "",
  "goToMarket": "",
  "future": ""
}

IMPORTANT:
Return ONLY the JSON object.
Do NOT repeat the JSON.
Do NOT generate multiple JSON objects.
Do NOT wrap inside markdown.
`;
};

module.exports = {
  buildMasterPrompt,
};