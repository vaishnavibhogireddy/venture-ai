import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import BlueprintSections from "../components/dashboard/BlueprintSections";


function Dashboard() {

  const location = useLocation();

  const blueprint = location.state?.blueprint || {};


  console.log("Structured Blueprint:", blueprint);


  return (

    <div className="min-h-screen bg-[#04050B] flex">


      <Sidebar />


      <main className="flex-1 overflow-y-auto p-10 space-y-8">


        <Overview blueprint={blueprint} />


        <BlueprintSections blueprint={blueprint} />


      </main>


    </div>

  );
}


export default Dashboard;