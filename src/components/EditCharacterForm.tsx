"use client";

import { useState } from "react";

type Props = {
  id: number;
  currentName: string;
  currentRace: string;
  currentRole: string;
  currentElement: string;
  currentGender: string;
  onClose: () => void;
};

export default function EditCharacterForm({
  id,
  currentName,
  currentRace,
  currentRole,
  currentElement,
  currentGender,
  onClose,
}: Props) {
  const [name, setName] = useState(currentName);
  const [race, setRace] = useState(currentRace);
  const [role, setRole] = useState(currentRole);
  const [element, setElement] = useState(currentElement);
  const [gender, setGender] = useState(currentGender);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/characters/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, race, role, element, gender }),
    });

    if (res.ok) {
      alert("Karakter berhasil diperbarui!");
      location.reload();
    } else {
      alert("Gagal mengedit karakter.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-4 rounded-xl mt-4">
      <h3 className="text-white font-bold text-lg mb-2">Edit Karakter</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} className="mb-2 w-full p-1 rounded" placeholder="Name" />
      <input value={race} onChange={(e) => setRace(e.target.value)} className="mb-2 w-full p-1 rounded" placeholder="Race" />
      <input value={role} onChange={(e) => setRole(e.target.value)} className="mb-2 w-full p-1 rounded" placeholder="Role" />
      <input value={element} onChange={(e) => setElement(e.target.value)} className="mb-2 w-full p-1 rounded" placeholder="Element" />
      <input value={gender} onChange={(e) => setGender(e.target.value)} className="mb-4 w-full p-1 rounded" placeholder="Gender" />

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-500 px-3 py-1 rounded text-white text-sm">
          Simpan
        </button>
        <button type="button" onClick={onClose} className="bg-gray-500 px-3 py-1 rounded text-white text-sm">
          Batal
        </button>
      </div>
    </form>
  );
}