import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Dashboard from "./pages/Dashboard";

import AuroraBackground from "./components/AuroraBackground";

function App() {
  return (
    <BrowserRouter>
      <AuroraBackground>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuroraBackground>
    </BrowserRouter>
  );
}

export default App;