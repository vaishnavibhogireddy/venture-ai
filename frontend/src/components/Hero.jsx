import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [idea, setIdea] = useState("");

  const chips = [
    "AI",
    "SaaS",
    "Healthcare",
    "Education",
    "FinTech",
    "E-Commerce",
  ];

  const handleChip = (chip) => {
    setIdea(`Build a ${chip} startup that `);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl text-center"
      >

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
          AI Startup Intelligence Platform
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-tight text-white">
          Turn Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Startup Idea
          </span>
          <br />
          Into Reality
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
          Transform your startup idea into a complete AI-powered business
          blueprint including market validation, competitor analysis, funding
          opportunities, financial planning and investor readiness.
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="mt-14 rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl"
        >

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your startup idea..."
            className="w-full h-52 resize-none bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
          />

          <div className="flex flex-wrap gap-3 mt-4">

            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleChip(chip)}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
              >
                {chip}
              </button>
            ))}

          </div>

        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => navigate("/loading")}
          className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20"
        >
          Generate Blueprint →
        </motion.button>

        <p className="mt-6 text-sm text-gray-500">
          Powered by <span className="text-cyan-400">IBM Granite</span>
        </p>

      </motion.div>

    </section>
  );
}

export default Hero;