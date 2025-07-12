export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/bg-art.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-70 rounded-2xl p-8 max-w-2xl">
        <h1 className="text-xl italic mb-4">Salvete, quaerentes veritatem</h1>
        <p className="text-lg">
          Welcome the lost one, are you seeking the lies behind the arts? Then, you are in the right place! Come here and take your coffee, breathe the dusty scent of old canvases, and let your mind wander through forgotten brushstrokes and hidden truths.
        </p>
      </div>
    </div>
  );
}