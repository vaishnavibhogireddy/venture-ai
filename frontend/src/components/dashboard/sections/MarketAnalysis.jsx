import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import MarketChart from "../charts/MarketChart";
import MarketShareChart from "../charts/MarketShareChart";


function MarketAnalysis({ blueprint }) {

  const [open, setOpen] = useState(false);

  const market = blueprint?.market || "";


  return (

    <motion.div
      layout
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >

      <button
        onClick={() => setOpen(!open)}
        className="w-full p-7 text-left"
      >

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-semibold text-white">
              Market Analysis
            </h2>

            <p className="mt-4 text-gray-400 leading-7 max-w-4xl">
              {market || "AI generated market insights will appear here."}
            </p>

          </div>


          <motion.div
            animate={{rotate: open ? 180 : 0}}
          >

            <ChevronDown
              size={28}
              className="text-cyan-400"
            />

          </motion.div>


        </div>

      </button>



      {open && (

        <motion.div
          initial={{opacity:0,height:0}}
          animate={{opacity:1,height:"auto"}}
          className="border-t border-white/10 p-7"
        >


          <div className="grid xl:grid-cols-2 gap-7">

            <MarketChart/>

            <MarketShareChart/>

          </div>



          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">


            <h3 className="text-xl font-semibold text-cyan-400">
              AI Insights
            </h3>


            <p className="mt-4 text-gray-300 leading-7">
              {market || "No market insights generated."}
            </p>


          </div>


        </motion.div>

      )}


    </motion.div>

  );

}


export default MarketAnalysis;