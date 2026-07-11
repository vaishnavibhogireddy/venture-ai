import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FundingAnalysis() {
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
              Funding Strategy
            </h2>

            <p className="mt-4 max-w-4xl text-gray-400 leading-7">
              AI recommends the best funding options based on your startup stage,
              estimated capital requirements and business model.
            </p>

          </div>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
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

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

            <h3 className="text-xl font-semibold text-white">
              AI Recommendation
            </h3>

            <ul className="mt-5 space-y-3 text-gray-400">

              <li>• Bootstrap during MVP.</li>

              <li>• Raise Angel Funding after validation.</li>

              <li>• Approach VC after product-market fit.</li>

              <li>• Government startup grants available.</li>

            </ul>

          </div>

        </motion.div>

      )}

    </motion.div>
  );
}

export default FundingAnalysis;