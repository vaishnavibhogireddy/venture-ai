import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ShieldCheck,
  Landmark,
  BriefcaseBusiness,
  FileText,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Overview", id: "overview" },
  { icon: TrendingUp, title: "Market Analysis", id: "market-analysis" },
  { icon: Users, title: "Competitors", id: "competitors" },
  { icon: DollarSign, title: "Funding", id: "funding" },
  { icon: BriefcaseBusiness, title: "Investors", id: "investors" },
  { icon: Target, title: "Go To Market", id: "go-to-market" },
  { icon: ShieldCheck, title: "Legal", id: "legal" },
  { icon: Landmark, title: "Government", id: "government" },
];

function Sidebar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePdf = () => {
    window.print();
  };

  return (
    <aside className="sticky top-0 h-screen w-72 shrink-0 border-r border-white/10 bg-[#0B0D14]/95 backdrop-blur-xl">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white">
          Ventora
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Startup Blueprint
        </p>
      </div>

      <nav className="space-y-2 px-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.title}
              onClick={() => scrollToSection(item.id)}
              whileHover={{
                x: 6,
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-gray-300 transition"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-4">
        <button
          onClick={handlePdf}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          <FileText size={18} />

          Export Blueprint
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;