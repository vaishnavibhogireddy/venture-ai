import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import BlueprintSections from "../components/dashboard/BlueprintSections";

function Dashboard() {
  const location = useLocation();

  const blueprint = location.state?.blueprint || {};

  console.log("Structured Blueprint:", blueprint);

  return (
    <div className="flex min-h-screen bg-[#04050B]">
      <Sidebar blueprint={blueprint} />

      <main
        className="
          flex-1
          overflow-y-auto
          px-4 py-6
          sm:px-6
          lg:px-10 lg:py-10
        "
      >
        <div className="mx-auto max-w-7xl space-y-8">
          <Overview blueprint={blueprint} />

          <BlueprintSections blueprint={blueprint} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;