import { motion } from "framer-motion";

function GoToMarketAnalysis({ blueprint }) {
  const strategy = blueprint?.goToMarket || "";

  return (
    <motion.section
    id="go-to-market"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        🚀 Go To Market Strategy
      </h2>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="text-gray-300 leading-8">
          {strategy || "No strategy available"}
        </p>

      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Customer Acquisition
          </h3>

          <p className="text-gray-400">
            Social media campaigns, partnerships, and targeted marketing.
          </p>
        </div>


        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Growth Channels
          </h3>

          <p className="text-gray-400">
            Campus communities, influencers, and digital platforms.
          </p>
        </div>


        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Expansion
          </h3>

          <p className="text-gray-400">
            Scale through partnerships and wider user adoption.
          </p>
        </div>

      </div>

    </motion.section>
  );
}

export default GoToMarketAnalysis;