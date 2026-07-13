// ==========================================
// INVESTOR AGENT
// Local investor recommendations
// No AI tokens used
// ==========================================

const investorTemplates = {
  health: {
    suitableInvestorTypes: [
      "Angel Investors",
      "HealthTech Venture Capital",
      "Seed Funds"
    ],

    angelNetworks: [
      "Indian Angel Network",
      "LetsVenture"
    ],

    ventureCapitalFirms: [
      "Kalaari Capital",
      "Blume Ventures",
      "Peak XV Partners"
    ],

    incubators: [
      "NSRCEL IIM Bangalore",
      "IIT Bombay SINE"
    ],

    accelerators: [
      "Google for Startups",
      "Microsoft for Startups"
    ],

    investmentReadiness:
      "Build MVP, validate users, demonstrate traction, and prepare financial projections."
  },

  edtech: {
    suitableInvestorTypes: [
      "Angel Investors",
      "EdTech VC",
      "Seed Funds"
    ],

    angelNetworks: [
      "Indian Angel Network",
      "LetsVenture"
    ],

    ventureCapitalFirms: [
      "Blume Ventures",
      "Kalaari Capital"
    ],

    incubators: [
      "NSRCEL",
      "IIT Incubators"
    ],

    accelerators: [
      "Google for Startups"
    ],

    investmentReadiness:
      "Pilot with colleges, collect user metrics, and build recurring revenue."
  },

  fintech: {
    suitableInvestorTypes: [
      "FinTech VC",
      "Angel Investors"
    ],

    angelNetworks: [
      "Indian Angel Network"
    ],

    ventureCapitalFirms: [
      "Peak XV Partners",
      "Accel"
    ],

    incubators: [
      "FinTech Innovation Labs"
    ],

    accelerators: [
      "Microsoft for Startups"
    ],

    investmentReadiness:
      "Show regulatory compliance, security, and customer growth."
  },

  general: {
    suitableInvestorTypes: [
      "Angel Investors",
      "Seed Investors"
    ],

    angelNetworks: [
      "Indian Angel Network",
      "LetsVenture"
    ],

    ventureCapitalFirms: [
      "Blume Ventures",
      "Kalaari Capital"
    ],

    incubators: [
      "NSRCEL"
    ],

    accelerators: [
      "Google for Startups",
      "Microsoft for Startups"
    ],

    investmentReadiness:
      "Validate the problem, build an MVP, and acquire early customers."
  }
};

function detectInvestorType(idea) {
  const text = idea.toLowerCase();

  if (
    text.includes("nutrition") ||
    text.includes("health") ||
    text.includes("fitness")
  ) {
    return investorTemplates.health;
  }

  if (
    text.includes("education") ||
    text.includes("student") ||
    text.includes("learning")
  ) {
    return investorTemplates.edtech;
  }

  if (
    text.includes("finance") ||
    text.includes("bank") ||
    text.includes("payment")
  ) {
    return investorTemplates.fintech;
  }

  return investorTemplates.general;
}

function generateInvestorPrompt(idea) {
  return detectInvestorType(idea);
}

module.exports = {
  generateInvestorPrompt,
};