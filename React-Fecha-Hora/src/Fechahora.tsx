import { useState, useRef, useEffect } from "react"

export const Fechahora = () => {
    const dateInterval = useRef< null | number | any >(0);
    const [controlStop, setControlStop] = useState(true)
    const [fecha, setFecha] = useState({datecurrent: new Date() });

    useEffect(() => {
      handleInitDate()
    }, [])
    

    const mostrarFecha = () => {
        setFecha({ datecurrent: new Date});
    }

    const handleInitDate = () => {
        setControlStop(!controlStop)
        clearInterval(dateInterval.current);
        dateInterval.current = setInterval (mostrarFecha, 1000);
    }

    const hanleStopDate = () => {
        setControlStop(!controlStop)
        clearInterval(dateInterval.current);
    }

    return (
        <section className="fechahora">
            <article className="fechahora_fecha">
                <div>
                    <p>Año</p>
                    <p>{fecha.datecurrent.getFullYear()}</p>
                </div>
                <div>
                    <p>Mes</p>
                    <p>{fecha.datecurrent.getMonth() + 1}</p>
                </div>
                <div>
                    <p>Día</p>
                    <p>{fecha.datecurrent.getDate()}</p>
                </div>
            </article>
            <article className="fechahora_hora">
                <div>
                    <p>Hora</p>
                    <p>{fecha.datecurrent.getHours()}</p>
                </div>
                <div>
                    <p>Minuto</p>
                    <p>{fecha.datecurrent.getMinutes()}</p>
                </div>
                <div>
                    <p>Segundo</p>
                    <p>{fecha.datecurrent.getSeconds()}</p>
                </div>
            </article>
            <article className="fechahora_botones">
                {
                    (controlStop 
                        ? <button onClick={handleInitDate}>Iniciar</button>
                        : <button onClick={hanleStopDate}>Detener</button>)
                }
            </article>
        </section>
    )
}
