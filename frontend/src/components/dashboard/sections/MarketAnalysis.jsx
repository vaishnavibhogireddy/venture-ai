function MarketAnalysis({ blueprint }) {
  const market = blueprint?.marketAnalysis || {};

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Industry
          </h3>
          <p className="text-gray-300">
            {market.industry || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Target Audience
          </h3>
          <p className="text-gray-300">
            {market.audience || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Market Size
          </h3>
          <p className="text-gray-300">
            {market.marketSize || "Not Available"}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-2 font-semibold text-cyan-400">
            Growth
          </h3>
          <p className="text-gray-300">
            {market.growth || "Not Available"}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h3 className="mb-2 font-semibold text-cyan-400">
          Market Demand
        </h3>

        <p className="leading-7 text-gray-300">
          {market.demand || "Not Available"}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h3 className="mb-4 font-semibold text-cyan-400">
          Current Industry Trends
        </h3>

        {Array.isArray(market.trends) && market.trends.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {market.trends.map((trend, index) => (
              <span
                key={`${trend}-${index}`}
                className="
                  rounded-full
                  border border-cyan-400/20
                  bg-cyan-500/10
                  px-4 py-2
                  text-sm text-cyan-300
                "
              >
                {trend}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">
            Not Available
          </p>
        )}
      </div>
    </div>
  );
}

export default MarketAnalysis;