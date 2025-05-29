import { useState } from 'react'
import './App.scss'
import CheckBoxAnimatedV1 from './components/check-animate-1/CheckBoxAnimatedV1'
import CheckBoxAnimated from './components/check-animate/CheckBoxAnimated'
import Dropdownmenu from './components/dropdown-menu/Dropdownmenu'
import Input from './components/input/Input'

function App() {
    const [ischeck, setIscheck] = useState(false)
    const [ischeck1, setIscheck1] = useState(true)

    const handleCheckBoxChange3 = (
        value: boolean,
        setChange: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setChange(value)
    }

    return (
        <>
            <header>
                <nav className='width-main'>
                    <h1>Componentes React Javv - 2024</h1>
                </nav>
            </header>
            <section className='mainsection width-main'>
                <article className="checkboxes">
                    <CheckBoxAnimated
                        style={{ backgroundColor: 'orange' }}
                        text='Escoger opción:'
                    />
                    <CheckBoxAnimated
                        text='Leer términos y condiciones'
                        style={{ backgroundColor: 'green' }}
                    />
                    <CheckBoxAnimated
                        text='Está de acuerdo'
                        style={{
                            backgroundColor: 'purple'
                        }}
                    />
                </article>
                <article className="dropdownmenu">
                    <Dropdownmenu
                        options={['Opción 1', 'Opción 2']}
                        text='Seleccione'
                    />
                </article>
                <article className='checkboxes'>
                    <CheckBoxAnimatedV1
                        color='orange'
                        text='Opción 2'
                        width='90px'
                        height='25px'
                        checked={ischeck}
                        onChange={() => setIscheck(!ischeck)}
                    />

                    <CheckBoxAnimatedV1
                        color='rgba(55,25,255,0.8)'
                        text='Opción 2'
                        width='50px'
                        height='25px'
                        checked={ischeck1}
                        onChange={() => setIscheck1(!ischeck1)}
                    />
                    <div>
                        <h3>La opción 1 está {ischeck ? 'Marcada' : 'Desmarcada'}</h3>
                        <h3>La opción 2 está {ischeck1 ? 'Marcada' : 'Desmarcada'}</h3>
                    </div>
                </article>
                <article className="div-input">
                    <div>
                        <Input
                            placeholder='Cédula'
                        />
                        <Input
                            placeholder='Nombres'
                        />
                    </div>
                    <div>
                        <Input
                            placeholder='Apellidos'
                        /><Input
                            placeholder='Ciudad de Origen'
                        />
                    </div>
                </article>
            </section>
        </>
    )
}

export default App
