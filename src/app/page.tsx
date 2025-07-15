import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 py-12 text-white"
      style={{ backgroundImage: "url('/bg-art.jpg')" }}>

      <h1 className="text-4xl font-bold mb-4 text-center font-[ThinRaleway] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.8)]">
        Discover History Through <span className="font-[MarckScript] text-5xl">Art</span>
      </h1>

      <p className="text-lg text-center max-w-md mb-8 font-[ThinRaleway] drop-shadow-[2px_3px_2px_rgba(0,0,0,0.8)]">
        Explore the stories behind great artworks that shaped history.
      </p>

      <div className="flex flex-wrap justify-center gap-4 font-[Transcity]">
        {["Asia", "Europe", "Africa", "America", "Australia", "Antarctica"].map(continent => (
          <Link
            key={continent}
            href={`/artworks/${continent.toLowerCase()}`}
            className="bg-black bg-opacity-80 text-white px-4 py-2 rounded-xl hover:bg-opacity-100 transition">
            {continent}
          </Link>
        ))}
      </div>

      <div className="mt-20 relative">
        <Link href="/tarot">
          <div className="relative w-48 h-32 cursor-pointer group">
            <div className="absolute w-full h-full bg-white rounded-lg rotate-[-8deg] shadow-lg group-hover:scale-105 transition" />
            <div className="absolute w-full h-full bg-white rounded-lg rotate-[8deg] shadow-lg group-hover:scale-105 transition" />
            <div className="absolute w-full h-full bg-white rounded-lg shadow-xl group-hover:scale-105 transition flex items-center justify-center">
              <span className="font-[Poppins] text-xl text-purple-800">Tarot Fun Game</span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
