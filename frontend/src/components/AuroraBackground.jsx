function AuroraBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">

      {/* Aurora Video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed inset-0 w-full h-full object-cover z-0 aurora-video"
>
        <source src="/videos/aurora.mp4" type="video/mp4" />
      </video>


      {/* Dark overlay */}
      <div className="fixed inset-0 bg-[#020617]/50 z-10"></div>


      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>

    </div>
  );
}

export default AuroraBackground;