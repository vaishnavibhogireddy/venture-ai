import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function SectionCard({
  id,
  title,
  summary,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.section
      id={id}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="
        scroll-mt-24
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400/20
        hover:shadow-[0_20px_60px_rgba(6,182,212,0.08)]
      "
    >
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        className="
          flex w-full items-start justify-between
          gap-6 p-6 text-left sm:p-7
        "
      >
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          {summary && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
              {summary}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 text-cyan-400">
          <span className="hidden text-sm sm:inline">
            {open ? "Hide details" : "View details"}
          </span>

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.35 },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 p-6 sm:p-7">
              {children || (
                <p className="text-gray-400">
                  Detailed analytics will appear here.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default SectionCard;