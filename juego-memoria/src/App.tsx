import './App.css'
import MemoryCardBoard from './components/MemoryCardBoard'

const optionsMemory = [
  'A','B','C' ,'D','E','F','G','H', 'I' ,'J', 'K', 'L','M', 'N','O','P','Q','R'
]

function App() {

  return (
    <>
      <h1>Juego de memoria</h1>      
      <MemoryCardBoard optionsText={optionsMemory} />
    </>
  )
}

export default App
