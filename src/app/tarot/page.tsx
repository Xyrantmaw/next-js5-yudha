'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type TarotCard = {
    id: number
    name: string
    description: string
    image: string
}

export default function TarotPage() {
    const [cards, setCards] = useState<TarotCard[]>([])
    const [selectedCards, setSelectedCards] = useState<TarotCard[]>([])
    const [showFortune, setShowFortune] = useState(false)

    useEffect(() => {
        fetch('/api/tarotCards')
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(err => console.error('Error:', err))
    }, [])

    const handleCardClick = (card: TarotCard) => {
        if (selectedCards.find(c => c.id === card.id)) {
        setSelectedCards(prev => prev.filter(c => c.id !== card.id))
        } else if (selectedCards.length < 4) {
        setSelectedCards(prev => [...prev, card])
        }
    }

    const handleRemoveCard = (id: number) => {
        setSelectedCards(prev => prev.filter(c => c.id !== id))
    }

    return (
        <main className="min-h-screen bg-cover bg-center bg-no-repeat relative px-4 pb-20"
        style={{ backgroundImage: "url('/images/meja.jpg')" }}>
        <h1 className="text-4xl font-[MarckScript] text-white text-center pt-10 drop-shadow-lg">Tarot Cards</h1>

        <motion.div
            className="grid grid-cols-5 gap-3 mt-10 w-fit"
            initial="hidden"
            animate="visible"
            variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
            }}>

            {cards.map(card => (
            <motion.div
                key={card.id}
                className="relative w-28 h-40 cursor-pointer"
                onClick={() => handleCardClick(card)}
                variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
                }}>
                
            <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover rounded-lg shadow-md hover:scale-105 transition"/>
            </motion.div>
            ))}
        </motion.div>

        <div className="fixed top-20 right-4 w-72 bg-black bg-opacity-60 p-4 rounded-2xl hidden sm:block">
            <h3 className="text-white text-xl mb-3 font-[MarckScript] text-center">Your Selected Cards</h3>
            <div className="grid grid-cols-2 gap-3">
            {selectedCards.map(card => (
                <motion.div
                    key={card.id}
                    className="relative w-28 h-40 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleRemoveCard(card.id)}>
                <Image src={card.image} alt={card.name} fill className="rounded-md object-cover" />
                </motion.div>
            ))}
            </div>

            {selectedCards.length === 4 && !showFortune && (
            <motion.button
                onClick={() => setShowFortune(true)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 w-full bg-purple-400 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-purple-500 transition">
                Reveal My Fortune
            </motion.button>
            )}
        </div>

        {showFortune && (
            <motion.div
            className="fixed left-1/2 -translate-x-1/2 bottom-6 w-[90%] sm:w-[400px] bg-black bg-opacity-70 p-6 rounded-2xl text-white text-center shadow-2xl z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-bold mb-3 font-[MarckScript]">Your Fortune Today</h2>
            <ul className="text-sm sm:text-base space-y-2">
                {selectedCards.map(card => (
                <li key={card.id}>🔮 {card.description}</li>
                ))}
            </ul>
            </motion.div>
        )}
    </main>
  )
}