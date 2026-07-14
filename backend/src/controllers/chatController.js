const Blueprint = require("../models/Blueprint");

const { buildMasterPrompt } = require("../prompts/masterPrompt");
const { generateWithGranite } = require("../services/ibmService");
const parseBlueprint = require("../utils/blueprintParser");

// Local Agents
const { generateMarketPrompt } = require("../agents/marketAgent");
const {
  generateCompetitorPrompt,
} = require("../agents/competitorAgent");
const { generateFinancePrompt } = require("../agents/financeAgent");
const { generateLegalPrompt } = require("../agents/legalAgent");
const { generateFundingPrompt } = require("../agents/fundingAgent");
const {
  generateGovernmentPrompt,
} = require("../agents/governmentAgent");
const {
  generateInvestorPrompt,
} = require("../agents/investorAgent");

function createIdeaName(message) {
  return message
    .trim()
    .split(/\s+/)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function normalizeCompetitorAnalysis(competitors = {}) {
  return {
    existingCompetitors:
      competitors.existingCompetitors ||
      competitors.competitors || [
        "Emerging startups",
        "Traditional consulting services",
        "General-purpose AI platforms",
      ],

    strengths:
      Array.isArray(competitors.strengths) &&
      competitors.strengths.length > 0
        ? competitors.strengths
        : [
            "AI-driven automation",
            "Personalized recommendations",
            "Scalable digital platform",
          ],

    weaknesses:
      Array.isArray(competitors.weaknesses) &&
      competitors.weaknesses.length > 0
        ? competitors.weaknesses
        : [
            "Requires strong user trust",
            "Depends on the quality of input data",
            "Faces competition from established platforms",
          ],

    marketGaps:
      Array.isArray(competitors.marketGaps) &&
      competitors.marketGaps.length > 0
        ? competitors.marketGaps
        : [
            "Affordable personalized guidance",
            "Simplified planning for small businesses",
            "Localized recommendations for Indian users",
          ],

    competitiveAdvantage:
      competitors.competitiveAdvantage ||
      "AI-driven personalized guidance, structured recommendations and a focused experience for a specific target audience.",
  };
}

function normalizeInvestorAnalysis(investors = {}, market = {}) {
  return {
    recommendedInvestors:
      investors.recommendedInvestors ||
      investors.investors || [
        "Indian Angel Network",
        "100X.VC",
        "Early-stage technology angel investors",
      ],

    incubators:
      investors.incubators ||
      investors.supportNetworks || [
        "NSRCEL",
        "IIT incubators",
        "Startup India network",
      ],

    supportNetworks:
      investors.supportNetworks || [
        "Startup India",
        "TiE chapters",
        "Local startup communities",
      ],

    strategy:
      investors.strategy ||
      investors.recommendation ||
      `Build an MVP, demonstrate early traction, validate demand among ${
        market.audience || "target users"
      }, and approach angel investors and incubators with measurable user feedback.`,

    recommendation:
      investors.recommendation ||
      "Begin with incubators and angel investors before approaching larger venture-capital firms.",
  };
}

function normalizeFinanceAnalysis(finance = {}) {
  return {
    developmentCost:
      finance.developmentCost || "$15,000 - $50,000",

    infrastructureCost:
      finance.infrastructureCost || "$100 - $500/month",

    marketingBudget:
      finance.marketingBudget || "$5,000 - $20,000",

    operationalCost:
      finance.operationalCost || "$500 - $2,000/month",
  };
}

function normalizeFundingAnalysis(funding = {}) {
  return {
    bootstrapping:
      funding.bootstrapping ||
      "Validate the product and build an MVP before seeking external investment.",

    angelInvestors:
      funding.angelInvestors || [
        "Indian Angel Network",
        "Sector-focused angel investors",
      ],

    ventureCapital:
      funding.ventureCapital || [
        "Early-stage venture capital firms",
      ],

    grants:
      funding.grants || [
        "Startup India Seed Fund",
      ],

    accelerators:
      funding.accelerators || [
        "Google for Startups",
        "Microsoft for Startups",
      ],

    incubators:
      funding.incubators || [
        "NSRCEL",
        "IIT incubators",
      ],
  };
}

function normalizeLegalAnalysis(legal = {}) {
  return {
    businessRegistration:
      legal.businessRegistration ||
      "Private Limited Company",

    dataPrivacy:
      legal.dataPrivacy ||
      "Maintain secure storage, responsible processing and controlled access to customer information.",

    licenses:
      legal.licenses || [
        "Business Registration",
      ],

    compliance:
      legal.compliance || [
        "Data Protection",
        "Consumer Protection",
      ],

    intellectualProperty:
      legal.intellectualProperty ||
      "Trademark the business name and protect original software, content and product assets.",
  };
}

function normalizeGovernmentAnalysis(government = {}) {
  return {
    startupIndia:
      government.startupIndia ||
      "Eligible for Startup India registration.",

    msme:
      government.msme ||
      "Eligible for MSME registration and related support.",

    grants:
      government.grants || [
        "Startup India Seed Fund",
      ],

    subsidies:
      government.subsidies || [
        "MSME benefits",
      ],
  };
}

function createLocalFallbackBlueprint({
  idea,
  market,
  competitors,
  finance,
  legal,
  funding,
  government,
  investors,
}) {
  const ideaName = createIdeaName(idea);

  const competitorAnalysis =
    normalizeCompetitorAnalysis(competitors);

  const investorAnalysis =
    normalizeInvestorAnalysis(investors, market);

  const financeAnalysis =
    normalizeFinanceAnalysis(finance);

  const fundingAnalysis =
    normalizeFundingAnalysis(funding);

  const legalAnalysis =
    normalizeLegalAnalysis(legal);

  const governmentSchemes =
    normalizeGovernmentAnalysis(government);

  return {
    ideaValidation: {
      ideaName,
      startupPotentialScore: "High",
      ideaCategory:
        market?.industry || "General Technology",

      problemValidation:
        `${ideaName} addresses a potential user or business problem that can be validated through interviews, surveys and early product testing.`,

      marketValidation:
        `The idea operates in the ${
          market?.industry || "technology"
        } sector and targets ${
          market?.audience || "potential users"
        }. Market demand should be validated using real customer feedback and competitor research.`,

      technicalFeasibility:
        "The solution is technically feasible using modern web development, cloud services, artificial intelligence APIs and scalable database infrastructure.",
    },

    projectAnalysis: {
      isProjectOnly: "No",

      howToConvertIntoStartup:
        "Build a minimum viable product, validate it with real users, define a clear revenue model, establish partnerships and improve the solution based on customer feedback.",
    },

    overview:
      `${ideaName} is an AI-supported startup concept designed for ${
        market?.audience || "users"
      }. It aims to provide useful insights, automation and improved decision-making through an accessible digital platform.`,

    vision:
      `To develop ${ideaName} into a reliable and scalable platform that creates measurable value for its target users.`,

    problem:
      "Users often face inefficient processes, limited access to actionable insights and difficulty making informed decisions in this area.",

    solution:
      `${ideaName} provides a centralized AI-powered platform that analyses user inputs and delivers structured recommendations, insights and actionable plans.`,

    businessModel:
      "The startup can use subscription plans, premium features, business partnerships, consulting services and enterprise licensing.",

    revenue:
      "Revenue can be generated through monthly subscriptions, premium plans, enterprise partnerships, API access and consulting services.",

    revenueAnalysis: {
      revenueModel:
        "Subscription plans, premium features, partnerships and enterprise services.",

      forecast:
        "Revenue can grow gradually after MVP validation and early customer acquisition.",

      expectedROI:
        "An initial return may be achievable within 12 to 24 months depending on adoption, pricing and operating costs.",
    },

    goToMarket:
      "Launch an MVP, acquire early users through digital communities, collect feedback, improve the product and expand through partnerships.",

    goToMarketAnalysis: {
      strategy:
        "Start with a focused MVP and test it with a clearly defined early-user segment.",

      customerAcquisition:
        "Use social media campaigns, direct outreach, referral programmes and strategic partnerships.",

      growthChannels:
        "Digital marketing, online communities, partnerships, content marketing and user referrals.",

      expansion:
        "Expand into additional customer segments and markets after validating product-market fit.",
    },

    future:
      "Future development can include advanced analytics, improved personalization, multilingual support, mobile applications, third-party integrations and expansion into new markets.",

    marketAnalysis: market || {},
    competitorAnalysis,

    financeAnalysis,
    budgetAnalysis: financeAnalysis,

    legalAnalysis,
    fundingAnalysis,
    governmentSchemes,
    investorAnalysis,

    generationSource: "local-agent-fallback",
  };
}

function isTokenQuotaError(error) {
  const errorBody =
    typeof error?.body === "string"
      ? error.body
      : JSON.stringify(
          error?.body ||
            error?.result ||
            {}
        );

  return (
    errorBody.includes("token_quota_reached") ||
    error?.message?.includes("token_quota_reached")
  );
}

const chatController = async (req, res) => {
  try {
    const message = req.body?.message?.trim();

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Startup idea is required.",
      });
    }

    console.log("\n==============================");
    console.log("USER IDEA:");
    console.log(message);
    console.log("==============================\n");

    // Run local agents first. These use no IBM tokens.
    const market = generateMarketPrompt(message);
    const competitors =
      generateCompetitorPrompt(message);
    const finance = generateFinancePrompt(message);
    const legal = generateLegalPrompt(message);
    const funding = generateFundingPrompt(message);
    const government =
      generateGovernmentPrompt(message);
    const investors =
      generateInvestorPrompt(message);

    let blueprint;
    let generationSource = "ibm-watsonx";

    try {
      const masterPrompt = buildMasterPrompt({
        idea: message,
      });

      console.log(
        "Prompt Length:",
        masterPrompt.length
      );

      const response =
        await generateWithGranite(masterPrompt);

      blueprint = parseBlueprint(response);

      // Merge normalized local-agent results
      blueprint.marketAnalysis = market;

      blueprint.competitorAnalysis =
        normalizeCompetitorAnalysis(
          competitors
        );

      const normalizedFinance =
        normalizeFinanceAnalysis(finance);

      blueprint.financeAnalysis =
        normalizedFinance;

      blueprint.budgetAnalysis =
        normalizedFinance;

      blueprint.legalAnalysis =
        normalizeLegalAnalysis(legal);

      blueprint.fundingAnalysis =
        normalizeFundingAnalysis(funding);

      blueprint.governmentSchemes =
        normalizeGovernmentAnalysis(
          government
        );

      blueprint.investorAnalysis =
        normalizeInvestorAnalysis(
          investors,
          market
        );

      blueprint.generationSource =
        generationSource;
    } catch (ibmError) {
      if (!isTokenQuotaError(ibmError)) {
        throw ibmError;
      }

      console.warn(
        "IBM watsonx token quota reached. Using local-agent fallback."
      );

      generationSource =
        "local-agent-fallback";

      blueprint =
        createLocalFallbackBlueprint({
          idea: message,
          market,
          competitors,
          finance,
          legal,
          funding,
          government,
          investors,
        });
    }

    const savedBlueprint =
      await Blueprint.create({
        idea: message,
        blueprint,
      });

    console.log(
      "Blueprint saved to MongoDB:",
      savedBlueprint._id.toString()
    );

    console.log(
      "Generation source:",
      generationSource
    );

    return res.status(200).json({
      success: true,
      userMessage: message,
      blueprint,
      generationSource,
    });
  } catch (error) {
    console.error(
      "CHAT CONTROLLER ERROR:"
    );

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "AI Generation Failed",
      error: error.message,
    });
  }
};

module.exports = chatController;