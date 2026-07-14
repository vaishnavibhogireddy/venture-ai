import { motion } from "framer-motion";
import {
  Layers3,
  Eye,
  Rocket,
  Sparkles,
} from "lucide-react";

import SummaryCard from "./dashboard/SummaryCard";

function Overview({ blueprint }) {
  const validation = blueprint?.ideaValidation || {};

  return (
    <motion.section
      id="overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        scroll-mt-24
        rounded-2xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        sm:p-8
      "
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Startup Blueprint
          </p>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {validation.ideaName || "Startup Idea"}
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-gray-400">
            {blueprint?.overview || "AI-generated startup analysis"}
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="
            shrink-0
            rounded-2xl
            border border-cyan-400/20
            bg-cyan-400/10
            px-8 py-6
            text-center
            shadow-[0_0_35px_rgba(6,182,212,0.08)]
          "
        >
          <div className="flex items-center justify-center gap-2 text-cyan-300">
            <Sparkles className="h-4 w-4" />

            <p className="text-sm">
              Startup Score
            </p>
          </div>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {validation.startupPotentialScore || "N/A"}
          </h2>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <SummaryCard
          title="Category"
          value={validation.ideaCategory}
          icon={Layers3}
        />

        <SummaryCard
          title="Vision"
          value={blueprint?.vision}
          icon={Eye}
        />

        <SummaryCard
          title="Future Scope"
          value={blueprint?.future}
          icon={Rocket}
        />
      </div>
    </motion.section>
  );
}

export default Overview;