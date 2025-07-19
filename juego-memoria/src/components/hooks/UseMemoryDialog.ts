// Hook para manejar el cuadro de diálogo
// que se muestra al final

import { useEffect, useRef } from "react";
type UseMemoryDialogProps = {
    totalCorrect: number,
    optionsTextLength: number
}

export const useMemoryDialog = ({
    totalCorrect,
    optionsTextLength
}: UseMemoryDialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Mostramos el cuadro de diálogo cuando el juego acabe
    useEffect(() => {
        if (totalCorrect === optionsTextLength && dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, [totalCorrect, optionsTextLength]);

    return {
        dialogRef
    }
}