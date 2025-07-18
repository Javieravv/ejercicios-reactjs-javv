// Este componente muestra los resultados del juego
import './css/memoryresults.css'

interface MemoryResultsProps {
    totalCorrect: number;
    totalErrors: number;
    initMemoryGame: boolean;
    setInitMemoryGame: React.Dispatch<React.SetStateAction<boolean>>;
    handleNewGame: () => void;
    lenghtOptions: number;
    viewOptions: () => void;
}

const MemoryResults = ({
    totalCorrect,
    totalErrors,
    initMemoryGame,
    setInitMemoryGame,
    handleNewGame,
    lenghtOptions,
    viewOptions
}: MemoryResultsProps) => {
    return (
        <div className="memory-results">
            <div className="memory-totals">
                <div>
                    <h3>Aciertos:</h3>
                    <h3>{totalCorrect}</h3>
                </div>
                <div>
                    <h3>Errores:</h3>
                    <h3>{totalErrors}</h3>
                </div>
            </div>
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
                    onClick={() => handleNewGame()}
                    disabled={totalCorrect !== lenghtOptions}
                >Nuevo</button>
                <button
                    className="btn-reset"
                    onClick={() => handleNewGame()}
                    disabled={totalCorrect === lenghtOptions}
                >Reiniciar</button>
            </div>
        </div>
    )
}

export default MemoryResults