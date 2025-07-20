"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function JourneyTodo() {
  const todos = useSelector((state: RootState) => state.journey.todos);

  return (
    <ul className="list-disc pl-5 space-y-2">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
