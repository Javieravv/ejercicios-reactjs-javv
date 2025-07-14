// Componente para manejar la card o cards que se mostrarán
// import '../index.css'
import './css/cardmemory.css'

interface CardMemoryProps {
   text: string;
}

const CardMemory = ({ text }: CardMemoryProps) => {
   return (
      <div className="card-memory">
         <p>{text}</p>
      </div>
   )
}

export default CardMemory