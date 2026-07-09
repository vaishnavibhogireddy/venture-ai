function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6">
      
      <h1 className="text-2xl font-bold text-blue-600">
        Ventoraa
      </h1>

      <div className="flex gap-8 text-gray-600">
        <a href="#">Features</a>
        <a href="#">How it works</a>
        <a href="#">About</a>
      </div>

      <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;