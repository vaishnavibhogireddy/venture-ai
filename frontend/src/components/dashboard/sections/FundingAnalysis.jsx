import { motion } from "framer-motion";

function FundingAnalysis({ blueprint }) {
  const funding = blueprint?.fundingAnalysis || {};

  const sections = [
    {
      title: "Bootstrapping",
      value: funding.bootstrapping,
      isList: false,
    },
    {
      title: "Angel Investors",
      value: funding.angelInvestors,
      isList: true,
    },
    {
      title: "Venture Capital",
      value: funding.ventureCapital,
      isList: true,
    },
    {
      title: "Grants",
      value: funding.grants,
      isList: true,
    },
    {
      title: "Accelerators",
      value: funding.accelerators,
      isList: true,
    },
    {
      title: "Incubators",
      value: funding.incubators,
      isList: true,
    },
  ];

  return (
    <motion.section
      id="funding"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        💸 Funding Analysis
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="mb-3 font-semibold text-cyan-400">
              {section.title}
            </h3>

            {section.isList ? (
              <ul className="space-y-2 text-gray-300">
                {(section.value || []).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">
                {section.value || "Not Available"}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default FundingAnalysis;