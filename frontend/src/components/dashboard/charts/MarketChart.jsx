import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: "2025", value: 30 },
  { year: "2026", value: 45 },
  { year: "2027", value: 65 },
  { year: "2028", value: 85 },
  { year: "2029", value: 100 },
];

function MarketChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-72 w-full rounded-2xl border border-white/10 bg-black/20 p-5"
    >

      <h3 className="mb-5 text-lg font-semibold text-white">
        Market Growth Forecast
      </h3>

      <ResponsiveContainer width="100%" height="85%">

        <LineChart data={data}>

          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
          />

          <XAxis
            dataKey="year"
            stroke="#777"
          />

          <YAxis
            stroke="#777"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
            animationDuration={1500}
          />

        </LineChart>

      </ResponsiveContainer>

    </motion.div>
  );
}

export default MarketChart;