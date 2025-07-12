import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/missing-art.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-md"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <Image
          src="/images/missing-art.png"
          alt="Missing artwork"
          width={400}
          height={300}
          className="max-w-sm mb-6 rounded-xl shadow-lg"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.8)]">
          This masterpiece was missing...
        </h1>
        <p className="text-lg text-gray-300 mb-6 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.8)]">
          The page you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition drop-shadow-[2px_3px_2px_rgba(0,0,0,0.8)]"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}