import { useEffect, useMemo, useState, type CSSProperties } from "react";
import CardMemory from "./CardMemory";
import './css/memorycardborad.css'
import { initStateMemoryGame, obtenerCombinacionEquilibrada } from "../utils/utilsmemorygame";


// Componente principal para el tablero
interface MemoryCardBoardProps {
   optionsText: string[] // Deberá ser optionsNumber por 2
}

const MemoryCardBoard = ({
   optionsText
}: MemoryCardBoardProps) => {
   const [optiosMemoryGame, setOptiosMemoryGame] = useState<string[]>([])
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

   console.log(optiosMemoryGame, optiosMemoryGame.length)

   return (
      <div
         className="memory-cardboard"
         style={gridConfig}
      >
         {
            optiosMemoryGame.map((option, index) => {
               return (<CardMemory text={option} key={index} />)
            })
         }
      </div>
   )
}

export default MemoryCardBoard