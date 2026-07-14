function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-white cursor-pointer">
          Ventora
        </h1>


      </nav>
    </header>
  );
}

export default Navbar;