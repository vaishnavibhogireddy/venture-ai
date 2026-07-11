import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function RevenueAnalysis() {
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
              Revenue Model
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              AI recommends the most profitable monetization strategy based on
              your target audience and business model.
            </p>

          </div>

          <motion.div animate={{ rotate: open ? 180 : 0 }}>
            <ChevronDown className="text-cyan-400" size={28} />
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
                Revenue Streams
              </h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li>• Monthly Subscription</li>
                <li>• Enterprise Plans</li>
                <li>• API Access</li>
                <li>• Premium Features</li>
              </ul>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

              <h3 className="text-lg font-semibold text-white">
                AI Recommendation
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                Adopt a freemium model initially and transition users to
                subscription plans with premium AI-powered features.
              </p>

            </div>

          </div>

        </motion.div>

      )}
    </motion.div>
  );
}

export default RevenueAnalysis;