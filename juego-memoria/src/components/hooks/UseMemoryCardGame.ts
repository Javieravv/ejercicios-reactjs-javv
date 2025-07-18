// Hook para manejar el componente

import { useEffect, useRef, useState } from "react"
import type { itemOptionMemory } from "../../App"
import { initStateMemoryGame } from "../../utils/utilsmemorygame"

type UseMemoryCardGameParams = {
    optionsText: itemOptionMemory[] // Deberá ser optionsNumber por 2
}

interface CardPaired {
    index: number;
    text: string;
}

export const useMemoryCardGame = ({
    optionsText
}: UseMemoryCardGameParams) => {
    const [optiosMemoryGame, setOptiosMemoryGame] = useState<itemOptionMemory[]>([])
    const [cardsPaired, setCardsPaired] = useState<CardPaired[]>([{ index: -1, text: "" }, { index: -1, text: "" }])
    const [clicksCards, setclicksCards] = useState<number>(0) // Controla el número de clicks
    const [totalCorrect, setTotalCorrect] = useState<number>(0)
    const [totalErrors, setTotalErrors] = useState<number>(0)
    const [initMemoryGame, setInitMemoryGame] = useState<boolean>(true)
    const [timeGameSeconds, setTimeGameSeconds] = useState(0)
    const [timeGameMinutes, setTimeGameMinutes] = useState(0)
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setOptiosMemoryGame(initStateMemoryGame(optionsText));
    }, [optionsText]);


    // Desde el padre le enviamos el evento onClick
    const handleClickCard = (i: number) => {
        // Si el juego no ha iniciado, retornamos.
        if (initMemoryGame) return
        // Si ya está marcada la casilla retornamos
        if (optiosMemoryGame[i].isSelected) return // Si ya fue encontrada, no hacemos nada

        // Si el índice de clicks es 0, pasamos isSelected a false
        if (clicksCards === 0) {
            setOptiosMemoryGame((prev) =>
                prev.map((item) =>
                    (!item.isCardPaired && !item.isCardPaired) ? { ...item, isSelected: false } : item
                )
            );
        }

        setOptiosMemoryGame((prev) =>
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
            cardsPairedTemp[clickTemporal].text = optiosMemoryGame[i].text
            cardsPairedTemp[clickTemporal].index = i
            return cardsPairedTemp
        })
        setclicksCards(nextClick)
    }

    // Si coinciden los dos clicks, entonces pasamos sus índices a true, par que no se oculten
    useEffect(() => {
        let timeCardOut: ReturnType<typeof setTimeout> | undefined;
        if (cardsPaired[0].text !== '' && (cardsPaired[0].text === cardsPaired[1].text)) {
            setOptiosMemoryGame((prev) =>
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
                setOptiosMemoryGame((prev) =>
                    prev.map((item) =>
                        (!item.isCardPaired) ? { ...item, isSelected: false } : item
                    )
                );
                setTotalErrors((prev) => prev + 1)
            }, 500);
        }

        return () => clearTimeout(timeCardOut)

    }, [cardsPaired, clicksCards])

    // Mostramos el cuadro de diálogo cuando el juego acabe
    useEffect(() => {
        if (totalCorrect === optionsText.length && dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, [totalCorrect, optionsText]);

    // Mostramos las opciones y las ocultamos luego de un pequeño tiempo
    const viewOptions = () => {
        // Mostramos por un momento las letras
        setOptiosMemoryGame((prev) =>
            prev.map((item) => {
                return { ...item, isSelected: true }
            })
        );

        // Ocultamos las opciones luego de un tiempo
        setTimeout(() => {
            console.log('Ocultamos...')
            setOptiosMemoryGame((prev) =>
                prev.map((item) => {
                    return { ...item, isSelected: false }
                }));
        }, 1800);
    }

    // Iniciamos nuevo juego
    const handleNewGame = () => {
        setOptiosMemoryGame(initStateMemoryGame(optionsText))
        setTotalCorrect(0)
        setTotalErrors(0)
        setTimeGameMinutes(0)
        setTimeGameSeconds(0)
        setInitMemoryGame(true)
    }

    return {
        optiosMemoryGame, setOptiosMemoryGame,
        cardsPaired, setCardsPaired,
        clicksCards, setclicksCards,
        totalCorrect, setTotalCorrect,
        totalErrors, setTotalErrors,
        initMemoryGame, setInitMemoryGame,
        timeGameSeconds, setTimeGameSeconds,
        timeGameMinutes, setTimeGameMinutes,
        handleClickCard, handleNewGame, dialogRef, viewOptions
    }
}
