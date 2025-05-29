import { useEffect, useRef, useState } from 'react'
import './App.css'

const nameClase = (sizeW: number)  => {
    let clase: string = ''
    if (sizeW < 768) {
        clase = ''
    }
    if (sizeW >= 768 && sizeW <= 1200) {
        clase = 'text-red'
    }
    if (sizeW >= 1200) {
        clase = 'text-blue'
    }

    return clase
}

function App() {
    const [sizeWindow, setSizeWindow] = useState(0)
    const [targetName, setTargetName] = useState('')
    const divRef = useRef<HTMLDivElement>(null)
    const clase = nameClase(sizeWindow)

    useEffect(() => {
        const handleResize = () => {
            const sizeW = window.innerWidth;
            setSizeWindow(sizeW)
        }

        const handleClickOutside = (event: MouseEvent) => {
            // if (event.target === divRef.current) {
            if (divRef.current && divRef.current.contains(event.target as Node)) {
                setTargetName('Se dio click en el cuadro')
            } else {
                setTargetName('No se dio click en el cuadro')
            }
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener('mousedown', handleClickOutside)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [sizeWindow])

    return (
        <main>
            <div>
                <h1>Window Resize</h1>
            </div>
            <article>
                <div>
                    <h2>Tamaño de la ventana:
                        <span
                            className={`${clase}`}>
                            {sizeWindow}px
                        </span>
                    </h2>
                </div>
                <div
                    className='texto'
                    ref={divRef}
                >
                    <h3>Contenedor X</h3>
                </div>
            </article>
            <footer>
                <h4>Hemos dado click en: <strong>{targetName}</strong></h4>
            </footer>
        </main>
    )
}

export default App
