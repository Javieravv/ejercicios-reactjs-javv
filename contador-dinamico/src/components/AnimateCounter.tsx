import { FC, useState, useEffect } from "react";

interface Props {
    titleCounter?: string;
    targetNumber: number;
    timeDuration?: number;
}

const AnimateCounter: FC<Props> = ({
    titleCounter = 'Mi título',
    targetNumber,
    timeDuration = 4000 }) => {
    const [count, setCount] = useState(0);
    const ctrlTimer = 40;

    useEffect(() => {
        // Si el contador no ha alcanzado el objetivo se sigue
        if (count < targetNumber) {
            const increment = targetNumber / (timeDuration / ctrlTimer)
            const intervalId = setInterval(() => {
                setCount(prevCount => {
                    const newCount = prevCount + increment < targetNumber 
                    ? prevCount + increment 
                    : targetNumber
                    if (newCount > targetNumber) {
                        clearInterval(intervalId)
                    }
                    return newCount
                })
            }, ctrlTimer)
            return () => clearInterval(intervalId)
        }
    }, [])


    return (
        <div className="counter__main">
            <h2 className="counter__title">{titleCounter}</h2>
            <div className="counter__number">
                <h2 className="fade-in"> {count.toFixed(0)}</h2>
            </div>
        </div>
    )
}

export default AnimateCounter