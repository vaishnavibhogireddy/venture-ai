// ==========================================
// COMPETITOR AGENT
// Local competitor intelligence
// No AI tokens used
// ==========================================

const competitors = {
  nutrition: {
    existingCompetitors: [
      "MyFitnessPal",
      "HealthifyMe",
      "Cronometer",
      "Lifesum"
    ],
    strengths: [
      "Large user base",
      "Established brand",
      "Food database",
      "Mobile apps"
    ],
    weaknesses: [
      "Generic recommendations",
      "Limited personalization",
      "Mostly calorie tracking",
      "Weak student focus"
    ],
    gaps: [
      "College-specific nutrition",
      "Budget meal planning",
      "Hostel food recommendations",
      "AI personalized guidance"
    ]
  },

  health: {
    existingCompetitors: [
      "Practo",
      "Apollo 24/7",
      "HealthifyMe"
    ],
    strengths: [
      "Medical ecosystem",
      "Experienced doctors",
      "Trusted brand"
    ],
    weaknesses: [
      "Less personalization",
      "Expensive consultations"
    ],
    gaps: [
      "AI preventive healthcare",
      "Student wellness"
    ]
  },

  education: {
    existingCompetitors: [
      "Coursera",
      "Udemy",
      "Byju's"
    ],
    strengths: [
      "Large content library",
      "Strong brand"
    ],
    weaknesses: [
      "Limited personalization"
    ],
    gaps: [
      "AI mentoring",
      "Career-focused learning"
    ]
  },

  finance: {
    existingCompetitors: [
      "CRED",
      "Groww",
      "Zerodha"
    ],
    strengths: [
      "Large customer base",
      "Reliable platforms"
    ],
    weaknesses: [
      "Complex for beginners"
    ],
    gaps: [
      "AI financial assistant",
      "Student finance management"
    ]
  }
};

function detectCompetition(idea) {
  const text = idea.toLowerCase();

  for (const keyword in competitors) {
    if (text.includes(keyword)) {
      return competitors[keyword];
    }
  }

  return {
    existingCompetitors: [
      "Emerging startups"
    ],
    strengths: [
      "Growing market"
    ],
    weaknesses: [
      "Few specialized solutions"
    ],
    gaps: [
      "Innovation opportunity"
    ]
  };
}

function generateCompetitorPrompt(idea) {

  const info = detectCompetition(idea);

  return {
    existingCompetitors: info.existingCompetitors,
    competitorStrengths: info.strengths,
    competitorWeaknesses: info.weaknesses,
    marketGaps: info.gaps,
    competitiveAdvantage:
      "AI-driven personalized experience with a niche market focus."
  };
}

module.exports = {
  generateCompetitorPrompt,
};