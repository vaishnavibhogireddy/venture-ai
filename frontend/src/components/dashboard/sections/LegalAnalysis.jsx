import { motion } from "framer-motion";

function LegalAnalysis({ blueprint }) {
  const legal = blueprint?.legalAnalysis || {};

  return (
    <motion.section
     id="legal"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        ⚖️ Legal Analysis
      </h2>


      <div className="grid gap-5 md:grid-cols-2">


        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Business Registration
          </h3>

          <p className="text-gray-300">
            {legal.businessRegistration || "Not Available"}
          </p>
        </div>



        <div className="rounded-xl bg-white/5 p-5">
          <h3 className="mb-3 font-semibold text-cyan-400">
            Data Privacy
          </h3>

          <p className="text-gray-300 leading-7">
            {legal.dataPrivacy || "Not Available"}
          </p>
        </div>



        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Licenses
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(legal.licenses || []).map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>




        <div className="rounded-xl bg-white/5 p-5">

          <h3 className="mb-3 font-semibold text-cyan-400">
            Compliance
          </h3>


          <ul className="space-y-2 text-gray-300">

            {(legal.compliance || []).map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>



      </div>



      <div className="mt-6 rounded-xl bg-white/5 p-5">


        <h3 className="mb-3 font-semibold text-cyan-400">
          Intellectual Property
        </h3>


        <p className="text-gray-300 leading-7">
          {legal.intellectualProperty || "Not Available"}
        </p>


      </div>


    </motion.section>
  );
}

export default LegalAnalysis;