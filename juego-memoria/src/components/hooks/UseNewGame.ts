// Este hook maneja opciones para el nuevo juego

import type { itemOptionMemory } from "../../App";
import { initStateMemoryGame } from "../../utils/utilsmemorygame";

export type NewGameParams = {
    setTimeGameSeconds: React.Dispatch<React.SetStateAction<number>>;
    setTimeGameMinutes: React.Dispatch<React.SetStateAction<number>>;
}

type UseNewGameProps = {
    setoptionsMemoryGame: React.Dispatch<React.SetStateAction<itemOptionMemory[]>>,
    setTotalCorrect: React.Dispatch<React.SetStateAction<number>>,
    setTotalErrors: React.Dispatch<React.SetStateAction<number>>,
    setInitMemoryGame: React.Dispatch<React.SetStateAction<boolean>>,
    optionsText: itemOptionMemory[]
}

export const useNewGame = ({
    setoptionsMemoryGame,
    setTotalCorrect,
    setTotalErrors,
    setInitMemoryGame,
    optionsText
}: UseNewGameProps) => {
    // Mostramos las opciones y las ocultamos luego de un pequeño tiempo
    const viewOptions = () => {
        // Mostramos por un momento las letras
        setoptionsMemoryGame((prev) =>
            prev.map((item) => {
                return { ...item, isSelected: true }
            })
        );

        // Ocultamos las opciones luego de un tiempo
        setTimeout(() => {
            setoptionsMemoryGame((prev) =>
                prev.map((item) => {
                    return { ...item, isSelected: false }
                }));
        }, 1800);
    }

    // Iniciamos nuevo juego
    const handleNewGame = ({
        setTimeGameMinutes,
        setTimeGameSeconds
    }: NewGameParams) => {
        setoptionsMemoryGame(initStateMemoryGame(optionsText))
        setTotalCorrect(0)
        setTotalErrors(0)
        setTimeGameSeconds(0)
        setTimeGameMinutes(0)
        setInitMemoryGame(true)
    }

    return {
        viewOptions,
        handleNewGame
    }
}