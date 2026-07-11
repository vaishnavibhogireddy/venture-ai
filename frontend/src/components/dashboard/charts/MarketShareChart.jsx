import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  {
    name: "TAM",
    value: 60,
  },
  {
    name: "SAM",
    value: 25,
  },
  {
    name: "SOM",
    value: 15,
  },
];

const COLORS = [
  "#22d3ee",
  "#8b5cf6",
  "#3b82f6",
];

function MarketShareChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-72 rounded-2xl border border-white/10 bg-black/20 p-5"
    >

      <h3 className="mb-4 text-lg font-semibold text-white">
        Market Opportunity
      </h3>

      <ResponsiveContainer width="100%" height="85%">

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            dataKey="value"
            animationDuration={1500}
          >

            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </motion.div>
  );
}

export default MarketShareChart;