import { motion } from "framer-motion";

function RevenueAnalysis({ blueprint }) {
  const revenue = blueprint?.revenue || "";
  const finance = blueprint?.financeAnalysis || {};

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        📊 Revenue Analysis
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Revenue Model
          </h3>

          <p className="text-gray-300 leading-7">
            {revenue || "Not Available"}
          </p>
        </div>


        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Forecast
          </h3>

          <p className="text-gray-300 leading-7">
            {finance.revenueForecast || "Not Available"}
          </p>
        </div>


        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Expected ROI
          </h3>

          <p className="text-gray-300 leading-7">
            {finance.ROI || "Not Available"}
          </p>
        </div>


      </div>

    </motion.section>
  );
}

export default RevenueAnalysis;