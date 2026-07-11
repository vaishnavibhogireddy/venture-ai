import React from "react";

const AuroraBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">

      <div className="aurora-container">

        <div className="aurora aurora-purple"></div>

        <div className="aurora aurora-blue"></div>

        <div className="aurora aurora-cyan"></div>

      </div>


      {/* Dark atmosphere */}
      <div className="absolute inset-0 bg-[#020617]/40"></div>


      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default AuroraBackground;