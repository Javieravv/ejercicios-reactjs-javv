import { Cards } from "./components/Cards"
import { Slideimages } from "./components/Slideimages"

const App = () => {
  return (
    <section>
      <div>
          <h1 className="text-3xl text-center py-4" >Slide de Imágenes</h1>
      </div>
      <Slideimages />
      <Cards />
    </section>
  )
}

export default App