import { motion } from "framer-motion";

function BudgetAnalysis({ blueprint }) {
  const finance = blueprint?.financeAnalysis || {};

  const cards = [
    {
      title: "Development Cost",
      value: finance.developmentCost,
    },
    {
      title: "Infrastructure Cost",
      value: finance.infrastructureCost,
    },
    {
      title: "Marketing Budget",
      value: finance.marketingBudget,
    },
    {
      title: "Operational Cost",
      value: finance.operationalCost,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        💰 Budget Analysis
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="mb-2 font-semibold text-cyan-400">
              {card.title}
            </h3>

            <p className="text-lg font-medium text-white">
              {card.value || "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default BudgetAnalysis;