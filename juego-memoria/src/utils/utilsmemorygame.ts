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
// los items del juego.
export const initStateMemoryGame = (arrayData: itemOptionMemory[]): itemOptionMemory[] => {
    // Barajamos las opciones usando sort, y luego le agregamos los datos para isSlecte
    // isSelected e isCardPaired ya vienen en false
    const suffledArrayData = [...arrayData, ...arrayData]
        .sort(() => Math.random() - 0.5)

    return suffledArrayData
}

// Es la anterior función que permitía distribuir las imágenes
// const OldinitStateMemoryGame = (arrayData: itemOptionMemory[]): itemOptionMemory[] => {
//     const arrayDataMemoryGame: itemOptionMemory[] = Array(arrayData.length * 2)
//         .fill(null)
//         .map(() => ({ text: '', isSelected: false, isCardPaired: false }));

//     let totOptions = arrayDataMemoryGame.length
//     for (let j = 0; j < arrayData.length; j++) {
//         let totApariciones = 1
//         while (totApariciones <= 2) {
//             const indexOption = Math.floor(Math.random() * totOptions)
//             let cont = 0 // Cuenta las casillas vacías
//             for (let i = 0; i < arrayDataMemoryGame.length; i++) {
//                 if (arrayDataMemoryGame[i].text === '' && cont !== indexOption) {
//                     cont = cont + 1
//                 }
//                 if (arrayDataMemoryGame[i].text === '' && cont === indexOption) {
//                     arrayDataMemoryGame[i].text = arrayData[j].text
//                     arrayDataMemoryGame[i].isSelected = false
//                     arrayDataMemoryGame[i].isCardPaired = false
//                     totOptions = totOptions - 1
//                     break
//                 }
//             }
//             totApariciones = totApariciones + 1
//         }
//     }
//     return arrayDataMemoryGame
// }