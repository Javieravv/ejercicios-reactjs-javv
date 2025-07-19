// Manejamos los botones en un componente adicional.

import type { NewGameParams } from "./hooks/UseMemoryCardGame"

type MemoryActionsProps = {
    initMemoryGame: boolean,
    setInitMemoryGame: React.Dispatch<React.SetStateAction<boolean>>,
    viewOptions: () => void,
    handleNewGame: (params: NewGameParams) => void,
    totalCorrect: number,
    lenghtOptions: number,
    setTimeGameSeconds: React.Dispatch<React.SetStateAction<number>>,
    setTimeGameMinutes: React.Dispatch<React.SetStateAction<number>>
}

const MemoryActions = ({
    initMemoryGame,
    setInitMemoryGame,
    viewOptions,
    handleNewGame,
    totalCorrect,
    lenghtOptions,
    setTimeGameSeconds,
    setTimeGameMinutes
}: MemoryActionsProps) => {
    return (
        <div className="memory-btns">
            <button
                className="btn-initGame"
                disabled={!initMemoryGame}
                onClick={() => {
                    setInitMemoryGame(false)
                    viewOptions()
                }}
            >
                Iniciar
            </button>
            <button
                className="btn-newGame"
                onClick={() => handleNewGame({ setTimeGameSeconds, setTimeGameMinutes })}
                disabled={totalCorrect !== lenghtOptions}
            >Nuevo</button>
            <button
                className="btn-reset"
                onClick={() => handleNewGame({ setTimeGameSeconds, setTimeGameMinutes })}
                disabled={totalCorrect === lenghtOptions}
            >Reiniciar</button>
        </div>
    )
}

export default MemoryActions