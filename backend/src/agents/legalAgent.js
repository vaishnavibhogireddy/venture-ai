// ==========================================
// LEGAL AGENT
// Local legal recommendations
// No AI tokens used
// ==========================================

const legalTemplates = {
  health: {
    businessRegistration: "Private Limited Company",
    licenses: [
      "Business Registration",
      "GST Registration (if applicable)"
    ],
    compliance: [
      "Data Privacy Compliance",
      "Consumer Protection Laws"
    ],
    dataPrivacy:
      "Secure user health and personal data using encryption and privacy best practices.",
    intellectualProperty:
      "Trademark brand name and file patents if novel AI technology is developed.",
    industryRegulations: [
      "Health-related guidelines",
      "Digital platform regulations"
    ]
  },

  education: {
    businessRegistration: "Private Limited Company",
    licenses: [
      "Business Registration"
    ],
    compliance: [
      "Data Privacy",
      "Education-related regulations"
    ],
    dataPrivacy:
      "Protect student information according to applicable privacy laws.",
    intellectualProperty:
      "Trademark brand and protect educational content.",
    industryRegulations: [
      "Online education guidelines"
    ]
  },

  fintech: {
    businessRegistration: "Private Limited Company",
    licenses: [
      "Business Registration",
      "Financial licenses (if required)"
    ],
    compliance: [
      "KYC",
      "AML",
      "Data Protection"
    ],
    dataPrivacy:
      "Implement secure financial data handling and encryption.",
    intellectualProperty:
      "Protect proprietary algorithms and branding.",
    industryRegulations: [
      "RBI Guidelines",
      "Financial Regulations"
    ]
  },

  general: {
    businessRegistration: "Private Limited Company",
    licenses: [
      "Business Registration"
    ],
    compliance: [
      "Data Protection",
      "Consumer Protection"
    ],
    dataPrivacy:
      "Maintain secure storage and handling of customer information.",
    intellectualProperty:
      "Trademark the business and protect original software.",
    industryRegulations: [
      "General IT Regulations"
    ]
  }
};

function detectLegalCategory(idea) {
  const text = idea.toLowerCase();

  if (
    text.includes("nutrition") ||
    text.includes("health") ||
    text.includes("fitness")
  ) {
    return legalTemplates.health;
  }

  if (
    text.includes("education") ||
    text.includes("student") ||
    text.includes("learning")
  ) {
    return legalTemplates.education;
  }

  if (
    text.includes("finance") ||
    text.includes("bank") ||
    text.includes("payment")
  ) {
    return legalTemplates.fintech;
  }

  return legalTemplates.general;
}

function generateLegalPrompt(idea) {
  return detectLegalCategory(idea);
}

module.exports = {
  generateLegalPrompt,
};