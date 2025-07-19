import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.race || !body.role || !body.gender || !body.element) {
    return NextResponse.json({ error: "Salah Input!" }, { status: 400 });
  }

  try {
    const newCharacter = await prisma.fantasyCharacter.create({
      data: {
        name: body.name,
        race: body.race,
        role: body.role,
        gender: body.gender,
        element: body.element,
      },
    });

    return NextResponse.json(newCharacter);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Failed to create character" }, { status: 500 });
  }
}