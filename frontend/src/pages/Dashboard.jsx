import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import BlueprintSections from "../components/dashboard/BlueprintSections";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#04050B] flex">

      <Sidebar />

      <main className="flex-1 overflow-y-auto p-10">
        <BlueprintSections />
      </main>

    </div>
  );
}

export default Dashboard;