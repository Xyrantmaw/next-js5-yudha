import { UserCircle } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/bg-art.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
        <UserCircle size={64} className="mx-auto mb-4 text-black" />
        <h1 className="text-xl font-bold">Yudha Taufiqurrohman</h1>
      </div>
    </div>
  );
}