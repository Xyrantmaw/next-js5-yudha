"use client";

import Image from "next/image";
import JourneyTodo from "../../components/journeyTodo";
import JourneyForm from "../../components/JourneyForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function JourneyPage() {
  const todos = useSelector((state: RootState) => state.journey.todos);

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 flex items-start justify-center"
      style={{ backgroundImage: 'url("/images/map2.jpg")' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-7xl">
        <div className="bg-white bg-opacity-80 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2">Your Journey</h2>
          <JourneyTodo />
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/map.png"
            alt="Fantasy Map"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="bg-white bg-opacity-80 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2">Add Journey</h2>
          <JourneyForm />
        </div>
      </div>
    </div>
  );
}
