// ==========================================
// FUNDING AGENT
// Local funding recommendations
// No AI tokens used
// ==========================================

const fundingTemplates = {
  health: {
    bootstrapping:
      "Build MVP using personal savings and validate with early users.",

    angelInvestors: [
      "HealthTech Angels",
      "Indian Angel Network"
    ],

    ventureCapital: [
      "Health-focused VC Firms",
      "Early-stage SaaS Investors"
    ],

    grants: [
      "Startup India Seed Fund",
      "BIRAC (if applicable)"
    ],

    accelerators: [
      "Google for Startups",
      "Microsoft for Startups"
    ],

    incubators: [
      "NSRCEL IIM Bangalore",
      "IIT Bombay SINE"
    ]
  },

  edtech: {
    bootstrapping:
      "Develop MVP and onboard pilot colleges before fundraising.",

    angelInvestors: [
      "EdTech Angel Investors"
    ],

    ventureCapital: [
      "Education-focused VC Firms"
    ],

    grants: [
      "Startup India Seed Fund"
    ],

    accelerators: [
      "Google for Startups"
    ],

    incubators: [
      "NSRCEL",
      "IIT Incubators"
    ]
  },

  fintech: {
    bootstrapping:
      "Develop secure MVP before raising external capital.",

    angelInvestors: [
      "FinTech Angel Investors"
    ],

    ventureCapital: [
      "FinTech VC Firms"
    ],

    grants: [
      "SIDBI Startup Programs"
    ],

    accelerators: [
      "Microsoft for Startups"
    ],

    incubators: [
      "FinTech Innovation Labs"
    ]
  },

  general: {
    bootstrapping:
      "Validate product before seeking investors.",

    angelInvestors: [
      "Indian Angel Network"
    ],

    ventureCapital: [
      "Early-stage VC Firms"
    ],

    grants: [
      "Startup India Seed Fund"
    ],

    accelerators: [
      "Google for Startups",
      "Microsoft for Startups"
    ],

    incubators: [
      "NSRCEL",
      "IIT Incubators"
    ]
  }
};

function detectFunding(idea) {
  const text = idea.toLowerCase();

  if (
    text.includes("health") ||
    text.includes("nutrition") ||
    text.includes("fitness")
  ) {
    return fundingTemplates.health;
  }

  if (
    text.includes("education") ||
    text.includes("student")
  ) {
    return fundingTemplates.edtech;
  }

  if (
    text.includes("finance") ||
    text.includes("bank") ||
    text.includes("payment")
  ) {
    return fundingTemplates.fintech;
  }

  return fundingTemplates.general;
}

function generateFundingPrompt(idea) {
  return detectFunding(idea);
}

module.exports = {
  generateFundingPrompt,
};