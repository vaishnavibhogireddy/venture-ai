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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -3 }}
      className="h-72 w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 transition-all duration-300 hover:border-cyan-400/20"
    >
      <h3 className="mb-5 text-lg font-semibold text-white">
        Market Growth Forecast
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <filter
              id="lineGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <CartesianGrid
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="year"
            stroke="#94a3b8"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#94a3b8"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{
              stroke: "rgba(34,211,238,0.25)",
              strokeWidth: 1,
            }}
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: "14px",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
            labelStyle={{
              color: "#ffffff",
              fontWeight: 600,
            }}
            itemStyle={{
              color: "#22d3ee",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            filter="url(#lineGlow)"
            animationDuration={1800}
            dot={{
              r: 4,
              fill: "#22d3ee",
              stroke: "#020617",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 7,
              fill: "#22d3ee",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default MarketChart;