function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white cursor-pointer">
          Ventora
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="text-gray-300 hover:text-white transition duration-300">
            Login
          </button>

          <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-white font-medium hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50">
            Sign Up
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;