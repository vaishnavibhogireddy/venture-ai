import { motion } from "framer-motion";

function SummaryCard({ title, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-xl
        border border-white/10
        bg-white/5
        p-5
        transition-all duration-300
        hover:border-cyan-400/20
        hover:shadow-[0_14px_40px_rgba(6,182,212,0.08)]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-cyan-400">
            {title}
          </h3>

          <p className="mt-2 text-gray-300">
            {value || "Not Available"}
          </p>
        </div>

        {Icon && (
          <div className="rounded-lg bg-cyan-400/10 p-2">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SummaryCard;