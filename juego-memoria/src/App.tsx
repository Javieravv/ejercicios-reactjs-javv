import './App.css'
import MemoryCardBoard from './components/MemoryCardBoard'

export interface itemOptionMemory {
  text: string;
  isSelected: boolean;
  isCardPaired: boolean
}

const optionsMemory = [
  {text: 'A', isSelected: false, isCardPaired: false},
  {text: 'B', isSelected: false, isCardPaired: false},
  {text: 'C', isSelected: false, isCardPaired: false},
  {text: 'D', isSelected: false, isCardPaired: false},
  {text: 'E', isSelected: false, isCardPaired: false},
  {text: 'F', isSelected: false, isCardPaired: false},
  {text: 'G', isSelected: false, isCardPaired: false},
  {text: 'H', isSelected: false, isCardPaired: false},
  {text: 'I', isSelected: false, isCardPaired: false},
  {text: 'J', isSelected: false, isCardPaired: false},
  {text: 'K', isSelected: false, isCardPaired: false},
  {text: 'L', isSelected: false, isCardPaired: false},
  {text: 'M', isSelected: false, isCardPaired: false},
  {text: 'N', isSelected: false, isCardPaired: false},
  {text: 'O', isSelected: false, isCardPaired: false},
  {text: 'P', isSelected: false, isCardPaired: false},
  {text: 'Q', isSelected: false, isCardPaired: false},
  {text: 'R', isSelected: false, isCardPaired: false},
  {text: 'R', isSelected: false, isCardPaired: false},
  {text: 'S', isSelected: false, isCardPaired: false},
  {text: 'T', isSelected: false, isCardPaired: false},
  {text: 'U', isSelected: false, isCardPaired: false},
  {text: 'V', isSelected: false, isCardPaired: false},
  {text: 'W', isSelected: false, isCardPaired: false},
  {text: 'X', isSelected: false, isCardPaired: false},
  {text: 'Y', isSelected: false, isCardPaired: false},
  {text: 'Z', isSelected: false, isCardPaired: false},
]

function App() {

  return (
    <>
      <MemoryCardBoard optionsText={optionsMemory.slice(0, Math.random() * optionsMemory.length)} />
    </>
  )
}

export default App
