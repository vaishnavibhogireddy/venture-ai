import MarketAnalysis from "./sections/MarketAnalysis";
import CompetitorAnalysis from "./sections/CompetitorAnalysis";
import FundingAnalysis from "./sections/FundingAnalysis";
import BudgetAnalysis from "./sections/BudgetAnalysis";
import RevenueAnalysis from "./sections/RevenueAnalysis";
import GoToMarketAnalysis from "./sections/GoToMarketAnalysis";
import LegalAnalysis from "./sections/LegalAnalysis";


function BlueprintSections({ blueprint }) {

  return (

    <div className="space-y-6">


      <MarketAnalysis 
        blueprint={blueprint}
      />


      <CompetitorAnalysis
        blueprint={blueprint}
      />


      <BudgetAnalysis
        blueprint={blueprint}
      />


      <FundingAnalysis
        blueprint={blueprint}
      />


      <RevenueAnalysis
        blueprint={blueprint}
      />


      <GoToMarketAnalysis
        blueprint={blueprint}
      />


      <LegalAnalysis
        blueprint={blueprint}
      />


    </div>

  );

}


export default BlueprintSections;