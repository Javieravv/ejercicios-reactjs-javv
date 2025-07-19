// Este componente muestra los resultados del juego
import './css/memoryresults.css'
import type { NewGameParams } from './hooks/UseMemoryCardGame';
import MemoryActions from './MemoryActions';

interface MemoryResultsProps {
    totalCorrect: number;
    totalErrors: number;
    initMemoryGame: boolean;
    setInitMemoryGame: React.Dispatch<React.SetStateAction<boolean>>;
    handleNewGame: (params: NewGameParams) => void;
    lenghtOptions: number;
    viewOptions: () => void;
    setTimeGameSeconds: React.Dispatch<React.SetStateAction<number>>;
    setTimeGameMinutes: React.Dispatch<React.SetStateAction<number>>
}

const MemoryResults = ({
    totalCorrect,
    totalErrors,
    initMemoryGame,
    setInitMemoryGame,
    handleNewGame,
    lenghtOptions,
    viewOptions,
    setTimeGameSeconds,
    setTimeGameMinutes
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
            {/* Mostramos la botonera para las opcionesMemoryActions */}
            <MemoryActions
                handleNewGame={handleNewGame}
                initMemoryGame={initMemoryGame}
                lenghtOptions={lenghtOptions}
                setInitMemoryGame={setInitMemoryGame}
                setTimeGameMinutes={setTimeGameMinutes}
                setTimeGameSeconds={setTimeGameSeconds}
                totalCorrect={totalCorrect}
                viewOptions={viewOptions}
            />
        </div>
    )
}

export default MemoryResults