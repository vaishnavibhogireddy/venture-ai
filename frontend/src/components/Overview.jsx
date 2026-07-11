import { motion } from "framer-motion";

const cards = [
  {
    title: "Startup Score",
    value: "92 / 100",
    color: "text-cyan-400",
  },
  {
    title: "Estimated Budget",
    value: "$45,000",
    color: "text-green-400",
  },
  {
    title: "Market Size",
    value: "$1.2B",
    color: "text-violet-400",
  },
  {
    title: "Revenue Model",
    value: "Subscription",
    color: "text-orange-400",
  },
];

function Overview() {
  return (
    <div className="space-y-10">

      <div>

        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
          Startup Blueprint
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          AI Healthcare Assistant
        </h1>

        <p className="mt-4 max-w-3xl text-gray-400 leading-8">
          An AI-powered healthcare platform that helps users understand symptoms,
          connect with doctors and manage health records using intelligent
          recommendations.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (

          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >

            <p className="text-gray-400">
              {card.title}
            </p>

            <h2 className={`mt-4 text-3xl font-bold ${card.color}`}>
              {card.value}
            </h2>

          </motion.div>

        ))}

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h2 className="text-2xl font-bold text-white">
            Business Summary
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            The platform uses AI to assist patients with symptom checking,
            appointment scheduling, personalized recommendations and secure
            digital health records.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h2 className="text-2xl font-bold text-white">
            Timeline
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between">
              <span className="text-gray-400">Prototype</span>
              <span className="text-cyan-400">Month 1</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">MVP</span>
              <span className="text-cyan-400">Month 3</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Launch</span>
              <span className="text-cyan-400">Month 6</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Scale</span>
              <span className="text-cyan-400">Year 2</span>
            </div>

          </div>

        </motion.div>

      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >

        <h2 className="text-2xl font-bold text-white">
          AI Recommendation
        </h2>

        <p className="mt-5 leading-8 text-gray-400">
          Focus on hospitals and clinics first, adopt a SaaS subscription
          pricing model, partner with healthcare providers, and leverage IBM
          Granite for intelligent medical assistance and document analysis.
        </p>

      </motion.div>

    </div>
  );
}

export default Overview;