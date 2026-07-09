import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <section className="flex flex-col items-center text-center mt-20 px-6">

        <h1 className="text-6xl font-bold max-w-4xl">
          Transform your startup idea
          into a business blueprint
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Ventoraa AI helps entrepreneurs turn ideas into
          actionable strategies using IBM Granite AI.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-blue-600 text-white text-lg">
          Generate Blueprint
        </button>

      </section>

    </div>
  );
}

export default Home;