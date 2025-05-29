import AnimateCounter from "./components/AnimateCounter"


function App() {

  return (
    <>
      <div className="main">
        <h1>Contadores Dinámicos</h1>
        <section className="counters">
          <AnimateCounter targetNumber={428} titleCounter="Contador 1" />
          <AnimateCounter targetNumber={1227} titleCounter="Contador 2" />
          <AnimateCounter targetNumber={1326} titleCounter="Contador 3" />
          <AnimateCounter targetNumber={1425} titleCounter="Contador 4" />
          <AnimateCounter targetNumber={1524} titleCounter="Contador 5" />
        </section>
      </div>

    </>
  )
}

export default App
