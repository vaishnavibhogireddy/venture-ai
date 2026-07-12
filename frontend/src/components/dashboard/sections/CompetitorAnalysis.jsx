import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import CompetitorChart from "../charts/CompetitorChart";


function CompetitorAnalysis({ blueprint }) {

  const [open, setOpen] = useState(false);


  const competitors = blueprint?.competitors || "";


  const summary =
    competitors
      .split("\n")
      .find((line) => line.trim().length > 20)
    ||
    "AI analyzed your competitors and identified opportunities to differentiate your startup.";


  return (

    <motion.div
      layout
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >


      <button
        onClick={() => setOpen(!open)}
        className="w-full p-7 text-left"
      >

        <div className="flex items-center justify-between">


          <div>

            <h2 className="text-2xl font-semibold text-white">
              Competitor Analysis
            </h2>


            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              {summary}
            </p>


          </div>


          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
          >

            <ChevronDown
              className="text-cyan-400"
              size={28}
            />

          </motion.div>


        </div>


      </button>



      {open && (

        <motion.div
          initial={{
            opacity:0,
            height:0
          }}

          animate={{
            opacity:1,
            height:"auto"
          }}

          className="border-t border-white/10 p-7"
        >


          <CompetitorChart />



          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">


            <h3 className="text-xl font-semibold text-cyan-400">
              AI Competitor Analysis
            </h3>


            <p className="mt-5 whitespace-pre-wrap leading-8 text-gray-300">

              {
                competitors ||
                "No competitor analysis generated."
              }

            </p>


          </div>


        </motion.div>

      )}


    </motion.div>

  );

}


export default CompetitorAnalysis;