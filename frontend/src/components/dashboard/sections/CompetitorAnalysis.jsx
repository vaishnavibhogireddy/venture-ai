import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import CompetitorChart from "../charts/CompetitorChart";

function CompetitorAnalysis() {
  const [open, setOpen] = useState(false);

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
              AI identified the strongest competitors, analyzed their strengths,
              weaknesses, pricing models and uncovered opportunities where your
              startup can stand out.
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
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/10 p-7"
        >

          <CompetitorChart />

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-white">
                Strengths
              </h3>

              <ul className="mt-4 space-y-3 text-gray-400">
                <li>• Lower pricing opportunity</li>
                <li>• Faster AI responses</li>
                <li>• Better personalization</li>
                <li>• Cleaner user experience</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-white">
                AI Recommendation
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Focus on underserved customer segments instead of competing
                directly with enterprise products. Differentiate through
                affordability and automation.
              </p>
            </div>

          </div>

        </motion.div>

      )}

    </motion.div>
  );
}

export default CompetitorAnalysis;