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

  return (

    <div className="space-y-8">


      {/* Idea Validation */}

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">


        <h2 className="mb-5 text-2xl font-bold text-white">
          🧠 Idea Validation
        </h2>


        <div className="space-y-3 text-gray-300">


          <p>
            <span className="font-semibold text-white">
              Problem Validation:
            </span>{" "}
            {validation.problemValidation || "Not Available"}
          </p>


          <p>
            <span className="font-semibold text-white">
              Market Validation:
            </span>{" "}
            {validation.marketValidation || "Not Available"}
          </p>


          <p>
            <span className="font-semibold text-white">
              Technical Feasibility:
            </span>{" "}
            {validation.technicalFeasibility || "Not Available"}
          </p>


        </div>


      </section>




      {/* Project Decision */}


      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">


        <h2 className="mb-5 text-2xl font-bold text-white">
          🚀 Project vs Startup Decision
        </h2>


        <p className="text-gray-300">

          <span className="font-semibold text-white">
            Classification:
          </span>{" "}

          {project.isProjectOnly || "Not Available"}

        </p>



        <p className="mt-4 text-gray-400 leading-7">

          {project.howToConvertIntoStartup ||
          "No improvement suggestions available"}

        </p>


      </section>






      <MarketAnalysis blueprint={blueprint}/>


      <CompetitorAnalysis blueprint={blueprint}/>


      <BudgetAnalysis blueprint={blueprint}/>


      <FundingAnalysis blueprint={blueprint}/>

      <InvestorAnalysis blueprint={blueprint}/>


      <RevenueAnalysis blueprint={blueprint}/>


      <GoToMarketAnalysis blueprint={blueprint}/>


      <LegalAnalysis blueprint={blueprint}/>





      {/* Government Schemes */}


      <section 
      id="government"
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">


  <h2 className="mb-5 text-2xl font-bold text-white">
    🏛 Government Schemes
  </h2>


  <div className="space-y-5">


    <div>
      <h3 className="font-semibold text-cyan-400">
        Startup India
      </h3>

      <p className="mt-2 text-gray-300 leading-7">
        {blueprint?.governmentSchemes?.startupIndia ||
        "Not Available"}
      </p>
    </div>



    <div>
      <h3 className="font-semibold text-cyan-400">
        MSME Support
      </h3>

      <p className="mt-2 text-gray-300 leading-7">
        {blueprint?.governmentSchemes?.msme ||
        "Not Available"}
      </p>
    </div>




    <div>
      <h3 className="font-semibold text-cyan-400">
        Grants
      </h3>

      <ul className="mt-2 space-y-2 text-gray-300">

        {(blueprint?.governmentSchemes?.grants || [])
          .map((item)=>(
            <li key={item}>
              • {item}
            </li>
          ))}

      </ul>
    </div>




    <div>
      <h3 className="font-semibold text-cyan-400">
        Subsidies
      </h3>

      <ul className="mt-2 space-y-2 text-gray-300">

        {(blueprint?.governmentSchemes?.subsidies || [])
          .map((item)=>(
            <li key={item}>
              • {item}
            </li>
          ))}

      </ul>
    </div>


  </div>


</section>



    </div>

  );
}


export default BlueprintSections;