import MarketAnalysis from "./sections/MarketAnalysis";
import CompetitorAnalysis from "./sections/CompetitorAnalysis";
import FundingAnalysis from "./sections/FundingAnalysis";
import BudgetAnalysis from "./sections/BudgetAnalysis";
import RevenueAnalysis from "./sections/RevenueAnalysis";
import GoToMarketAnalysis from "./sections/GoToMarketAnalysis";
import LegalAnalysis from "./sections/LegalAnalysis";
function BlueprintSections() {
  return (
    <div className="space-y-6">

      <MarketAnalysis />
      <CompetitorAnalysis />
      <BudgetAnalysis />
      <FundingAnalysis />
      <RevenueAnalysis />
      <GoToMarketAnalysis />
            <LegalAnalysis />

    </div>
  );
}

export default BlueprintSections;