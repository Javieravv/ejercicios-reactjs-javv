import Countries from './components/Countries'
import './scss/App.scss'

function App() {

    return (
        <>
            <header>
                <h1>Banderas de los Países.</h1>
            </header>
            <div className='main'>
                <Countries />
            </div>
            <footer>
                <p>Elaborado por Javier A. Vargas V.</p>
                <p>2024</p>
            </footer>
        </>
    )
}

export default App
