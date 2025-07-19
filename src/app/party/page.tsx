import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { FantasyCharacter } from "@prisma/client";
import CreateCharacterForm from "../../components/CreateCharacterForm";
import CharacterCardList from "../../components/CharacterCardList";

export const dynamic = "force-dynamic";

export default async function PartyPage() {
  const characters: FantasyCharacter[] = await prisma.fantasyCharacter.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="relative min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/tavern.jpg"
          alt="Fantasy Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      <div className="pt-24 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          <span className="font-[Marck_Script] text-purple-300">Fantasy</span> Within Your Hand
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Create and manage your dream team of fantasy characters.
        </p>
      </div>

      <CreateCharacterForm />

      <CharacterCardList characters={characters} />
    </main>
  );
}
