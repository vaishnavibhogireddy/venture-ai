import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SectionCard({ title, summary, children }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-7 text-left"
      >
        <div>
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-3 max-w-3xl text-gray-400 leading-7">
            {summary}
          </p>
        </div>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400"
        >
          <ChevronDown />
        </motion.div>

      </button>
      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35 }}
      className="border-t border-white/10 p-7 overflow-hidden"
    >
      {children || (
        <p className="text-gray-400">
          Detailed analytics will appear here.
        </p>
      )}
    </motion.div>
  )}
</AnimatePresence>

    </motion.div>
  );
}

export default SectionCard;