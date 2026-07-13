// ==========================================
// GOVERNMENT AGENT
// Local government schemes
// No AI tokens used
// ==========================================

const schemes = {
  health: {
    startupIndia: "Eligible for Startup India recognition and Startup India Seed Fund.",
    msme: "Register as an MSME for easier access to loans and government support.",
    sidbi: "Eligible for SIDBI startup funding programs.",
    stateGovernmentSchemes: [
      "State Startup Mission",
      "Innovation & Entrepreneurship Scheme"
    ],
    grants: [
      "Startup India Seed Fund",
      "BIRAC Grants"
    ],
    subsidies: [
      "MSME Technology Support",
      "Startup Incentives"
    ]
  },

  education: {
    startupIndia: "Eligible for Startup India registration.",
    msme: "Eligible for MSME benefits.",
    sidbi: "Eligible for SIDBI startup financing.",
    stateGovernmentSchemes: [
      "Education Innovation Schemes",
      "Student Startup Programs"
    ],
    grants: [
      "Startup India Seed Fund"
    ],
    subsidies: [
      "Digital Education Incentives"
    ]
  },

  fintech: {
    startupIndia: "Eligible for Startup India benefits.",
    msme: "Eligible for MSME registration.",
    sidbi: "Eligible for SIDBI funding.",
    stateGovernmentSchemes: [
      "Digital India Programs"
    ],
    grants: [
      "Startup India",
      "Digital India Grants"
    ],
    subsidies: [
      "Technology Adoption Support"
    ]
  },

  general: {
    startupIndia: "Eligible for Startup India registration.",
    msme: "Eligible for MSME registration.",
    sidbi: "Eligible for SIDBI support.",
    stateGovernmentSchemes: [
      "State Startup Policy"
    ],
    grants: [
      "Startup India Seed Fund"
    ],
    subsidies: [
      "MSME Benefits"
    ]
  }
};

function detectScheme(idea) {
  const text = idea.toLowerCase();

  if (
    text.includes("nutrition") ||
    text.includes("health") ||
    text.includes("fitness")
  ) {
    return schemes.health;
  }

  if (
    text.includes("education") ||
    text.includes("student") ||
    text.includes("learning")
  ) {
    return schemes.education;
  }

  if (
    text.includes("finance") ||
    text.includes("bank") ||
    text.includes("payment")
  ) {
    return schemes.fintech;
  }

  return schemes.general;
}

function generateGovernmentPrompt(idea) {
  return detectScheme(idea);
}

module.exports = {
  generateGovernmentPrompt,
};