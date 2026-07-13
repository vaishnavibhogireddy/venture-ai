const Blueprint = require("../models/Blueprint");

const { buildMasterPrompt } = require("../prompts/masterPrompt");
const { generateWithGranite } = require("../services/ibmService");
const parseBlueprint = require("../utils/blueprintParser");

// Local Agents
const { generateMarketPrompt } = require("../agents/marketAgent");
const { generateCompetitorPrompt } = require("../agents/competitorAgent");
const { generateFinancePrompt } = require("../agents/financeAgent");
const { generateLegalPrompt } = require("../agents/legalAgent");
const { generateFundingPrompt } = require("../agents/fundingAgent");
const { generateGovernmentPrompt } = require("../agents/governmentAgent");
const { generateInvestorPrompt } = require("../agents/investorAgent");

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

    // Run local agents — no IBM tokens used
    const market = generateMarketPrompt(message);
    const competitors = generateCompetitorPrompt(message);
    const finance = generateFinancePrompt(message);
    const legal = generateLegalPrompt(message);
    const funding = generateFundingPrompt(message);
    const government = generateGovernmentPrompt(message);
    const investors = generateInvestorPrompt(message);

    // One small IBM call
    const masterPrompt = buildMasterPrompt({
      idea: message,
    });

    console.log("Prompt Length:", masterPrompt.length);

    const response = await generateWithGranite(masterPrompt);
    const blueprint = parseBlueprint(response);

    // Merge local-agent results
    blueprint.marketAnalysis = market;
    blueprint.competitorAnalysis = competitors;
    blueprint.financeAnalysis = finance;
    blueprint.legalAnalysis = legal;
    blueprint.fundingAnalysis = funding;
    blueprint.governmentSchemes = government;
    blueprint.investorAnalysis = investors;

    // Save generated blueprint to MongoDB
    const savedBlueprint = await Blueprint.create({
      idea: message,
      blueprint,
    });

    console.log("Blueprint saved to MongoDB:", savedBlueprint._id.toString());

    return res.status(200).json({
      success: true,
      userMessage: message,
      blueprint,
    });
  } catch (error) {
    console.error("CHAT CONTROLLER ERROR:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "AI Generation Failed",
      error: error.message,
    });
  }
};

module.exports = chatController;