const { retrieveKnowledge } = require("../services/ragService");
const { buildMasterPrompt } = require("../prompts/masterPrompt");
const { generateWithGranite } = require("../services/ibmService");
const parseBlueprint = require("../utils/blueprintParser");

const { generateMarketPrompt } = require("../agents/marketAgent");
const { generateCompetitorPrompt } = require("../agents/competitorAgent");
const { generateFinancePrompt } = require("../agents/financeAgent");
const { generateLegalPrompt } = require("../agents/legalAgent");
const { generateFundingPrompt } = require("../agents/fundingAgent");
const { generateGovernmentPrompt } = require("../agents/governmentAgent");
const { generateInvestorPrompt } = require("../agents/investorAgent");

const chatController = async (req, res) => {
  try {
    const { message } = req.body;

    console.log("\n==============================");
    console.log("USER IDEA:");
    console.log(message);
    console.log("==============================\n");

    const ragResults = retrieveKnowledge(message);

    const ragContext = ragResults
      .map((item) => `• ${item.title}: ${item.description}`)
      .join("\n");

    const masterPrompt = buildMasterPrompt({
      idea: message,

      ragContext,

      market: generateMarketPrompt(message),

      competitors: generateCompetitorPrompt(message),

      finance: generateFinancePrompt(message),

      legal: generateLegalPrompt(message),

      funding: generateFundingPrompt(message),

      government: generateGovernmentPrompt(message),

      investors: generateInvestorPrompt(message),
    });

    console.log("\n==============================");
    console.log("MASTER PROMPT:");
    console.log(masterPrompt);
    console.log("==============================");
    console.log("PROMPT LENGTH:", masterPrompt.length);
    console.log("==============================\n");

    const response = await generateWithGranite(masterPrompt);

    console.log("\n==============================");
    console.log("RAW AI RESPONSE:");
    console.log(response);
    console.log("==============================\n");

    const parsed = parseBlueprint(response);

    console.log("\n==============================");
    console.log("PARSED BLUEPRINT:");
    console.dir(parsed, { depth: null });
    console.log("==============================\n");

    res.json({
      success: true,
      userMessage: message,
      blueprint: parsed,
    });
  } catch (error) {
    console.error("CHAT CONTROLLER ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI Generation Failed",
      error: error.message,
    });
  }
};

module.exports = chatController;