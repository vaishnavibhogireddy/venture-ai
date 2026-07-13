import { motion } from "framer-motion";

function Overview({ blueprint }) {

  const validation = blueprint?.ideaValidation || {};

  return (
   <motion.section
  id="overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">


        <div>

          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Startup Blueprint
          </p>


          <h1 className="mt-3 text-4xl font-bold text-white">

            {validation.ideaName || "Startup Idea"}

          </h1>


          <p className="mt-3 text-gray-400">

            {blueprint?.overview ||
              "AI generated startup analysis"}

          </p>


        </div>



        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-6 text-center">


          <p className="text-sm text-cyan-300">
            Startup Score
          </p>


          <h2 className="mt-2 text-4xl font-bold text-white">

            {validation.startupPotentialScore || "N/A"}

          </h2>


        </div>


      </div>



      <div className="mt-8 grid gap-5 md:grid-cols-3">


        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="text-cyan-400 font-semibold">
            Category
          </h3>


          <p className="mt-2 text-gray-300">

            {validation.ideaCategory || "Not Available"}

          </p>

        </div>




        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="text-cyan-400 font-semibold">
            Vision
          </h3>


          <p className="mt-2 text-gray-300">

            {blueprint?.vision || "Not Available"}

          </p>

        </div>




        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="text-cyan-400 font-semibold">
            Future Scope
          </h3>


          <p className="mt-2 text-gray-300">

            {blueprint?.future || "Not Available"}

          </p>

        </div>


      </div>



    </motion.section>
  );
}


export default Overview;