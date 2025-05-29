import { useStore } from '../store/store'

export const CardsSummary = () => {
    const { count, name } = useStore()
    return (
        <section className="mt-4 border-none bg-red-400 rounded-md py-4 px-10">
            <h2 className="text-white text-3xl text-center py-1">Resumen general</h2>
            <p className="font-semibold flex items-center">El valor actual del contador es de: <span className="text-red-800 text-3xl mx-2">{ count }</span></p>
            <h2 className='text-2xl'>Name: <span className='text-blue-600'>{ name }</span></h2>
        </section>
    )
}
