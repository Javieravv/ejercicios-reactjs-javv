import { useEffect, useMemo, useState, type CSSProperties } from "react";
import CardMemory from "./CardMemory";
import { initStateMemoryGame, obtenerCombinacionEquilibrada } from "../utils/utilsmemorygame";
import type { itemOptionMemory } from "../App";
import './css/memorycardborad.css'
import Stopwatch from "./Stopwatch";

// Componente principal para el tablero
interface MemoryCardBoardProps {
   optionsText: itemOptionMemory[] // Deberá ser optionsNumber por 2
}

interface CardPaired {
   index: number;
   text: string;
}

const MemoryCardBoard = ({
   optionsText
}: MemoryCardBoardProps) => {
   const [optiosMemoryGame, setOptiosMemoryGame] = useState<itemOptionMemory[]>([])
   const [cardsPaired, setCardsPaired] = useState<CardPaired[]>([{ index: -1, text: "" }, { index: -1, text: "" }])
   const [clicksCards, setclicksCards] = useState<number>(0) // Controla el número de clicks
   const [totalCorrect, setTotalCorrect] = useState<number>(0)
   const [totalErrors, setTotalErrors] = useState<number>(0)
   const [timeGameSeconds, setTimeGameSeconds] = useState(0)
   const [timeGameMinutes, setTimeGameMinutes] = useState(0)
   // const [timeInit, settimeInit] = useState(0)
   // Calculamos el número de filas y columnas a mostrar
   const [cols, rows] = obtenerCombinacionEquilibrada(optionsText.length * 2) ?? [4, 4]

   useEffect(() => {
      setOptiosMemoryGame(initStateMemoryGame(optionsText));
   }, [optionsText]);

   // Calculamos cómo irá el grid
   const gridConfig = useMemo<CSSProperties>(() => ({
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
   }), [cols, rows]);

   // Desde el padre le enviamos el evento onClick
   const handleClickCard = (i: number) => {
      // Si ya está marcada la casilla retornamos
      if (optiosMemoryGame[i].isSelected) return // Si ya fue encontrada, no hacemos nada

      // Si el índice de clicks es 0, pasamos isSelected a false
      if (clicksCards === 0) {
         setOptiosMemoryGame((prev) =>
            prev.map((item) =>
               (!item.isCardPaired && !item.isCardPaired) ? { ...item, isSelected: false } : item
            )
         );
      }

      setOptiosMemoryGame((prev) =>
         prev.map((item, index) =>
            (index === i && !item.isCardPaired) ? { ...item, isSelected: !item.isSelected } : item
         )
      );
      // Ahora controlamos el total de clicks. Si llega a dos, pasa a 0
      // También asignamos la letra que corresponda al arreglo únido
      const clickTemporal = clicksCards
      const nextClick = clickTemporal < 1 ? clickTemporal + 1 : 0;

      setCardsPaired((prev) => {
         const cardsPairedTemp = clickTemporal === 0 ? [{ index: -1, text: "" }, { index: -1, text: "" }] : prev
         cardsPairedTemp[clickTemporal].text = optiosMemoryGame[i].text
         cardsPairedTemp[clickTemporal].index = i
         return cardsPairedTemp
      })
      setclicksCards(nextClick)
   }

   // Si coinciden los dos clicks, entonces pasamos sus índices a true, par que no se oculten
   useEffect(() => {
      let timeCardOut: ReturnType<typeof setTimeout> | undefined;
      if (cardsPaired[0].text !== '' && (cardsPaired[0].text === cardsPaired[1].text)) {
         setOptiosMemoryGame((prev) =>
            prev.map((item, index) =>
               (index === cardsPaired[0].index || index === cardsPaired[1].index)
                  ? { ...item, isCardPaired: true, isSelected: true }
                  : item
            )
         );
         setTotalCorrect((prev) => prev + 1)
      } else {
         if (cardsPaired[0].text === '' || cardsPaired[1].text === '') return
         // Esperamos un tiempo y ocultamos las opciones
         timeCardOut = setTimeout(() => {
            setOptiosMemoryGame((prev) =>
               prev.map((item) =>
                  (!item.isCardPaired) ? { ...item, isSelected: false } : item
               )
            );
            setTotalErrors((prev) => prev + 1)
         }, 500);
      }

      return () => clearTimeout(timeCardOut)

   }, [cardsPaired, clicksCards])

   // Iniciamos nuevo juego
   const handleNewGame = () => {
      setOptiosMemoryGame(initStateMemoryGame(optionsText))
      setTotalCorrect(0)
      setTotalErrors(0)
      setTimeGameMinutes(0)
      setTimeGameSeconds(0)
      // settimeInit(0)
   }


   return (
      <>
         <div className="memory-container">
            <div
               className="memory-cardboard"
               style={gridConfig}
            >
               {
                  optiosMemoryGame.map((option, index) => {
                     return (
                        <CardMemory
                           key={index} item={option}
                           onClickCard={() => handleClickCard(index)}
                        />)
                  })
               }
            </div>
            <div className="memory-results">
               <div className="memory-time">
                  <Stopwatch
                     stopgame={totalCorrect === optionsText.length}
                     timeGameSeconds={timeGameSeconds}
                     timeGameMinutes={timeGameMinutes}
                     setTimeGameSeconds={setTimeGameSeconds}
                     setTimeGameMinutes={setTimeGameMinutes}
                  />
               </div>
               <div>
                  <h3>Aciertos:</h3>
                  <h3>{totalCorrect}</h3>
               </div>
               <div>
                  <h3>Errores:</h3>
                  <h3>{totalErrors}</h3>
               </div>
               <div className="memory-btns">
                  <button
                     className="btn-newGame"
                     onClick={() => handleNewGame()}
                     disabled={totalCorrect !== optionsText.length}
                  >Nuevo</button>
                  <button
                     className="btn-reset"
                     onClick={() => handleNewGame()}
                     disabled={totalCorrect === optionsText.length}
                  >Reiniciar</button>
               </div>
            </div>
            {
               (totalCorrect === optionsText.length) && (
                  <div className="memory-endgame">
                     <h2>Fin del Juego!!!</h2>
                  </div>
               )
            }
         </div>
      </>
   )
}

export default MemoryCardBoard