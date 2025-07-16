import type { itemOptionMemory } from "../App";

// Devuelve la combinación más alta de dos números que multiplicados den n
export const obtenerCombinacionEquilibrada = (n: number): [number, number] | null => {
    let mejor: [number, number] | null = null;
    let mejorMinimo = 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            const j = n / i;
            if (j >= 2) {
                const minVal = Math.min(i, j);
                if (minVal > mejorMinimo) {
                    mejor = [Math.max(i, j), Math.min(i, j)];
                    mejorMinimo = minVal;
                }
            }
        }
    }
    return mejor;
}

// Devuelve un arreglo en donde se distribuyen aleatoriamente
// valores de otro arreglo.
// Los valores del arreglo1 se colocan dos veces en el arreglo 2

export const initStateMemoryGame = (arrayData: itemOptionMemory[]): itemOptionMemory[] => {
    const arrayDataMemoryGame: itemOptionMemory[] = Array(arrayData.length * 2)
        .fill(null)
        .map(() => ({ text: '', isSelected: false, isCardPaired: false }));

    let totOptions = arrayDataMemoryGame.length
    for (let j = 0; j < arrayData.length; j++) {
        let totApariciones = 1
        while (totApariciones <= 2) {
            const indexOption = Math.floor(Math.random() * totOptions)
            let cont = 0 // Cuenta las casillas vacías
            for (let i = 0; i < arrayDataMemoryGame.length; i++) {
                if (arrayDataMemoryGame[i].text === '' && cont !== indexOption) {
                    cont = cont + 1
                }
                if (arrayDataMemoryGame[i].text === '' && cont === indexOption) {
                    arrayDataMemoryGame[i].text = arrayData[j].text
                    arrayDataMemoryGame[i].isSelected = false
                    totOptions = totOptions - 1
                    break
                }
            }
            totApariciones = totApariciones + 1
        }
    }
    return arrayDataMemoryGame
}