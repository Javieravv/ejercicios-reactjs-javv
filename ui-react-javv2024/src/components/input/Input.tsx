/*Componente Input para hacer pruebas diversas.* */
import './input.scss'
interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: PropsInput) => {
    return (
        <input
        className='input-control'
            {...props}
        ></input>
    )
}

export default Input