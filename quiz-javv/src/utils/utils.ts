// Función para barajar aleatoriamente elementos de un arrayBuffer

export const shuffleAnswers = (arr: number[]): number[] => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Usamos const en lugar de let para j
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambio
    }
    return arr
}

