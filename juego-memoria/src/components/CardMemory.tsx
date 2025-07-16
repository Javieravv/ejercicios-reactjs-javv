// Componente para manejar la card o cards que se mostrarán
// import '../index.css'
import type { itemOptionMemory } from '../App';
import './css/cardmemory.css'

interface CardMemoryProps {
   item: itemOptionMemory;
   onClickCard: () => void
}

// Al darle click se debería ver la tarjeta que tiene el texto y ocultar
// la otra
const CardMemory = ({
   item,
   onClickCard
}: CardMemoryProps) => {
   // const [isCardVisible, setIsCardVisible] = useState(false)
   return (
      <div className="cardmemory-container"
         onClick={() => onClickCard()}
      >
         <div className={`card-memory ${!item.isSelected ? 'card-memory_visible' : 'card-memory_hidem'}`}>
            <p></p>
         </div>
         <div className={`card-memory 
            ${!item.isSelected ? 'card-memory_hidem' : 'card-memory_visible'}
            ${item.isCardPaired ? 'card-memory_found' : ''}
            `}>
            <p>{item.text}</p>
         </div>
      </div>
   )
}

export default CardMemory