import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function BudgetAnalysis({ blueprint }) {
  const [open, setOpen] = useState(false);

  const budget = blueprint?.budget || "Not Available";

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
              Budget Estimation
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              AI estimates development, infrastructure, marketing and
              operational expenses required to launch and scale your startup.
            </p>

          </div>


          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
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
          initial={{
            opacity:0,
            height:0,
          }}
          animate={{
            opacity:1,
            height:"auto",
          }}
          className="border-t border-white/10 p-7"
        >


          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">


            <h3 className="text-xl font-semibold text-white">
              AI Budget Analysis
            </h3>


            <p className="mt-5 text-gray-400 leading-8 whitespace-pre-line">
              {budget}
            </p>


          </div>


        </motion.div>

      )}


    </motion.div>
  );
}


export default BudgetAnalysis;