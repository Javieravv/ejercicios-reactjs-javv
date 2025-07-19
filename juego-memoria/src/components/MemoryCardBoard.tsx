// import { useEffect, useState } from "react";
import CardMemory from "./CardMemory";
import Stopwatch from "./Stopwatch";
import MemoryResults from "./MemoryResults";
import { useResponsiveConfigGrid } from "./hooks/UseResponsiveConfigGrid";
import { useMemoryCardGame } from "./hooks/UseMemoryCardGame";
import { obtenerCombinacionEquilibrada } from '../utils/utilsmemorygame';
import type { itemOptionMemory } from "../App";
import './css/memorycardborad.css'
import { useStopWatch } from "./hooks/UseStopWatch";
import { useMemoryDialog } from "./hooks/UseMemoryDialog";
import { useNewGame } from "./hooks/UseNewGame";

// Componente principal para el tablero
interface MemoryCardBoardProps {
   optionsText: itemOptionMemory[] // Deberá ser optionsNumber por 2
}

const MemoryCardBoard = ({
   optionsText
}: MemoryCardBoardProps) => {

   const {
      optionsMemoryGame, setoptionsMemoryGame, 
      totalCorrect, setTotalCorrect,
      totalErrors,  setTotalErrors,
      initMemoryGame, setInitMemoryGame,
      handleClickCard, 
      // handleNewGame, 
      // dialogRef, 
      // viewOptions
   } = useMemoryCardGame({ optionsText })

   const {timeGameSeconds, setTimeGameSeconds,timeGameMinutes, setTimeGameMinutes} = useStopWatch()
   const [cols, rows] = obtenerCombinacionEquilibrada(optionsText.length * 2) ?? [4, 4]
   const gridConfig = useResponsiveConfigGrid({ cols, rows, mobileBreakpoint: 600 })
   const { dialogRef } = useMemoryDialog({totalCorrect, optionsTextLength: optionsText.length})
   const { handleNewGame, viewOptions } = useNewGame({
      setoptionsMemoryGame,
      setTotalCorrect,
      setTotalErrors,
      setInitMemoryGame,
      optionsText
   })

   return (
      <>
         <div className="memory-container">
            {/* Encabezado del juego */}
            <div className="memory-header">
               <div><h1 className="memory-title">Juego de memoria</h1></div>
               <div>
                  <div className="memory-time">
                     <Stopwatch
                        stopgame={totalCorrect === optionsText.length}
                        timeGameSeconds={timeGameSeconds}
                        timeGameMinutes={timeGameMinutes}
                        setTimeGameSeconds={setTimeGameSeconds}
                        setTimeGameMinutes={setTimeGameMinutes}
                        startWatch={initMemoryGame}
                     />
                  </div>
               </div>
            </div>
            {/* Cards del juego */}
            <div
               className="memory-cardboard"
               style={gridConfig}
            >
               {
                  optionsMemoryGame.map((option, index) => {
                     return (
                        <CardMemory
                           key={`option.text-${index}`} item={option}
                           onClickCard={() => handleClickCard(index)}
                        />)
                  })
               }
            </div>
            {/* Resultados del juego */}
            <MemoryResults
               totalCorrect={totalCorrect}
               totalErrors={totalErrors}
               initMemoryGame={initMemoryGame}
               setInitMemoryGame={setInitMemoryGame}
               handleNewGame={handleNewGame}
               lenghtOptions={optionsText.length}
               viewOptions={viewOptions}
               setTimeGameSeconds={setTimeGameSeconds}
               setTimeGameMinutes={setTimeGameMinutes}
            />
            {/* Cuadro de diálogo final, cuando el juego acaba */}
            <dialog ref={dialogRef}>
               <h2>Fin del Juego!!!</h2>
               <form method="dialog">
                  <button>
                     Aceptar</button>
               </form>
            </dialog>
         </div>
      </>
   )
}

export default MemoryCardBoard