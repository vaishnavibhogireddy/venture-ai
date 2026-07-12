import { motion } from "framer-motion";


function Overview({ blueprint }) {

  const overview =
    typeof blueprint?.overview === "string"
      ? blueprint.overview
      : "";


  const getLine = (keyword) => {

  if (!overview) return "Not Available";


  const line = overview
    .split("\n")
    .find((item) =>
      item.toLowerCase().includes(keyword.toLowerCase())
    );


  if (!line) return "Not Available";


  return line
    .replace(/[-:]/g, "")
    .replace(new RegExp(keyword, "i"), "")
    .trim();

};
  return (

    <div className="space-y-10">


      <div>

        <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm">
          Startup Blueprint
        </p>


        <h1 className="mt-3 text-5xl font-bold text-white">
          {getLine("Startup Name") !== "Not Available"
            ? getLine("Startup Name")
            : "Untitled Startup"}
        </h1>


        <p className="mt-4 max-w-3xl text-gray-400 leading-8">
          {getLine("Summary")}
        </p>


      </div>



      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">


        <Card
          title="Vision"
          value={getLine("Vision")}
        />


        <Card
          title="Business Model"
          value={
            blueprint?.businessModel ||
            "Not Available"
          }
        />


        <Card
          title="Revenue Streams"
          value={
            blueprint?.revenue ||
            "Not Available"
          }
        />


        <Card
          title="Funding"
          value={
            blueprint?.funding ||
            "Not Available"
          }
        />


      </div>



      <div className="grid gap-6 xl:grid-cols-2">


        <InfoCard
          title="Problem Statement"
          text={blueprint?.problem}
        />


        <InfoCard
          title="Proposed Solution"
          text={blueprint?.solution}
        />


      </div>


    </div>

  );
}



function Card({title,value}){

return (

<motion.div

whileHover={{
  y:-5
}}

className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"

>


<p className="text-gray-400">
{title}
</p>


<p className="mt-4 text-white leading-7">
{value}
</p>


</motion.div>

);

}



function InfoCard({title,text}){

return (

<motion.div

whileHover={{
  y:-5
}}

className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

>


<h2 className="text-2xl font-bold text-white">
{title}
</h2>


<p className="mt-5 text-gray-400 leading-8">
{text || "Not Available"}
</p>


</motion.div>

);

}



export default Overview;