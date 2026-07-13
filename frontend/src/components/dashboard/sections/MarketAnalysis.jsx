import { motion } from "framer-motion";

function MarketAnalysis({ blueprint }) {
  const market = blueprint?.marketAnalysis || {};

  return (
    <motion.section
     id="market-analysis"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        📈 Market Analysis
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            Industry
          </h3>
          <p className="text-gray-300">
            {market.industry || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            Target Audience
          </h3>
          <p className="text-gray-300">
            {market.audience || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            Market Size
          </h3>
          <p className="text-gray-300">
            {market.marketSize || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="text-cyan-400 font-semibold mb-2">
            Growth
          </h3>
          <p className="text-gray-300">
            {market.growth || "Not Available"}
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-white/5 p-5">
        <h3 className="text-cyan-400 font-semibold mb-2">
          Market Demand
        </h3>

        <p className="text-gray-300">
          {market.demand || "Not Available"}
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-white/5 p-5">
        <h3 className="text-cyan-400 font-semibold mb-4">
          Current Industry Trends
        </h3>

        <div className="flex flex-wrap gap-3">
          {(market.trends || []).map((trend) => (
            <span
              key={trend}
              className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300"
            >
              {trend}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default MarketAnalysis;