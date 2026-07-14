import SectionCard from "./SectionCard";

import MarketAnalysis from "./sections/MarketAnalysis";
import CompetitorAnalysis from "./sections/CompetitorAnalysis";
import FundingAnalysis from "./sections/FundingAnalysis";
import BudgetAnalysis from "./sections/BudgetAnalysis";
import RevenueAnalysis from "./sections/RevenueAnalysis";
import GoToMarketAnalysis from "./sections/GoToMarketAnalysis";
import LegalAnalysis from "./sections/LegalAnalysis";
import InvestorAnalysis from "./sections/InvestorAnalysis";

function BlueprintSections({ blueprint }) {
  const validation = blueprint?.ideaValidation || {};
  const project = blueprint?.projectAnalysis || {};
  const government = blueprint?.governmentSchemes || {};

  const getSummary = (value, fallback) => {
    if (typeof value === "string" && value.trim()) {
      return value.length > 180
        ? `${value.slice(0, 180)}...`
        : value;
    }

    return fallback;
  };

  return (
    <div className="space-y-6">
      {/* Idea Validation */}

      <SectionCard
        id="validation"
        title="🧠 Idea Validation"
        summary={getSummary(
          validation.problemValidation,
          "Review whether the startup solves a genuine problem, has market demand and is technically feasible."
        )}
        defaultOpen
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Problem Validation
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {validation.problemValidation || "Not Available"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Market Validation
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {validation.marketValidation || "Not Available"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Technical Feasibility
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {validation.technicalFeasibility || "Not Available"}
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Project Decision */}

      <SectionCard
        id="project-decision"
        title="🚀 Project vs Startup Decision"
        summary={getSummary(
          project.howToConvertIntoStartup,
          "Understand whether the idea is currently a project or a scalable startup and what improvements are required."
        )}
      >
        <div className="space-y-5">
          <div className="inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3">
            <p className="text-gray-300">
              <span className="font-semibold text-white">
                Classification:
              </span>{" "}
              {project.isProjectOnly || "Not Available"}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-400">
              How to convert it into a startup
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {project.howToConvertIntoStartup ||
                "No improvement suggestions available"}
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Market */}

      <SectionCard
        id="market"
        title="📈 Market Analysis"
        summary={getSummary(
          blueprint?.market?.summary || blueprint?.marketAnalysis?.summary,
          "Explore the target audience, market opportunity, industry demand and growth potential."
        )}
      >
        <MarketAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Competitors */}

      <SectionCard
        id="competitors"
        title="👥 Competitor Analysis"
        summary={getSummary(
          blueprint?.competitors?.summary ||
            blueprint?.competitorAnalysis?.summary,
          "Review major competitors, alternatives, competitive strengths and opportunities for differentiation."
        )}
      >
        <CompetitorAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Budget */}

      <SectionCard
        id="budget"
        title="💰 Budget Analysis"
        summary={getSummary(
          blueprint?.budget?.summary || blueprint?.budgetAnalysis?.summary,
          "Understand expected startup costs and how the available budget can be allocated."
        )}
      >
        <BudgetAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Funding */}

      <SectionCard
        id="funding"
        title="🤝 Funding Analysis"
        summary={getSummary(
          blueprint?.funding?.summary ||
            blueprint?.fundingAnalysis?.summary,
          "Explore suitable funding stages, funding sources and financing opportunities."
        )}
      >
        <FundingAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Investors */}

      <SectionCard
        id="investors"
        title="🏦 Investor Analysis"
        summary={getSummary(
          blueprint?.investors?.summary ||
            blueprint?.investorAnalysis?.summary,
          "Identify suitable investors, incubators and startup support networks."
        )}
      >
        <InvestorAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Revenue */}

      <SectionCard
        id="revenue"
        title="📊 Revenue Model"
        summary={getSummary(
          blueprint?.revenue?.summary ||
            blueprint?.revenueAnalysis?.summary,
          "Review potential revenue streams, pricing models and expected business growth."
        )}
      >
        <RevenueAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Go To Market */}

      <SectionCard
        id="go-to-market"
        title="🎯 Go-To-Market Strategy"
        summary={getSummary(
          blueprint?.goToMarket?.summary ||
            blueprint?.goToMarketAnalysis?.summary,
          "Understand how the startup can reach early customers, build awareness and enter the market."
        )}
      >
        <GoToMarketAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Legal */}

      <SectionCard
        id="legal"
        title="⚖️ Legal Requirements"
        summary={getSummary(
          blueprint?.legal?.summary ||
            blueprint?.legalAnalysis?.summary,
          "Review business registration, compliance, taxation, privacy and intellectual-property requirements."
        )}
      >
        <LegalAnalysis blueprint={blueprint} />
      </SectionCard>

      {/* Government Schemes */}

      <SectionCard
        id="government"
        title="🏛 Government Schemes"
        summary="Explore Startup India support, MSME programmes, grants and subsidies relevant to the startup."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Startup India
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {government.startupIndia || "Not Available"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              MSME Support
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              {government.msme || "Not Available"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Grants
            </h3>

            {Array.isArray(government.grants) &&
            government.grants.length > 0 ? (
              <ul className="mt-3 space-y-2 text-gray-300">
                {government.grants.map((item, index) => (
                  <li key={`${item}-${index}`}>
                    • {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-gray-400">
                Not Available
              </p>
            )}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-cyan-400">
              Subsidies
            </h3>

            {Array.isArray(government.subsidies) &&
            government.subsidies.length > 0 ? (
              <ul className="mt-3 space-y-2 text-gray-300">
                {government.subsidies.map((item, index) => (
                  <li key={`${item}-${index}`}>
                    • {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-gray-400">
                Not Available
              </p>
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

export default BlueprintSections;