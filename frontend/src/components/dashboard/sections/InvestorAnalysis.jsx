import { motion } from "framer-motion";

function InvestorAnalysis({ blueprint }) {

  const investor = blueprint?.investorAnalysis || {};


  return (

    <motion.section
    id="investors"
      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

    >

      <h2 className="mb-6 text-2xl font-bold text-white">
        💼 Investor Readiness
      </h2>



      <div className="rounded-xl bg-white/5 p-5 mb-5">

        <h3 className="mb-3 font-semibold text-cyan-400">
          Investment Readiness
        </h3>


        <p className="text-gray-300 leading-7">

          {investor.investmentReadiness ||
          "Not Available"}

        </p>

      </div>





      <div className="grid gap-5 md:grid-cols-2">


        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Suitable Investor Types
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(investor.suitableInvestorTypes || [])
              .map((item)=>(
                <li key={item}>
                  • {item}
                </li>
              ))}

          </ul>

        </div>





        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Angel Networks
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(investor.angelNetworks || [])
              .map((item)=>(
                <li key={item}>
                  • {item}
                </li>
              ))}

          </ul>

        </div>






        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Venture Capital Firms
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(investor.ventureCapitalFirms || [])
              .map((item)=>(
                <li key={item}>
                  • {item}
                </li>
              ))}

          </ul>

        </div>





        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Accelerators
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(investor.accelerators || [])
              .map((item)=>(
                <li key={item}>
                  • {item}
                </li>
              ))}

          </ul>

        </div>



      </div>


    </motion.section>

  );
}


export default InvestorAnalysis;