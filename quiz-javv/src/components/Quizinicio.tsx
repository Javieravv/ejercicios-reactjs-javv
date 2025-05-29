interface QuizInicioProps {
    handleIniciar: () => void
}

const Quizinicio = ({
    handleIniciar
}: QuizInicioProps) => {
  return (
    <section className="section-main section-init">
        <h3>Bienvenidos a este juego de preguntas y respuesta</h3>
        <p>Contesta las preguntas que se presentan a continuación. Solo hay una respuesta correcta</p>
        <button 
        onClick={handleIniciar}
        className="btn-init"
        >Iniciar</button>
    </section>
  )
}

export default Quizinicio