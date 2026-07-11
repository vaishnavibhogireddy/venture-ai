import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import MarketChart from "../charts/MarketChart";
import MarketShareChart from "../charts/MarketShareChart";

function MarketAnalysis() {
  const [open, setOpen] = useState(false);

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
              AI identified strong demand with increasing market adoption,
              favorable growth trends and multiple untapped customer segments.
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
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          className="border-t border-white/10 p-7"
        >

          <div className="grid xl:grid-cols-2 gap-7">

            <MarketChart />

            <MarketShareChart />

          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">

            <h3 className="text-cyan-400 text-xl font-semibold">
              AI Insights
            </h3>

            <ul className="mt-4 space-y-3 text-gray-300">

              <li>• High demand in urban regions.</li>

              <li>• CAGR estimated around 18%.</li>

              <li>• Subscription model has highest potential.</li>

              <li>• Early adoption opportunity is strong.</li>

            </ul>

          </div>

        </motion.div>

      )}

    </motion.div>
  );
}

export default MarketAnalysis;