import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ExpandableText({
  text,
  previewLength = 80,
  emptyText = "Not Available",
}) {
  const [expanded, setExpanded] = useState(false);

  const content = text || emptyText;

  const shouldCollapse = content.length > previewLength;

  const preview = shouldCollapse
    ? content.substring(0, previewLength) + "..."
    : content;

  return (
    <div className="mt-2">
      <AnimatePresence mode="wait">
        <motion.p
          key={expanded ? "full" : "preview"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="leading-7 text-gray-300"
        >
          {expanded ? content : preview}
        </motion.p>
      </AnimatePresence>

      {shouldCollapse && (
        <button
  type="button"
  onClick={() => setExpanded(!expanded)}
  className="mt-3 flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300"
>
          {expanded ? "Show Less" : "View Details"}

          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
            }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
      )}
    </div>
  );
}

export default ExpandableText;