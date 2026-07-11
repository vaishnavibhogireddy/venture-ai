import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ShieldCheck,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Overview", id: "overview" },
  { icon: TrendingUp, title: "Market Analysis", id: "market-analysis" },
  { icon: Users, title: "Competitors", id: "competitors" },
  { icon: DollarSign, title: "Funding", id: "funding" },
  { icon: Target, title: "Go To Market", id: "go-to-market" },
  { icon: ShieldCheck, title: "Legal", id: "legal" },
  { icon: FileText, title: "Blueprint PDF", id: "pdf" },
];
function Sidebar() {
  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-white">
          Ventora
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Startup Blueprint
        </p>

      </div>

      <nav className="px-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
  onClick={() => scrollToSection(item.id)}
              whileHover={{
                x: 6,
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              key={item.title}
              className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-gray-300 transition"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </motion.button>
          );
        })}

      </nav>

      <div className="absolute bottom-8 left-0 w-full px-4">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400 transition">

          <Settings size={18} />

          Settings

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;