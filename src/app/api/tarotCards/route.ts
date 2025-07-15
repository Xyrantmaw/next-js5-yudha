import { NextResponse } from 'next/server';

let tarotCards = [
    {
        id: 1,
        name: "The Shine",
        description: "Kamu akan dihadapkan pada cahaya yang membuka jalan baru.",
        image: "/images/tarotumum.png"
    },
    {
        id: 2,
        name: "The Flame",
        description: "Semangatmu menyala, tapi pastikan tidak membakar arah yang salah.",
        image: "/images/tarotumum.png"
    },
    {
        id: 3,
        name: "The Brave",
        description: "Keberanianmu diuji, dan langkahmu akan menentukan segalanya.",
        image: "/images/tarotumum.png"
    },
    {
        id: 4,
        name: "The Lost",
        description: "Ada bagian dari dirimu yang hilang, tapi itu yang membawamu belajar.",
        image: "/images/tarotumum.png"
    },
    {
        id: 5,
        name: "The Afraid",
        description: "Rasa takut muncul bukan untuk menghalangi, tapi untuk kamu hadapi.",
        image: "/images/tarotumum.png"
    },
    {
        id: 6,
        name: "The Luck",
        description: "Keberuntungan akan datang, tapi hanya jika kamu berani melangkah.",
        image: "/images/tarotumum.png"
    },
    {
        id: 7,
        name: "The Clever",
        description: "Gunakan kecerdasanmu untuk keluar dari jebakan yang tak terlihat.",
        image: "/images/tarotumum.png"
    },
    {
        id: 8,
        name: "The Greed",
        description: "Keinginan yang berlebih bisa menyesatkanmu jika tak dikendalikan.",
        image: "/images/tarotumum.png"
    },
    {
        id: 9,
        name: "The Rational",
        description: "Pikiran jernih akan membimbingmu saat emosi mulai mengambil alih.",
        image: "/images/tarotumum.png"
    },
    {
        id: 10,
        name: "The Conqueror",
        description: "Kamu akan menaklukkan tantangan, tapi jangan lupakan dari mana kamu datang.",
        image: "/images/tarotumum.png"
    }
    ];

export async function GET() {
    return NextResponse.json(tarotCards);
    }

export async function POST(request: Request) {
    const body = await request.json();
    const newCard = { ...body, id: Date.now() };
    tarotCards.push(newCard);
    return NextResponse.json(newCard, { status: 201 });
}

export async function PUT(request: Request) {
    const updatedCard = await request.json();
    tarotCards = tarotCards.map(card => card.id === updatedCard.id ? updatedCard : card);
    return NextResponse.json(updatedCard);
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    tarotCards = tarotCards.filter(card => card.id !== id);
    return NextResponse.json({ message: 'Deleted' });
}