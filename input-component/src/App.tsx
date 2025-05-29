import React, { useState } from 'react';
import CustomInput from './components/CustomInput';

function App() {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleEnter = () => {
    console.log('Enter presionado con valor:', value);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleInputChange1 = (value: string) => {
    setInputValue1(value);
  };

  const handleEnterPress = (value: string) => {
    if (value.trim()) {
      setMessages(prev => [...prev, `Enviaste: "${value}"`]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setInputValue("");
      setMessages(prev => [...prev, "Input limpiado con Escape"]);
    }
  };
  return (
    <main>
      <div>
        <h1>Componente Input hecho con IAs</h1>
      </div>
      <div className='divInputs'>
          <CustomInput
            placeholder="Escribe algo y presiona Enter..."
            value={inputValue}
            onChange={handleInputChange}
            onEnter={handleEnterPress}
            onKeyDown={handleKeyPress}
            name='input1'
          />
          <CustomInput
            placeholder="Escribe algo más y presiona Enter..."
            value={inputValue1}
            onChange={handleInputChange1}
            onKeyDown={handleKeyPress}
            name='input2'
          />
        </div>
    </main>
  )
}
export default App
