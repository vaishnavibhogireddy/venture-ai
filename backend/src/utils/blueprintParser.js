function getSection(text, start, end) {
  const startIndex = text.indexOf(start);

  if (startIndex === -1) return "";

  const content = text.substring(startIndex + start.length);

  if (!end) return content.trim();

  const endIndex = content.indexOf(end);

  if (endIndex === -1) return content.trim();

  return content.substring(0, endIndex).trim();
}

function parseBlueprint(text) {
  return {
    overview: getSection(text, "Startup Overview:", "Problem Statement:"),
    problem: getSection(text, "Problem Statement:", "Proposed Solution:"),
    solution: getSection(text, "Proposed Solution:", "Target Customers:"),
    customers: getSection(text, "Target Customers:", "Market Opportunity:"),
    market: getSection(text, "Market Opportunity:", "Business Model:"),
    businessModel: getSection(text, "Business Model:", "Revenue Streams:"),
    revenue: getSection(text, "Revenue Streams:", "Go-To-Market Strategy:"),
    goToMarket: getSection(text, "Go-To-Market Strategy:", "Estimated Initial Budget:"),
    budget: getSection(text, "Estimated Initial Budget:", "Funding Opportunities:"),
    funding: getSection(text, "Funding Opportunities:", "Future Growth Scope:"),
    future: getSection(text, "Future Growth Scope:", "Competitor Analysis:"),
    competitors: getSection(text, "Competitor Analysis:", "Legal Requirements:"),
    legal: getSection(text, "Legal Requirements:", "I hope"),
  };
}

module.exports = parseBlueprint;