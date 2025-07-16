// Componente que me muestra un cronómetro
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import './css/memorycardborad.css'

interface StopwatchProps {
    stopgame: boolean;
    timeGameSeconds: number;
    timeGameMinutes: number;
    setTimeGameSeconds: Dispatch<SetStateAction<number>>;
    setTimeGameMinutes: Dispatch<SetStateAction<number>>;
}

const Stopwatch = ({
    stopgame,
    timeGameSeconds,
    timeGameMinutes,
    setTimeGameSeconds,
    setTimeGameMinutes }: StopwatchProps) => {

    useEffect(() => {
        if (stopgame) return

        const intervalIdSeconds = setInterval(() => {
            setTimeGameSeconds(prev => prev > 59 ? 1 : prev + 1)
        }, 1000)

        const intervalIdMinutes = setInterval(() => {
            setTimeGameMinutes(prev => prev + 1)
        }, 1000 * 60)

        return () => {
            clearInterval(intervalIdSeconds)
            clearInterval(intervalIdMinutes)
        }
    }, [setTimeGameMinutes, setTimeGameSeconds, stopgame])

    return (
        <div
            className="watch-container"
        >
            <div><h2>{timeGameMinutes} m</h2></div>
            <div><h2>{timeGameSeconds} s</h2></div>
        </div>
    )
}

export default Stopwatch