'use client';

import CharacterCard from "./CharacterCard";
import { FantasyCharacter } from "@prisma/client";

interface Props {
  characters: FantasyCharacter[];
}

export default function CharacterCardList({ characters }: Props) {
  return (
    <section className="mt-12 px-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          id={char.id}
          name={char.name}
          race={char.race}
          role={char.role}
          gender={char.gender}
          element={char.element}
        />
      ))}
    </section>
  );
}
