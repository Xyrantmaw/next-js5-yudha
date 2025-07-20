"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/journeySlice";

export default function JourneyForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        placeholder="Enter a new journey..."
      />
      <button
        type="submit"
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
      >
        Add
      </button>
    </form>
  );
}
