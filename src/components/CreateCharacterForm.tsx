"use client";

import { useState } from "react";

export default function CreateCharacterForm() {
  const [form, setForm] = useState({
    name: "",
    race: "",
    role: "",
    element: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Karakter berhasil ditambahkan!");
      location.reload();
    } else {
      alert("Gagal menambahkan karakter.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-2xl mt-12 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tambahkan Karakter Baru</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="name" placeholder="Nama" onChange={handleChange} required className="p-2 rounded" />
        <input name="race" placeholder="Ras" onChange={handleChange} required className="p-2 rounded" />
        <input name="role" placeholder="Peran" onChange={handleChange} required className="p-2 rounded" />
        <input name="element" placeholder="Elemen" onChange={handleChange} required className="p-2 rounded" />
      </div>

      <textarea name="gender" placeholder="Jenis Kelamin" onChange={handleChange} required className="mt-4 w-full p-2 rounded" />
      <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
        Tambahkan Karakter
      </button>
    </form>
  );
}