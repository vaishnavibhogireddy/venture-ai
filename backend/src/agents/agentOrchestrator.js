const { generateMarketPrompt } = require("./marketAgent");
const { generateCompetitorPrompt } = require("./competitorAgent");
const { generateFinancePrompt } = require("./financeAgent");
const { generateLegalPrompt } = require("./legalAgent");
const { generateFundingPrompt } = require("./fundingAgent");
const { generateGovernmentPrompt } = require("./governmentAgent");
const { generateInvestorPrompt } = require("./investorAgent");

const runAgents = (idea) => {
    return {
        market: generateMarketPrompt(idea),

        competitors: generateCompetitorPrompt(idea),

        finance: generateFinancePrompt(idea),

        legal: generateLegalPrompt(idea),

        funding: generateFundingPrompt(idea),

        government: generateGovernmentPrompt(idea),

        investors: generateInvestorPrompt(idea),
    };
};

module.exports = {
    runAgents,
};

