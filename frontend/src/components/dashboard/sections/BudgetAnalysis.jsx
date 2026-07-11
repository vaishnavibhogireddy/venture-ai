import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function BudgetAnalysis() {
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
              Budget Estimation
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              AI estimates development, infrastructure, marketing and operational
              expenses required to launch and scale your startup.
            </p>

          </div>

          <motion.div animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown
              size={28}
              className="text-cyan-400"
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

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-lg font-semibold text-white">
                Estimated Cost
              </h3>

              <div className="mt-5 space-y-3 text-gray-400">

                <div className="flex justify-between">
                  <span>Development</span>
                  <span>$18,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Marketing</span>
                  <span>$10,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Cloud</span>
                  <span>$7,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Operations</span>
                  <span>$10,000</span>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-lg font-semibold text-white">
                AI Suggestion
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Start with an MVP to reduce development costs and validate
                product-market fit before scaling.
              </p>

            </div>

          </div>

        </motion.div>

      )}

    </motion.div>
  );
}

export default BudgetAnalysis;