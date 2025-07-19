// Hook para manejar el cronómetro en el aplicativo

import { useState } from "react"

// Hook para manejar el cronómetro
export const useStopWatch = () => {
    const [timeGameSeconds, setTimeGameSeconds] = useState(0)
    const [timeGameMinutes, setTimeGameMinutes] = useState(0)

    return {
        timeGameSeconds, setTimeGameSeconds,
        timeGameMinutes, setTimeGameMinutes
    }
}