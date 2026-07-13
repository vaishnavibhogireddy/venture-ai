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



      {/* Startup Evaluation */}

      <section className="p-6 rounded-xl bg-white/5 border border-white/10">

        <h2 className="text-xl font-semibold mb-4 text-white">
          Startup Evaluation
        </h2>


        <p className="text-gray-300">
          <strong className="text-white">
            Idea Name:
          </strong>{" "}

          {
            blueprint?.ideaValidation?.ideaName ||
            "Not Available"
          }

        </p>



        <p className="text-gray-300">

          <strong className="text-white">
            Category:
          </strong>{" "}

          {
            blueprint?.ideaValidation?.ideaCategory ||
            "Not Available"
          }

        </p>



        <p className="text-gray-300">

          <strong className="text-white">
            Startup Potential Score:
          </strong>{" "}

          {
            blueprint?.ideaValidation?.startupPotentialScore ||
            "Not Available"
          }

          /10

        </p>



        <p className="mt-4 text-gray-400 leading-7">

          {
            blueprint?.ideaValidation?.analysisSummary ||
            blueprint?.overview ||
            "AI analysis will appear here."
          }

        </p>


      </section>





      {/* Project vs Startup */}

      <section className="p-6 rounded-xl bg-white/5 border border-white/10">


        <h2 className="text-xl font-semibold mb-4 text-white">
          Project vs Startup Decision
        </h2>



        <p className="text-gray-300">

          {
            blueprint?.projectAnalysis?.isProjectOnly ||
            "Not Available"
          }

        </p>




        <h3 className="mt-5 font-semibold text-white">

          How to Improve Into Startup

        </h3>



        <p className="mt-2 text-gray-400 leading-7">

          {
            blueprint?.projectAnalysis?.howToConvertIntoStartup ||
            "AI suggestions will appear here."
          }

        </p>



      </section>






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






      {/* Government Schemes */}

      <section className="p-6 rounded-xl bg-white/5 border border-white/10">


        <h2 className="text-xl font-semibold mb-4 text-white">
          Government Schemes
        </h2>



        <p className="text-gray-400 leading-7">

          {
            blueprint?.government ||
            "AI will recommend suitable government schemes."
          }

        </p>



      </section>



    </div>

  );

}


export default BlueprintSections;