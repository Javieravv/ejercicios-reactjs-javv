import { FC } from "react";
import { useStore } from "../store/store";


interface Props {
    number_card?: string;
    value_step?: number;
}

export const Card1: FC<Props> = ({ number_card = 0, value_step = 1 }) => {
    const { inccountstep } = useStore()
    return (
        <article className="bg-orange-300 w-[300px] h-[200px] py-5 px-5 rounded" >
            <h2 className="text-2xl text-center py-3">Tarjeta {number_card}</h2>
            <p className="font-bold">Valor en que aumenta el contador: <span className="text-red-900">{value_step}</span> </p>
            <div className="flex items-center justify-around mt-4">
                <button
                    className="bg-blue-600 border-none text-white text-center cursor-pointer rounded-md py-2 px-6 hover:opacity-80 transition-all duration-300"
                    onClick={() => inccountstep(value_step)}
                >
                    Aumentar</button>
                <button
                    className="bg-blue-600 border-none text-white text-center cursor-pointer rounded-md py-2 px-6 hover:opacity-80 transition-all duration-300"
                    onClick={() => inccountstep(value_step * -1)}
                >
                    Disminuir</button>
            </div>
        </article>
    )
}
