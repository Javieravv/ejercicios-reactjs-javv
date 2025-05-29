import { Card1 } from "./components/Card1"
import { CardsSummary } from "./components/CardsSummary"

export const App = () => {
    return (
        <div className="container mx-auto flex flex-col">
            <h1 className="text-3xl text-center py-2 border-b-2 border-b-slate-600">Aprendiendo Zustand</h1>
            <section className="flex flex-row flex-wrap gap-2 mt-4 justify-between">
                <Card1 number_card="1" value_step={5} />
                <Card1 number_card="2" value_step={10} />
                <Card1 number_card="3" value_step={15} />
                <Card1 number_card="4" value_step={20} />
                <Card1 number_card="5" value_step={-10} />
            </section>
            <CardsSummary />
        </div>
    )
}

