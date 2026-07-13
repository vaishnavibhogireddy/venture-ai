import { motion } from "framer-motion";

function CompetitorAnalysis({ blueprint }) {
  const data = blueprint?.competitorAnalysis || {};

  return (
    <motion.section
      id="competitors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        🏆 Competitor Analysis
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Existing Competitors
          </h3>

          <ul className="space-y-2 text-gray-300">
            {(data.existingCompetitors || []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Strengths
          </h3>

          <ul className="space-y-2 text-gray-300">
            {(data.competitorStrengths || []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Weaknesses
          </h3>

          <ul className="space-y-2 text-gray-300">
            {(data.competitorWeaknesses || []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Market Gaps
          </h3>

          <ul className="space-y-2 text-gray-300">
            {(data.marketGaps || []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-white/5 p-5">
        <h3 className="mb-3 font-semibold text-cyan-400">
          Competitive Advantage
        </h3>

        <p className="text-gray-300">
          {data.competitiveAdvantage || "Not Available"}
        </p>
      </div>
    </motion.section>
  );
}

export default CompetitorAnalysis;