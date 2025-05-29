import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Navbar from './components/NavBar/Navbar'
import './css/styles-nav.scss'
import Component3 from './components/Component3';
import { itemsMenu } from '../src/data/datamenu'

function App() {
    return (
        <>
            <Navbar 
                itemsMenu={itemsMenu}
                logo = {'Xavier Inc'}
                claseExtra={''}
                onMenuItemClick={() => {console.log('Has dado click') }}
            />
            <main>
                <Component1 />
                <Component2 />
                <Component3 />
            </main>
        </>
    )
}

export default App
