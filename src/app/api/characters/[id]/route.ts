import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await request.json();

  if (!body.name || !body.race || !body.role || !body.gender || !body.element) {
    return NextResponse.json({ error: "Salah Input!" }, { status: 400 });
  }

  try {
    const updated = await prisma.fantasyCharacter.update({
      where: { id },
      data: {
        name: body.name,
        race: body.race,
        role: body.role,
        gender: body.gender,
        element: body.element,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ error: "Gagal Mengupdate Data!" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const deleted = await prisma.fantasyCharacter.delete({
      where: { id },
    });

    return NextResponse.json(deleted);
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Gagal menghapus karakter!" }, { status: 500 });
  }
}