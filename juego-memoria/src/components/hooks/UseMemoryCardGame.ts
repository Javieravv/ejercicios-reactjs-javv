// Hook para manejar el componente

import { useEffect,  useState } from "react"
import type { itemOptionMemory } from "../../App"
import { initStateMemoryGame } from "../../utils/utilsmemorygame"

type UseMemoryCardGameParams = {
    optionsText: itemOptionMemory[] // Deberá ser optionsNumber por 2
}

export type NewGameParams = {
    setTimeGameSeconds: React.Dispatch<React.SetStateAction<number>>;
    setTimeGameMinutes: React.Dispatch<React.SetStateAction<number>>;
}

interface CardPaired {
    index: number;
    text: string;
}

export const useMemoryCardGame = ({
    optionsText
}: UseMemoryCardGameParams) => {
    const [optionsMemoryGame, setoptionsMemoryGame] = useState<itemOptionMemory[]>([])
    const [cardsPaired, setCardsPaired] = useState<CardPaired[]>([{ index: -1, text: "" }, { index: -1, text: "" }])
    const [clicksCards, setclicksCards] = useState<number>(0) // Controla el número de clicks
    const [totalCorrect, setTotalCorrect] = useState<number>(0)
    const [totalErrors, setTotalErrors] = useState<number>(0)
    const [initMemoryGame, setInitMemoryGame] = useState<boolean>(true)

    useEffect(() => {
        setoptionsMemoryGame(initStateMemoryGame(optionsText));
    }, [optionsText]);


    // Desde el padre le enviamos el evento onClick
    const handleClickCard = (i: number) => {
        // Si el juego no ha iniciado, retornamos.
        if (initMemoryGame) return
        // Si ya está marcada la casilla retornamos
        if (optionsMemoryGame[i].isSelected || optionsMemoryGame[i].isCardPaired) return // Si ya fue encontrada o emparejada, no hacemos nada

        // Si el índice de clicks es 0, pasamos isSelected a false
        if (clicksCards === 0) {
            setoptionsMemoryGame((prev) =>
                prev.map((item) =>
                    (!item.isCardPaired) ? { ...item, isSelected: false } : item
                )
            );
        }

        setoptionsMemoryGame((prev) =>
            prev.map((item, index) =>
                (index === i && !item.isCardPaired) ? { ...item, isSelected: !item.isSelected } : item
            )
        );
        // Ahora controlamos el total de clicks. Si llega a dos, pasa a 0
        // También asignamos la letra que corresponda al arreglo únido
        const clickTemporal = clicksCards
        const nextClick = clickTemporal < 1 ? clickTemporal + 1 : 0;

        setCardsPaired((prev) => {
            const cardsPairedTemp = clickTemporal === 0 ? [{ index: -1, text: "" }, { index: -1, text: "" }] : prev
            cardsPairedTemp[clickTemporal].text = optionsMemoryGame[i].text
            cardsPairedTemp[clickTemporal].index = i
            return cardsPairedTemp
        })
        setclicksCards(nextClick)
    }

    // Si coinciden los dos clicks, entonces pasamos sus índices a true, par que no se oculten
    useEffect(() => {
        let timeCardOut: ReturnType<typeof setTimeout> | undefined;
        if (cardsPaired[0].text !== '' && (cardsPaired[0].text === cardsPaired[1].text)) {
            setoptionsMemoryGame((prev) =>
                prev.map((item, index) =>
                    (index === cardsPaired[0].index || index === cardsPaired[1].index)
                        ? { ...item, isCardPaired: true, isSelected: true }
                        : item
                )
            );
            setTotalCorrect((prev) => prev + 1)
        } else {
            if (cardsPaired[0].text === '' || cardsPaired[1].text === '') return
            // Esperamos un tiempo y ocultamos las opciones
            timeCardOut = setTimeout(() => {
                setoptionsMemoryGame((prev) =>
                    prev.map((item) =>
                        (!item.isCardPaired) ? { ...item, isSelected: false } : item
                    )
                );
                setTotalErrors((prev) => prev + 1)
            }, 500);
        }
        return () => clearTimeout(timeCardOut)
    }, [cardsPaired, clicksCards])
    
    return {
        optionsMemoryGame, setoptionsMemoryGame,
        cardsPaired, setCardsPaired,
        clicksCards, setclicksCards,
        totalCorrect, setTotalCorrect,
        totalErrors, setTotalErrors,
        initMemoryGame, setInitMemoryGame,
        handleClickCard, 
    }
}
