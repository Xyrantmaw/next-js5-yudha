'use client';

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface CharacterCardProps {
  id: number;
  name: string;
  race: string;
  role: string;
  gender: string;
  element: string;
}

export default function CharacterCard({
  id,
  name,
  race,
  role,
  gender,
  element,

}: CharacterCardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, race, role, gender, element});

  const handleDelete = async () => {
    const confirmed = confirm("Mau hapus karakter ini?");
    if (!confirmed) return;

    try {
      await fetch(`/api/characters/${id}`, {
        method: "DELETE",
      });
      startTransition(() => router.refresh());
    } catch (err) {
      console.error("Gagal menghapus karakter:", err);
      alert("Gagal menghapus karakter.");
    }
  };

  const handleEditSubmit = async () => {
    try {
      await fetch(`/api/characters/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsEditing(false);
      startTransition(() => router.refresh());
    } catch (err) {
      console.error("Gagal mengupdate karakter:", err);
      alert("Gagal mengupdate karakter.");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md space-y-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-1 rounded"
          />
          <input
            type="text"
            value={formData.race}
            onChange={(e) => setFormData({ ...formData, race: e.target.value })}
            className="w-full p-1 rounded"
          />
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full p-1 rounded"
          />
          <input
            type="text"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="w-full p-1 rounded"
            />
        <input
            type="text"
            value={formData.element}
            onChange={(e) => setFormData({ ...formData, element: e.target.value })}
             className="w-full p-1 rounded"
            />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleEditSubmit}
              className="px-3 py-1 rounded bg-green-600 text-white text-sm">
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 rounded bg-gray-400 text-sm">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>Race: {race}</p>
          <p>Role: {role}</p>
          <p>Gender: {gender}</p>
          <p>Element: {element}</p> 
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white text-sm">
              Edit
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm">
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
